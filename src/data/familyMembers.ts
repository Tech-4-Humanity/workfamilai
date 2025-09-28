
import { FamilyMemberData, FamilyMember } from '@/types/family';
import { amaraChenData } from './leaders/amaraChen';
import { priyaSharmaData } from './leaders/priyaSharma';
import { aishaAlFarsiData } from './leaders/aishaAlFarsi';
import { miguelSantosData } from './leaders/miguelSantos';
import { theoWilliamsData } from './leaders/theoWilliams';
import { yunaKimData } from './leaders/yunaKim';
import { sofiaRodriguezData } from './leaders/sofiaRodriguez';
import { marcusBennettData } from './leaders/marcusBennett';
import { elenaVasquezData } from './leaders/elenaVasquez';
import { davidOkaforData } from './leaders/davidOkafor';

export const familyMemberDetails: Array<FamilyMemberData & { id: string }> = [
  {
    id: 'amara-chen',
    ...amaraChenData
  },
  {
    id: 'priya-sharma',
    ...priyaSharmaData
  },
  {
    id: 'aisha-al-farsi',
    ...aishaAlFarsiData
  },
  {
    id: 'miguel-santos',
    ...miguelSantosData
  },
  {
    id: 'theo-williams',
    ...theoWilliamsData
  },
  {
    id: 'yuna-kim',
    ...yunaKimData
  },
  {
    id: 'sofia-rodriguez',
    ...sofiaRodriguezData
  },
  {
    id: 'marcus-bennett',
    ...marcusBennettData
  },
  {
    id: 'elena-vasquez',
    ...elenaVasquezData
  },
  {
    id: 'david-okafor',
    ...davidOkaforData
  }
];

// Transform detailed data into simple family member format for display
export const familyMembers: FamilyMember[] = familyMemberDetails.map((member) => ({
  id: member.id,
  name: member.leader.name,
  title: member.leader.title,
  personality: member.leader.personality,
  enneagramType: member.leader.enneagramType,
  motto: member.leader.motto,
  background: member.leader.background,
  domainOverview: '', // Will be populated as needed
  color: 'blue', // Default color, can be customized
  icon: null,
  description: member.leader.background,
  agentCount: 81, // Each department has 9 divisions × 9 agents = 81
  avatar: member.leader.name.split(' ').map(n => n[0]).join('')
}));

// Enhanced verification function for production readiness
export const verifyFamilyData = () => {
  // Production verification logic
  const expectedPerMember = 81; // 9 divisions × 9 agents each
  const expectedTotal = familyMembers.length * expectedPerMember; // 10 × 81 = 810
  
  const memberDetails = familyMembers.map(member => {
    const memberData = familyMemberDetails.find(detail => detail.id === member.id);
    const divisions = memberData?.divisions || [];
    const divisionCount = divisions.length;
    const agentCount = divisions.reduce((total, div) => total + (div.agents?.length || 0), 0);
    return {
      name: member.name,
      divisions: divisionCount,
      agents: agentCount,
      isComplete: divisionCount === 9 && agentCount === 81
    };
  });
  
  const totalDivisions = memberDetails.reduce((total, member) => total + member.divisions, 0);
  const totalAgents = memberDetails.reduce((total, member) => total + member.agents, 0);
  const completedMembers = memberDetails.filter(member => member.isComplete).length;
  const isArchitectureComplete = totalAgents === expectedTotal && completedMembers === familyMembers.length;
  const completionPercentage = Math.round((totalAgents / expectedTotal) * 100);
  
  const issues = [];
  if (totalAgents < expectedTotal) {
    issues.push(`Missing ${expectedTotal - totalAgents} agents`);
  }
  if (completedMembers < familyMembers.length) {
    issues.push(`${familyMembers.length - completedMembers} family members incomplete`);
  }
  
  return {
    memberCount: familyMembers.length,
    totalDivisions,
    totalAgents,
    expectedAgents: expectedTotal,
    isComplete: isArchitectureComplete,
    completionPercentage,
    missingAgents: expectedTotal - totalAgents,
    completedMembers,
    issues,
    isProductionReady: isArchitectureComplete && issues.length === 0
  };
};

// Production readiness checklist
export const getProductionReadinessStatus = () => {
  const verification = verifyFamilyData();
  
  return {
    dataIntegrity: verification.isComplete ? 'PASS' : 'FAIL',
    agentCount: verification.totalAgents === 810 ? 'PASS' : 'FAIL',
    divisionCount: verification.totalDivisions === 90 ? 'PASS' : 'FAIL',
    memberCount: verification.memberCount === 10 ? 'PASS' : 'FAIL',
    overallStatus: verification.isProductionReady ? 'READY TO SHIP' : 'NEEDS WORK',
    blockers: verification.issues
  };
};
