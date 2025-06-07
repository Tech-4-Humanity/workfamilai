
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface KnowledgeEntry {
  id: string;
  agent_name: string;
  knowledge_type: string;
  content: string;
  source: string;
  confidence_score: number;
  relevance_tags: string[];
  created_at: string;
  updated_at: string;
}

interface LearningEvent {
  agent_name: string;
  event_type: string;
  knowledge_gained: string;
  source_session_id?: string;
  impact_score: number;
  knowledge_category?: string;
}

export const useKnowledgeBase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getAgentKnowledge = useCallback(async (agentName: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('agent_knowledge_base')
        .select('*')
        .eq('agent_name', agentName)
        .order('confidence_score', { ascending: false });

      if (error) throw error;
      return data as KnowledgeEntry[];
    } catch (error) {
      console.error('Error fetching agent knowledge:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getRelevantKnowledge = useCallback(async (tags: string[], agentName?: string) => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('agent_knowledge_base')
        .select('*')
        .overlaps('relevance_tags', tags)
        .order('confidence_score', { ascending: false })
        .limit(10);

      if (agentName) {
        query = query.eq('agent_name', agentName);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as KnowledgeEntry[];
    } catch (error) {
      console.error('Error fetching relevant knowledge:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addKnowledge = useCallback(async (knowledge: Omit<KnowledgeEntry, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('agent_knowledge_base')
        .insert(knowledge)
        .select()
        .single();

      if (error) throw error;
      return data as KnowledgeEntry;
    } catch (error) {
      console.error('Error adding knowledge:', error);
      throw error;
    }
  }, []);

  const recordLearningEvent = useCallback(async (event: LearningEvent) => {
    try {
      const { data, error } = await supabase
        .from('learning_events')
        .insert(event)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error recording learning event:', error);
      throw error;
    }
  }, []);

  const getCollaborationInsights = useCallback(async (agentName: string) => {
    try {
      const { data, error } = await supabase
        .from('knowledge_graph_relationships')
        .select('*')
        .or(`source_agent.eq.${agentName},target_agent.eq.${agentName}`)
        .order('strength', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching collaboration insights:', error);
      return [];
    }
  }, []);

  return {
    isLoading,
    getAgentKnowledge,
    getRelevantKnowledge,
    addKnowledge,
    recordLearningEvent,
    getCollaborationInsights
  };
};
