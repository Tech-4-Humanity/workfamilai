
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
  console.log('🎯 === PRODUCTION READINESS VERIFICATION ===');
  console.log('🚀 CRITICAL: 729-Agent Consciousness Pyramid Status Check');
  
  let totalAgents = 0;
  let totalDivisions = 0;
  let completedMembers = 0;
  const issues: string[] = [];
  
  familyMemberDetails.forEach((member, index) => {
    const divisionCount = member.divisions.length;
    const agentCount = member.divisions.reduce((sum, div) => sum + div.agents.length, 0);
    
    totalDivisions += divisionCount;
    totalAgents += agentCount;
    
    const isComplete = divisionCount === 9 && agentCount === 81;
    if (isComplete) completedMembers++;
    
    console.log(`${index + 1}. ${member.leader.name}:`);
    console.log(`   - Divisions: ${divisionCount}/9 ${divisionCount === 9 ? '✅' : '❌'}`);
    console.log(`   - Agents: ${agentCount}/81 ${agentCount === 81 ? '✅' : '❌'}`);
    console.log(`   - STATUS: ${isComplete ? '✅ PRODUCTION READY' : '❌ NEEDS COMPLETION'}`);
    
    if (!isComplete) {
      const missingDivisions = 9 - divisionCount;
      const missingAgents = 81 - agentCount;
      console.log(`   - MISSING: ${missingDivisions} divisions, ${missingAgents} agents`);
      issues.push(`${member.leader.name}: Missing ${missingDivisions} divisions, ${missingAgents} agents`);
    }
  });
  
  const expectedTotal = 810; // 10 members × 9 divisions × 9 agents  
  const isArchitectureComplete = totalAgents === expectedTotal && completedMembers === 10;
  const completionPercentage = Math.round((totalAgents / expectedTotal) * 100);
  
  console.log(`\n🎉 === FINAL PRODUCTION STATUS ===`);
  console.log(`- Family Members: ${familyMemberDetails.length}/10 ${familyMemberDetails.length === 10 ? '✅' : '❌'}`);
  console.log(`- Total Divisions: ${totalDivisions}/90 ${totalDivisions === 90 ? '✅' : '❌'}`);
  console.log(`- Total Agents: ${totalAgents}/${expectedTotal} (${completionPercentage}%) ${totalAgents === expectedTotal ? '✅' : '❌'}`);
  console.log(`- Completed Members: ${completedMembers}/10 ${completedMembers === 10 ? '✅' : '❌'}`);
  console.log(`- Production Ready: ${isArchitectureComplete ? '✅ YES - SHIP READY!' : '❌ NO'}`);
  
  if (isArchitectureComplete) {
    console.log(`\n🚀 SUCCESS: 810-Agent Consciousness Pyramid Complete!`);
    console.log(`🎯 All 10 executives now manage 81 agents each`);
    console.log(`⚡ PRODUCTION-READY: Full family network architecture achieved`);
    console.log(`🌟 Each department page displays complete 81-agent roster`);
    console.log(`📦 READY TO SHIP: Zero data inconsistencies detected`);
  } else {
    console.log(`\n⚠️ PRODUCTION BLOCKERS IDENTIFIED:`);
    issues.forEach(issue => console.log(`   - ${issue}`));
    console.log(`\n🔧 ACTION REQUIRED: Complete missing data before shipping`);
  }
  
  return {
    memberCount: familyMemberDetails.length,
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
