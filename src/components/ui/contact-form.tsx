import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().max(200, "Company name must be less than 200 characters").optional(),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
  honeypot: z.string().max(0, "Invalid submission"),
});

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  honeypot: string;
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
    honeypot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'demo', label: 'Live Demo Access' },
    { value: 'integration', label: 'AI Agent Integration' },
    { value: 'consultation', label: 'Strategic Consultation' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      const { error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company || undefined,
          interest: validatedData.interest,
          message: validatedData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "",
        message: "",
        honeypot: "",
      });
    } catch (error) {
      console.error("Form error:", error);
      
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid form data",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Send failed",
          description: "Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Thank You for Connecting!
          </h3>
          <p className="text-green-700 mb-4">
            Your message has been received by the workfamilyai family. 
            We'll respond within 24 hours with personalized insights.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubmitted(false)}
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl text-gray-800">
          <Mail className="h-6 w-6 text-blue-600" />
          Connect with workfamilyai
        </CardTitle>
        <p className="text-gray-600">
          Get personalized insights from our AI family leaders
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-blue-600" />
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your organization name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interest" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                Area of Interest *
              </Label>
              <Select 
                value={formData.interest} 
                onValueChange={(value) => handleInputChange('interest', value)}
                required
              >
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Select your primary interest" />
                </SelectTrigger>
                <SelectContent>
                  {interestOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your organization's challenges and how the workfamilyai family might help..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              rows={4}
              className="border-gray-300 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Honeypot field - hidden from users but visible to bots */}
          <Input
            type="text"
            value={formData.honeypot}
            onChange={(e) => handleInputChange('honeypot', e.target.value)}
            className="absolute left-[-9999px] opacity-0"
            tabIndex={-1}
            autoComplete="off"
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message to workfamilyai
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center mt-4">
            Having trouble? <a href="mailto:info@workfamilyai.org" className="text-primary hover:underline inline-flex items-center gap-1">
              <Mail className="h-3 w-3" />
              Email us directly
            </a>
          </p>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted by our AI family members 
            regarding your inquiry. Response time: typically within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
