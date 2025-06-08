
// Updated family member data with consistent IDs and expanded structure
export const familyMembers = [
  {
    id: 'amara-chen',
    name: 'Dr. Amara Chen',
    title: 'Product Development',
    personality: 'The Innovator',
    enneagramType: 'Type 7 - The Enthusiast',
    description: 'Drives breakthrough innovations in AI and product development, leading teams that turn visionary concepts into market-ready solutions.',
    color: 'bg-blue-500',
    agentCount: 81,
    avatar: 'AC'
  },
  {
    id: 'marcus-bennett',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance',
    personality: 'The Guardian',
    enneagramType: 'Type 1 - The Perfectionist',
    description: 'Ensures organizational integrity through comprehensive governance frameworks and compliance strategies.',
    color: 'bg-gray-700',
    agentCount: 81,
    avatar: 'MB'
  },
  {
    id: 'aisha-al-farsi',
    name: 'Aisha Al-Farsi',
    title: 'External Relations',
    personality: 'The Diplomat',
    enneagramType: 'Type 2 - The Helper',
    description: 'Builds strategic partnerships and manages external stakeholder relationships with cultural intelligence.',
    color: 'bg-pink-500',
    agentCount: 81,
    avatar: 'AA'
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    title: 'Marketing',
    personality: 'The Storyteller',
    enneagramType: 'Type 3 - The Achiever',
    description: 'Crafts compelling narratives that connect products with markets through innovative marketing strategies.',
    color: 'bg-green-500',
    agentCount: 81,
    avatar: 'MS'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Human Resources',
    personality: 'The Nurturer',
    enneagramType: 'Type 2 - The Helper',
    description: 'Develops talent and organizational culture, fostering growth and well-being across all family members.',
    color: 'bg-purple-500',
    agentCount: 81,
    avatar: 'PS'
  },
  {
    id: 'theo-williams',
    name: 'Theo Williams',
    title: 'Finance & Operations',
    personality: 'The Strategist',
    enneagramType: 'Type 5 - The Investigator',
    description: 'Optimizes financial performance and operational efficiency through data-driven strategic planning.',
    color: 'bg-orange-500',
    agentCount: 81,
    avatar: 'TW'
  },
  {
    id: 'yuna-kim',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support',
    personality: 'The Advocate',
    enneagramType: 'Type 6 - The Loyalist',
    description: 'Champions customer success through innovative support solutions and service excellence.',
    color: 'bg-teal-500',
    agentCount: 81,
    avatar: 'YK'
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    title: 'Innovation & R&D',
    personality: 'The Visionary',
    enneagramType: 'Type 7 - The Enthusiast',
    description: 'Explores emerging technologies and research opportunities that shape the future of the organization.',
    color: 'bg-indigo-500',
    agentCount: 81,
    avatar: 'DO'
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Sales',
    personality: 'The Connector',
    enneagramType: 'Type 3 - The Achiever',
    description: 'Builds lasting client relationships and drives revenue growth through strategic sales initiatives.',
    color: 'bg-red-500',
    agentCount: 81,
    avatar: 'SR'
  }
];

// Expanded family member details with multiple divisions and many agents per division
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
            specialization: 'Senior Data Analysis Specialist',
            achievement: 'Improved product metrics by 40%',
            background: 'PhD in Data Science with 8 years industry experience',
            signature_method: 'Advanced statistical modeling',
            cultural_expertise: 'Cross-cultural data interpretation'
          },
          {
            name: 'Analytics Agent Beta',
            specialization: 'Machine Learning Engineer',
            achievement: 'Deployed 15 ML models in production',
            background: 'ML specialist with cloud infrastructure expertise',
            signature_method: 'MLOps and model deployment',
            cultural_expertise: 'Global ML practices'
          },
          {
            name: 'Analytics Agent Gamma',
            specialization: 'Business Intelligence Analyst',
            achievement: 'Created automated reporting saving 20 hours/week',
            background: 'BI expert with visualization specialization',
            signature_method: 'Dashboard automation',
            cultural_expertise: 'Multi-market business analysis'
          },
          {
            name: 'Analytics Agent Delta',
            specialization: 'Data Engineer',
            achievement: 'Built data pipeline processing 10TB daily',
            background: 'Distributed systems and data architecture expert',
            signature_method: 'Real-time data processing',
            cultural_expertise: 'Global data compliance standards'
          },
          {
            name: 'Analytics Agent Epsilon',
            specialization: 'Predictive Analytics Specialist',
            achievement: 'Forecasting accuracy improved by 35%',
            background: 'Time series and forecasting expert',
            signature_method: 'Advanced forecasting algorithms',
            cultural_expertise: 'Cross-cultural consumer behavior'
          },
          {
            name: 'Analytics Agent Zeta',
            specialization: 'Data Visualization Expert',
            achievement: 'Created interactive dashboards used by 500+ users',
            background: 'UX/UI with data visualization focus',
            signature_method: 'Story-driven data presentation',
            cultural_expertise: 'Culturally-aware visualization design'
          },
          {
            name: 'Analytics Agent Eta',
            specialization: 'Statistical Analysis Lead',
            achievement: 'Led A/B testing framework adoption',
            background: 'Statistics PhD with experimental design expertise',
            signature_method: 'Rigorous statistical validation',
            cultural_expertise: 'Multi-cultural experimental design'
          },
          {
            name: 'Analytics Agent Theta',
            specialization: 'Customer Analytics Specialist',
            achievement: 'Increased customer retention by 25%',
            background: 'Customer behavior and segmentation expert',
            signature_method: 'Behavioral clustering techniques',
            cultural_expertise: 'Global customer journey mapping'
          },
          {
            name: 'Analytics Agent Iota',
            specialization: 'Product Metrics Analyst',
            achievement: 'Defined KPIs adopted across all product teams',
            background: 'Product management with analytics focus',
            signature_method: 'Metrics framework design',
            cultural_expertise: 'Cross-cultural product adoption patterns'
          },
          {
            name: 'Analytics Agent Kappa',
            specialization: 'Real-time Analytics Engineer',
            achievement: 'Reduced data latency from hours to seconds',
            background: 'Streaming analytics and real-time systems',
            signature_method: 'Stream processing optimization',
            cultural_expertise: 'Global real-time system deployment'
          }
        ]
      },
      {
        name: 'Product Strategy Division',
        description: 'Strategic product planning and market research',
        agents: [
          {
            name: 'Strategy Agent Alpha',
            specialization: 'Senior Product Strategist',
            achievement: 'Led strategy for 3 successful product launches',
            background: 'MBA with 10 years product strategy experience',
            signature_method: 'Market-driven strategy development',
            cultural_expertise: 'Global market entry strategies'
          },
          // ... continue with more agents for this division
        ]
      },
      {
        name: 'User Research Division',
        description: 'User experience research and insights',
        agents: [
          {
            name: 'Research Agent Alpha',
            specialization: 'User Experience Researcher',
            achievement: 'Conducted 200+ user interviews',
            background: 'Psychology PhD with UX research specialization',
            signature_method: 'Qualitative research methodologies',
            cultural_expertise: 'Cross-cultural user behavior analysis'
          },
          // ... continue with more agents for this division
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
            name: 'Marketing Agent Alpha',
            specialization: 'Digital Marketing Specialist',
            achievement: 'Increased brand engagement by 60%',
            background: 'Marketing expert with social media focus',
            signature_method: 'Data-driven content creation',
            cultural_expertise: 'Multi-cultural marketing approaches'
          },
          {
            name: 'Marketing Agent Beta',
            specialization: 'Content Marketing Manager',
            achievement: 'Generated 2M+ organic views',
            background: 'Content strategy with SEO expertise',
            signature_method: 'SEO-optimized storytelling',
            cultural_expertise: 'Localized content strategies'
          },
          {
            name: 'Marketing Agent Gamma',
            specialization: 'Social Media Strategist',
            achievement: 'Grew followers by 300% in 6 months',
            background: 'Social media with community building focus',
            signature_method: 'Community-driven growth',
            cultural_expertise: 'Platform-specific cultural adaptation'
          },
          {
            name: 'Marketing Agent Delta',
            specialization: 'Email Marketing Specialist',
            achievement: 'Achieved 45% open rate vs 20% industry average',
            background: 'Email automation and personalization expert',
            signature_method: 'Behavioral email triggers',
            cultural_expertise: 'Cross-cultural email preferences'
          },
          {
            name: 'Marketing Agent Epsilon',
            specialization: 'Marketing Automation Engineer',
            achievement: 'Built workflows saving 30 hours/week',
            background: 'Marketing technology and automation specialist',
            signature_method: 'Lead nurturing automation',
            cultural_expertise: 'Global marketing technology stack'
          },
          {
            name: 'Marketing Agent Zeta',
            specialization: 'Performance Marketing Analyst',
            achievement: 'Reduced CAC by 40% while maintaining quality',
            background: 'Paid advertising with analytics focus',
            signature_method: 'Attribution modeling',
            cultural_expertise: 'Cross-platform performance optimization'
          },
          {
            name: 'Marketing Agent Eta',
            specialization: 'Brand Marketing Specialist',
            achievement: 'Led rebranding increasing brand recognition by 85%',
            background: 'Brand strategy with creative direction',
            signature_method: 'Brand narrative development',
            cultural_expertise: 'Cross-cultural brand positioning'
          },
          {
            name: 'Marketing Agent Theta',
            specialization: 'Video Marketing Producer',
            achievement: 'Created viral video with 5M views',
            background: 'Video production with marketing focus',
            signature_method: 'Story-driven video content',
            cultural_expertise: 'Culturally-relevant video storytelling'
          },
          {
            name: 'Marketing Agent Iota',
            specialization: 'Influencer Marketing Manager',
            achievement: 'Managed partnerships generating $2M revenue',
            background: 'Influencer relations and partnership development',
            signature_method: 'Authentic partnership cultivation',
            cultural_expertise: 'Global influencer landscape navigation'
          },
          {
            name: 'Marketing Agent Kappa',
            specialization: 'Conversion Rate Optimization Specialist',
            achievement: 'Improved conversion rates by 150%',
            background: 'UX/UI with conversion optimization focus',
            signature_method: 'A/B testing methodologies',
            cultural_expertise: 'Cross-cultural conversion psychology'
          }
        ]
      },
      {
        name: 'Market Research Division',
        description: 'Market analysis and competitive intelligence',
        agents: [
          {
            name: 'Research Agent Alpha',
            specialization: 'Market Research Analyst',
            achievement: 'Identified $10M market opportunity',
            background: 'Market research with statistical analysis expertise',
            signature_method: 'Quantitative market modeling',
            cultural_expertise: 'Global market dynamics analysis'
          },
          // ... continue with more agents
        ]
      },
      {
        name: 'Creative Services Division',
        description: 'Creative design and brand assets',
        agents: [
          {
            name: 'Creative Agent Alpha',
            specialization: 'Creative Director',
            achievement: 'Led award-winning campaign design',
            background: 'Visual design with brand strategy expertise',
            signature_method: 'Design thinking workshops',
            cultural_expertise: 'Cross-cultural visual communication'
          },
          // ... continue with more agents
        ]
      }
    ]
  },
  // Continue expanding each family member with 3-4 divisions and 20-30 agents each
  // For brevity, I'll show the pattern for one more member and then continue with the rest
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
        description: 'Strategic talent acquisition and recruitment',
        agents: Array.from({ length: 25 }, (_, i) => ({
          name: `Talent Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Recruitment Technical Sourcing Onboarding Interview'.split(' ')[i % 5]} Specialist`,
          achievement: `${['Reduced hiring time by 50%', 'Improved candidate quality by 35%', 'Built talent pipeline of 1000+ candidates', 'Achieved 95% offer acceptance rate', 'Streamlined onboarding process'][i % 5]}`,
          background: `${'HR Recruitment Psychology Business Organizational'.split(' ')[i % 5]} professional with ${'recruitment technical sourcing interview onboarding'.split(' ')[i % 5]} expertise`,
          signature_method: `${'Behavioral interviewing techniques', 'Technical assessment frameworks', 'Competency-based evaluation', 'Cultural fit assessment', 'Skills-based matching'}[i % 5]`,
          cultural_expertise: `${'Inclusive hiring practices', 'Cross-cultural communication', 'Diversity recruitment strategies', 'Global talent sourcing', 'Bias-free interviewing'}[i % 5]`
        }))
      },
      {
        name: 'Learning & Development Division',
        description: 'Employee training and skill development',
        agents: Array.from({ length: 25 }, (_, i) => ({
          name: `Learning Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Training Instructional Learning Performance'.split(' ')[i % 4]} Specialist`,
          achievement: `${['Increased training completion by 80%', 'Developed curriculum for 500+ employees', 'Reduced skill gaps by 60%', 'Built e-learning platform'][i % 4]}`,
          background: `${'Education Training Psychology Instructional'.split(' ')[i % 4]} specialist with development focus`,
          signature_method: `${'Adult learning principles', 'Microlearning design', 'Competency mapping', 'Performance tracking'}[i % 4]`,
          cultural_expertise: `${'Cross-cultural learning preferences', 'Global training delivery', 'Inclusive education design', 'Cultural competency development'}[i % 4]`
        }))
      },
      {
        name: 'Employee Relations Division',
        description: 'Employee engagement and workplace culture',
        agents: Array.from({ length: 25 }, (_, i) => ({
          name: `Relations Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Employee Relations Culture Engagement'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Improved employee satisfaction by 40%', 'Reduced turnover by 30%', 'Resolved 200+ workplace conflicts'][i % 3]}`,
          background: `${'Psychology HR Organizational'.split(' ')[i % 3]} specialist with relations focus`,
          signature_method: `${'Conflict resolution frameworks', 'Engagement measurement', 'Culture assessment'}[i % 3]`,
          cultural_expertise: `${'Cross-cultural conflict resolution', 'Global engagement strategies', 'Inclusive culture building'}[i % 3]`
        }))
      },
      {
        name: 'Compensation & Benefits Division',
        description: 'Compensation strategy and benefits administration',
        agents: Array.from({ length: 6 }, (_, i) => ({
          name: `Compensation Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead'][i % 2]} Compensation & Benefits Specialist`,
          achievement: `${['Redesigned comp structure saving $2M annually', 'Improved benefits satisfaction by 50%'][i % 2]}`,
          background: 'Compensation analysis with benefits expertise',
          signature_method: `${'Market benchmarking', 'Total rewards design'}[i % 2]`,
          cultural_expertise: `${'Global compensation practices', 'Cross-cultural benefits preferences'}[i % 2]`
        }))
      }
    ]
  },
  // Continue with remaining family members using similar expanded structure
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
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Logistics Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Logistics Supply-Chain Transportation Warehouse'.split(' ')[i % 4]} Specialist`,
          achievement: `${['Reduced operational costs by 30%', 'Improved delivery time by 25%', 'Optimized warehouse efficiency by 40%', 'Built automated tracking system'][i % 4]}`,
          background: `${'Supply-chain Operations Logistics Transportation'.split(' ')[i % 4]} expert with automation focus`,
          signature_method: `${'Process optimization frameworks', 'Route optimization algorithms', 'Inventory management systems', 'Performance tracking'}[i % 4]`,
          cultural_expertise: `${'Global supply chain management', 'Cross-border logistics', 'International trade regulations', 'Cultural supply preferences'}[i % 4]`
        }))
      },
      {
        name: 'Financial Planning Division',
        description: 'Financial analysis and planning',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Finance Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Financial Planning Budgeting Forecasting'.split(' ')[i % 3]} Analyst`,
          achievement: `${['Improved forecast accuracy by 35%', 'Reduced budget variance by 20%', 'Automated financial reporting'][i % 3]}`,
          background: `${'Finance Accounting Economics'.split(' ')[i % 3]} professional with planning expertise`,
          signature_method: `${'Financial modeling', 'Scenario planning', 'Budget optimization'}[i % 3]`,
          cultural_expertise: `${'Global financial regulations', 'Cross-currency planning', 'International accounting standards'}[i % 3]`
        }))
      },
      {
        name: 'Operations Excellence Division',
        description: 'Process improvement and operational efficiency',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Operations Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Operations Process-Improvement Quality-Assurance'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Achieved 99.5% process efficiency', 'Reduced waste by 45%', 'Implemented lean methodologies'][i % 3]}`,
          background: `${'Operations Management Industrial-Engineering'.split(' ')[i % 3]} expert with improvement focus`,
          signature_method: `${'Lean Six Sigma', 'Process automation', 'Quality frameworks'}[i % 3]`,
          cultural_expertise: `${'Global operations standards', 'Cross-cultural process design', 'International quality systems'}[i % 3]`
        }))
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
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Support Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Technical-Support Customer-Success Help-Desk'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Achieved 98% customer satisfaction', 'Reduced resolution time by 50%', 'Built self-service portal'][i % 3]}`,
          background: `${'Technical Customer-Service IT'.split(' ')[i % 3]} professional with CRM expertise`,
          signature_method: `${'Proactive issue resolution', 'Customer journey optimization', 'Technical troubleshooting'}[i % 3]`,
          cultural_expertise: `${'Multicultural customer service', 'Global support standards', 'Cross-cultural communication'}[i % 3]`
        }))
      },
      {
        name: 'Customer Success Division',
        description: 'Customer relationship management and success',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Success Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Customer Success Manager`,
          achievement: `${['Increased customer lifetime value by 60%', 'Reduced churn by 35%', 'Expanded accounts by 80%'][i % 3]}`,
          background: 'Customer success with relationship management expertise',
          signature_method: `${'Customer health scoring', 'Proactive engagement', 'Success planning'}[i % 3]`,
          cultural_expertise: `${'Global customer relationship building', 'Cross-cultural success metrics', 'International customer expectations'}[i % 3]`
        }))
      },
      {
        name: 'Quality Assurance Division',
        description: 'Service quality monitoring and improvement',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Quality Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Quality Assurance Specialist`,
          achievement: `${['Improved service quality scores by 40%', 'Reduced quality issues by 60%', 'Built quality monitoring system'][i % 3]}`,
          background: 'Quality assurance with customer service focus',
          signature_method: `${'Quality monitoring frameworks', 'Performance analytics', 'Continuous improvement'}[i % 3]`,
          cultural_expertise: `${'Global quality standards', 'Cross-cultural service expectations', 'International quality metrics'}[i % 3]`
        }))
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
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Innovation Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Research Development Innovation Technology'.split(' ')[i % 4]} Specialist`,
          achievement: `${['Led 15 breakthrough innovations', 'Filed 25 patents', 'Launched 8 new products', 'Built innovation lab'][i % 4]}`,
          background: `${'Research Science Engineering Technology'.split(' ')[i % 4]} specialist with innovation focus`,
          signature_method: `${'Design thinking methodologies', 'Rapid prototyping', 'Innovation frameworks', 'Technology scouting'}[i % 4]`,
          cultural_expertise: `${'Global innovation practices', 'Cross-cultural creativity', 'International R&D collaboration', 'Technology transfer'}[i % 4]`
        }))
      },
      {
        name: 'Technology Research Division',
        description: 'Advanced technology research and development',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Tech Research Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Technology Researcher`,
          achievement: `${['Published 20 research papers', 'Developed 5 core technologies', 'Led technology roadmap'][i % 3]}`,
          background: 'Technology research with emerging tech expertise',
          signature_method: `${'Technology assessment', 'Research methodologies', 'Innovation pipeline'}[i % 3]`,
          cultural_expertise: `${'Global technology trends', 'Cross-cultural innovation adoption', 'International research collaboration'}[i % 3]`
        }))
      },
      {
        name: 'Product Innovation Division',
        description: 'Product development and innovation management',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Product Innovation Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Product Innovation Manager`,
          achievement: `${['Launched 12 innovative products', 'Generated $5M in new revenue', 'Built innovation pipeline'][i % 3]}`,
          background: 'Product development with innovation management expertise',
          signature_method: `${'Innovation portfolio management', 'Product roadmapping', 'Market validation'}[i % 3]`,
          cultural_expertise: `${'Global product innovation', 'Cross-cultural product design', 'International market validation'}[i % 3]`
        }))
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
        description: 'Sales strategy and pre-sales support',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Pre-Sales Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Pre-Sales Sales-Engineer Solution-Architect'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Secured $50M in government contracts', 'Achieved 85% win rate', 'Built solution frameworks'][i % 3]}`,
          background: `${'Sales Engineering Solutions'.split(' ')[i % 3]} specialist with proposal expertise`,
          signature_method: `${'Consultative selling approach', 'Solution design', 'Technical presentations'}[i % 3]`,
          cultural_expertise: `${'Government stakeholder engagement', 'Cross-cultural negotiation', 'International sales processes'}[i % 3]`
        }))
      },
      {
        name: 'Account Management Division',
        description: 'Key account management and growth',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Account Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Account Manager`,
          achievement: `${['Grew accounts by 150%', 'Retained 95% of key accounts', 'Expanded into new markets'][i % 3]}`,
          background: 'Account management with relationship building expertise',
          signature_method: `${'Strategic account planning', 'Relationship mapping', 'Value realization'}[i % 3]`,
          cultural_expertise: `${'Global account management', 'Cross-cultural relationship building', 'International business development'}[i % 3]`
        }))
      },
      {
        name: 'Business Development Division',
        description: 'New business development and partnerships',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Business Dev Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Business Development Manager`,
          achievement: `${['Generated $20M in new business', 'Established 50+ partnerships', 'Entered 10 new markets'][i % 3]}`,
          background: 'Business development with partnership expertise',
          signature_method: `${'Partnership development', 'Market entry strategies', 'Business model innovation'}[i % 3]`,
          cultural_expertise: `${'Global business development', 'Cross-cultural partnerships', 'International market entry'}[i % 3]`
        }))
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
        description: 'Regulatory compliance and affairs management',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Regulatory Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Regulatory Compliance Legal-Affairs'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Maintained 100% compliance record', 'Reduced compliance costs by 30%', 'Built compliance framework'][i % 3]}`,
          background: `${'Legal Regulatory Compliance'.split(' ')[i % 3]} professional with expertise`,
          signature_method: `${'Risk-based compliance frameworks', 'Regulatory analysis', 'Policy development'}[i % 3]`,
          cultural_expertise: `${'International regulatory standards', 'Cross-border compliance', 'Global legal frameworks'}[i % 3]`
        }))
      },
      {
        name: 'Risk Management Division',
        description: 'Enterprise risk assessment and management',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Risk Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Risk Management Specialist`,
          achievement: `${['Reduced enterprise risk by 40%', 'Built risk monitoring system', 'Prevented major incidents'][i % 3]}`,
          background: 'Risk management with enterprise focus',
          signature_method: `${'Risk assessment frameworks', 'Threat modeling', 'Mitigation strategies'}[i % 3]`,
          cultural_expertise: `${'Global risk standards', 'Cross-cultural risk perception', 'International risk management'}[i % 3]`
        }))
      },
      {
        name: 'Audit & Assurance Division',
        description: 'Internal audit and assurance services',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Audit Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Internal Auditor`,
          achievement: `${['Completed 100+ audits', 'Identified $2M in savings', 'Built audit automation'][i % 3]}`,
          background: 'Audit and assurance with process expertise',
          signature_method: `${'Risk-based auditing', 'Process evaluation', 'Control testing'}[i % 3]`,
          cultural_expertise: `${'Global audit standards', 'Cross-cultural audit practices', 'International compliance verification'}[i % 3]`
        }))
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
        name: 'Strategic Partnerships Division',
        description: 'Strategic partnership development and management',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Partnership Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} ${'Strategic-Partnership Alliance-Management External-Relations'.split(' ')[i % 3]} Specialist`,
          achievement: `${['Established 20+ strategic partnerships', 'Generated $15M through partnerships', 'Built partner ecosystem'][i % 3]}`,
          background: `${'Partnership Business-Development Relations'.split(' ')[i % 3]} specialist with international focus`,
          signature_method: `${'Collaborative partnership frameworks', 'Alliance structuring', 'Relationship development'}[i % 3]`,
          cultural_expertise: `${'Cross-cultural relationship building', 'International partnership development', 'Global stakeholder engagement'}[i % 3]`
        }))
      },
      {
        name: 'Government Relations Division',
        description: 'Government affairs and public policy',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Government Relations Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Government Relations Specialist`,
          achievement: `${['Secured favorable policy changes', 'Built government stakeholder network', 'Managed public affairs'][i % 3]}`,
          background: 'Government relations with policy expertise',
          signature_method: `${'Stakeholder engagement', 'Policy analysis', 'Public affairs management'}[i % 3]`,
          cultural_expertise: `${'International government relations', 'Cross-cultural public policy', 'Global regulatory engagement'}[i % 3]`
        }))
      },
      {
        name: 'Community Engagement Division',
        description: 'Community outreach and stakeholder engagement',
        agents: Array.from({ length: 27 }, (_, i) => ({
          name: `Community Agent ${String.fromCharCode(65 + i)}`,
          specialization: `${['Senior', 'Lead', 'Principal'][i % 3]} Community Engagement Specialist`,
          achievement: `${['Engaged 10,000+ community members', 'Built community programs', 'Improved public perception'][i % 3]}`,
          background: 'Community engagement with stakeholder management expertise',
          signature_method: `${'Community mobilization', 'Stakeholder mapping', 'Engagement strategies'}[i % 3]`,
          cultural_expertise: `${'Cross-cultural community engagement', 'Global stakeholder management', 'International community development'}[i % 3]`
        }))
      }
    ]
  }
};
