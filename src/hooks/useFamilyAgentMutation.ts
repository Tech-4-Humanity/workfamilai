
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { FamilyAgent } from '@/utils/familyAgentGeneration';

export const useFamilyAgentMutation = () => {
  const queryClient = useQueryClient();

  const insertFamilyAgents = useMutation({
    mutationFn: async (agents: FamilyAgent[]) => {
      // Helper function to safely parse currency strings
      const parseCurrency = (value: string | number): number => {
        if (typeof value === 'number') return value;
        if (!value || value === '') return 0;
        // Remove currency symbols, commas, and whitespace, then parse
        const cleanValue = value.toString().replace(/[$,\s]/g, '');
        const parsed = parseFloat(cleanValue);
        return isNaN(parsed) ? 0 : parsed;
      };

      // Insert in batches of 50 to avoid timeouts
      const batchSize = 50;
      const batches = [];
      
      for (let i = 0; i < agents.length; i += batchSize) {
        batches.push(agents.slice(i, i + batchSize));
      }

      let totalUpserted = 0;
      
      for (const batch of batches) {
        const { data, error } = await supabase
          .from('family_agents')
          .upsert(batch.map(agent => ({
            agent_code: agent.agent_code,
            persona: agent.persona,
            function: agent.function,
            domain: agent.domain,
            sfia_level: agent.sfia_level,
            core_skills: agent.core_skills,
            summary_bio: agent.summary_bio,
            final_cost: parseCurrency(agent.final_cost),
            consultant_hourly_rate: parseCurrency(agent.consultant_hourly_rate),
            tech_stack: agent.tech_stack,
            delivery_type: agent.delivery_type,
            task_coverage_pct: agent.task_coverage_pct,
            specialization: agent.specialization,
            achievement: agent.achievement,
            background: agent.background,
            signature_method: agent.signature_method,
            cultural_expertise: agent.cultural_expertise,
            division_name: agent.division_name,
            family_member_id: agent.family_member_id
          })), {
            onConflict: 'agent_code',
            ignoreDuplicates: false
          });
        
        if (error) {
          console.error('Batch upsert error:', error);
          throw error;
        }
        
        totalUpserted += batch.length;
        console.log(`Upserted batch: ${totalUpserted}/${agents.length} agents`);
        
        // Small delay between batches
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      return { totalInserted: totalUpserted, totalAgents: agents.length };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-agents'] });
      queryClient.invalidateQueries({ queryKey: ['current-family-agent-count'] });
      queryClient.invalidateQueries({ queryKey: ['family-agents-by-member'] });
      queryClient.invalidateQueries({ queryKey: ['family-agents-by-domain'] });
    }
  });

  const clearFamilyAgents = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('family_agents')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all records
      
      if (error) throw error;
      return { success: true };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-agents'] });
      queryClient.invalidateQueries({ queryKey: ['current-family-agent-count'] });
      queryClient.invalidateQueries({ queryKey: ['family-agents-by-member'] });
      queryClient.invalidateQueries({ queryKey: ['family-agents-by-domain'] });
    }
  });

  return {
    insertFamilyAgents,
    clearFamilyAgents,
    isIntegrating: insertFamilyAgents.isPending,
    isClearing: clearFamilyAgents.isPending,
    integrationError: insertFamilyAgents.error,
    integrationSuccess: insertFamilyAgents.isSuccess,
    clearError: clearFamilyAgents.error,
    clearSuccess: clearFamilyAgents.isSuccess
  };
};
