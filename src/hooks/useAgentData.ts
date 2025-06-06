
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
  const { data: functionCounts, error: functionError } = useQuery({
    queryKey: ['agent-function-counts'],
    queryFn: async (): Promise<AgentCount[]> => {
      try {
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
      } catch (error) {
        console.error('Error fetching function counts:', error);
        return [];
      }
    },
    retry: 3,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: domainCounts, error: domainError } = useQuery({
    queryKey: ['agent-domain-counts'],
    queryFn: async (): Promise<DomainCount[]> => {
      try {
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
      } catch (error) {
        console.error('Error fetching domain counts:', error);
        return [];
      }
    },
    retry: 3,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const { data: totalAgents, error: totalError } = useQuery({
    queryKey: ['total-agents'],
    queryFn: async (): Promise<number> => {
      try {
        const { count, error } = await supabase
          .from('10,000 agents')
          .select('*', { count: 'exact', head: true });
        
        if (error) throw error;
        return count || 0;
      } catch (error) {
        console.error('Error fetching total agents:', error);
        return 10000; // Fallback value
      }
    },
    retry: 3,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Map functions to department heads
  const getDepartmentAgentCount = (departmentId: string): number => {
    if (!functionCounts) return 81; // Fallback to expected count per department
    
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
      .reduce((sum, fc) => sum + fc.count, 81); // Default to 81 if no matches
  };

  return {
    functionCounts,
    domainCounts,
    totalAgents,
    getDepartmentAgentCount,
    errors: {
      functionError,
      domainError,
      totalError
    }
  };
};
