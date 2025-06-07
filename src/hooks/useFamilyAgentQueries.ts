
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useFamilyAgentQueries = () => {
  // Query to get current agent count
  const { data: currentAgentCount } = useQuery({
    queryKey: ['current-agent-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('10,000 agents')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return count || 0;
    }
  });

  // Query to check if family agents are already integrated
  const { data: familyAgents, isLoading } = useQuery({
    queryKey: ['family-agents-integration'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('10,000 agents')
        .select('agent_code, persona, function, domain')
        .eq('input_source', 'family_integration_2024');
      
      if (error) throw error;
      return data || [];
    }
  });

  return {
    currentAgentCount,
    familyAgents,
    isLoading
  };
};
