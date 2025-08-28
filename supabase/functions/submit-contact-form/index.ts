import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  honeypot?: string; // For spam protection
}

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
const resendApiKey = Deno.env.get('RESEND_API_KEY')!;

const supabase = createClient(supabaseUrl, supabaseKey);
const resend = new Resend(resendApiKey);

// Rate limiting - simple in-memory store (in production, use Redis or similar)
const rateLimits = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;

  if (!rateLimits.has(ip)) {
    rateLimits.set(ip, []);
  }

  const requests = rateLimits.get(ip)!;
  const recentRequests = requests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimits.set(ip, recentRequests);
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get('cf-connecting-ip') || 
                    req.headers.get('x-forwarded-for') || 
                    'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again in an hour.' }),
        { 
          status: 429, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    const formData: ContactFormData = await req.json();

    // Check honeypot field (should be empty)
    if (formData.honeypot && formData.honeypot.trim() !== '') {
      console.log('Honeypot triggered, blocking submission');
      return new Response(
        JSON.stringify({ error: 'Invalid submission' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    // Sanitize and validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    console.log('Processing contact form submission for:', formData.email);

    // Store in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name.trim(),
          email: formData.email.toLowerCase().trim(),
          company: formData.company?.trim() || null,
          inquiry_type: formData.interest,
          message: formData.message.trim(),
          ip_address: clientIP,
          status: 'pending'
        }
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to store submission' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders } 
        }
      );
    }

    console.log('Contact submission stored successfully for:', formData.email);

    // Send email notification
    const interestLabels: Record<string, string> = {
      'enterprise': 'Enterprise Solutions',
      'partnership': 'Partnership Opportunities', 
      'demo': 'Live Demo Access',
      'integration': 'AI Agent Integration',
      'consultation': 'Strategic Consultation',
      'other': 'Other Inquiry'
    };

    const emailHtml = `
      <h2>New Contact Form Submission - workfamilyai</h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Area of Interest:</strong> ${interestLabels[formData.interest] || formData.interest}</p>
      </div>
      
      <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${formData.message}</p>
      </div>
      
      <div style="background: #f1f8e9; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 14px;">
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>IP Address:</strong> ${clientIP}</p>
      </div>
      
      <p style="color: #666; font-size: 14px; margin-top: 30px;">
        This inquiry was submitted through the workfamilyai contact form. 
        Please respond within 24 hours to maintain our commitment to customers.
      </p>
    `;

    const emailResponse = await resend.emails.send({
      from: 'workfamilyai Contact <noreply@workfamilyai.org>',
      to: ['info@workfamilyai.org', 'troy@workfamilyai.org'],
      subject: `New Contact: ${formData.name} - ${interestLabels[formData.interest] || formData.interest}`,
      html: emailHtml,
    });

    if (emailResponse.error) {
      console.error('Email sending error:', emailResponse.error);
      // Don't fail the request if email fails - submission is already stored
    } else {
      console.log('Notification email sent successfully:', emailResponse.data?.id);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error('Error in submit-contact-form function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);