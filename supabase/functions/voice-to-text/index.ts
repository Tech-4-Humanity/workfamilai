
import 'https://deno.land/x/xhr@0.1.0/mod.ts'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Rate limiting: 5 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60000; // 1 minute

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    const resetTime = now + RATE_LIMIT_WINDOW;
    rateLimitMap.set(ip, { count: 1, resetTime });
    return { allowed: true, remaining: RATE_LIMIT - 1, resetTime };
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT - record.count, resetTime: record.resetTime };
}

function processBase64Chunks(base64String: string, chunkSize = 32768) {
  const chunks: Uint8Array[] = [];
  let position = 0;
  
  while (position < base64String.length) {
    const chunk = base64String.slice(position, position + chunkSize);
    const binaryChunk = atob(chunk);
    const bytes = new Uint8Array(binaryChunk.length);
    
    for (let i = 0; i < binaryChunk.length; i++) {
      bytes[i] = binaryChunk.charCodeAt(i);
    }
    
    chunks.push(bytes);
    position += chunkSize;
  }

  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  return result;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Rate limiting check
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                   req.headers.get('x-real-ip') || 
                   'unknown';
  
  const rateLimit = checkRateLimit(clientIp);
  
  if (!rateLimit.allowed) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return new Response(
      JSON.stringify({ 
        error: 'Rate limit exceeded. Please try again later.',
        resetTime: new Date(rateLimit.resetTime).toISOString()
      }),
      {
        status: 429,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': RATE_LIMIT.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString()
        },
      }
    );
  }

  try {
    console.log(`Voice-to-text request from IP: ${clientIp}, Remaining: ${rateLimit.remaining}`);
    const body = await req.json()
    
    // Input validation
    const audio = String(body.audio || '')
    
    if (!audio || audio.length === 0) {
      throw new Error('No audio data provided')
    }
    
    // Validate base64 format
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(audio)) {
      throw new Error('Invalid audio data format')
    }
    
    // Limit audio size (10MB base64 ≈ 7.5MB binary)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (audio.length > maxSize) {
      throw new Error('Audio file too large (max 10MB)')
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    // Process audio in chunks
    const binaryAudio = processBase64Chunks(audio)
    
    // Prepare form data
    const formData = new FormData()
    const blob = new Blob([binaryAudio], { type: 'audio/webm' })
    formData.append('file', blob, 'audio.webm')
    formData.append('model', 'whisper-1')

    // Send to OpenAI
    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
      },
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`OpenAI API error: ${errorText}`)
    }

    const result = await response.json()

    console.log(`Transcription successful for IP: ${clientIp}, Length: ${result.text?.length || 0} chars`);

    return new Response(
      JSON.stringify({ text: result.text }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': RATE_LIMIT.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimit.resetTime).toISOString()
        } 
      }
    )

  } catch (error) {
    console.error('Error in voice-to-text:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
