
import { useState, useCallback } from 'react';
import { useChatConversation } from './useChatConversation';
import { useKnowledgeBase } from './useKnowledgeBase';
import { useCollaborativeSession } from './useCollaborativeSession';
import { useOrganizationalIntelligence } from './useOrganizationalIntelligence';
import { useChangeManagement } from './useChangeManagement';

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
  organizational_context?: {
    relevant_metrics?: any[];
    strategic_decisions?: any[];
    department_knowledge?: any[];
  };
}

export const useEnhancedChat = () => {
  const [messages, setMessages] = useState<EnhancedMessage[]>([]);
  const [isCollaborativeMode, setIsCollaborativeMode] = useState(false);
  
  const { sendMessage, isLoading } = useChatConversation();
  const { getRelevantKnowledge, recordLearningEvent, addKnowledge } = useKnowledgeBase();
  const { createSession, suggestCollaborators, updateSessionHistory } = useCollaborativeSession();
  const { getOrganizationalInsights, getDepartmentKnowledge } = useOrganizationalIntelligence();
  const { getActiveChanges } = useChangeManagement();

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
      
      // Get organizational context
      const organizationalContext = await getOrganizationalContext(messageTags, agentName);
      
      // Build enhanced context with knowledge base and organizational intelligence
      const enhancedBackground = buildEnhancedContext(
        agentBackground,
        relevantKnowledge,
        collaborationSuggestions,
        organizationalContext
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

      // Create agent response message with organizational context
      const agentMessage: EnhancedMessage = {
        id: `agent-${Date.now()}`,
        type: 'agent',
        content: response.response,
        timestamp: new Date(),
        agent_name: agentName,
        knowledge_references: relevantKnowledge.map(k => k.id),
        collaboration_suggestions: collaborationSuggestions,
        insights_generated: extractInsights(response.response),
        organizational_context: organizationalContext
      };

      setMessages(prev => [...prev, agentMessage]);

      // Record learning event with organizational impact
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
        knowledgeReferences: relevantKnowledge,
        organizationalContext
      };
    } catch (error) {
      console.error('Error in enhanced chat:', error);
      throw error;
    }
  }, [sendMessage, getRelevantKnowledge, suggestCollaborators, recordLearningEvent, getOrganizationalInsights, getDepartmentKnowledge, getActiveChanges, messages]);

  const getOrganizationalContext = useCallback(async (tags: string[], agentName: string) => {
    try {
      const [insights, activeChanges] = await Promise.all([
        getOrganizationalInsights(),
        getActiveChanges()
      ]);

      // Get department-specific knowledge if agent belongs to a department
      const departmentId = extractDepartmentFromAgent(agentName);
      let departmentKnowledge: any[] = [];
      
      if (departmentId) {
        departmentKnowledge = await getDepartmentKnowledge(departmentId);
      }

      return {
        relevant_metrics: insights.healthMetrics.filter(m => 
          tags.some(tag => m.metric_category.toLowerCase().includes(tag.toLowerCase()))
        ).slice(0, 3),
        strategic_decisions: insights.pendingDecisions.filter(d =>
          tags.some(tag => d.decision_type.toLowerCase().includes(tag.toLowerCase()))
        ).slice(0, 2),
        department_knowledge: departmentKnowledge.filter(k =>
          tags.some(tag => k.knowledge_tags.some((ktag: string) => ktag.toLowerCase().includes(tag.toLowerCase())))
        ).slice(0, 3),
        active_changes: activeChanges.filter(c =>
          tags.some(tag => c.change_type.toLowerCase().includes(tag.toLowerCase()))
        ).slice(0, 2)
      };
    } catch (error) {
      console.error('Error getting organizational context:', error);
      return {};
    }
  }, [getOrganizationalInsights, getDepartmentKnowledge, getActiveChanges]);

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
      'partnerships', 'branding', 'research', 'analytics', 'automation', 'compliance',
      'change', 'technology', 'process', 'training', 'knowledge', 'decision'
    ];
    
    return keywords.filter(keyword => 
      text.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const extractDepartmentFromAgent = (agentName: string): string | null => {
    // Map agent names to department IDs based on our family structure
    const departmentMapping: { [key: string]: string } = {
      'Aisha Al-Farsi': 'innovation-research',
      'Amara Chen': 'product-development',
      'David Okafor': 'marketing-branding',
      'Marcus Bennett': 'customer-success',
      'Miguel Santos': 'sales-partnerships',
      'Priya Sharma': 'finance-operations',
      'Sofia Rodriguez': 'human-resources',
      'Theo Williams': 'governance-compliance',
      'Yuna Kim': 'technology-infrastructure'
    };
    
    return departmentMapping[agentName] || null;
  };

  const buildEnhancedContext = (
    originalBackground: string,
    knowledge: any[],
    collaborations: any[],
    organizationalContext: any
  ): string => {
    let enhancedContext = originalBackground;

    if (knowledge.length > 0) {
      enhancedContext += '\n\nRelevant Knowledge Context:\n';
      knowledge.slice(0, 3).forEach(k => {
        enhancedContext += `- ${k.content} (Confidence: ${k.confidence_score})\n`;
      });
    }

    if (organizationalContext.relevant_metrics?.length > 0) {
      enhancedContext += '\n\nCurrent Organizational Metrics:\n';
      organizationalContext.relevant_metrics.forEach((m: any) => {
        enhancedContext += `- ${m.metric_name}: ${m.metric_value} (Trend: ${m.trend_direction || 'stable'})\n`;
      });
    }

    if (organizationalContext.strategic_decisions?.length > 0) {
      enhancedContext += '\n\nRelevant Strategic Decisions:\n';
      organizationalContext.strategic_decisions.forEach((d: any) => {
        enhancedContext += `- ${d.decision_title} (Status: ${d.approval_status})\n`;
      });
    }

    if (organizationalContext.department_knowledge?.length > 0) {
      enhancedContext += '\n\nDepartmental Knowledge:\n';
      organizationalContext.department_knowledge.forEach((k: any) => {
        enhancedContext += `- ${k.title}: ${k.content.substring(0, 100)}...\n`;
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
          sentence.toLowerCase().includes('recommend') ||
          sentence.toLowerCase().includes('strategic') ||
          sentence.toLowerCase().includes('organizational')) {
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
