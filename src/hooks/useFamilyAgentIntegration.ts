
import { generateAllFamilyAgents, getFamilyAgentStats } from '@/utils/familyAgentGeneration';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { useFamilyAgentMutation } from '@/hooks/useFamilyAgentMutation';
import { verifyFamilyData } from '@/data/familyMembers';

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

  // Verify family data integrity
  const familyDataStats = verifyFamilyData();
  const agentStats = getFamilyAgentStats();
  
  // Get all family agents for integration
  const allFamilyAgents = generateAllFamilyAgents();

  const integrateFamilyAgents = async () => {
    try {
      
      await insertFamilyAgents.mutateAsync(allFamilyAgents);
    } catch (error) {
      throw error;
    }
  };

  const clearAllFamilyAgents = async () => {
    try {
      await clearFamilyAgents.mutateAsync();
    } catch (error) {
      throw error;
    }
  };

  return {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    generatedAgentCount: allFamilyAgents.length,
    expectedAgentCount: agentStats.expectedAgents,
    familyDataStats,
    agentStats,
    isDataComplete: agentStats.isComplete,
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
