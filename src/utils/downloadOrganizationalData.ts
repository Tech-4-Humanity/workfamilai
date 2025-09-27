/**
 * Utility functions for downloading the complete organizational structure data
 */

import { 
  exportOrganizationalCSV, 
  COMPLETE_ORGANIZATIONAL_STRUCTURE, 
  LEADERSHIP_SUMMARY, 
  ORGANIZATIONAL_SUMMARY 
} from '@/data/completeOrganizationalStructure';

/**
 * Download the complete organizational structure as CSV
 */
export const downloadOrganizationalCSV = () => {
  const csvContent = exportOrganizationalCSV();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Family_Consciousness_Network_Complete_810_Agents_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Download leadership summary as JSON
 */
export const downloadLeadershipSummary = () => {
  const jsonContent = JSON.stringify(LEADERSHIP_SUMMARY, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Leadership_Summary_10_Executives_${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Download complete structure as JSON
 */
export const downloadCompleteStructureJSON = () => {
  const structureData = {
    summary: ORGANIZATIONAL_SUMMARY,
    leaders: LEADERSHIP_SUMMARY,
    agents: COMPLETE_ORGANIZATIONAL_STRUCTURE
  };
  
  const jsonContent = JSON.stringify(structureData, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Complete_Organizational_Structure_820_Entities_${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

/**
 * Copy organizational summary to clipboard
 */
export const copyOrganizationalSummary = async (): Promise<boolean> => {
  try {
    const summary = `
FAMILY CONSCIOUSNESS NETWORK - ORGANIZATIONAL STRUCTURE
Generated: ${ORGANIZATIONAL_SUMMARY.generatedAt}

📊 SUMMARY:
- Total Leaders: ${ORGANIZATIONAL_SUMMARY.totalLeaders}
- Total Divisions: ${ORGANIZATIONAL_SUMMARY.totalDivisions}  
- Total Agents: ${ORGANIZATIONAL_SUMMARY.totalAgents}
- Total Entities: ${ORGANIZATIONAL_SUMMARY.totalEntities}
- Structure: ${ORGANIZATIONAL_SUMMARY.structure}

👥 EXECUTIVE LEADERSHIP:
${LEADERSHIP_SUMMARY.map((leader, index) => 
  `${index + 1}. ${leader.name} - ${leader.title}
     Enneagram: ${leader.enneagramType}
     Divisions: ${leader.divisionsCount}
     Agents: ${leader.agentsCount}`
).join('\n')}

🎯 ARCHITECTURE: Each of the 10 executive leaders manages 9 divisions, with each division containing 9 specialized agents, creating a balanced 810-agent consciousness network plus 10 leaders for a total of 820 entities.
    `;
    
    await navigator.clipboard.writeText(summary);
    return true;
  } catch (error) {
    console.error('Failed to copy to clipboard:', error);
    return false;
  }
};

/**
 * Generate quick stats for display
 */
export const getQuickStats = () => {
  return {
    totalEntities: ORGANIZATIONAL_SUMMARY.totalEntities,
    leaders: ORGANIZATIONAL_SUMMARY.totalLeaders,
    divisions: ORGANIZATIONAL_SUMMARY.totalDivisions,
    agents: ORGANIZATIONAL_SUMMARY.totalAgents,
    structure: ORGANIZATIONAL_SUMMARY.structure,
    avgAgentsPerLeader: Math.round(ORGANIZATIONAL_SUMMARY.totalAgents / ORGANIZATIONAL_SUMMARY.totalLeaders),
    avgAgentsPerDivision: Math.round(ORGANIZATIONAL_SUMMARY.totalAgents / ORGANIZATIONAL_SUMMARY.totalDivisions),
    generatedAt: ORGANIZATIONAL_SUMMARY.generatedAt
  };
};