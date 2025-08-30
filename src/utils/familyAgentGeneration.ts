
import { familyMemberDetails } from '@/data/familyMembers';
import { Agent } from '@/types/family';

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
    'theo-williams': 'Finance',
    'yuna-kim': 'Customer Experience',
    'sofia-rodriguez': 'Sales',
    'priya-sharma': 'Human Resources',
    'elena-vasquez': 'Operations'
  };
  return departmentMap[departmentId] || 'Unknown Department';
};

const generateTechStack = (specialization: string, division: string): string => {
  const techStacks: Record<string, string> = {
    // Software Engineering
    'Full-Stack Development': 'React, Node.js, TypeScript, PostgreSQL, AWS',
    'Frontend Engineering': 'React, Vue.js, TypeScript, CSS3, Webpack',
    'Backend Systems': 'Node.js, Python, PostgreSQL, Redis, Docker',
    'Mobile Development': 'React Native, Swift, Kotlin, Firebase',
    'API Development': 'REST, GraphQL, Node.js, Express, OpenAPI',
    'Database Engineering': 'PostgreSQL, MongoDB, Redis, Elasticsearch',
    'DevOps Engineering': 'Docker, Kubernetes, AWS, CI/CD, Terraform',
    'Quality Assurance': 'Jest, Cypress, Selenium, TestRail',
    'Software Architecture': 'Microservices, Event-driven, Clean Architecture',
    
    // User Experience
    'Interaction Design': 'Figma, Adobe XD, Principle, InVision',
    'User Research': 'UserTesting, Hotjar, Analytics, Surveys',
    'Design System Architecture': 'Figma, Storybook, Design Tokens',
    'Usability Testing': 'UserTesting, Maze, Lookback, Analytics',
    'Digital Accessibility': 'WCAG, ARIA, Screen Readers, axe-core',
    'Motion and Micro-interactions': 'Framer, Principle, After Effects',
    'Content Strategy and UX Writing': 'Content Management, Figma, Analytics',
    'Design Research and Innovation': 'Design Thinking, Miro, Research Tools',
    'Service Design and Customer Journey': 'Journey Mapping, Service Blueprints',
    
    // Product Engineering
    'System Architecture': 'AWS, Microservices, Event-driven Architecture',
    'Platform Infrastructure': 'Kubernetes, Docker, AWS, Terraform',
    'Product Security': 'OAuth, JWT, Encryption, Security Scanning',
    'Performance Optimization': 'Performance Monitoring, Caching, CDN',
    'DevOps and Automation': 'CI/CD, Docker, Kubernetes, Monitoring',
    'API Design and Integration': 'REST, GraphQL, OpenAPI, Postman',
    'Data Architecture': 'PostgreSQL, Data Warehousing, ETL',
    'Mobile Platform Development': 'React Native, iOS, Android, App Store',
    'Quality Assurance and Testing': 'Automated Testing, CI/CD, Quality Gates',
    
    // Default fallback
    'default': 'Modern Web Technologies, Cloud Platforms, Agile Tools'
  };
  
  return techStacks[specialization] || techStacks['default'];
};

const generateDeliveryType = (specialization: string): string => {
  const strategicRoles = ['Strategy', 'Architecture', 'Leadership', 'Management'];
  const operationalRoles = ['Development', 'Engineering', 'Testing', 'Support'];
  
  if (strategicRoles.some(role => specialization.includes(role))) {
    return 'Consultative';
  } else if (operationalRoles.some(role => specialization.includes(role))) {
    return 'Augmented';
  }
  return 'Hybrid';
};

const generateCostAndRate = (sfia_level: string, delivery_type: string): { final_cost: string; consultant_hourly_rate: string } => {
  const baseCosts: Record<string, number> = {
    '1': 45000,
    '2': 55000,
    '3': 70000,
    '4': 90000,
    '5': 120000,
    '6': 150000,
    '7': 180000
  };
  
  const deliveryMultipliers: Record<string, number> = {
    'Automated': 0.3,
    'Augmented': 0.7,
    'Consultative': 1.2,
    'Hybrid': 0.9
  };
  
  const baseAmount = baseCosts[sfia_level] || 70000;
  const multiplier = deliveryMultipliers[delivery_type] || 1.0;
  const finalCost = Math.round(baseAmount * multiplier);
  const hourlyRate = Math.round(finalCost / (52 * 40)); // Annual to hourly
  
  return {
    final_cost: `$${finalCost.toLocaleString()}`,
    consultant_hourly_rate: `$${hourlyRate}`
  };
};

export const generateAgentCode = (familyMemberId: string, divisionIndex: number, agentIndex: number): string => {
  const memberCodes: Record<string, string> = {
    'amara-chen': 'AC',
    'marcus-bennett': 'MB',
    'aisha-al-farsi': 'AF',
    'miguel-santos': 'MS',
    'theo-williams': 'TW',
    'yuna-kim': 'YK',
    'sofia-rodriguez': 'SR',
    'priya-sharma': 'PS',
    'elena-vasquez': 'EV'
  };
  
  const memberCode = memberCodes[familyMemberId] || 'XX';
  const divisionCode = String(divisionIndex + 1).padStart(2, '0');
  const agentCode = String(agentIndex + 1).padStart(2, '0');
  
  return `${memberCode}${divisionCode}${agentCode}`;
};

export const generateAllFamilyAgents = (): FamilyAgent[] => {
  const allAgents: FamilyAgent[] = [];
  
  console.log('Starting family agent generation...');
  
  familyMemberDetails.forEach((member, memberIndex) => {
    console.log(`Processing member ${memberIndex + 1}: ${member.leader.name} with ${member.divisions.length} divisions`);
    
    member.divisions.forEach((division, divisionIndex) => {
      console.log(`  Processing division ${divisionIndex + 1}: ${division.name} with ${division.agents.length} agents`);
      
      division.agents.forEach((agent, agentIndex) => {
        const agentCode = generateAgentCode(member.id, divisionIndex, agentIndex);
        const sfia_level = String(Math.floor(Math.random() * 4) + 3); // SFIA levels 3-6
        const delivery_type = generateDeliveryType(agent.specialization);
        const { final_cost, consultant_hourly_rate } = generateCostAndRate(sfia_level, delivery_type);
        
        const familyAgent: FamilyAgent = {
          agent_code: agentCode,
          persona: `${agent.name} - ${agent.specialization} Expert`,
          function: agent.specialization,
          domain: getDepartmentName(member.id),
          sfia_level: sfia_level,
          core_skills: agent.signature_method,
          summary_bio: agent.background,
          final_cost: final_cost,
          consultant_hourly_rate: consultant_hourly_rate,
          tech_stack: generateTechStack(agent.specialization, division.name),
          delivery_type: delivery_type,
          task_coverage_pct: Math.floor(Math.random() * 30) + 70, // 70-100%
          specialization: agent.specialization,
          achievement: agent.achievement,
          background: agent.background,
          signature_method: agent.signature_method,
          cultural_expertise: agent.cultural_expertise,
          division_name: division.name,
          family_member_id: member.id
        };
        
        allAgents.push(familyAgent);
      });
    });
  });
  
  console.log(`Generated ${allAgents.length} family agents total`);
  return allAgents;
};

export const getFamilyAgentStats = () => {
  const agents = generateAllFamilyAgents();
  const memberStats = familyMemberDetails.map(member => ({
    id: member.id,
    name: member.leader.name,
    divisionCount: member.divisions.length,
    agentCount: member.divisions.reduce((sum, div) => sum + div.agents.length, 0)
  }));
  
  return {
    totalAgents: agents.length,
    expectedAgents: 9 * 9 * 9, // 9 members × 9 divisions × 9 agents = 729
    memberStats: memberStats,
    isComplete: agents.length === 729
  };
};

export const getTotalAgentCount = (): number => {
  return 729; // 9 family members × 9 divisions × 9 agents each
};
