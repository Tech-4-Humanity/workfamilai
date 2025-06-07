
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface OrganizationalMetric {
  id: string;
  metric_name: string;
  metric_value: number;
  metric_category: string;
  department_id?: string;
  trend_direction?: 'up' | 'down' | 'stable';
  impact_level?: 'low' | 'medium' | 'high' | 'critical';
  measured_at: string;
}

interface StrategicDecision {
  id: string;
  decision_title: string;
  decision_type: string;
  decision_maker: string;
  affected_departments: string[];
  decision_context: string;
  approval_status: 'pending' | 'approved' | 'rejected' | 'implemented';
  impact_assessment: any;
  created_at: string;
}

interface DepartmentalKnowledge {
  id: string;
  department_id: string;
  knowledge_type: string;
  title: string;
  content: string;
  knowledge_tags: string[];
  expertise_level: 'basic' | 'intermediate' | 'advanced' | 'expert';
  validation_status: 'current' | 'needs_review' | 'outdated';
  created_at: string;
}

export const useOrganizationalIntelligence = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getOrganizationalHealth = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('organizational_health_metrics')
        .select('*')
        .order('measured_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      return data as OrganizationalMetric[];
    } catch (error) {
      console.error('Error fetching organizational health:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getStrategicDecisions = useCallback(async (status?: string) => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('strategic_decisions')
        .select('*')
        .order('created_at', { ascending: false });

      if (status) {
        query = query.eq('approval_status', status);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as StrategicDecision[];
    } catch (error) {
      console.error('Error fetching strategic decisions:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getDepartmentKnowledge = useCallback(async (departmentId: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('departmental_knowledge')
        .select('*')
        .eq('department_id', departmentId)
        .eq('validation_status', 'current')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as DepartmentalKnowledge[];
    } catch (error) {
      console.error('Error fetching department knowledge:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const recordOrganizationalMetric = useCallback(async (metric: Omit<OrganizationalMetric, 'id' | 'measured_at'>) => {
    try {
      const { data, error } = await supabase
        .from('organizational_health_metrics')
        .insert(metric)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error recording organizational metric:', error);
      throw error;
    }
  }, []);

  const createStrategicDecision = useCallback(async (decision: Omit<StrategicDecision, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('strategic_decisions')
        .insert(decision)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating strategic decision:', error);
      throw error;
    }
  }, []);

  const addDepartmentKnowledge = useCallback(async (knowledge: Omit<DepartmentalKnowledge, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('departmental_knowledge')
        .insert(knowledge)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error adding department knowledge:', error);
      throw error;
    }
  }, []);

  const getOrganizationalInsights = useCallback(async () => {
    try {
      // Get cross-departmental metrics summary
      const { data: metrics } = await supabase
        .from('organizational_health_metrics')
        .select('metric_category, metric_value, trend_direction, impact_level')
        .gte('measured_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

      // Get pending strategic decisions
      const { data: decisions } = await supabase
        .from('strategic_decisions')
        .select('decision_type, affected_departments')
        .eq('approval_status', 'pending');

      // Get knowledge validation status
      const { data: knowledge } = await supabase
        .from('departmental_knowledge')
        .select('department_id, validation_status, expertise_level')
        .in('validation_status', ['current', 'needs_review']);

      return {
        healthMetrics: metrics || [],
        pendingDecisions: decisions || [],
        knowledgeStatus: knowledge || []
      };
    } catch (error) {
      console.error('Error getting organizational insights:', error);
      return {
        healthMetrics: [],
        pendingDecisions: [],
        knowledgeStatus: []
      };
    }
  }, []);

  return {
    isLoading,
    getOrganizationalHealth,
    getStrategicDecisions,
    getDepartmentKnowledge,
    recordOrganizationalMetric,
    createStrategicDecision,
    addDepartmentKnowledge,
    getOrganizationalInsights
  };
};
