
import { FamilyMemberData } from '@/types/family';
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

// Verify data integrity
export const verifyFamilyData = () => {
  console.log('=== Family Data Verification ===');
  
  let totalAgents = 0;
  let totalDivisions = 0;
  
  familyMemberDetails.forEach((member, index) => {
    const divisionCount = member.divisions.length;
    const agentCount = member.divisions.reduce((sum, div) => sum + div.agents.length, 0);
    
    totalDivisions += divisionCount;
    totalAgents += agentCount;
    
    console.log(`${index + 1}. ${member.leader.name}:`);
    console.log(`   - Divisions: ${divisionCount}`);
    console.log(`   - Agents: ${agentCount}`);
    
    member.divisions.forEach((division, divIndex) => {
      console.log(`     ${divIndex + 1}. ${division.name}: ${division.agents.length} agents`);
    });
  });
  
  console.log(`\nTotals:`);
  console.log(`- Family Members: ${familyMemberDetails.length}`);
  console.log(`- Total Divisions: ${totalDivisions}`);
  console.log(`- Total Agents: ${totalAgents}`);
  console.log(`- Expected (9×9×9): ${9 * 9 * 9} agents`);
  console.log(`- Data Complete: ${totalAgents === 9 * 9 * 9 ? 'YES' : 'NO'}`);
  
  return {
    memberCount: familyMemberDetails.length,
    totalDivisions,
    totalAgents,
    expectedAgents: 9 * 9 * 9,
    isComplete: totalAgents === 9 * 9 * 9
  };
};
