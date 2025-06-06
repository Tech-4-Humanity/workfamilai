
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

  // Map functions to department heads
  const getDepartmentAgentCount = (departmentId: string): number => {
    if (!functionCounts) return 0;
    
    const functionMapping: Record<string, string[]> = {
      'product-development': ['Product Management', 'UX Design', 'Software Development', 'Quality Assurance'],
      'marketing': ['Marketing Strategy', 'Content Creation', 'Brand Management', 'Digital Marketing'],
      'human-resources': ['Talent Acquisition', 'HR Management', 'Training & Development', 'Employee Relations'],
      'finance-operations': ['Financial Analysis', 'Operations Management', 'Risk Management', 'Business Analysis'],
      'customer-support': ['Customer Support', 'Technical Support', 'Customer Success', 'Help Desk'],
      'innovation-rd': ['Research & Development', 'Innovation Management', 'Technology Strategy', 'Product Innovation'],
      'sales': ['Sales Strategy', 'Account Management', 'Business Development', 'Sales Operations'],
      'governance-compliance': ['Compliance Management', 'Risk Assessment', 'Audit', 'Governance'],
      'external-relations': ['Public Relations', 'Partnership Management', 'Stakeholder Relations', 'Communications']
    };

    const departmentFunctions = functionMapping[departmentId] || [];
    return functionCounts
      .filter(fc => departmentFunctions.some(df => fc.function.includes(df) || df.includes(fc.function)))
      .reduce((sum, fc) => sum + fc.count, 0);
  };

  return {
    functionCounts,
    domainCounts,
    totalAgents,
    getDepartmentAgentCount
  };
};
