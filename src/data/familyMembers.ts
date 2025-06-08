import { Brain, Users, Target, Zap } from 'lucide-react';
import { FamilyMember, FamilyMemberDetails } from '@/types/family';

export const familyMembers: FamilyMember[] = [
  {
    id: 'amara-chen',
    name: 'Dr. Amara Chen',
    title: 'Product Development',
    personality: 'Visionary and Strategic',
    enneagramType: 'Type 8: The Challenger',
    motto: 'Innovate, Execute, Lead.',
    background: 'Ph.D. in Engineering Management; 15+ years in product leadership roles.',
    domainOverview: 'Oversees the entire product lifecycle, from ideation to launch, ensuring alignment with market needs and strategic goals.',
    description: 'Leading product innovation with strategic vision and deep technical expertise.',
    color: 'bg-blue-500',
    icon: Brain,
    agentCount: 81
  },
  {
    id: 'marcus-bennett',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance',
    personality: 'Analytical and Methodical',
    enneagramType: 'Type 6: The Loyalist',
    motto: 'Integrity, Diligence, Assurance.',
    background: 'Certified Compliance Officer; 20+ years in regulatory oversight.',
    domainOverview: 'Ensures all organizational activities adhere to legal standards and ethical guidelines, mitigating risks and maintaining transparency.',
    description: 'Maintaining organizational integrity through rigorous compliance and risk management.',
    color: 'bg-gray-700',
    icon: Users,
    agentCount: 81
  },
  {
    id: 'aisha-al-farsi',
    name: 'Aisha Al-Farsi',
    title: 'External Relations',
    personality: 'Diplomatic and Persuasive',
    enneagramType: 'Type 2: The Helper',
    motto: 'Connect, Communicate, Collaborate.',
    background: 'Masters in International Relations; 10+ years in public affairs.',
    domainOverview: 'Manages relationships with external stakeholders, including government bodies, media outlets, and community organizations.',
    description: 'Building strategic partnerships and managing stakeholder relationships with diplomatic excellence.',
    color: 'bg-pink-500',
    icon: Target,
    agentCount: 81
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    title: 'Marketing',
    personality: 'Creative and Energetic',
    enneagramType: 'Type 7: The Enthusiast',
    motto: 'Engage, Inspire, Convert.',
    background: 'MBA in Marketing; 8+ years in digital marketing and brand management.',
    domainOverview: 'Leads marketing initiatives to enhance brand visibility, drive customer engagement, and increase sales.',
    description: 'Driving brand growth through innovative marketing strategies and creative campaigns.',
    color: 'bg-green-500',
    icon: Zap,
    agentCount: 81
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Human Resources',
    personality: 'Empathetic and Organized',
    enneagramType: 'Type 1: The Reformer',
    motto: 'Support, Develop, Empower.',
    background: 'Certified HR Professional; 12+ years in talent management and organizational development.',
    domainOverview: 'Oversees all aspects of human resources, including recruitment, training, and employee relations.',
    description: 'Nurturing talent and fostering organizational culture through strategic HR practices.',
    color: 'bg-purple-500',
    icon: Brain,
    agentCount: 81
  },
  {
    id: 'theo-williams',
    name: 'Theo Williams',
    title: 'Finance & Operations',
    personality: 'Efficient and Detail-Oriented',
    enneagramType: 'Type 3: The Achiever',
    motto: 'Optimize, Streamline, Grow.',
    background: 'CPA; 15+ years in financial planning and operational management.',
    domainOverview: 'Manages the financial health of the organization and ensures efficient operational processes.',
    description: 'Optimizing organizational efficiency through strategic financial and operational management.',
    color: 'bg-orange-500',
    icon: Users,
    agentCount: 81
  },
  {
    id: 'yuna-kim',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support',
    personality: 'Patient and Resourceful',
    enneagramType: 'Type 9: The Peacemaker',
    motto: 'Listen, Resolve, Delight.',
    background: 'Ph.D. in Psychology; 10+ years in customer service and conflict resolution.',
    domainOverview: 'Leads the customer support team, ensuring customer satisfaction and loyalty through effective problem-solving.',
    description: 'Delivering exceptional customer experiences through empathetic support and innovative solutions.',
    color: 'bg-teal-500',
    icon: Target,
    agentCount: 81
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    title: 'Innovation & R&D',
    personality: 'Curious and Inventive',
    enneagramType: 'Type 5: The Investigator',
    motto: 'Explore, Discover, Create.',
    background: 'Masters in Computer Science; 7+ years in research and development.',
    domainOverview: 'Drives innovation through research and development, exploring new technologies and creating cutting-edge solutions.',
    description: 'Pioneering breakthrough innovations through systematic research and creative exploration.',
    color: 'bg-indigo-500',
    icon: Zap,
    agentCount: 81
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Sales',
    personality: 'Outgoing and Persuasive',
    enneagramType: 'Type 4: The Individualist',
    motto: 'Connect, Convince, Close.',
    background: 'Bachelor\'s in Business Administration; 5+ years in sales and account management.',
    domainOverview: 'Leads the sales team, driving revenue growth through effective sales strategies and customer relationship management.',
    description: 'Driving revenue growth through strategic sales excellence and relationship building.',
    color: 'bg-red-500',
    icon: Brain,
    agentCount: 81
  }
];

export const familyMemberDetails: FamilyMemberDetails = {
  'amara-chen': {
    leader: {
      name: 'Dr. Amara Chen',
      title: 'Product Development',
      personality: 'Visionary and Strategic',
      enneagramType: 'Type 8: The Challenger',
      motto: 'Innovate, Execute, Lead.',
      background: 'Ph.D. in Engineering Management; 15+ years in product leadership roles.'
    },
    divisions: [
      {
        name: 'Product Strategy',
        description: 'Long-term product vision and roadmap planning',
        agents: [
          { 
            name: 'Vision Architect', 
            specialization: 'Strategic Planning',
            achievement: 'Led 50+ strategic product launches with 95% success rate',
            background: 'Former McKinsey consultant with expertise in product strategy and market analysis',
            signature_method: 'Data-driven vision mapping with stakeholder alignment frameworks',
            cultural_expertise: 'Cross-cultural product localization and global market adaptation'
          },
          { 
            name: 'Market Analyst', 
            specialization: 'Market Research',
            achievement: 'Predicted 12 major market shifts with 89% accuracy over 5 years',
            background: 'PhD in Economics with specialization in technology market dynamics',
            signature_method: 'Predictive market modeling using advanced statistical analysis',
            cultural_expertise: 'Emerging market trends and consumer behavior patterns'
          },
          { 
            name: 'Roadmap Planner', 
            specialization: 'Timeline Management',
            achievement: 'Delivered 200+ complex projects on time with zero budget overruns',
            background: 'Certified PMP with 15 years in enterprise software development',
            signature_method: 'Agile roadmap orchestration with predictive milestone tracking',
            cultural_expertise: 'Global team coordination across 25+ time zones'
          }
        ]
      },
      {
        name: 'Product Design',
        description: 'Creating intuitive and engaging user experiences',
        agents: [
          { 
            name: 'UX Architect', 
            specialization: 'User Experience',
            achievement: 'Improved user satisfaction scores by 85% across 30+ applications',
            background: 'Former IDEO designer with expertise in human-centered design',
            signature_method: 'Empathy-driven design thinking with rapid prototyping cycles',
            cultural_expertise: 'Accessibility design and inclusive user experience patterns'
          },
          { 
            name: 'UI Designer', 
            specialization: 'Interface Design',
            achievement: 'Created award-winning interfaces used by 10M+ users daily',
            background: 'Former Apple designer with focus on minimalist, functional interfaces',
            signature_method: 'Pixel-perfect design systems with scalable component libraries',
            cultural_expertise: 'Cross-platform design consistency and mobile-first approaches'
          },
          { 
            name: 'Interaction Designer', 
            specialization: 'Engagement Optimization',
            achievement: 'Increased user engagement by 150% through micro-interaction design',
            background: 'Behavioral psychology background with focus on digital engagement',
            signature_method: 'Behavioral trigger design with A/B testing optimization',
            cultural_expertise: 'Gamification principles and motivation psychology'
          }
        ]
      },
      {
        name: 'Product Engineering',
        description: 'Developing high-quality, scalable, and reliable products',
        agents: [
          { 
            name: 'Software Architect', 
            specialization: 'System Design',
            achievement: 'Designed systems handling 1B+ daily transactions with 99.99% uptime',
            background: 'Former Google engineer with expertise in distributed systems',
            signature_method: 'Microservices architecture with event-driven design patterns',
            cultural_expertise: 'Global scale system design and multi-region deployment'
          },
          { 
            name: 'Backend Engineer', 
            specialization: 'Server-Side Logic',
            achievement: 'Optimized API performance by 300% while reducing infrastructure costs',
            background: 'Full-stack engineer with focus on high-performance backend systems',
            signature_method: 'Clean architecture with comprehensive testing and monitoring',
            cultural_expertise: 'DevOps culture and continuous deployment practices'
          },
          { 
            name: 'Frontend Developer', 
            specialization: 'User Interface',
            achievement: 'Built responsive applications serving 50M+ users globally',
            background: 'Former Facebook engineer with expertise in modern web technologies',
            signature_method: 'Component-driven development with performance optimization',
            cultural_expertise: 'Progressive web applications and cross-browser compatibility'
          }
        ]
      }
    ]
  },
  'marcus-bennett': {
    leader: {
      name: 'Marcus Bennett',
      title: 'Governance & Compliance',
      personality: 'Analytical and Methodical',
      enneagramType: 'Type 6: The Loyalist',
      motto: 'Integrity, Diligence, Assurance.',
      background: 'Certified Compliance Officer; 20+ years in regulatory oversight.'
    },
    divisions: [
      {
        name: 'Regulatory Compliance',
        description: 'Ensuring adherence to all applicable laws and regulations',
        agents: [
          { 
            name: 'Compliance Analyst', 
            specialization: 'Regulatory Research',
            achievement: 'Reduced compliance violations by 40% through proactive audits',
            background: 'Experienced legal analyst with focus on financial regulations',
            signature_method: 'Risk-based compliance frameworks and continuous monitoring',
            cultural_expertise: 'International regulatory environments and standards'
          },
          { 
            name: 'Legal Counsel', 
            specialization: 'Legal Interpretation',
            achievement: 'Successfully defended 15 major regulatory cases',
            background: 'Licensed attorney with expertise in corporate law',
            signature_method: 'Strategic legal advisory and contract negotiation',
            cultural_expertise: 'Cross-jurisdictional legal compliance'
          },
          { 
            name: 'Policy Writer', 
            specialization: 'Policy Development',
            achievement: 'Authored 30+ corporate policies adopted company-wide',
            background: 'Policy expert with background in government and corporate sectors',
            signature_method: 'Clear, concise policy drafting with stakeholder engagement',
            cultural_expertise: 'Multicultural policy adaptation and communication'
          }
        ]
      },
      {
        name: 'Internal Audit',
        description: 'Evaluating internal controls and risk management processes',
        agents: [
          { 
            name: 'Lead Auditor', 
            specialization: 'Audit Planning',
            achievement: 'Led audits uncovering $5M in cost savings',
            background: 'Certified Internal Auditor with 10 years experience',
            signature_method: 'Risk-focused audit methodologies and team leadership',
            cultural_expertise: 'Global audit standards and practices'
          },
          { 
            name: 'Financial Auditor', 
            specialization: 'Financial Oversight',
            achievement: 'Improved financial reporting accuracy by 25%',
            background: 'CPA with expertise in financial statement analysis',
            signature_method: 'Detailed financial audits with fraud detection',
            cultural_expertise: 'Multi-currency and international accounting standards'
          },
          { 
            name: 'Operational Auditor', 
            specialization: 'Process Evaluation',
            achievement: 'Streamlined operations reducing waste by 15%',
            background: 'Operations management background with audit specialization',
            signature_method: 'Process mapping and efficiency analysis',
            cultural_expertise: 'Cross-cultural operational practices'
          }
        ]
      },
      {
        name: 'Risk Management',
        description: 'Identifying, assessing, and mitigating organizational risks',
        agents: [
          { 
            name: 'Risk Manager', 
            specialization: 'Risk Identification',
            achievement: 'Implemented risk frameworks reducing incidents by 30%',
            background: 'Risk management professional with insurance industry experience',
            signature_method: 'Comprehensive risk assessment and mitigation planning',
            cultural_expertise: 'Enterprise risk management in diverse sectors'
          },
          { 
            name: 'Risk Analyst', 
            specialization: 'Risk Assessment',
            achievement: 'Developed risk models improving prediction accuracy by 20%',
            background: 'Data analyst with focus on risk quantification',
            signature_method: 'Statistical risk modeling and scenario analysis',
            cultural_expertise: 'Quantitative risk assessment across cultures'
          },
          { 
            name: 'Mitigation Planner', 
            specialization: 'Risk Mitigation',
            achievement: 'Designed mitigation strategies saving $2M annually',
            background: 'Project manager with expertise in risk response',
            signature_method: 'Strategic mitigation planning and execution',
            cultural_expertise: 'Cross-border risk mitigation coordination'
          }
        ]
      }
    ]
  },
  'aisha-al-farsi': {
    leader: {
      name: 'Aisha Al-Farsi',
      title: 'External Relations',
      personality: 'Diplomatic and Persuasive',
      enneagramType: 'Type 2: The Helper',
      motto: 'Connect, Communicate, Collaborate.',
      background: 'Masters in International Relations; 10+ years in public affairs.'
    },
    divisions: [
      {
        name: 'Public Affairs',
        description: 'Managing relationships with government and community stakeholders',
        agents: [
          { 
            name: 'Government Liaison', 
            specialization: 'Government Relations',
            achievement: 'Secured $10M in government grants',
            background: 'Experienced in public policy and government affairs',
            signature_method: 'Strategic stakeholder engagement and advocacy',
            cultural_expertise: 'Multinational government relations'
          },
          { 
            name: 'Community Organizer', 
            specialization: 'Community Engagement',
            achievement: 'Mobilized 5,000+ volunteers for community projects',
            background: 'Community development specialist',
            signature_method: 'Grassroots organizing and coalition building',
            cultural_expertise: 'Diverse community outreach and inclusion'
          },
          { 
            name: 'Lobbyist', 
            specialization: 'Advocacy',
            achievement: 'Influenced legislation benefiting industry standards',
            background: 'Policy advocate with legal background',
            signature_method: 'Legislative strategy and coalition management',
            cultural_expertise: 'Cross-cultural lobbying and negotiation'
          }
        ]
      },
      {
        name: 'Media Relations',
        description: 'Building and maintaining relationships with media outlets',
        agents: [
          { 
            name: 'Media Contact', 
            specialization: 'Media Outreach',
            achievement: 'Secured 100+ media placements annually',
            background: 'Public relations professional',
            signature_method: 'Proactive media engagement and press release crafting',
            cultural_expertise: 'International media relations'
          },
          { 
            name: 'Press Officer', 
            specialization: 'Press Releases',
            achievement: 'Managed crisis communications with positive outcomes',
            background: 'Experienced in corporate communications',
            signature_method: 'Clear, timely press communications',
            cultural_expertise: 'Multilingual press engagement'
          },
          { 
            name: 'Publicist', 
            specialization: 'Publicity Campaigns',
            achievement: 'Launched campaigns reaching 5M+ audience',
            background: 'Marketing and PR specialist',
            signature_method: 'Creative campaign design and execution',
            cultural_expertise: 'Cross-cultural marketing communications'
          }
        ]
      },
      {
        name: 'Corporate Social Responsibility',
        description: 'Developing and implementing CSR initiatives',
        agents: [
          { 
            name: 'CSR Manager', 
            specialization: 'CSR Strategy',
            achievement: 'Implemented CSR programs improving community impact',
            background: 'Sustainability and social impact expert',
            signature_method: 'Strategic CSR planning and stakeholder engagement',
            cultural_expertise: 'Global CSR standards and reporting'
          },
          { 
            name: 'Sustainability Officer', 
            specialization: 'Sustainability',
            achievement: 'Reduced carbon footprint by 25%',
            background: 'Environmental science and policy background',
            signature_method: 'Sustainability program development and monitoring',
            cultural_expertise: 'International environmental regulations'
          },
          { 
            name: 'Philanthropy Director', 
            specialization: 'Charitable Giving',
            achievement: 'Raised $3M for charitable causes',
            background: 'Fundraising and nonprofit management',
            signature_method: 'Donor relations and campaign management',
            cultural_expertise: 'Cross-cultural philanthropy'
          }
        ]
      }
    ]
  },
  'miguel-santos': {
    leader: {
      name: 'Miguel Santos',
      title: 'Marketing',
      personality: 'Creative and Energetic',
      enneagramType: 'Type 7: The Enthusiast',
      motto: 'Engage, Inspire, Convert.',
      background: 'MBA in Marketing; 8+ years in digital marketing and brand management.'
    },
    divisions: [
      {
        name: 'Digital Marketing',
        description: 'Managing online marketing channels and campaigns',
        agents: [
          { 
            name: 'SEO Specialist', 
            specialization: 'Search Engine Optimization',
            achievement: 'Increased organic traffic by 150%',
            background: 'Digital marketing expert with SEO focus',
            signature_method: 'Advanced keyword research and link building',
            cultural_expertise: 'Global SEO strategies'
          },
          { 
            name: 'SEM Manager', 
            specialization: 'Search Engine Marketing',
            achievement: 'Optimized PPC campaigns reducing cost per acquisition by 30%',
            background: 'Paid media specialist',
            signature_method: 'Data-driven campaign optimization',
            cultural_expertise: 'Multilingual ad campaigns'
          },
          { 
            name: 'Social Media Manager', 
            specialization: 'Social Media',
            achievement: 'Grew social media followers by 200%',
            background: 'Social media strategist',
            signature_method: 'Engaging content creation and community management',
            cultural_expertise: 'Cross-platform social media marketing'
          }
        ]
      },
      {
        name: 'Brand Management',
        description: 'Developing and maintaining brand identity and reputation',
        agents: [
          { 
            name: 'Brand Strategist', 
            specialization: 'Brand Strategy',
            achievement: 'Rebranded company leading to 25% sales increase',
            background: 'Brand management professional',
            signature_method: 'Market research and brand positioning',
            cultural_expertise: 'Global brand consistency'
          },
          { 
            name: 'Creative Director', 
            specialization: 'Creative Direction',
            achievement: 'Led award-winning creative campaigns',
            background: 'Creative industry veteran',
            signature_method: 'Innovative visual storytelling',
            cultural_expertise: 'Cross-cultural creative leadership'
          },
          { 
            name: 'Copywriter', 
            specialization: 'Brand Messaging',
            achievement: 'Crafted messaging increasing engagement by 40%',
            background: 'Experienced copywriter',
            signature_method: 'Compelling and clear brand narratives',
            cultural_expertise: 'Multilingual content creation'
          }
        ]
      },
      {
        name: 'Market Research',
        description: 'Conducting market research to identify trends and opportunities',
        agents: [
          { 
            name: 'Research Analyst', 
            specialization: 'Data Collection',
            achievement: 'Delivered actionable insights leading to product improvements',
            background: 'Market research analyst',
            signature_method: 'Quantitative and qualitative research methods',
            cultural_expertise: 'Global market analysis'
          },
          { 
            name: 'Data Scientist', 
            specialization: 'Data Analysis',
            achievement: 'Built predictive models improving marketing ROI',
            background: 'Data science expert',
            signature_method: 'Advanced analytics and machine learning',
            cultural_expertise: 'Cross-cultural data interpretation'
          },
          { 
            name: 'Survey Specialist', 
            specialization: 'Survey Design',
            achievement: 'Designed surveys with 95% response rate',
            background: 'Survey methodology expert',
            signature_method: 'Effective questionnaire design and sampling',
            cultural_expertise: 'Multilingual survey administration'
          }
        ]
      }
    ]
  },
  'priya-sharma': {
    leader: {
      name: 'Priya Sharma',
      title: 'Human Resources',
      personality: 'Empathetic and Organized',
      enneagramType: 'Type 1: The Reformer',
      motto: 'Support, Develop, Empower.',
      background: 'Certified HR Professional; 12+ years in talent management and organizational development.'
    },
    divisions: [
      {
        name: 'Talent Acquisition',
        description: 'Recruiting and hiring top talent for the organization',
        agents: [
          { 
            name: 'Recruiter', 
            specialization: 'Talent Sourcing',
            achievement: 'Filled 200+ positions with 90% retention rate',
            background: 'Experienced recruiter',
            signature_method: 'Strategic sourcing and candidate engagement',
            cultural_expertise: 'Diverse talent acquisition'
          },
          { 
            name: 'HR Specialist', 
            specialization: 'HR Coordination',
            achievement: 'Streamlined onboarding reducing time by 20%',
            background: 'HR operations expert',
            signature_method: 'Efficient HR process management',
            cultural_expertise: 'Cross-cultural HR practices'
          },
          { 
            name: 'Interview Coordinator', 
            specialization: 'Interview Scheduling',
            achievement: 'Managed 500+ interviews annually',
            background: 'Administrative HR professional',
            signature_method: 'Effective scheduling and candidate communication',
            cultural_expertise: 'Multilingual coordination'
          }
        ]
      },
      {
        name: 'Employee Development',
        description: 'Providing training and development opportunities for employees',
        agents: [
          { 
            name: 'Training Manager', 
            specialization: 'Training Programs',
            achievement: 'Implemented training increasing productivity by 15%',
            background: 'Learning and development specialist',
            signature_method: 'Customized training program design',
            cultural_expertise: 'Global training delivery'
          },
          { 
            name: 'Learning Specialist', 
            specialization: 'E-Learning',
            achievement: 'Developed e-learning modules with 90% completion rate',
            background: 'Instructional designer',
            signature_method: 'Engaging digital learning content',
            cultural_expertise: 'Multilingual e-learning development'
          },
          { 
            name: 'Development Coach', 
            specialization: 'Career Coaching',
            achievement: 'Coached 100+ employees to leadership roles',
            background: 'Professional coach',
            signature_method: 'Personalized career development plans',
            cultural_expertise: 'Cross-cultural coaching'
          }
        ]
      },
      {
        name: 'Employee Relations',
        description: 'Managing employee relations and resolving conflicts',
        agents: [
          { 
            name: 'HR Business Partner', 
            specialization: 'HR Consulting',
            achievement: 'Improved employee satisfaction scores by 20%',
            background: 'HR consultant',
            signature_method: 'Strategic HR advisory and conflict resolution',
            cultural_expertise: 'Multicultural workplace dynamics'
          },
          { 
            name: 'Employee Advocate', 
            specialization: 'Employee Support',
            achievement: 'Resolved 95% of employee grievances successfully',
            background: 'Employee relations specialist',
            signature_method: 'Empathetic support and mediation',
            cultural_expertise: 'Diverse workforce engagement'
          },
          { 
            name: 'Conflict Mediator', 
            specialization: 'Conflict Resolution',
            achievement: 'Mediated 50+ workplace conflicts',
            background: 'Certified mediator',
            signature_method: 'Effective conflict resolution techniques',
            cultural_expertise: 'Cross-cultural mediation'
          }
        ]
      }
    ]
  },
  'theo-williams': {
    leader: {
      name: 'Theo Williams',
      title: 'Finance & Operations',
      personality: 'Efficient and Detail-Oriented',
      enneagramType: 'Type 3: The Achiever',
      motto: 'Optimize, Streamline, Grow.',
      background: 'CPA; 15+ years in financial planning and operational management.'
    },
    divisions: [
      {
        name: 'Financial Planning',
        description: 'Developing and managing the organization\'s financial plans',
        agents: [
          { 
            name: 'Financial Analyst', 
            specialization: 'Financial Modeling',
            achievement: 'Built models improving forecasting accuracy by 30%',
            background: 'Finance professional',
            signature_method: 'Advanced financial modeling and analysis',
            cultural_expertise: 'Global financial standards'
          },
          { 
            name: 'Budget Manager', 
            specialization: 'Budgeting',
            achievement: 'Managed budgets totaling $100M+',
            background: 'Budgeting expert',
            signature_method: 'Strategic budget planning and control',
            cultural_expertise: 'Cross-border budgeting'
          },
          { 
            name: 'Investment Strategist', 
            specialization: 'Investment Planning',
            achievement: 'Achieved 12% ROI on portfolio management',
            background: 'Investment advisor',
            signature_method: 'Risk-adjusted investment strategies',
            cultural_expertise: 'International investment markets'
          }
        ]
      },
      {
        name: 'Operations Management',
        description: 'Managing the organization\'s operational processes',
        agents: [
          { 
            name: 'Operations Manager', 
            specialization: 'Process Optimization',
            achievement: 'Improved operational efficiency by 25%',
            background: 'Operations expert',
            signature_method: 'Lean process improvement and automation',
            cultural_expertise: 'Global operations management'
          },
          { 
            name: 'Supply Chain Manager', 
            specialization: 'Supply Chain',
            achievement: 'Reduced supply chain costs by 15%',
            background: 'Supply chain professional',
            signature_method: 'End-to-end supply chain optimization',
            cultural_expertise: 'International logistics'
          },
          { 
            name: 'Logistics Coordinator', 
            specialization: 'Logistics',
            achievement: 'Coordinated logistics for 100+ projects',
            background: 'Logistics specialist',
            signature_method: 'Efficient logistics planning and execution',
            cultural_expertise: 'Cross-border logistics'
          }
        ]
      },
      {
        name: 'Facilities Management',
        description: 'Managing the organization\'s physical facilities',
        agents: [
          { 
            name: 'Facilities Manager', 
            specialization: 'Facility Maintenance',
            achievement: 'Maintained 10+ facilities with 99% uptime',
            background: 'Facilities management professional',
            signature_method: 'Preventive maintenance and vendor management',
            cultural_expertise: 'Global facility standards'
          },
          { 
            name: 'Maintenance Technician', 
            specialization: 'Equipment Repair',
            achievement: 'Reduced equipment downtime by 20%',
            background: 'Technical maintenance expert',
            signature_method: 'Efficient repair and maintenance protocols',
            cultural_expertise: 'Multicultural team coordination'
          },
          { 
            name: 'Security Guard', 
            specialization: 'Security',
            achievement: 'Maintained secure premises with zero incidents',
            background: 'Security professional',
            signature_method: 'Proactive security monitoring and response',
            cultural_expertise: 'Cross-cultural security practices'
          }
        ]
      }
    ]
  },
  'yuna-kim': {
    leader: {
      name: 'Dr. Yuna Kim',
      title: 'Customer Support',
      personality: 'Patient and Resourceful',
      enneagramType: 'Type 9: The Peacemaker',
      motto: 'Listen, Resolve, Delight.',
      background: 'Ph.D. in Psychology; 10+ years in customer service and conflict resolution.'
    },
    divisions: [
      {
        name: 'Technical Support',
        description: 'Providing technical assistance to customers',
        agents: [
          { 
            name: 'Tech Support Specialist', 
            specialization: 'Troubleshooting',
            achievement: 'Resolved 95% of technical issues on first contact',
            background: 'Technical support expert',
            signature_method: 'Systematic troubleshooting and problem solving',
            cultural_expertise: 'Multilingual technical support'
          },
          { 
            name: 'Help Desk Analyst', 
            specialization: 'Help Desk',
            achievement: 'Managed 10,000+ help desk tickets annually',
            background: 'Help desk professional',
            signature_method: 'Efficient ticket management and escalation',
            cultural_expertise: 'Global help desk operations'
          },
          { 
            name: 'System Administrator', 
            specialization: 'System Support',
            achievement: 'Maintained 99.9% system uptime',
            background: 'System administration expert',
            signature_method: 'Proactive system monitoring and maintenance',
            cultural_expertise: 'Cross-platform system management'
          }
        ]
      },
      {
        name: 'Customer Service',
        description: 'Providing customer service and support',
        agents: [
          { 
            name: 'Customer Service Rep', 
            specialization: 'Customer Service',
            achievement: 'Achieved 90% customer satisfaction ratings',
            background: 'Customer service professional',
            signature_method: 'Empathetic communication and issue resolution',
            cultural_expertise: 'Multicultural customer engagement'
          },
          { 
            name: 'Account Manager', 
            specialization: 'Account Management',
            achievement: 'Managed key accounts with 15% growth',
            background: 'Account management expert',
            signature_method: 'Relationship building and client retention',
            cultural_expertise: 'International account management'
          },
          { 
            name: 'Sales Rep', 
            specialization: 'Sales Support',
            achievement: 'Supported sales teams increasing revenue by 10%',
            background: 'Sales support specialist',
            signature_method: 'Effective sales coordination and communication',
            cultural_expertise: 'Cross-cultural sales support'
          }
        ]
      },
      {
        name: 'Training',
        description: 'Providing training and development opportunities for employees',
        agents: [
          { 
            name: 'Training Manager', 
            specialization: 'Training Programs',
            achievement: 'Developed customer service training improving CSAT scores',
            background: 'Training and development professional',
            signature_method: 'Interactive training design and delivery',
            cultural_expertise: 'Global training programs'
          },
          { 
            name: 'Learning Specialist', 
            specialization: 'E-Learning',
            achievement: 'Created e-learning modules with high engagement',
            background: 'Instructional designer',
            signature_method: 'Engaging digital content creation',
            cultural_expertise: 'Multilingual e-learning'
          },
          { 
            name: 'Development Coach', 
            specialization: 'Career Coaching',
            achievement: 'Coached support staff to leadership roles',
            background: 'Professional coach',
            signature_method: 'Personalized development plans',
            cultural_expertise: 'Cross-cultural coaching'
          }
        ]
      }
    ]
  },
  'david-okafor': {
    leader: {
      name: 'David Okafor',
      title: 'Innovation & R&D',
      personality: 'Curious and Inventive',
      enneagramType: 'Type 5: The Investigator',
      motto: 'Explore, Discover, Create.',
      background: 'Masters in Computer Science; 7+ years in research and development.'
    },
    divisions: [
      {
        name: 'Research',
        description: 'Conducting research to identify new technologies',
        agents: [
          { 
            name: 'Research Scientist', 
            specialization: 'Scientific Research',
            achievement: 'Published 20+ papers in top journals',
            background: 'PhD in Computer Science',
            signature_method: 'Rigorous experimental design and analysis',
            cultural_expertise: 'International research collaboration'
          },
          { 
            name: 'Data Scientist', 
            specialization: 'Data Analysis',
            achievement: 'Developed models improving R&D efficiency',
            background: 'Data science expert',
            signature_method: 'Advanced analytics and machine learning',
            cultural_expertise: 'Cross-cultural data interpretation'
          },
          { 
            name: 'Statistician', 
            specialization: 'Statistical Analysis',
            achievement: 'Provided statistical support for 50+ projects',
            background: 'Statistics professional',
            signature_method: 'Robust statistical modeling and inference',
            cultural_expertise: 'Global statistical standards'
          }
        ]
      },
      {
        name: 'Development',
        description: 'Developing new technologies and products',
        agents: [
          { 
            name: 'Software Engineer', 
            specialization: 'Software Development',
            achievement: 'Developed scalable software used by millions',
            background: 'Experienced software developer',
            signature_method: 'Agile development and continuous integration',
            cultural_expertise: 'Global software development teams'
          },
          { 
            name: 'Hardware Engineer', 
            specialization: 'Hardware Development',
            achievement: 'Designed hardware reducing costs by 20%',
            background: 'Electrical engineering expert',
            signature_method: 'Innovative hardware design and testing',
            cultural_expertise: 'Cross-border hardware manufacturing'
          },
          { 
            name: 'Web Developer', 
            specialization: 'Web Development',
            achievement: 'Built responsive web applications',
            background: 'Full-stack web developer',
            signature_method: 'Modern web technologies and UX focus',
            cultural_expertise: 'Multilingual web applications'
          }
        ]
      },
      {
        name: 'Testing',
        description: 'Testing new technologies and products',
        agents: [
          { 
            name: 'Quality Assurance', 
            specialization: 'Quality Assurance',
            achievement: 'Reduced defects by 30% through rigorous testing',
            background: 'QA specialist',
            signature_method: 'Automated and manual testing strategies',
            cultural_expertise: 'Global QA standards'
          },
          { 
            name: 'Software Tester', 
            specialization: 'Software Testing',
            achievement: 'Tested software with 99% coverage',
            background: 'Software testing expert',
            signature_method: 'Comprehensive test planning and execution',
            cultural_expertise: 'Cross-cultural testing teams'
          },
          { 
            name: 'Hardware Tester', 
            specialization: 'Hardware Testing',
            achievement: 'Ensured hardware reliability in diverse environments',
            background: 'Hardware testing professional',
            signature_method: 'Environmental and stress testing',
            cultural_expertise: 'International testing standards'
          }
        ]
      }
    ]
  },
  'sofia-rodriguez': {
    leader: {
      name: 'Sofia Rodriguez',
      title: 'Sales',
      personality: 'Outgoing and Persuasive',
      enneagramType: 'Type 4: The Individualist',
      motto: 'Connect, Convince, Close.',
      background: 'Bachelor\'s in Business Administration; 5+ years in sales and account management.'
    },
    divisions: [
      {
        name: 'Direct Sales',
        description: 'Selling products and services directly to customers',
        agents: [
          { 
            name: 'Sales Representative', 
            specialization: 'Sales',
            achievement: 'Exceeded sales targets by 20% annually',
            background: 'Experienced sales professional',
            signature_method: 'Consultative selling and relationship building',
            cultural_expertise: 'Multicultural client engagement'
          },
          { 
            name: 'Account Manager', 
            specialization: 'Account Management',
            achievement: 'Managed key accounts with 15% growth',
            background: 'Account management expert',
            signature_method: 'Client retention and upselling strategies',
            cultural_expertise: 'International account management'
          },
          { 
            name: 'Sales Manager', 
            specialization: 'Sales Management',
            achievement: 'Led sales teams achieving 25% revenue growth',
            background: 'Sales leadership professional',
            signature_method: 'Team coaching and sales strategy',
            cultural_expertise: 'Cross-cultural sales leadership'
          }
        ]
      },
      {
        name: 'Indirect Sales',
        description: 'Selling products and services through partners',
        agents: [
          { 
            name: 'Channel Manager', 
            specialization: 'Channel Management',
            achievement: 'Expanded partner network by 30%',
            background: 'Channel sales expert',
            signature_method: 'Partner relationship management',
            cultural_expertise: 'Global channel strategies'
          },
          { 
            name: 'Partner Manager', 
            specialization: 'Partner Management',
            achievement: 'Increased partner sales by 25%',
            background: 'Partner management professional',
            signature_method: 'Joint business planning and enablement',
            cultural_expertise: 'Cross-border partner collaboration'
          },
          { 
            name: 'Affiliate Manager', 
            specialization: 'Affiliate Management',
            achievement: 'Grew affiliate program revenue by 40%',
            background: 'Affiliate marketing specialist',
            signature_method: 'Affiliate recruitment and performance optimization',
            cultural_expertise: 'International affiliate networks'
          }
        ]
      },
      {
        name: 'Customer Service',
        description: 'Providing customer service and support',
        agents: [
          { 
            name: 'Customer Service Rep', 
            specialization: 'Customer Service',
            achievement: 'Achieved 90% customer satisfaction ratings',
            background: 'Customer service professional',
            signature_method: 'Empathetic communication and issue resolution',
            cultural_expertise: 'Multicultural customer engagement'
          },
          { 
            name: 'Account Manager', 
            specialization: 'Account Management',
            achievement: 'Managed key accounts with 15% growth',
            background: 'Account management expert',
            signature_method: 'Relationship building and client retention',
            cultural_expertise: 'International account management'
          },
          { 
            name: 'Sales Rep', 
            specialization: 'Sales Support',
            achievement: 'Supported sales teams increasing revenue by 10%',
            background: 'Sales support specialist',
            signature_method: 'Effective sales coordination and communication',
            cultural_expertise: 'Cross-cultural sales support'
          }
        ]
      }
    ]
  }
};

export default familyMembers;
