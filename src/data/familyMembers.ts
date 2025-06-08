import { Brain, Users, Target, Zap } from 'lucide-react';

export interface FamilyMember {
  id: string;
  name: string;
  title: string;
  personality: string;
  enneagramType: string;
  motto: string;
  background: string;
  domainOverview: string;
  color: string;
  icon: any;
}

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
    color: 'bg-blue-500',
    icon: Brain
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
    color: 'bg-gray-700',
    icon: Users
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
    color: 'bg-pink-500',
    icon: Target
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
    color: 'bg-green-500',
    icon: Zap
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
    color: 'bg-purple-500',
    icon: Brain
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
    color: 'bg-orange-500',
    icon: Users
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
    color: 'bg-teal-500',
    icon: Target
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
    color: 'bg-indigo-500',
    icon: Zap
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Sales',
    personality: 'Outgoing and Persuasive',
    enneagramType: 'Type 4: The Individualist',
    motto: 'Connect, Convince, Close.',
    background: 'Bachelor’s in Business Administration; 5+ years in sales and account management.',
    domainOverview: 'Leads the sales team, driving revenue growth through effective sales strategies and customer relationship management.',
    color: 'bg-red-500',
    icon: Brain
  }
];

interface Agent {
  name: string;
  specialty: string;
}

interface Division {
  name: string;
  description: string;
  agents: Agent[];
}

interface FamilyMemberDetails {
  leader: {
    name: string;
    title: string;
    personality: string;
    enneagramType: string;
    motto: string;
    background: string;
  };
  divisions: Division[];
}

export const familyMemberDetails: { [key: string]: FamilyMemberDetails } = {
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
          { name: 'Vision Architect', specialty: 'Strategic Planning' },
          { name: 'Market Analyst', specialty: 'Market Research' },
          { name: 'Roadmap Planner', specialty: 'Timeline Management' },
          { name: 'Innovation Tracker', specialty: 'Trend Analysis' },
          { name: 'Competitive Intelligence', specialty: 'Market Positioning' },
          { name: 'User Research Lead', specialty: 'Customer Insights' },
          { name: 'Product Evangelist', specialty: 'Stakeholder Communication' },
          { name: 'Technology Scout', specialty: 'Emerging Technologies' },
          { name: 'Portfolio Manager', specialty: 'Product Portfolio' }
        ]
      },
      {
        name: 'Product Design',
        description: 'Creating intuitive and engaging user experiences',
        agents: [
          { name: 'UX Architect', specialty: 'User Experience' },
          { name: 'UI Designer', specialty: 'Interface Design' },
          { name: 'Interaction Designer', specialty: 'Engagement Optimization' },
          { name: 'Accessibility Specialist', specialty: 'Inclusive Design' },
          { name: 'Usability Tester', specialty: 'User Feedback' },
          { name: 'Prototyping Expert', specialty: 'Rapid Prototyping' },
          { name: 'Visual Designer', specialty: 'Graphic Design' },
          { name: 'Motion Graphics Artist', specialty: 'Animation' },
          { name: 'Design System Manager', specialty: 'Design Consistency' }
        ]
      },
      {
        name: 'Product Engineering',
        description: 'Developing high-quality, scalable, and reliable products',
        agents: [
          { name: 'Software Architect', specialty: 'System Design' },
          { name: 'Backend Engineer', specialty: 'Server-Side Logic' },
          { name: 'Frontend Developer', specialty: 'User Interface' },
          { name: 'Mobile App Developer', specialty: 'Mobile Applications' },
          { name: 'QA Engineer', specialty: 'Quality Assurance' },
          { name: 'DevOps Engineer', specialty: 'Deployment Automation' },
          { name: 'Database Administrator', specialty: 'Data Management' },
          { name: 'Security Specialist', specialty: 'Cybersecurity' },
          { name: 'Performance Optimizer', specialty: 'Efficiency Tuning' }
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
          { name: 'Compliance Analyst', specialty: 'Regulatory Research' },
          { name: 'Legal Counsel', specialty: 'Legal Interpretation' },
          { name: 'Policy Writer', specialty: 'Policy Development' },
          { name: 'Audit Coordinator', specialty: 'Compliance Audits' },
          { name: 'Risk Assessor', specialty: 'Risk Management' },
          { name: 'Training Facilitator', specialty: 'Compliance Training' },
          { name: 'Reporting Specialist', specialty: 'Compliance Reporting' },
          { name: 'Ethics Officer', specialty: 'Ethical Conduct' },
          { name: 'Data Privacy Officer', specialty: 'Data Protection' }
        ]
      },
      {
        name: 'Internal Audit',
        description: 'Evaluating internal controls and risk management processes',
        agents: [
          { name: 'Lead Auditor', specialty: 'Audit Planning' },
          { name: 'Financial Auditor', specialty: 'Financial Oversight' },
          { name: 'Operational Auditor', specialty: 'Process Evaluation' },
          { name: 'IT Auditor', specialty: 'Technology Assessment' },
          { name: 'Compliance Auditor', specialty: 'Regulatory Review' },
          { name: 'Fraud Examiner', specialty: 'Fraud Detection' },
          { name: 'Audit Analyst', specialty: 'Data Analysis' },
          { name: 'Reporting Manager', specialty: 'Audit Reporting' },
          { name: 'Quality Assurance', specialty: 'Audit Quality' }
        ]
      },
      {
        name: 'Risk Management',
        description: 'Identifying, assessing, and mitigating organizational risks',
        agents: [
          { name: 'Risk Manager', specialty: 'Risk Identification' },
          { name: 'Risk Analyst', specialty: 'Risk Assessment' },
          { name: 'Mitigation Planner', specialty: 'Risk Mitigation' },
          { name: 'Contingency Planner', specialty: 'Disaster Recovery' },
          { name: 'Insurance Specialist', specialty: 'Insurance Coverage' },
          { name: 'Security Officer', specialty: 'Physical Security' },
          { name: 'Cybersecurity Analyst', specialty: 'Cybersecurity' },
          { name: 'Compliance Officer', specialty: 'Regulatory Compliance' },
          { name: 'Crisis Manager', specialty: 'Crisis Response' }
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
          { name: 'Government Liaison', specialty: 'Government Relations' },
          { name: 'Community Organizer', specialty: 'Community Engagement' },
          { name: 'Lobbyist', specialty: 'Advocacy' },
          { name: 'Policy Advisor', specialty: 'Policy Analysis' },
          { name: 'Public Speaker', specialty: 'Public Speaking' },
          { name: 'Media Relations', specialty: 'Media Outreach' },
          { name: 'Communications Manager', specialty: 'Strategic Communication' },
          { name: 'Event Planner', specialty: 'Event Coordination' },
          { name: 'Volunteer Coordinator', specialty: 'Volunteer Management' }
        ]
      },
      {
        name: 'Media Relations',
        description: 'Building and maintaining relationships with media outlets',
        agents: [
          { name: 'Media Contact', specialty: 'Media Outreach' },
          { name: 'Press Officer', specialty: 'Press Releases' },
          { name: 'Publicist', specialty: 'Publicity Campaigns' },
          { name: 'Spokesperson', specialty: 'Public Representation' },
          { name: 'Content Creator', specialty: 'Storytelling' },
          { name: 'Social Media Manager', specialty: 'Social Media' },
          { name: 'Crisis Communicator', specialty: 'Crisis Management' },
          { name: 'Media Trainer', specialty: 'Interview Preparation' },
          { name: 'Analyst', specialty: 'Media Monitoring' }
        ]
      },
      {
        name: 'Corporate Social Responsibility',
        description: 'Developing and implementing CSR initiatives',
        agents: [
          { name: 'CSR Manager', specialty: 'CSR Strategy' },
          { name: 'Sustainability Officer', specialty: 'Sustainability' },
          { name: 'Philanthropy Director', specialty: 'Charitable Giving' },
          { name: 'Environmental Specialist', specialty: 'Environmental Programs' },
          { name: 'Community Liaison', specialty: 'Community Projects' },
          { name: 'Stakeholder Engagement', specialty: 'Stakeholder Relations' },
          { name: 'Reporting Analyst', specialty: 'CSR Reporting' },
          { name: 'Ethics Advisor', specialty: 'Ethical Practices' },
          { name: 'Impact Assessor', specialty: 'Social Impact' }
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
          { name: 'SEO Specialist', specialty: 'Search Engine Optimization' },
          { name: 'SEM Manager', specialty: 'Search Engine Marketing' },
          { name: 'Social Media Manager', specialty: 'Social Media' },
          { name: 'Content Marketer', specialty: 'Content Creation' },
          { name: 'Email Marketer', specialty: 'Email Campaigns' },
          { name: 'Analytics Specialist', specialty: 'Data Analysis' },
          { name: 'Conversion Optimizer', specialty: 'Conversion Rate' },
          { name: 'Affiliate Manager', specialty: 'Affiliate Programs' },
          { name: 'Mobile Marketer', specialty: 'Mobile Marketing' }
        ]
      },
      {
        name: 'Brand Management',
        description: 'Developing and maintaining brand identity and reputation',
        agents: [
          { name: 'Brand Strategist', specialty: 'Brand Strategy' },
          { name: 'Creative Director', specialty: 'Creative Direction' },
          { name: 'Copywriter', specialty: 'Brand Messaging' },
          { name: 'Visual Designer', specialty: 'Visual Identity' },
          { name: 'Market Researcher', specialty: 'Market Analysis' },
          { name: 'PR Manager', specialty: 'Public Relations' },
          { name: 'Event Coordinator', specialty: 'Brand Events' },
          { name: 'Sponsorship Manager', specialty: 'Sponsorships' },
          { name: 'Brand Ambassador', specialty: 'Brand Representation' }
        ]
      },
      {
        name: 'Market Research',
        description: 'Conducting market research to identify trends and opportunities',
        agents: [
          { name: 'Research Analyst', specialty: 'Data Collection' },
          { name: 'Data Scientist', specialty: 'Data Analysis' },
          { name: 'Survey Specialist', specialty: 'Survey Design' },
          { name: 'Focus Group Facilitator', specialty: 'Focus Groups' },
          { name: 'Competitive Analyst', specialty: 'Competitive Intelligence' },
          { name: 'Trend Forecaster', specialty: 'Trend Analysis' },
          { name: 'Reporting Manager', specialty: 'Research Reporting' },
          { name: 'Market Modeler', specialty: 'Market Modeling' },
          { name: 'Consumer Psychologist', specialty: 'Consumer Behavior' }
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
          { name: 'Recruiter', specialty: 'Talent Sourcing' },
          { name: 'HR Specialist', specialty: 'HR Coordination' },
          { name: 'Interview Coordinator', specialty: 'Interview Scheduling' },
          { name: 'Assessment Specialist', specialty: 'Candidate Assessment' },
          { name: 'Onboarding Manager', specialty: 'Employee Onboarding' },
          { name: 'Employer Branding', specialty: 'Employer Branding' },
          { name: 'Diversity Recruiter', specialty: 'Diversity Hiring' },
          { name: 'Executive Recruiter', specialty: 'Executive Search' },
          { name: 'Recruiting Analyst', specialty: 'Recruiting Metrics' }
        ]
      },
      {
        name: 'Employee Development',
        description: 'Providing training and development opportunities for employees',
        agents: [
          { name: 'Training Manager', specialty: 'Training Programs' },
          { name: 'Learning Specialist', specialty: 'E-Learning' },
          { name: 'Development Coach', specialty: 'Career Coaching' },
          { name: 'Mentorship Coordinator', specialty: 'Mentorship Programs' },
          { name: 'Performance Manager', specialty: 'Performance Reviews' },
          { name: 'Succession Planner', specialty: 'Succession Planning' },
          { name: 'Skills Assessor', specialty: 'Skills Gap Analysis' },
          { name: 'Leadership Trainer', specialty: 'Leadership Development' },
          { name: 'Training Analyst', specialty: 'Training Evaluation' }
        ]
      },
      {
        name: 'Employee Relations',
        description: 'Managing employee relations and resolving conflicts',
        agents: [
          { name: 'HR Business Partner', specialty: 'HR Consulting' },
          { name: 'Employee Advocate', specialty: 'Employee Support' },
          { name: 'Conflict Mediator', specialty: 'Conflict Resolution' },
          { name: 'Compliance Officer', specialty: 'Compliance Issues' },
          { name: 'Labor Relations', specialty: 'Labor Laws' },
          { name: 'Wellness Coordinator', specialty: 'Employee Wellness' },
          { name: 'Engagement Specialist', specialty: 'Employee Engagement' },
          { name: 'HR Generalist', specialty: 'HR Administration' },
          { name: 'Relations Analyst', specialty: 'Employee Data' }
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
          { name: 'Financial Analyst', specialty: 'Financial Modeling' },
          { name: 'Budget Manager', specialty: 'Budgeting' },
          { name: 'Investment Strategist', specialty: 'Investment Planning' },
          { name: 'Accountant', specialty: 'Accounting' },
          { name: 'Auditor', specialty: 'Auditing' },
          { name: 'Tax Advisor', specialty: 'Tax Planning' },
          { name: 'Treasurer', specialty: 'Cash Management' },
          { name: 'Controller', specialty: 'Financial Reporting' },
          { name: 'Financial Planner', specialty: 'Financial Forecasting' }
        ]
      },
      {
        name: 'Operations Management',
        description: 'Managing the organization\'s operational processes',
        agents: [
          { name: 'Operations Manager', specialty: 'Process Optimization' },
          { name: 'Supply Chain Manager', specialty: 'Supply Chain' },
          { name: 'Logistics Coordinator', specialty: 'Logistics' },
          { name: 'Procurement Specialist', specialty: 'Procurement' },
          { name: 'Inventory Manager', specialty: 'Inventory' },
          { name: 'Quality Control', specialty: 'Quality Assurance' },
          { name: 'Efficiency Expert', specialty: 'Efficiency' },
          { name: 'Process Engineer', specialty: 'Process Improvement' },
          { name: 'Analyst', specialty: 'Operations Analysis' }
        ]
      },
      {
        name: 'Facilities Management',
        description: 'Managing the organization\'s physical facilities',
        agents: [
          { name: 'Facilities Manager', specialty: 'Facility Maintenance' },
          { name: 'Maintenance Technician', specialty: 'Equipment Repair' },
          { name: 'Security Guard', specialty: 'Security' },
          { name: 'Janitor', specialty: 'Cleaning' },
          { name: 'Landscaper', specialty: 'Landscaping' },
          { name: 'HVAC Technician', specialty: 'HVAC' },
          { name: 'Electrician', specialty: 'Electrical Systems' },
          { name: 'Plumber', specialty: 'Plumbing' },
          { name: 'Safety Inspector', specialty: 'Safety' }
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
          { name: 'Tech Support Specialist', specialty: 'Troubleshooting' },
          { name: 'Help Desk Analyst', specialty: 'Help Desk' },
          { name: 'System Administrator', specialty: 'System Support' },
          { name: 'Network Engineer', specialty: 'Network Support' },
          { name: 'Database Admin', specialty: 'Database Support' },
          { name: 'Software Engineer', specialty: 'Software Support' },
          { name: 'Hardware Technician', specialty: 'Hardware Support' },
          { name: 'Security Analyst', specialty: 'Security Support' },
          { name: 'Support Manager', specialty: 'Support Management' }
        ]
      },
      {
        name: 'Customer Service',
        description: 'Providing customer service and support',
        agents: [
          { name: 'Customer Service Rep', specialty: 'Customer Service' },
          { name: 'Account Manager', specialty: 'Account Management' },
          { name: 'Sales Rep', specialty: 'Sales Support' },
          { name: 'Marketing Assistant', specialty: 'Marketing Support' },
          { name: 'Public Relations', specialty: 'Public Relations' },
          { name: 'Event Planner', specialty: 'Event Support' },
          { name: 'Volunteer Coordinator', specialty: 'Volunteer Support' },
          { name: 'HR Assistant', specialty: 'HR Support' },
          { name: 'Admin Assistant', specialty: 'Admin Support' }
        ]
      },
      {
        name: 'Training',
        description: 'Providing training and development opportunities for employees',
        agents: [
          { name: 'Training Manager', specialty: 'Training Programs' },
          { name: 'Learning Specialist', specialty: 'E-Learning' },
          { name: 'Development Coach', specialty: 'Career Coaching' },
          { name: 'Mentorship Coordinator', specialty: 'Mentorship Programs' },
          { name: 'Performance Manager', specialty: 'Performance Reviews' },
          { name: 'Succession Planner', specialty: 'Succession Planning' },
          { name: 'Skills Assessor', specialty: 'Skills Gap Analysis' },
          { name: 'Leadership Trainer', specialty: 'Leadership Development' },
          { name: 'Training Analyst', specialty: 'Training Evaluation' }
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
          { name: 'Research Scientist', specialty: 'Scientific Research' },
          { name: 'Data Scientist', specialty: 'Data Analysis' },
          { name: 'Statistician', specialty: 'Statistical Analysis' },
          { name: 'Mathematician', specialty: 'Mathematical Modeling' },
          { name: 'Computer Scientist', specialty: 'Computer Science' },
          { name: 'Engineer', specialty: 'Engineering' },
          { name: 'Physicist', specialty: 'Physics' },
          { name: 'Chemist', specialty: 'Chemistry' },
          { name: 'Biologist', specialty: 'Biology' }
        ]
      },
      {
        name: 'Development',
        description: 'Developing new technologies and products',
        agents: [
          { name: 'Software Engineer', specialty: 'Software Development' },
          { name: 'Hardware Engineer', specialty: 'Hardware Development' },
          { name: 'Web Developer', specialty: 'Web Development' },
          { name: 'Mobile App Developer', specialty: 'Mobile App Development' },
          { name: 'Game Developer', specialty: 'Game Development' },
          { name: 'AI Engineer', specialty: 'Artificial Intelligence' },
          { name: 'Machine Learning Engineer', specialty: 'Machine Learning' },
          { name: 'Data Engineer', specialty: 'Data Engineering' },
          { name: 'Cloud Engineer', specialty: 'Cloud Engineering' }
        ]
      },
      {
        name: 'Testing',
        description: 'Testing new technologies and products',
        agents: [
          { name: 'Quality Assurance', specialty: 'Quality Assurance' },
          { name: 'Software Tester', specialty: 'Software Testing' },
          { name: 'Hardware Tester', specialty: 'Hardware Testing' },
          { name: 'Web Tester', specialty: 'Web Testing' },
          { name: 'Mobile App Tester', specialty: 'Mobile App Testing' },
          { name: 'Game Tester', specialty: 'Game Testing' },
          { name: 'Security Tester', specialty: 'Security Testing' },
          { name: 'Performance Tester', specialty: 'Performance Testing' },
          { name: 'Usability Tester', specialty: 'Usability Testing' }
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
      background: 'Bachelor’s in Business Administration; 5+ years in sales and account management.'
    },
    divisions: [
      {
        name: 'Direct Sales',
        description: 'Selling products and services directly to customers',
        agents: [
          { name: 'Sales Representative', specialty: 'Sales' },
          { name: 'Account Manager', specialty: 'Account Management' },
          { name: 'Sales Manager', specialty: 'Sales Management' },
          { name: 'Sales Director', specialty: 'Sales Leadership' },
          { name: 'Business Development', specialty: 'Business Development' },
          { name: 'Marketing Assistant', specialty: 'Marketing Support' },
          { name: 'Public Relations', specialty: 'Public Relations' },
          { name: 'Event Planner', specialty: 'Event Support' },
          { name: 'Volunteer Coordinator', specialty: 'Volunteer Support' }
        ]
      },
      {
        name: 'Indirect Sales',
        description: 'Selling products and services through partners',
        agents: [
          { name: 'Channel Manager', specialty: 'Channel Management' },
          { name: 'Partner Manager', specialty: 'Partner Management' },
          { name: 'Affiliate Manager', specialty: 'Affiliate Management' },
          { name: 'Reseller Manager', specialty: 'Reseller Management' },
          { name: 'Distributor Manager', specialty: 'Distributor Management' },
          { name: 'Sales Engineer', specialty: 'Sales Engineering' },
          { name: 'Sales Trainer', specialty: 'Sales Training' },
          { name: 'Sales Analyst', specialty: 'Sales Analysis' },
          { name: 'Sales Operations', specialty: 'Sales Operations' }
        ]
      },
      {
        name: 'Customer Service',
        description: 'Providing customer service and support',
        agents: [
          { name: 'Customer Service Rep', specialty: 'Customer Service' },
          { name: 'Account Manager', specialty: 'Account Management' },
          { name: 'Sales Rep', specialty: 'Sales Support' },
          { name: 'Marketing Assistant', specialty: 'Marketing Support' },
          { name: 'Public Relations', specialty: 'Public Relations' },
          { name: 'Event Planner', specialty: 'Event Support' },
          { name: 'Volunteer Coordinator', specialty: 'Volunteer Support' },
          { name: 'HR Assistant', specialty: 'HR Support' },
          { name: 'Admin Assistant', specialty: 'Admin Support' }
        ]
      }
    ]
  }
};

export default familyMembers;
