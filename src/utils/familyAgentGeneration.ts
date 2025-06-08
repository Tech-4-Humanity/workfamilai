
import { familyMemberDetails } from '@/data/familyMembers';

export interface FamilyAgent {
  agent_code: string;
  persona: string;
  function: string;
  domain: string;
  sfia_level: string;
  core_skills: string;
  summary_bio: string;
  final_cost: string;
  consultant_hourly_rate: string;
  tech_stack: string;
  delivery_type: string;
  task_coverage_pct: number;
  specialization: string;
  achievement: string;
  background: string;
  signature_method: string;
  cultural_expertise: string;
  division_name: string;
  family_member_id: string;
}

const getDepartmentName = (departmentId: string): string => {
  const departmentMap: Record<string, string> = {
    'amara-chen': 'Product Development',
    'marcus-bennett': 'Governance & Compliance',
    'aisha-al-farsi': 'External Relations',
    'miguel-santos': 'Marketing',
    'priya-sharma': 'Human Resources',
    'theo-williams': 'Finance & Operations',
    'yuna-kim': 'Customer Support',
    'david-okafor': 'Innovation & R&D',
    'sofia-rodriguez': 'Sales'
  };
  return departmentMap[departmentId] || 'Unknown';
};

const determineSFIALevel = (specialization: string): string => {
  const seniorTerms = ['Lead', 'Senior', 'Chief', 'Director', 'Manager', 'Head', 'Principal'];
  const expertTerms = ['Expert', 'Specialist', 'Architect'];
  const midTerms = ['Analyst', 'Coordinator', 'Associate'];
  
  if (seniorTerms.some(term => specialization.includes(term))) return '6';
  if (expertTerms.some(term => specialization.includes(term))) return '5';
  if (midTerms.some(term => specialization.includes(term))) return '4';
  return '4'; // Default
};

const estimateCost = (specialization: string): number => {
  const level = determineSFIALevel(specialization);
  const baseCosts: Record<string, number> = {
    '4': 85000,
    '5': 140000,
    '6': 180000,
    '7': 220000
  };
  return baseCosts[level] || 85000;
};

const estimateHourlyRate = (specialization: string): number => {
  const level = determineSFIALevel(specialization);
  const baseRates: Record<string, number> = {
    '4': 125,
    '5': 190,
    '6': 250,
    '7': 300
  };
  return baseRates[level] || 125;
};

const determineTechStack = (specialization: string, domain: string): string => {
  const techStackMap: Record<string, string> = {
    'Product Development': 'Python, React, Node.js, AWS, TensorFlow',
    'Governance & Compliance': 'Compliance Software, Legal Databases, Audit Tools, GRC Platforms',
    'External Relations': 'CRM, Communication Platforms, Analytics, Social Media Tools',
    'Marketing': 'Analytics Tools, Social Media Platforms, SEO Tools, Marketing Automation',
    'Human Resources': 'HRIS, Assessment Tools, Learning Platforms, Recruitment Software',
    'Finance & Operations': 'Financial Software, ERP, Analytics Platforms, Business Intelligence',
    'Customer Support': 'CRM, Support Platforms, Analytics Tools, Helpdesk Software',
    'Innovation & R&D': 'Research Tools, Statistical Software, Prototyping, Design Thinking',
    'Sales': 'CRM, Sales Tools, Analytics Platforms, Proposal Software'
  };
  
  return techStackMap[domain] || 'Standard Business Tools';
};

const determineDeliveryType = (specialization: string): string => {
  const automatedTerms = ['Bot', 'AI', 'Automated', 'Algorithm', 'System'];
  const augmentedTerms = ['Analyst', 'Specialist', 'Coordinator', 'Engineer'];
  
  if (automatedTerms.some(term => specialization.includes(term))) return 'Automated';
  if (augmentedTerms.some(term => specialization.includes(term))) return 'Augmented';
  return 'Human';
};

const estimateTaskCoverage = (specialization: string): number => {
  const deliveryType = determineDeliveryType(specialization);
  const coverageMap: Record<string, number> = {
    'Automated': 92,
    'Augmented': 87,
    'Human': 85
  };
  return coverageMap[deliveryType] || 85;
};

export const generateAllFamilyAgents = (): FamilyAgent[] => {
  const agents: FamilyAgent[] = [];
  let agentCounter = 10001; // Starting fresh

  Object.entries(familyMemberDetails).forEach(([familyMemberId, familyMember]) => {
    const departmentName = getDepartmentName(familyMemberId);
    
    if (familyMember && familyMember.divisions) {
      familyMember.divisions.forEach((division) => {
        division.agents.forEach((agent) => {
          const agentCode = `FA${agentCounter.toString().padStart(5, '0')}`;
          
          agents.push({
            agent_code: agentCode,
            persona: agent.name,
            function: agent.specialization,
            domain: departmentName,
            sfia_level: determineSFIALevel(agent.specialization),
            core_skills: `${agent.signature_method}, ${agent.cultural_expertise}`,
            summary_bio: `${agent.background} ${agent.achievement}`,
            final_cost: estimateCost(agent.specialization).toString(),
            consultant_hourly_rate: estimateHourlyRate(agent.specialization).toString(),
            tech_stack: determineTechStack(agent.specialization, departmentName),
            delivery_type: determineDeliveryType(agent.specialization),
            task_coverage_pct: estimateTaskCoverage(agent.specialization),
            specialization: agent.specialization,
            achievement: agent.achievement,
            background: agent.background,
            signature_method: agent.signature_method,
            cultural_expertise: agent.cultural_expertise,
            division_name: division.name,
            family_member_id: familyMemberId
          });
          
          agentCounter++;
        });
      });
    }
  });

  console.log(`Generated ${agents.length} family agents`);
  return agents;
};

export const getTotalAgentCount = (): number => {
  return generateAllFamilyAgents().length;
};

export const getAgentsByDomain = (domain: string): FamilyAgent[] => {
  return generateAllFamilyAgents().filter(agent => agent.domain === domain);
};

export const getAgentsByFamilyMember = (familyMemberId: string): FamilyAgent[] => {
  return generateAllFamilyAgents().filter(agent => agent.family_member_id === familyMemberId);
};
