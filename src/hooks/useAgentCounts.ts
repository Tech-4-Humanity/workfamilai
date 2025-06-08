
import { useState, useEffect } from 'react';

interface AgentCounts {
  [key: string]: number;
}

export const useAgentCounts = () => {
  const [agentFunctionCounts, setAgentFunctionCounts] = useState<AgentCounts>({});
  const [agentDomainCounts, setAgentDomainCounts] = useState<AgentCounts>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading agent counts
    const loadAgentCounts = async () => {
      setIsLoading(true);
      
      // Mock data for agent function counts
      const functionCounts = {
        'Product Development': 15,
        'Marketing': 12,
        'Human Resources': 8,
        'Finance & Operations': 10,
        'Customer Support': 18,
        'Innovation & R&D': 6,
        'Sales': 14,
        'Governance & Compliance': 7,
        'External Relations': 5
      };

      // Mock data for agent domain counts
      const domainCounts = {
        'Analytics': 25,
        'Marketing': 20,
        'Support': 30,
        'Finance': 15,
        'Technology': 35,
        'Sales': 28,
        'Compliance': 12,
        'Innovation': 18
      };

      setAgentFunctionCounts(functionCounts);
      setAgentDomainCounts(domainCounts);
      setIsLoading(false);
    };

    loadAgentCounts();
  }, []);

  return {
    agentFunctionCounts,
    agentDomainCounts,
    isLoading: isLoading
  };
};
