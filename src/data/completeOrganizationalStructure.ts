/**
 * COMPLETE 810-AGENT ORGANIZATIONAL STRUCTURE
 * 
 * This file contains the complete hierarchical structure of the Family Consciousness Network:
 * - 10 Executive Leaders
 * - 90 Divisions (9 per leader)
 * - 810 Agents (9 per division)
 * 
 * Total: 820 entities in the consciousness network
 */

import { familyMemberDetails } from './familyMembers';
import { generateAgentCode } from '@/utils/familyAgentGeneration';

export interface OrganizationalAgent {
  // Hierarchy
  leaderName: string;
  leaderTitle: string;
  leaderEnneagram: string;
  divisionName: string;
  divisionDescription: string;
  
  // Agent Details
  agentCode: string;
  agentName: string;
  specialization: string;
  achievement: string;
  background: string;
  signatureMethod: string;
  culturalExpertise: string;
  
  // Position
  leaderIndex: number;
  divisionIndex: number;
  agentIndex: number;
  hierarchyPath: string;
}

export interface OrganizationalLeader {
  name: string;
  title: string;
  enneagramType: string;
  personality: string;
  motto: string;
  background: string;
  divisionsCount: number;
  agentsCount: number;
  leaderIndex: number;
}

export interface OrganizationalSummary {
  totalLeaders: number;
  totalDivisions: number;
  totalAgents: number;
  totalEntities: number;
  structure: string;
  generatedAt: string;
}

/**
 * Generate complete organizational structure with all 810 agents
 */
export const generateCompleteOrganizationalStructure = (): OrganizationalAgent[] => {
  const allAgents: OrganizationalAgent[] = [];

  familyMemberDetails.forEach((member, leaderIndex) => {
    member.divisions.forEach((division, divisionIndex) => {
      division.agents.forEach((agent, agentIndex) => {
        const agentCode = generateAgentCode(member.id, divisionIndex, agentIndex);
        const hierarchyPath = `L${leaderIndex + 1}.D${divisionIndex + 1}.A${agentIndex + 1}`;

        const organizationalAgent: OrganizationalAgent = {
          // Hierarchy
          leaderName: member.leader.name,
          leaderTitle: member.leader.title,
          leaderEnneagram: member.leader.enneagramType,
          divisionName: division.name,
          divisionDescription: division.description,
          
          // Agent Details
          agentCode: agentCode,
          agentName: agent.name,
          specialization: agent.specialization,
          achievement: agent.achievement,
          background: agent.background,
          signatureMethod: agent.signature_method,
          culturalExpertise: agent.cultural_expertise,
          
          // Position
          leaderIndex: leaderIndex + 1,
          divisionIndex: divisionIndex + 1,
          agentIndex: agentIndex + 1,
          hierarchyPath: hierarchyPath
        };

        allAgents.push(organizationalAgent);
      });
    });
  });

  return allAgents;
};

/**
 * Generate leadership summary
 */
export const generateLeadershipSummary = (): OrganizationalLeader[] => {
  return familyMemberDetails.map((member, index) => ({
    name: member.leader.name,
    title: member.leader.title,
    enneagramType: member.leader.enneagramType,
    personality: member.leader.personality,
    motto: member.leader.motto,
    background: member.leader.background,
    divisionsCount: member.divisions.length,
    agentsCount: member.divisions.reduce((sum, div) => sum + div.agents.length, 0),
    leaderIndex: index + 1
  }));
};

/**
 * Generate organizational summary statistics
 */
export const generateOrganizationalSummary = (): OrganizationalSummary => {
  const leaders = generateLeadershipSummary();
  const agents = generateCompleteOrganizationalStructure();
  
  const totalDivisions = leaders.reduce((sum, leader) => sum + leader.divisionsCount, 0);
  const totalAgents = agents.length;
  const totalLeaders = leaders.length;
  const totalEntities = totalLeaders + totalAgents;

  return {
    totalLeaders,
    totalDivisions,
    totalAgents,
    totalEntities,
    structure: `${totalLeaders} Leaders → ${totalDivisions} Divisions → ${totalAgents} Agents`,
    generatedAt: new Date().toISOString()
  };
};

/**
 * Export complete organizational data as CSV string
 */
export const exportOrganizationalCSV = (): string => {
  const agents = generateCompleteOrganizationalStructure();
  
  const headers = [
    'Agent Code',
    'Hierarchy Path',
    'Leader Name',
    'Leader Title', 
    'Leader Enneagram',
    'Division Name',
    'Division Description',
    'Agent Name',
    'Specialization',
    'Achievement',
    'Background',
    'Signature Method',
    'Cultural Expertise',
    'Leader Index',
    'Division Index',
    'Agent Index'
  ];

  const csvContent = [
    headers.join(','),
    ...agents.map(agent => [
      `"${agent.agentCode}"`,
      `"${agent.hierarchyPath}"`,
      `"${agent.leaderName}"`,
      `"${agent.leaderTitle}"`,
      `"${agent.leaderEnneagram}"`,
      `"${agent.divisionName}"`,
      `"${agent.divisionDescription}"`,
      `"${agent.agentName}"`,
      `"${agent.specialization}"`,
      `"${agent.achievement.replace(/"/g, '""')}"`,
      `"${agent.background.replace(/"/g, '""')}"`,
      `"${agent.signatureMethod}"`,
      `"${agent.culturalExpertise.replace(/"/g, '""')}"`,
      agent.leaderIndex,
      agent.divisionIndex,
      agent.agentIndex
    ].join(','))
  ].join('\n');

  return csvContent;
};

/**
 * Get agents by leader
 */
export const getAgentsByLeader = (leaderName: string): OrganizationalAgent[] => {
  const allAgents = generateCompleteOrganizationalStructure();
  return allAgents.filter(agent => agent.leaderName === leaderName);
};

/**
 * Get agents by division
 */
export const getAgentsByDivision = (leaderName: string, divisionName: string): OrganizationalAgent[] => {
  const allAgents = generateCompleteOrganizationalStructure();
  return allAgents.filter(agent => 
    agent.leaderName === leaderName && agent.divisionName === divisionName
  );
};

/**
 * Search agents by specialization
 */
export const searchAgentsBySpecialization = (specialization: string): OrganizationalAgent[] => {
  const allAgents = generateCompleteOrganizationalStructure();
  return allAgents.filter(agent => 
    agent.specialization.toLowerCase().includes(specialization.toLowerCase())
  );
};

// Export the complete structure for immediate use
export const COMPLETE_ORGANIZATIONAL_STRUCTURE = generateCompleteOrganizationalStructure();
export const LEADERSHIP_SUMMARY = generateLeadershipSummary();
export const ORGANIZATIONAL_SUMMARY = generateOrganizationalSummary();

// Console log summary for verification
console.log('🎯 COMPLETE ORGANIZATIONAL STRUCTURE GENERATED');
console.log('📊 Summary:', ORGANIZATIONAL_SUMMARY);
console.log('👥 Total Entities:', ORGANIZATIONAL_SUMMARY.totalEntities);
console.log('🏢 Structure:', ORGANIZATIONAL_SUMMARY.structure);

/**
 * ORGANIZATIONAL HIERARCHY REFERENCE:
 * 
 * L1: Amara Chen (CTO) - Product Development
 *   D1: Software Engineering (9 agents)
 *   D2: User Experience (9 agents)
 *   D3: Product Engineering (9 agents)
 *   D4: Platform Engineering (9 agents)
 *   D5: Innovation Labs (9 agents)
 *   D6: Quality Assurance (9 agents)
 *   D7: Product Analytics (9 agents)
 *   D8: Product Security (9 agents)
 *   D9: Product Operations (9 agents)
 * 
 * L2: Priya Sharma (CHRO) - Human Resources
 *   D1: Talent Acquisition (9 agents)
 *   D2: Learning & Development (9 agents)
 *   D3: Employee Engagement (9 agents)
 *   D4: Performance Management (9 agents)
 *   D5: Compensation & Benefits (9 agents)
 *   D6: HR Operations (9 agents)
 *   D7: Diversity & Inclusion (9 agents)
 *   D8: Employee Relations (9 agents)
 *   D9: Organizational Development (9 agents)
 * 
 * [And so on for all 10 leaders...]
 * 
 * Total Structure: 10 × 9 × 9 = 810 agents + 10 leaders = 820 entities
 */