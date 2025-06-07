
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface CollaborationSession {
  id: string;
  session_name: string;
  participating_agents: string[];
  session_type: string;
  status: string;
  conversation_history: any[];
  insights_generated: any[];
  user_id?: string;
  created_at: string;
  updated_at: string;
}

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  agent_name?: string;
  knowledge_references?: string[];
}

export const useCollaborativeSession = () => {
  const [currentSession, setCurrentSession] = useState<CollaborationSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const createSession = useCallback(async (
    sessionName: string,
    participatingAgents: string[],
    sessionType: string = 'problem_solving'
  ) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('collaboration_sessions')
        .insert({
          session_name: sessionName,
          participating_agents: participatingAgents,
          session_type: sessionType,
          status: 'active'
        })
        .select()
        .single();

      if (error) throw error;
      
      const sessionData: CollaborationSession = {
        ...data,
        conversation_history: Array.isArray(data.conversation_history) ? data.conversation_history : [],
        insights_generated: Array.isArray(data.insights_generated) ? data.insights_generated : []
      };
      
      setCurrentSession(sessionData);
      return sessionData;
    } catch (error) {
      console.error('Error creating collaboration session:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateSessionHistory = useCallback(async (
    sessionId: string,
    newMessage: Message,
    insights?: any[]
  ) => {
    try {
      const { data: session } = await supabase
        .from('collaboration_sessions')
        .select('conversation_history, insights_generated')
        .eq('id', sessionId)
        .single();

      if (!session) throw new Error('Session not found');

      const currentHistory = Array.isArray(session.conversation_history) ? session.conversation_history : [];
      const currentInsights = Array.isArray(session.insights_generated) ? session.insights_generated : [];
      
      const updatedHistory = [...currentHistory, newMessage];
      const updatedInsights = insights 
        ? [...currentInsights, ...insights]
        : currentInsights;

      const { data, error } = await supabase
        .from('collaboration_sessions')
        .update({
          conversation_history: updatedHistory,
          insights_generated: updatedInsights,
          updated_at: new Date().toISOString()
        })
        .eq('id', sessionId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating session history:', error);
      throw error;
    }
  }, []);

  const getActiveSession = useCallback(async (sessionId: string) => {
    try {
      const { data, error } = await supabase
        .from('collaboration_sessions')
        .select('*')
        .eq('id', sessionId)
        .single();

      if (error) throw error;
      
      const sessionData: CollaborationSession = {
        ...data,
        conversation_history: Array.isArray(data.conversation_history) ? data.conversation_history : [],
        insights_generated: Array.isArray(data.insights_generated) ? data.insights_generated : []
      };
      
      setCurrentSession(sessionData);
      return sessionData;
    } catch (error) {
      console.error('Error fetching session:', error);
      return null;
    }
  }, []);

  const suggestCollaborators = useCallback(async (primaryAgent: string, context: string[]) => {
    try {
      // Get collaboration patterns and expertise overlaps
      const { data, error } = await supabase
        .from('knowledge_graph_relationships')
        .select('*')
        .eq('source_agent', primaryAgent)
        .in('relationship_type', ['collaboration_pattern', 'expertise_overlap'])
        .order('strength', { ascending: false });

      if (error) throw error;

      // Filter by context relevance and return top suggestions
      const suggestions = data
        ?.filter(rel => context.some(tag => rel.concept.toLowerCase().includes(tag.toLowerCase())))
        .slice(0, 3)
        .map(rel => ({
          agent: rel.target_agent,
          reason: rel.context,
          strength: rel.strength
        })) || [];

      return suggestions;
    } catch (error) {
      console.error('Error suggesting collaborators:', error);
      return [];
    }
  }, []);

  return {
    currentSession,
    isLoading,
    createSession,
    updateSessionHistory,
    getActiveSession,
    suggestCollaborators
  };
};
