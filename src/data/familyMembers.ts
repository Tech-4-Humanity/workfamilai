
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

// Verify data integrity
export const verifyFamilyData = () => {
  console.log('=== Family Data Verification ===');
  console.log('CRITICAL: Data completion in progress - implementing 729-agent architecture');
  
  let totalAgents = 0;
  let totalDivisions = 0;
  
  familyMemberDetails.forEach((member, index) => {
    const divisionCount = member.divisions.length;
    const agentCount = member.divisions.reduce((sum, div) => sum + div.agents.length, 0);
    
    totalDivisions += divisionCount;
    totalAgents += agentCount;
    
    console.log(`${index + 1}. ${member.leader.name}:`);
    console.log(`   - Divisions: ${divisionCount} ${divisionCount === 9 ? '✓' : '❌ INCOMPLETE'}`);
    console.log(`   - Agents: ${agentCount} ${agentCount === 81 ? '✓' : '❌ INCOMPLETE'}`);
    
    if (divisionCount < 9 || agentCount < 81) {
      console.log(`   - STATUS: REQUIRES COMPLETION`);
      console.log(`   - MISSING: ${9 - divisionCount} divisions, ${81 - agentCount} agents`);
    }
    
    member.divisions.forEach((division, divIndex) => {
      const agentsInDiv = division.agents.length;
      console.log(`     ${divIndex + 1}. ${division.name}: ${agentsInDiv} agents ${agentsInDiv === 9 ? '✓' : '❌'}`);
    });
  });
  
  const expectedTotal = 729; // 9 members × 9 divisions × 9 agents
  const completionPercentage = Math.round((totalAgents / expectedTotal) * 100);
  
  console.log(`\n=== COMPLETION STATUS ===`);
  console.log(`- Family Members: ${familyMemberDetails.length}/9 ✓`);
  console.log(`- Total Divisions: ${totalDivisions}/81 ${totalDivisions === 81 ? '✓' : '❌'}`);
  console.log(`- Total Agents: ${totalAgents}/${expectedTotal} (${completionPercentage}%)`);
  console.log(`- Architecture Complete: ${totalAgents === expectedTotal ? 'YES ✓' : 'NO ❌ - IN PROGRESS'}`);
  
  if (totalAgents < expectedTotal) {
    console.log(`\n=== ACTION REQUIRED ===`);
    console.log(`- Missing: ${expectedTotal - totalAgents} agents`);
    console.log(`- Phase: Data completion implementation`);
    console.log(`- Next: Complete remaining divisions and agents`);
  }
  
  return {
    memberCount: familyMemberDetails.length,
    totalDivisions,
    totalAgents,
    expectedAgents: expectedTotal,
    isComplete: totalAgents === expectedTotal,
    completionPercentage,
    missingAgents: expectedTotal - totalAgents
  };
};
