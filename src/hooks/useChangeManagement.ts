
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface OrganizationalChange {
  id: string;
  change_type: 'job_change' | 'new_partner' | 'new_technology' | 'process_update';
  change_title: string;
  change_description: string;
  initiator: string;
  affected_entities: string[];
  change_stage: 'proposed' | 'planning' | 'approval' | 'implementation' | 'completed' | 'rollback';
  knowledge_impact_assessment: any;
  required_training: string[];
  success_criteria: string[];
  actual_impact: any;
  lessons_learned?: string;
  created_at: string;
}

interface KnowledgeTransfer {
  id: string;
  transfer_type: 'onboarding' | 'offboarding' | 'role_change' | 'cross_training';
  from_entity?: string;
  to_entity: string;
  knowledge_domains: string[];
  transfer_status: 'scheduled' | 'in_progress' | 'completed' | 'incomplete';
  transfer_method: string[];
  completion_percentage: number;
  quality_assessment?: number;
}

export const useChangeManagement = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getActiveChanges = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('organizational_changes')
        .select('*')
        .in('change_stage', ['proposed', 'planning', 'approval', 'implementation'])
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as OrganizationalChange[];
    } catch (error) {
      console.error('Error fetching active changes:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const initiateChange = useCallback(async (change: Omit<OrganizationalChange, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('organizational_changes')
        .insert(change)
        .select()
        .single();

      if (error) throw error;

      // Auto-trigger knowledge transfer assessments
      if (change.change_type === 'job_change' && change.affected_entities.length > 0) {
        await createKnowledgeTransfer({
          transfer_type: 'role_change',
          to_entity: change.affected_entities[0],
          knowledge_domains: ['role_specific', 'process_knowledge'],
          transfer_status: 'scheduled',
          transfer_method: ['documentation', 'mentoring'],
          completion_percentage: 0
        });
      }

      return data;
    } catch (error) {
      console.error('Error initiating change:', error);
      throw error;
    }
  }, []);

  const updateChangeStage = useCallback(async (changeId: string, newStage: OrganizationalChange['change_stage'], actualImpact?: any) => {
    try {
      const updateData: any = { 
        change_stage: newStage,
        updated_at: new Date().toISOString()
      };
      
      if (actualImpact) {
        updateData.actual_impact = actualImpact;
      }

      const { data, error } = await supabase
        .from('organizational_changes')
        .update(updateData)
        .eq('id', changeId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating change stage:', error);
      throw error;
    }
  }, []);

  const getKnowledgeTransfers = useCallback(async (status?: KnowledgeTransfer['transfer_status']) => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('knowledge_transfers')
        .select('*')
        .order('created_at', { ascending: false });

      if (status) {
        query = query.eq('transfer_status', status);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as KnowledgeTransfer[];
    } catch (error) {
      console.error('Error fetching knowledge transfers:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const createKnowledgeTransfer = useCallback(async (transfer: Omit<KnowledgeTransfer, 'id'>) => {
    try {
      const { data, error } = await supabase
        .from('knowledge_transfers')
        .insert(transfer)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating knowledge transfer:', error);
      throw error;
    }
  }, []);

  const updateTransferProgress = useCallback(async (transferId: string, completionPercentage: number, qualityAssessment?: number) => {
    try {
      const updateData: any = { 
        completion_percentage: completionPercentage,
        updated_at: new Date().toISOString()
      };
      
      if (qualityAssessment) {
        updateData.quality_assessment = qualityAssessment;
      }
      
      if (completionPercentage >= 100) {
        updateData.transfer_status = 'completed';
        updateData.completed_date = new Date().toISOString().split('T')[0];
      } else if (completionPercentage > 0) {
        updateData.transfer_status = 'in_progress';
      }

      const { data, error } = await supabase
        .from('knowledge_transfers')
        .update(updateData)
        .eq('id', transferId)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating transfer progress:', error);
      throw error;
    }
  }, []);

  const getChangeAnalytics = useCallback(async () => {
    try {
      // Get change completion rates by type
      const { data: changes } = await supabase
        .from('organizational_changes')
        .select('change_type, change_stage, created_at')
        .gte('created_at', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString());

      // Get knowledge transfer effectiveness
      const { data: transfers } = await supabase
        .from('knowledge_transfers')
        .select('transfer_type, transfer_status, completion_percentage, quality_assessment')
        .gte('created_at', new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString());

      return {
        changes: changes || [],
        transfers: transfers || []
      };
    } catch (error) {
      console.error('Error getting change analytics:', error);
      return { changes: [], transfers: [] };
    }
  }, []);

  return {
    isLoading,
    getActiveChanges,
    initiateChange,
    updateChangeStage,
    getKnowledgeTransfers,
    createKnowledgeTransfer,
    updateTransferProgress,
    getChangeAnalytics
  };
};
