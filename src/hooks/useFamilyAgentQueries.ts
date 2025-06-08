
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useFamilyAgentQueries = () => {
  // Query to get current agent count from family_agents table
  const { data: currentAgentCount } = useQuery({
    queryKey: ['current-family-agent-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('family_agents')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return count || 0;
    }
  });

  // Query to get all family agents
  const { data: familyAgents, isLoading } = useQuery({
    queryKey: ['family-agents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('family_agents')
        .select('*')
        .order('agent_code');
      
      if (error) throw error;
      return data || [];
    }
  });

  // Query to get agents by family member
  const getAgentsByFamilyMember = (familyMemberId: string) => {
    return useQuery({
      queryKey: ['family-agents-by-member', familyMemberId],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('family_agents')
          .select('*')
          .eq('family_member_id', familyMemberId)
          .order('agent_code');
        
        if (error) throw error;
        return data || [];
      }
    });
  };

  // Query to get agents by domain
  const getAgentsByDomain = (domain: string) => {
    return useQuery({
      queryKey: ['family-agents-by-domain', domain],
      queryFn: async () => {
        const { data, error } = await supabase
          .from('family_agents')
          .select('*')
          .eq('domain', domain)
          .order('agent_code');
        
        if (error) throw error;
        return data || [];
      }
    });
  };

  return {
    currentAgentCount,
    familyAgents,
    isLoading,
    getAgentsByFamilyMember,
    getAgentsByDomain
  };
};
