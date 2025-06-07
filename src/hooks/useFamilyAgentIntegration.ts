
import { generateAllFamilyAgents } from '@/utils/familyAgentGeneration';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { useFamilyAgentMutation } from '@/hooks/useFamilyAgentMutation';

export const useFamilyAgentIntegration = () => {
  const { currentAgentCount, familyAgents, isLoading } = useFamilyAgentQueries();
  const { insertFamilyAgents, isIntegrating, integrationError, integrationSuccess } = useFamilyAgentMutation();

  // Get all family agents for integration
  const allFamilyAgents = generateAllFamilyAgents();

  return {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    insertFamilyAgents,
    isIntegrating,
    integrationError,
    integrationSuccess
  };
};
