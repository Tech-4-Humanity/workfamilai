
import { generateAllFamilyAgents } from '@/utils/familyAgentGeneration';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { useFamilyAgentMutation } from '@/hooks/useFamilyAgentMutation';

export const useFamilyAgentIntegration = () => {
  const { currentAgentCount, familyAgents, isLoading } = useFamilyAgentQueries();
  const { 
    insertFamilyAgents, 
    clearFamilyAgents,
    isIntegrating, 
    isClearing,
    integrationError, 
    integrationSuccess,
    clearError,
    clearSuccess
  } = useFamilyAgentMutation();

  // Get all family agents for integration
  const allFamilyAgents = generateAllFamilyAgents();

  const integrateFamilyAgents = async () => {
    try {
      console.log(`Starting integration of ${allFamilyAgents.length} family agents...`);
      await insertFamilyAgents.mutateAsync(allFamilyAgents);
      console.log('Family agents integration completed successfully');
    } catch (error) {
      console.error('Failed to integrate family agents:', error);
      throw error;
    }
  };

  const clearAllFamilyAgents = async () => {
    try {
      console.log('Clearing all family agents...');
      await clearFamilyAgents.mutateAsync();
      console.log('Family agents cleared successfully');
    } catch (error) {
      console.error('Failed to clear family agents:', error);
      throw error;
    }
  };

  return {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    generatedAgentCount: allFamilyAgents.length,
    integrateFamilyAgents,
    clearAllFamilyAgents,
    isIntegrating,
    isClearing,
    integrationError,
    integrationSuccess,
    clearError,
    clearSuccess
  };
};
