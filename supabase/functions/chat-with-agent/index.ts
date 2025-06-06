
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import 'https://deno.land/x/xhr@0.1.0/mod.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Message {
  type: 'user' | 'agent';
  content: string;
  timestamp: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { 
      message, 
      agentName, 
      agentPersonality, 
      agentBackground, 
      conversationHistory = [],
      includeAudio = false 
    } = await req.json()

    if (!message || !agentName) {
      throw new Error('Message and agent name are required')
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured')
    }

    // Build conversation context
    const systemPrompt = `You are ${agentName}, a professional AI agent with the following characteristics:

Personality: ${agentPersonality}
Background: ${agentBackground}

You should respond in character, drawing from your background and expertise. Keep responses helpful, professional, and aligned with your personality. Aim for responses that are informative but conversational, typically 1-3 sentences unless more detail is specifically requested.

Remember: You are part of a larger AI family organization, and you can reference your domain expertise and collaborate with other AI agents when relevant.`

    // Format conversation history for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.slice(-8).map((msg: Message) => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      { role: 'user', content: message }
    ]

    // Get text response from OpenAI
    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!chatResponse.ok) {
      const error = await chatResponse.json()
      throw new Error(error.error?.message || 'Failed to get AI response')
    }

    const chatData = await chatResponse.json()
    const textResponse = chatData.choices[0].message.content

    let audioContent = null

    // Generate audio response if requested
    if (includeAudio) {
      try {
        const elevenLabsApiKey = Deno.env.get('ELEVENLABS_API_KEY')
        if (elevenLabsApiKey) {
          // Select voice based on agent personality
          const voiceId = getVoiceForAgent(agentName, agentPersonality)
          
          const audioResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
            method: 'POST',
            headers: {
              'Accept': 'audio/mpeg',
              'Content-Type': 'application/json',
              'xi-api-key': elevenLabsApiKey,
            },
            body: JSON.stringify({
              text: textResponse,
              model_id: 'eleven_multilingual_v2',
              voice_settings: {
                stability: 0.5,
                similarity_boost: 0.5
              }
            }),
          })

          if (audioResponse.ok) {
            const audioBuffer = await audioResponse.arrayBuffer()
            audioContent = btoa(String.fromCharCode(...new Uint8Array(audioBuffer)))
          }
        }
      } catch (error) {
        console.log('Audio generation failed, continuing with text only:', error)
      }
    }

    return new Response(
      JSON.stringify({ 
        response: textResponse,
        audioContent,
        agentName 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error in chat-with-agent:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})

function getVoiceForAgent(agentName: string, personality: string): string {
  // Map agents to ElevenLabs voices based on personality
  const voiceMap: { [key: string]: string } = {
    'Yuna Kim': 'EXAVITQu4vr4xnSDxMaL', // Sarah - warm, supportive
    'David Okafor': 'JBFqnCBsd6RMkjVDRZzb', // George - thoughtful, analytical
    'Priya Sharma': 'cgSgspJ2msm6clMCkdW9', // Jessica - energetic, achiever
    'Theo Williams': 'onwK4e9ZLuTAKqWW03F9', // Daniel - artistic, individualistic
    'Miguel Santos': 'TX3LPaxmHKxFdv7VOQHJ', // Liam - helpful, empathetic
    'Marcus Bennett': 'cjVigY5qzO86Huf0OWal', // Eric - strong, confident
    'Sofia Rodriguez': 'pFZP5JQG7iQjIQuC4Bku', // Lily - perfectionist, detailed
    'Aisha Al-Farsi': 'CwhRBWXzGAHq8TQ4Fs17', // Roger - investigative, logical
    'Amara Chen': 'XB0fDUnXU5powFXDhCwa', // Charlotte - balanced, leadership
  }

  return voiceMap[agentName] || 'EXAVITQu4vr4xnSDxMaL' // Default to Sarah
}
