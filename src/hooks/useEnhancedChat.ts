
import { useState, useCallback } from 'react';
import { useChatConversation } from './useChatConversation';
import { useKnowledgeBase } from './useKnowledgeBase';
import { useCollaborativeSession } from './useCollaborativeSession';

interface EnhancedMessage {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  agent_name?: string;
  knowledge_references?: string[];
  collaboration_suggestions?: Array<{
    agent: string;
    reason: string;
    strength: number;
  }>;
  insights_generated?: string[];
}

export const useEnhancedChat = () => {
  const [messages, setMessages] = useState<EnhancedMessage[]>([]);
  const [isCollaborativeMode, setIsCollaborativeMode] = useState(false);
  
  const { sendMessage, isLoading } = useChatConversation();
  const { getRelevantKnowledge, recordLearningEvent, addKnowledge } = useKnowledgeBase();
  const { createSession, suggestCollaborators, updateSessionHistory } = useCollaborativeSession();

  const enhancedSendMessage = useCallback(async (
    message: string,
    agentName: string,
    agentPersonality: string,
    agentBackground: string,
    includeAudio: boolean = false
  ) => {
    // Add user message
    const userMessage: EnhancedMessage = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      // Extract relevant knowledge tags from the message
      const messageTags = extractTags(message);
      
      // Get relevant knowledge for context
      const relevantKnowledge = await getRelevantKnowledge(messageTags, agentName);
      
      // Get collaboration suggestions
      const collaborationSuggestions = await suggestCollaborators(agentName, messageTags);
      
      // Build enhanced context with knowledge base
      const enhancedBackground = buildEnhancedContext(
        agentBackground,
        relevantKnowledge,
        collaborationSuggestions
      );

      // Send message with enhanced context
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
        includeAudio
      );

      // Create agent response message
      const agentMessage: EnhancedMessage = {
        id: `agent-${Date.now()}`,
        type: 'agent',
        content: response.response,
        timestamp: new Date(),
        agent_name: agentName,
        knowledge_references: relevantKnowledge.map(k => k.id),
        collaboration_suggestions: collaborationSuggestions,
        insights_generated: extractInsights(response.response)
      };

      setMessages(prev => [...prev, agentMessage]);

      // Record learning event if new insights were generated
      if (agentMessage.insights_generated && agentMessage.insights_generated.length > 0) {
        await recordLearningEvent({
          agent_name: agentName,
          event_type: 'conversation_insight',
          knowledge_gained: agentMessage.insights_generated.join('; '),
          impact_score: 0.7,
          knowledge_category: messageTags[0] || 'general'
        });
      }

      return {
        response: response.response,
        audioContent: response.audioContent,
        collaborationSuggestions,
        knowledgeReferences: relevantKnowledge
      };
    } catch (error) {
      console.error('Error in enhanced chat:', error);
      throw error;
    }
  }, [sendMessage, getRelevantKnowledge, suggestCollaborators, recordLearningEvent, messages]);

  const startCollaborativeSession = useCallback(async (
    sessionName: string,
    participatingAgents: string[]
  ) => {
    const session = await createSession(sessionName, participatingAgents, 'problem_solving');
    setIsCollaborativeMode(true);
    return session;
  }, [createSession]);

  const extractTags = (text: string): string[] => {
    const keywords = [
      'marketing', 'product', 'development', 'sales', 'finance', 'hr', 'human resources',
      'customer', 'support', 'innovation', 'strategy', 'operations', 'governance',
      'partnerships', 'branding', 'research', 'analytics', 'automation', 'compliance'
    ];
    
    return keywords.filter(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const buildEnhancedContext = (
    originalBackground: string,
    knowledge: any[],
    collaborations: any[]
  ): string => {
    let enhancedContext = originalBackground;

    if (knowledge.length > 0) {
      enhancedContext += '\n\nRelevant Knowledge Context:\n';
      knowledge.slice(0, 3).forEach(k => {
        enhancedContext += `- ${k.content} (Confidence: ${k.confidence_score})\n`;
      });
    }

    if (collaborations.length > 0) {
      enhancedContext += '\n\nCollaboration Opportunities:\n';
      collaborations.forEach(c => {
        enhancedContext += `- Consider involving ${c.agent}: ${c.reason}\n`;
      });
    }

    return enhancedContext;
  };

  const extractInsights = (response: string): string[] => {
    const insights: string[] = [];
    const sentences = response.split('.');
    
    sentences.forEach(sentence => {
      if (sentence.toLowerCase().includes('insight') || 
          sentence.toLowerCase().includes('important') ||
          sentence.toLowerCase().includes('key') ||
          sentence.toLowerCase().includes('recommend')) {
        insights.push(sentence.trim());
      }
    });

    return insights.slice(0, 3); // Limit to top 3 insights
  };

  return {
    messages,
    isLoading,
    isCollaborativeMode,
    enhancedSendMessage,
    startCollaborativeSession,
    setIsCollaborativeMode
  };
};
