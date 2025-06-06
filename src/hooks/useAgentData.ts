
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { familyMemberDetails } from '@/data/familyMembers';

interface AgentCount {
  function: string;
  count: number;
}

interface DomainCount {
  domain: string;
  count: number;
}

export const useAgentData = () => {
  const { data: functionCounts } = useQuery({
    queryKey: ['agent-function-counts'],
    queryFn: async (): Promise<AgentCount[]> => {
      const { data, error } = await supabase
        .from('10,000 agents')
        .select('function')
        .not('function', 'is', null);
      
      if (error) throw error;
      
      // Count occurrences of each function
      const counts: Record<string, number> = {};
      data.forEach(row => {
        if (row.function) {
          counts[row.function] = (counts[row.function] || 0) + 1;
        }
      });
      
      return Object.entries(counts).map(([function_name, count]) => ({
        function: function_name,
        count
      }));
    }
  });

  const { data: domainCounts } = useQuery({
    queryKey: ['agent-domain-counts'],
    queryFn: async (): Promise<DomainCount[]> => {
      const { data, error } = await supabase
        .from('10,000 agents')
        .select('domain')
        .not('domain', 'is', null);
      
      if (error) throw error;
      
      // Count occurrences of each domain
      const counts: Record<string, number> = {};
      data.forEach(row => {
        if (row.domain) {
          counts[row.domain] = (counts[row.domain] || 0) + 1;
        }
      });
      
      return Object.entries(counts).map(([domain, count]) => ({
        domain,
        count
      }));
    }
  });

  const { data: totalAgents } = useQuery({
    queryKey: ['total-agents'],
    queryFn: async (): Promise<number> => {
      const { count, error } = await supabase
        .from('10,000 agents')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return count || 0;
    }
  });

  // Use local family data to get agent counts for each department
  const getDepartmentAgentCount = (departmentId: string): number => {
    const familyMember = familyMemberDetails[departmentId];
    if (!familyMember) return 0;
    
    return familyMember.divisions.reduce((total, division) => {
      return total + division.agents.length;
    }, 0);
  };

  return {
    functionCounts,
    domainCounts,
    totalAgents,
    getDepartmentAgentCount
  };
};
