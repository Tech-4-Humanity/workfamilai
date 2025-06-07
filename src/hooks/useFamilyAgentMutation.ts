
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { FamilyAgent } from '@/utils/familyAgentGeneration';

export const useFamilyAgentMutation = () => {
  const queryClient = useQueryClient();

  const insertFamilyAgents = useMutation({
    mutationFn: async (agents: FamilyAgent[]) => {
      // Insert in batches of 50 to avoid timeouts
      const batchSize = 50;
      const batches = [];
      
      for (let i = 0; i < agents.length; i += batchSize) {
        batches.push(agents.slice(i, i + batchSize));
      }

      let totalInserted = 0;
      
      for (const batch of batches) {
        const { data, error } = await supabase
          .from('10,000 agents')
          .insert(batch.map(agent => ({
            agent_code: agent.agent_code,
            persona: agent.persona,
            function: agent.function,
            domain: agent.domain,
            sfia_level: agent.sfia_level,
            core_skills: agent.core_skills,
            summary_bio: agent.summary_bio,
            final_cost: agent.final_cost,
            consultant_hourly_rate: agent.consultant_hourly_rate,
            tech_stack: agent.tech_stack,
            delivery_type: agent.delivery_type,
            task_coverage_pct: agent.task_coverage_pct,
            input_source: 'family_integration_2024'
          })));
        
        if (error) {
          console.error('Batch insert error:', error);
          throw error;
        }
        
        totalInserted += batch.length;
        console.log(`Inserted batch: ${totalInserted}/${agents.length} agents`);
        
        // Small delay between batches
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      return { totalInserted, totalAgents: agents.length };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-agents-integration'] });
      queryClient.invalidateQueries({ queryKey: ['current-agent-count'] });
      queryClient.invalidateQueries({ queryKey: ['agent-function-counts'] });
      queryClient.invalidateQueries({ queryKey: ['agent-domain-counts'] });
    }
  });

  return {
    insertFamilyAgents,
    isIntegrating: insertFamilyAgents.isPending,
    integrationError: insertFamilyAgents.error,
    integrationSuccess: insertFamilyAgents.isSuccess
  };
};
