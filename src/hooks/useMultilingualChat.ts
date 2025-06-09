
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useChatConversation } from './useChatConversation';

interface MultilingualMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  language: string;
  agent_name?: string;
  cultural_context?: {
    greeting_style: string;
    formality_level: string;
    communication_pattern: string;
    business_etiquette: string;
  };
}

export const useMultilingualChat = () => {
  const { i18n } = useTranslation();
  const [messages, setMessages] = useState<MultilingualMessage[]>([]);
  const { sendMessage, isLoading } = useChatConversation();

  const getCulturalContext = useCallback((language: string, agentName: string) => {
    const culturalProfiles = {
      'es': {
        greeting_style: 'warm and personal',
        formality_level: 'respectful with "usted" when appropriate',
        communication_pattern: 'expressive and relationship-focused',
        business_etiquette: 'values personal connections before business'
      },
      'zh': {
        greeting_style: 'formal and respectful',
        formality_level: 'high formality with appropriate titles',
        communication_pattern: 'indirect and harmonious',
        business_etiquette: 'emphasizes hierarchy and group consensus'
      },
      'ar': {
        greeting_style: 'respectful with traditional greetings',
        formality_level: 'formal and courteous',
        communication_pattern: 'eloquent and respectful',
        business_etiquette: 'values honor, respect, and relationship building'
      },
      'fr': {
        greeting_style: 'polite and sophisticated',
        formality_level: 'formal with proper "vous" usage',
        communication_pattern: 'articulate and intellectually engaging',
        business_etiquette: 'values logic, elegance, and cultural refinement'
      },
      'de': {
        greeting_style: 'direct and professional',
        formality_level: 'formal and structured',
        communication_pattern: 'precise and efficient',
        business_etiquette: 'values punctuality, thoroughness, and expertise'
      },
      'ja': {
        greeting_style: 'respectful with appropriate honorifics',
        formality_level: 'very formal with keigo when appropriate',
        communication_pattern: 'indirect and consensus-building',
        business_etiquette: 'emphasizes respect, harmony, and attention to detail'
      },
      'ko': {
        greeting_style: 'respectful with age/status awareness',
        formality_level: 'formal with appropriate honorific levels',
        communication_pattern: 'relationship-focused and hierarchical',
        business_etiquette: 'values respect for seniority and group harmony'
      },
      'en': {
        greeting_style: 'friendly and professional',
        formality_level: 'balanced formality',
        communication_pattern: 'direct and collaborative',
        business_etiquette: 'values efficiency and clear communication'
      }
    };

    return culturalProfiles[language as keyof typeof culturalProfiles] || culturalProfiles.en;
  }, []);

  const getLanguageInstructions = useCallback((language: string) => {
    const instructions = {
      'es': 'Respond in Spanish with warm, professional tone. Use appropriate formal/informal register.',
      'zh': 'Respond in Simplified Chinese with respectful, professional tone. Use appropriate formality.',
      'ar': 'Respond in Modern Standard Arabic with respectful, eloquent tone. Use appropriate formality.',
      'fr': 'Respond in French with polite, sophisticated tone. Use appropriate vous/tu register.',
      'de': 'Respond in German with professional, direct tone. Use appropriate Sie/du register.',
      'ja': 'Respond in Japanese with respectful tone. Use appropriate keigo (honorific language) levels.',
      'ko': 'Respond in Korean with respectful tone. Use appropriate honorific levels and formality.',
      'en': 'Respond in English with professional, friendly tone.'
    };

    return instructions[language as keyof typeof instructions] || instructions.en;
  }, []);

  const sendMultilingualMessage = useCallback(async (
    message: string,
    agentName: string,
    agentPersonality: string,
    agentBackground: string
  ) => {
    const currentLanguage = i18n.language;
    const culturalContext = getCulturalContext(currentLanguage, agentName);
    const languageInstructions = getLanguageInstructions(currentLanguage);

    // Add user message
    const userMessage: MultilingualMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: message,
      timestamp: new Date(),
      language: currentLanguage
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      // Enhanced background with cultural context
      const enhancedBackground = `${agentBackground}

LANGUAGE & CULTURAL INSTRUCTIONS:
${languageInstructions}

CULTURAL CONTEXT FOR ${currentLanguage.toUpperCase()}:
- Greeting Style: ${culturalContext.greeting_style}
- Formality Level: ${culturalContext.formality_level}
- Communication Pattern: ${culturalContext.communication_pattern}
- Business Etiquette: ${culturalContext.business_etiquette}

Always adapt your communication style to match the cultural expectations and linguistic nuances of ${currentLanguage}. Be culturally sensitive and appropriate in your responses.`;

      const response = await sendMessage(
        message,
        agentName,
        agentPersonality,
        enhancedBackground,
        messages.slice(-10).map(m => ({
          id: m.id,
          type: m.type,
          content: m.content,
          timestamp: m.timestamp,
          agent_name: m.agent_name
        })),
        false
      );

      // Add agent response
      const agentMessage: MultilingualMessage = {
        id: `agent-${Date.now()}`,
        type: 'agent',
        content: response.response,
        timestamp: new Date(),
        language: currentLanguage,
        agent_name: agentName,
        cultural_context: culturalContext
      };

      setMessages(prev => [...prev, agentMessage]);

      return response;
    } catch (error) {
      console.error('Error in multilingual chat:', error);
      throw error;
    }
  }, [i18n.language, sendMessage, messages, getCulturalContext, getLanguageInstructions]);

  return {
    messages,
    isLoading,
    sendMultilingualMessage,
    currentLanguage: i18n.language
  };
};
