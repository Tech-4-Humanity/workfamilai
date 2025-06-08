
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
      console.log('=== Family Agent Integration Started ===');
      console.log(`Family Data Stats:`, familyDataStats);
      console.log(`Agent Generation Stats:`, agentStats);
      console.log(`Starting integration of ${allFamilyAgents.length} family agents...`);
      
      if (!agentStats.isComplete) {
        console.warn('Warning: Family data appears incomplete!');
        console.warn(`Expected ${agentStats.expectedAgents} agents, but generated ${agentStats.totalAgents}`);
      }
      
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
