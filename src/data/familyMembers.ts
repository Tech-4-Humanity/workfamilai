
export interface FamilyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  expertise: string[];
  avatar?: string;
  color: string;
}

export const familyMembers: FamilyMember[] = [
  {
    id: 'trojan-oz',
    name: 'Trojan Oz',
    title: 'Supreme Leader',
    department: 'Executive',
    expertise: ['Strategic Leadership', 'Vision', 'Decision Making'],
    color: 'bg-yellow-400'
  },
  {
    id: 'amara-chen',
    name: 'Dr. Amara Chen',
    title: 'Product Development Leader',
    department: 'Product Analytics Division',
    expertise: ['Data Analysis', 'SQL', 'Product Strategy'],
    color: 'bg-blue-500'
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    title: 'Marketing Leader',
    department: 'Digital Marketing Division',
    expertise: ['Survey Design', 'Marketing', 'Content Creation'],
    color: 'bg-green-500'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Human Resources Leader',
    department: 'Talent Acquisition Division',
    expertise: ['Recruitment', 'Onboarding', 'HR Strategy'],
    color: 'bg-purple-500'
  },
  {
    id: 'theo-williams',
    name: 'Theo Williams',
    title: 'Finance & Operations Leader',
    department: 'Logistics Division',
    expertise: ['Logistics', 'Route Optimization', 'Supply Chain'],
    color: 'bg-orange-500'
  },
  {
    id: 'yuna-kim',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support Leader',
    department: 'Support Operations Division',
    expertise: ['Technical Support', 'CRM', 'Customer Service'],
    color: 'bg-teal-500'
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    title: 'Innovation & R&D Leader',
    department: 'Innovation',
    expertise: ['Research', 'Innovation', 'Technology'],
    color: 'bg-indigo-500'
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Sales Leader',
    department: 'Pre-Sales Division',
    expertise: ['Sales', 'Proposal Writing', 'Government Relations'],
    color: 'bg-red-500'
  },
  {
    id: 'marcus-bennett',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance Leader',
    department: 'Regulatory Affairs Division',
    expertise: ['Compliance', 'Proposal Review', 'Legal'],
    color: 'bg-gray-700'
  },
  {
    id: 'aisha-al-farsi',
    name: 'Aisha Al-Farsi',
    title: 'External Relations Leader',
    department: 'External Relations',
    expertise: ['Partnerships', 'External Relations', 'Strategy'],
    color: 'bg-pink-500'
  }
];

// Export the family member details for backward compatibility
export const familyMemberDetails = {
  'amara-chen': {
    leader: {
      name: 'Dr. Amara Chen',
      title: 'Product Development Leader',
      enneagramType: 'Type 5',
      personality: 'Analytical and detail-oriented',
      motto: 'Data drives decisions',
      background: 'Expert in analytics and product strategy'
    },
    divisions: [
      {
        name: 'Product Analytics Division',
        description: 'Data-driven product development and strategy',
        agents: [
          {
            name: 'Analytics Agent Alpha',
            specialization: 'Data Analysis Specialist',
            achievement: 'Improved product metrics by 40%',
            background: 'PhD in Data Science with 8 years industry experience',
            signature_method: 'Advanced statistical modeling',
            cultural_expertise: 'Cross-cultural data interpretation'
          }
        ]
      }
    ]
  },
  'miguel-santos': {
    leader: {
      name: 'Miguel Santos',
      title: 'Marketing Leader',
      enneagramType: 'Type 7',
      personality: 'Creative and enthusiastic',
      motto: 'Stories that connect',
      background: 'Marketing strategist with global campaigns experience'
    },
    divisions: [
      {
        name: 'Digital Marketing Division',
        description: 'Digital marketing and brand strategy',
        agents: [
          {
            name: 'Marketing Agent Beta',
            specialization: 'Digital Marketing Specialist',
            achievement: 'Increased brand engagement by 60%',
            background: 'Marketing expert with social media focus',
            signature_method: 'Data-driven content creation',
            cultural_expertise: 'Multi-cultural marketing approaches'
          }
        ]
      }
    ]
  },
  'priya-sharma': {
    leader: {
      name: 'Priya Sharma',
      title: 'Human Resources Leader',
      enneagramType: 'Type 2',
      personality: 'Empathetic and people-focused',
      motto: 'People first, always',
      background: 'HR leader with talent development expertise'
    },
    divisions: [
      {
        name: 'Talent Acquisition Division',
        description: 'Strategic talent acquisition and development',
        agents: [
          {
            name: 'HR Agent Gamma',
            specialization: 'Talent Acquisition Specialist',
            achievement: 'Reduced hiring time by 50%',
            background: 'HR professional with recruitment expertise',
            signature_method: 'Behavioral interviewing techniques',
            cultural_expertise: 'Inclusive hiring practices'
          }
        ]
      }
    ]
  },
  'theo-williams': {
    leader: {
      name: 'Theo Williams',
      title: 'Finance & Operations Leader',
      enneagramType: 'Type 1',
      personality: 'Methodical and precise',
      motto: 'Excellence in execution',
      background: 'Operations expert with logistics specialization'
    },
    divisions: [
      {
        name: 'Logistics Division',
        description: 'Supply chain and logistics optimization',
        agents: [
          {
            name: 'Operations Agent Delta',
            specialization: 'Logistics Optimization Specialist',
            achievement: 'Reduced operational costs by 30%',
            background: 'Supply chain expert with automation focus',
            signature_method: 'Process optimization frameworks',
            cultural_expertise: 'Global supply chain management'
          }
        ]
      }
    ]
  },
  'yuna-kim': {
    leader: {
      name: 'Dr. Yuna Kim',
      title: 'Customer Support Leader',
      enneagramType: 'Type 6',
      personality: 'Reliable and supportive',
      motto: 'Service excellence always',
      background: 'Customer service expert with technical background'
    },
    divisions: [
      {
        name: 'Support Operations Division',
        description: 'Customer support and technical assistance',
        agents: [
          {
            name: 'Support Agent Epsilon',
            specialization: 'Technical Support Specialist',
            achievement: 'Achieved 98% customer satisfaction',
            background: 'Technical support with CRM expertise',
            signature_method: 'Proactive issue resolution',
            cultural_expertise: 'Multicultural customer service'
          }
        ]
      }
    ]
  },
  'david-okafor': {
    leader: {
      name: 'David Okafor',
      title: 'Innovation & R&D Leader',
      enneagramType: 'Type 5',
      personality: 'Innovative and forward-thinking',
      motto: 'Innovation through collaboration',
      background: 'R&D leader with technology innovation focus'
    },
    divisions: [
      {
        name: 'Innovation Division',
        description: 'Research and development initiatives',
        agents: [
          {
            name: 'Innovation Agent Zeta',
            specialization: 'Research & Development Specialist',
            achievement: 'Led 15 breakthrough innovations',
            background: 'Research scientist with product development experience',
            signature_method: 'Design thinking methodologies',
            cultural_expertise: 'Global innovation practices'
          }
        ]
      }
    ]
  },
  'sofia-rodriguez': {
    leader: {
      name: 'Sofia Rodriguez',
      title: 'Sales Leader',
      enneagramType: 'Type 3',
      personality: 'Results-driven and charismatic',
      motto: 'Relationships drive results',
      background: 'Sales leader with government relations expertise'
    },
    divisions: [
      {
        name: 'Pre-Sales Division',
        description: 'Sales strategy and government relations',
        agents: [
          {
            name: 'Sales Agent Eta',
            specialization: 'Government Sales Specialist',
            achievement: 'Secured $50M in government contracts',
            background: 'Government sales with proposal writing expertise',
            signature_method: 'Consultative selling approach',
            cultural_expertise: 'Government stakeholder engagement'
          }
        ]
      }
    ]
  },
  'marcus-bennett': {
    leader: {
      name: 'Marcus Bennett',
      title: 'Governance & Compliance Leader',
      enneagramType: 'Type 1',
      personality: 'Detail-oriented and principled',
      motto: 'Integrity in everything',
      background: 'Compliance expert with legal background'
    },
    divisions: [
      {
        name: 'Regulatory Affairs Division',
        description: 'Governance and regulatory compliance',
        agents: [
          {
            name: 'Compliance Agent Theta',
            specialization: 'Regulatory Compliance Specialist',
            achievement: 'Maintained 100% compliance record',
            background: 'Legal professional with regulatory expertise',
            signature_method: 'Risk-based compliance frameworks',
            cultural_expertise: 'International regulatory standards'
          }
        ]
      }
    ]
  },
  'aisha-al-farsi': {
    leader: {
      name: 'Aisha Al-Farsi',
      title: 'External Relations Leader',
      enneagramType: 'Type 9',
      personality: 'Diplomatic and collaborative',
      motto: 'Unity through partnership',
      background: 'Partnership strategist with international experience'
    },
    divisions: [
      {
        name: 'External Relations Division',
        description: 'Strategic partnerships and external relations',
        agents: [
          {
            name: 'Partnership Agent Iota',
            specialization: 'Strategic Partnership Specialist',
            achievement: 'Established 20+ strategic partnerships',
            background: 'Partnership development with international focus',
            signature_method: 'Collaborative partnership frameworks',
            cultural_expertise: 'Cross-cultural relationship building'
          }
        ]
      }
    ]
  }
};
