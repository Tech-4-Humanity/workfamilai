import { createGlobalNameAssigner } from '@/utils/globalNames';

// Create a single name assigner instance for consistency
const nameAssigner = createGlobalNameAssigner();

// Pre-assign names for all departments to ensure consistency
const DEPARTMENT_NAMES = {
  'product-development': nameAssigner.assignNamesForDepartment('product-development', 81),
  'marketing': nameAssigner.assignNamesForDepartment('marketing', 81),
  'human-resources': nameAssigner.assignNamesForDepartment('human-resources', 81),
  'finance-operations': nameAssigner.assignNamesForDepartment('finance-operations', 81),
  'customer-support': nameAssigner.assignNamesForDepartment('customer-support', 81),
  'innovation-rd': nameAssigner.assignNamesForDepartment('innovation-rd', 81),
  'sales': nameAssigner.assignNamesForDepartment('sales', 81),
  'governance-compliance': nameAssigner.assignNamesForDepartment('governance-compliance', 81),
  'external-relations': nameAssigner.assignNamesForDepartment('external-relations', 81)
};

// Function to get named agents for a team
export const getNamedAgents = (departmentId: string, teamIndex: number, agentRoles: string[]) => {
  const departmentNames = DEPARTMENT_NAMES[departmentId] || [];
  const startIndex = teamIndex * 9; // Each team has 9 agents
  
  return agentRoles.map((role, index) => {
    const nameIndex = startIndex + index;
    const agentName = departmentNames[nameIndex] || `Agent ${nameIndex + 1000}`;
    return `${agentName} - ${role}`;
  });
};

export const departmentData = {
  'product-development': {
    leader: {
      name: 'Dr. Amara Chen',
      title: 'Product Development',
      personality: 'The Perfectionist',
      enneagramType: 'Type 1',
      description: 'The perfectionist who never misses a detail and transforms product ideas into flawless realities. While your competitors are still fixing bugs in version 1.0, Amara is orchestrating your release of version 3.0 with features users didn\'t even know they needed.',
      avatar: '👩‍🔬',
      color: 'bg-blue-500'
    },
    teams: [
      {
        name: 'Market Research Agent',
        description: 'Deep market analysis and trend identification',
        agents: [
          'Trend Analysis Specialist',
          'Customer Interview Coordinator', 
          'Competitor Research Expert',
          'Data Survey Designer',
          'Market Sizing Analyst',
          'User Behavior Observer',
          'Gap Analysis Specialist',
          'Industry Expert Liaison',
          'Research Synthesis Lead'
        ]
      },
      {
        name: 'Product Strategy Agent',
        description: 'Strategic product planning and roadmap development',
        agents: [
          'Vision Articulator',
          'Roadmap Designer',
          'Business Case Developer',
          'Prioritization Specialist',
          'Stakeholder Alignment Lead',
          'Market Positioning Strategist',
          'Pricing Strategist',
          'Portfolio Manager',
          'Go-to-Market Planner'
        ]
      },
      {
        name: 'Design Agent',
        description: 'User experience and visual design excellence',
        agents: [
          'User Experience Architect',
          'Visual Design Specialist',
          'Information Architect',
          'Prototyping Expert',
          'Accessibility Champion',
          'User Testing Coordinator',
          'Design System Manager',
          'Interaction Designer',
          'Brand Application Specialist'
        ]
      },
      {
        name: 'Engineering Agent',
        description: 'Technical architecture and development',
        agents: [
          'Technical Architecture Designer',
          'Frontend Development Lead',
          'Backend Systems Engineer',
          'Database Specialist',
          'API Integration Expert',
          'Performance Optimization Engineer',
          'Security Implementation Specialist',
          'DevOps Coordinator',
          'Technical Debt Manager'
        ]
      },
      {
        name: 'Quality Assurance Agent',
        description: 'Comprehensive testing and quality control',
        agents: [
          'Test Plan Designer',
          'Automated Testing Specialist',
          'Manual Testing Expert',
          'Performance Tester',
          'Security Validation Lead',
          'User Acceptance Coordinator',
          'Bug Tracking Manager',
          'Regression Testing Specialist',
          'Test Data Generator'
        ]
      },
      {
        name: 'Product Launch Agent',
        description: 'Strategic product launch coordination',
        agents: [
          'Launch Plan Developer',
          'Marketing Coordinator',
          'Sales Enablement Specialist',
          'Documentation Lead',
          'Beta Program Manager',
          'Release Management Specialist',
          'Feedback Collection Lead',
          'Channel Readiness Coordinator',
          'Launch Metrics Analyst'
        ]
      },
      {
        name: 'Lifecycle Management Agent',
        description: 'Product lifecycle optimization',
        agents: [
          'Feature Evolution Planner',
          'Usage Analytics Specialist',
          'Customer Feedback Manager',
          'Technical Support Liaison',
          'End-of-Life Planner',
          'Version Control Manager',
          'Legacy System Integrator',
          'Maintenance Scheduling Coordinator',
          'Performance Monitoring Specialist'
        ]
      },
      {
        name: 'Competitive Analysis Agent',
        description: 'Market intelligence and competitive positioning',
        agents: [
          'Competitor Feature Mapper',
          'Pricing Intelligence Specialist',
          'Positioning Analyst',
          'Disruptor Monitoring Lead',
          'Competitive Response Planner',
          'Win/Loss Analysis Expert',
          'SWOT Analysis Specialist',
          'Feature Differentiation Strategist',
          'Customer Loyalty Analyzer'
        ]
      },
      {
        name: 'Product Analytics Agent',
        description: 'Data-driven product insights',
        agents: [
          'Key Metrics Designer',
          'Dashboard Creator',
          'Usage Pattern Analyst',
          'A/B Testing Specialist',
          'Funnel Optimization Expert',
          'Predictive Analytics Lead',
          'Cohort Analysis Specialist',
          'ROI Calculator',
          'Data Storyteller'
        ]
      }
    ]
  },
  'marketing': {
    leader: {
      name: 'Miguel Santos',
      title: 'Marketing',
      personality: 'The Helper',
      enneagramType: 'Type 2',
      description: 'The empathetic helper who intuitively understands customer needs before they can articulate them. He\'s already transformed your generic marketing into authentic conversations that feel like a helpful service rather than a sales pitch.',
      avatar: '👨‍💼',
      color: 'bg-green-500'
    },
    teams: [
      {
        name: 'Brand Strategy Agent',
        description: 'Brand identity and positioning leadership',
        agents: [
          'Brand Identity Architect',
          'Brand Guidelines Keeper',
          'Brand Equity Measurer',
          'Positioning Specialist',
          'Brand Messaging Developer',
          'Visual Identity Manager',
          'Brand Experience Designer',
          'Brand Evolution Planner',
          'Internal Brand Ambassador'
        ]
      },
      {
        name: 'Content Creation Agent',
        description: 'Multi-channel content development',
        agents: [
          'Content Strategy Developer',
          'Copywriting Specialist',
          'Visual Content Designer',
          'Video Production Coordinator',
          'Content Calendar Manager',
          'SEO Content Optimizer',
          'Subject Matter Expert Liaison',
          'Content Localization Specialist',
          'Editorial Quality Controller'
        ]
      },
      {
        name: 'Digital Marketing Agent',
        description: 'Digital channel optimization',
        agents: [
          'SEO Specialist',
          'Paid Search Manager',
          'Social Media Strategist',
          'Email Marketing Specialist',
          'Display Advertising Expert',
          'Marketing Automation Engineer',
          'Conversion Rate Optimizer',
          'Digital Analytics Specialist',
          'Landing Page Designer'
        ]
      },
      {
        name: 'Event Management Agent',
        description: 'Event strategy and execution',
        agents: [
          'Event Strategy Planner',
          'Venue Coordination Specialist',
          'Booth Design Manager',
          'Speaker Program Coordinator',
          'Attendee Experience Designer',
          'Promotional Materials Manager',
          'Lead Capture Specialist',
          'Event ROI Analyst',
          'Virtual Event Coordinator'
        ]
      },
      {
        name: 'Public Relations Agent',
        description: 'Media and public relationship management',
        agents: [
          'Media Relations Specialist',
          'Press Release Developer',
          'Media Monitoring Analyst',
          'Crisis Communication Planner',
          'Thought Leadership Promoter',
          'Industry Analyst Liaison',
          'Award Submission Coordinator',
          'Speaking Opportunity Hunter',
          'PR Measurement Specialist'
        ]
      },
      {
        name: 'Marketing Analytics Agent',
        description: 'Data-driven marketing insights',
        agents: [
          'Marketing Database Manager',
          'Attribution Modeling Specialist',
          'Campaign Performance Analyst',
          'Competitive Intelligence Gatherer',
          'Data Visualization Expert',
          'Predictive Marketing Analyst',
          'Marketing Mix Modeler',
          'Customer Journey Mapper',
          'Marketing Tech Stack Manager'
        ]
      },
      {
        name: 'Customer Segmentation Agent',
        description: 'Advanced customer targeting',
        agents: [
          'Demographic Analysis Specialist',
          'Behavioral Segmentation Expert',
          'Psychographic Profiler',
          'Customer Persona Developer',
          'Segment Profitability Analyst',
          'Targeting Strategy Developer',
          'Micro-Segment Identifier',
          'Market Penetration Analyst',
          'Customer Evolution Tracker'
        ]
      },
      {
        name: 'Channel Marketing Agent',
        description: 'Partner and channel optimization',
        agents: [
          'Partner Program Designer',
          'Co-Marketing Specialist',
          'Channel Content Developer',
          'Partner Portal Manager',
          'Channel Incentive Designer',
          'Distributor Relationship Manager',
          'Channel Training Coordinator',
          'Channel Analytics Specialist',
          'Partner Feedback Collector'
        ]
      },
      {
        name: 'Marketing Operations Agent',
        description: 'Marketing process and technology management',
        agents: [
          'Marketing Resource Manager',
          'Budget Controller',
          'Marketing Technology Administrator',
          'Process Optimization Specialist',
          'Cross-Functional Coordinator',
          'Campaign Execution Manager',
          'Marketing Compliance Monitor',
          'Project Management Specialist',
          'Vendor Relationship Manager'
        ]
      }
    ]
  },
  'human-resources': {
    leader: {
      name: 'Priya Sharma',
      title: 'Human Resources',
      personality: 'The Achiever',
      enneagramType: 'Type 3',
      description: 'The achievement-oriented talent developer who\'s turning your HR function from an administrative cost center into a strategic powerhouse. She\'s already identified top performers you were about to lose and untapped potential you never recognized.',
      avatar: '👩‍💼',
      color: 'bg-purple-500'
    },
    teams: [
      {
        name: 'Talent Acquisition Agent',
        description: 'Strategic talent sourcing and recruitment',
        agents: [
          'Sourcing Specialist',
          'Job Description Developer',
          'Employer Brand Ambassador',
          'Interview Process Designer',
          'Candidate Experience Manager',
          'Selection Criteria Developer',
          'Offer Negotiation Specialist',
          'Recruitment Analytics Expert',
          'Diversity Recruitment Specialist'
        ]
      },
      {
        name: 'Employee Engagement Agent',
        description: 'Workforce satisfaction and culture building',
        agents: [
          'Engagement Survey Manager',
          'Recognition Program Designer',
          'Internal Communications Specialist',
          'Culture Initiative Coordinator',
          'Employee Experience Designer',
          'Wellness Program Manager',
          'Social Event Coordinator',
          'Feedback Collection Specialist',
          'Engagement Metrics Analyst'
        ]
      },
      {
        name: 'Learning & Development Agent',
        description: 'Continuous learning and skill development',
        agents: [
          'Training Needs Analyst',
          'Learning Curriculum Designer',
          'Training Content Developer',
          'Learning Technology Manager',
          'Leadership Development Specialist',
          'Onboarding Experience Designer',
          'Certification Program Manager',
          'Knowledge Transfer Facilitator',
          'Training Effectiveness Evaluator'
        ]
      },
      {
        name: 'Compensation & Benefits Agent',
        description: 'Total rewards optimization',
        agents: [
          'Compensation Structure Designer',
          'Market Data Analyst',
          'Benefits Package Developer',
          'Equity Compensation Specialist',
          'Total Rewards Communicator',
          'Compensation Review Coordinator',
          'Retirement Plan Administrator',
          'Benefits Vendor Manager',
          'Compensation Analytics Specialist'
        ]
      },
      {
        name: 'Performance Management Agent',
        description: 'Performance optimization and feedback',
        agents: [
          'Performance Framework Designer',
          'Goal Setting Facilitator',
          'Feedback Process Coordinator',
          'Performance Data Analyst',
          'Coaching Program Developer',
          'Performance Calibration Facilitator',
          'Improvement Plan Designer',
          'Recognition Process Manager',
          'Performance Technology Administrator'
        ]
      },
      {
        name: 'Culture & Diversity Agent',
        description: 'Inclusive culture and diversity initiatives',
        agents: [
          'Diversity Strategy Developer',
          'Cultural Assessment Specialist',
          'Inclusion Training Coordinator',
          'Employee Resource Group Manager',
          'Workplace Accessibility Expert',
          'Cultural Celebration Coordinator',
          'Bias Mitigation Specialist',
          'Inclusion Metrics Analyst',
          'Culture Change Facilitator'
        ]
      },
      {
        name: 'Workforce Planning Agent',
        description: 'Strategic workforce optimization',
        agents: [
          'Headcount Forecaster',
          'Skills Gap Analyst',
          'Organizational Design Specialist',
          'Succession Planning Coordinator',
          'Workforce Analytics Expert',
          'Role Definition Specialist',
          'Internal Mobility Facilitator',
          'Labor Market Analyst',
          'Contingent Workforce Manager'
        ]
      },
      {
        name: 'HR Compliance Agent',
        description: 'Employment law and policy compliance',
        agents: [
          'Employment Law Specialist',
          'Policy Developer',
          'Compliance Training Coordinator',
          'Audit Preparation Manager',
          'HR Documentation Specialist',
          'Workplace Investigation Coordinator',
          'Global Compliance Expert',
          'Compliance Reporting Specialist',
          'Regulatory Change Monitor'
        ]
      },
      {
        name: 'Employee Relations Agent',
        description: 'Workplace relationship management',
        agents: [
          'Conflict Resolution Specialist',
          'Employee Advocate',
          'Management Coach',
          'Grievance Process Manager',
          'Exit Interview Coordinator',
          'Workplace Policy Interpreter',
          'Progressive Discipline Manager',
          'Return-to-Work Coordinator',
          'Team Dynamics Facilitator'
        ]
      }
    ]
  },
  'finance-operations': {
    leader: {
      name: 'Theo Williams',
      title: 'Finance & Operations',
      personality: 'The Individualist',
      enneagramType: 'Type 4',
      description: 'The creative individualist who sees patterns others miss. While traditional CFOs focus on controlling costs, Theo\'s already found three hidden revenue streams in your operational data.',
      avatar: '👨‍💻',
      color: 'bg-orange-500'
    },
    teams: [
      {
        name: 'Financial Planning Agent',
        description: 'Strategic financial planning and analysis',
        agents: [
          'Budget Development Specialist',
          'Long-Range Forecaster',
          'Capital Expenditure Analyst',
          'Budget vs. Actual Tracker',
          'Financial Modeling Expert',
          'Operational Finance Liaison',
          'Planning Technology Manager',
          'Cost Structure Analyst',
          'Planning Process Coordinator'
        ]
      },
      {
        name: 'Treasury Management Agent',
        description: 'Cash and liquidity management',
        agents: [
          'Cash Flow Forecaster',
          'Banking Relationship Manager',
          'Investment Strategy Developer',
          'Debt Management Specialist',
          'Foreign Exchange Risk Manager',
          'Payment Processing Optimizer',
          'Working Capital Analyst',
          'Treasury Technology Administrator',
          'Interest Rate Risk Specialist'
        ]
      },
      {
        name: 'Accounting Agent',
        description: 'Financial reporting and accounting',
        agents: [
          'General Ledger Manager',
          'Financial Close Coordinator',
          'Financial Statement Preparer',
          'Accounts Payable Specialist',
          'Accounts Receivable Expert',
          'Tax Accounting Specialist',
          'Accounting Policy Developer',
          'Accounting Systems Administrator',
          'Audit Support Coordinator'
        ]
      },
      {
        name: 'Supply Chain Agent',
        description: 'End-to-end supply chain optimization',
        agents: [
          'Procurement Specialist',
          'Inventory Management Expert',
          'Logistics Coordinator',
          'Supplier Relationship Manager',
          'Demand Planning Analyst',
          'Distribution Network Designer',
          'Supply Chain Risk Manager',
          'Supply Chain Technology Administrator',
          'Process Improvement Specialist'
        ]
      },
      {
        name: 'Facilities Management Agent',
        description: 'Workplace and facility optimization',
        agents: [
          'Workspace Planning Designer',
          'Building Maintenance Coordinator',
          'Security Systems Manager',
          'Vendor Management Specialist',
          'Environmental Systems Controller',
          'Space Utilization Analyst',
          'Safety Compliance Coordinator',
          'Workplace Experience Designer',
          'Facilities Technology Manager'
        ]
      },
      {
        name: 'Risk Management Agent',
        description: 'Enterprise risk assessment and mitigation',
        agents: [
          'Risk Assessment Specialist',
          'Business Continuity Planner',
          'Insurance Portfolio Manager',
          'Enterprise Risk Framework Developer',
          'Operational Risk Analyst',
          'Market Risk Specialist',
          'Compliance Risk Coordinator',
          'Risk Reporting Specialist',
          'Crisis Management Leader'
        ]
      },
      {
        name: 'Business Intelligence Agent',
        description: 'Data analytics and business insights',
        agents: [
          'Data Warehouse Architect',
          'Reporting Specialist',
          'Data Visualization Expert',
          'Business Analysis Lead',
          'Data Governance Specialist',
          'Predictive Analytics Developer',
          'Performance Metrics Designer',
          'BI Technology Administrator',
          'Cross-Functional Data Translator'
        ]
      },
      {
        name: 'Process Optimization Agent',
        description: 'Operational efficiency and improvement',
        agents: [
          'Process Mapping Specialist',
          'Lean Methodology Expert',
          'Six Sigma Practitioner',
          'Automation Opportunity Identifier',
          'Process Technology Implementer',
          'Change Management Facilitator',
          'Process Metrics Designer',
          'Customer Journey Optimizer',
          'Continuous Improvement Culture Builder'
        ]
      },
      {
        name: 'Sustainability Agent',
        description: 'Environmental and social responsibility',
        agents: [
          'Environmental Impact Assessor',
          'Sustainability Strategy Developer',
          'Energy Efficiency Specialist',
          'Waste Reduction Coordinator',
          'Sustainable Sourcing Expert',
          'Carbon Footprint Analyst',
          'Environmental Compliance Specialist',
          'Sustainability Reporting Lead',
          'Environmental Education Coordinator'
        ]
      }
    ]
  },
  'customer-support': {
    leader: {
      name: 'Dr. Yuna Kim',
      title: 'Customer Support',
      personality: 'The Investigator',
      enneagramType: 'Type 5',
      description: 'The investigative problem-solver who digs deeper than anyone else. She\'s already transformed your support function from reactive firefighting to proactive issue prevention, reducing tickets by 63% while increasing satisfaction scores.',
      avatar: '👩‍⚕️',
      color: 'bg-teal-500'
    },
    teams: [
      {
        name: 'Frontline Support Agent',
        description: 'First contact customer service excellence',
        agents: [
          'Initial Response Specialist',
          'Issue Triage Expert',
          'Resolution Script Developer',
          'Customer Communication Expert',
          'Channel Management Specialist',
          'Queue Management Coordinator',
          'Customer Authentication Specialist',
          'Support Technology Operator',
          'First-Contact Resolution Expert'
        ]
      },
      {
        name: 'Technical Support Agent',
        description: 'Advanced technical problem resolution',
        agents: [
          'Product Specialist',
          'Troubleshooting Methodology Expert',
          'Technical Documentation Specialist',
          'Bug Verification Lead',
          'Workaround Developer',
          'Environment Configuration Specialist',
          'System Integration Expert',
          'Product Testing Specialist',
          'Technical Escalation Coordinator'
        ]
      },
      {
        name: 'Customer Education Agent',
        description: 'Customer training and self-service',
        agents: [
          'Training Content Developer',
          'Tutorial Designer',
          'Webinar Coordinator',
          'Self-Help Content Creator',
          'Product Onboarding Specialist',
          'Advanced Feature Educator',
          'Educational Video Producer',
          'User Community Facilitator',
          'Training Effectiveness Analyst'
        ]
      },
      {
        name: 'Escalation Management Agent',
        description: 'Complex issue resolution and retention',
        agents: [
          'Priority Issue Identifier',
          'Executive Response Coordinator',
          'Complex Problem Solver',
          'Customer Retention Specialist',
          'Cross-Functional Coordinator',
          'Root Cause Analyst',
          'Policy Exception Manager',
          'Service Recovery Specialist',
          'Escalation Process Designer'
        ]
      },
      {
        name: 'Support Analytics Agent',
        description: 'Performance measurement and optimization',
        agents: [
          'Support Metrics Designer',
          'Performance Dashboard Creator',
          'Quality Assessment Specialist',
          'Trend Analysis Expert',
          'Customer Effort Analyst',
          'Predictive Support Modeler',
          'Agent Performance Analyst',
          'Benchmark Comparison Specialist',
          'Data-Driven Improvement Identifier'
        ]
      },
      {
        name: 'Knowledge Base Agent',
        description: 'Knowledge management and content optimization',
        agents: [
          'Knowledge Structure Architect',
          'Content Writer',
          'Knowledge Base Administrator',
          'Article Quality Controller',
          'Search Optimization Specialist',
          'Usage Analytics Expert',
          'Knowledge Gap Identifier',
          'Version Control Manager',
          'Knowledge Sharing Facilitator'
        ]
      },
      {
        name: 'Customer Feedback Agent',
        description: 'Voice of customer capture and analysis',
        agents: [
          'Survey Designer',
          'Sentiment Analysis Expert',
          'Voice of Customer Program Manager',
          'Feedback Classification Specialist',
          'Qualitative Researcher',
          'Closed-Loop Process Manager',
          'Insight Communication Specialist',
          'Feedback Technology Administrator',
          'Customer Panel Coordinator'
        ]
      },
      {
        name: 'Support Operations Agent',
        description: 'Support process and workforce management',
        agents: [
          'Workforce Management Specialist',
          'Quality Assurance Lead',
          'Support Tools Administrator',
          'Process Documentation Specialist',
          'Training Program Designer',
          'Performance Coaching Coordinator',
          'Support Budget Manager',
          'Vendor Management Specialist',
          'Service Level Agreement Monitor'
        ]
      },
      {
        name: 'Proactive Service Agent',
        description: 'Preventive support and customer success',
        agents: [
          'Early Warning System Designer',
          'Usage Pattern Analyst',
          'Outage Communication Specialist',
          'Product Education Campaigner',
          'Customer Health Scoring Expert',
          'Preventive Outreach Coordinator',
          'Seasonal Readiness Planner',
          'Product Feedback Liaison',
          'Customer Success Path Designer'
        ]
      }
    ]
  },
  'innovation-rd': {
    leader: {
      name: 'David Okafor',
      title: 'Innovation & R&D',
      personality: 'The Loyalist',
      enneagramType: 'Type 6',
      description: 'The loyal but questioning innovation leader who balances breakthrough thinking with practical implementation. He\'s developed a risk-calibrated innovation portfolio that\'s already delivered two market-changing products while eliminating wasteful moonshots.',
      avatar: '👨‍🔬',
      color: 'bg-indigo-500'
    },
    teams: [
      {
        name: 'Trend Scouting Agent',
        description: 'Future technology and market trend identification',
        agents: [
          'Technology Horizon Scanner',
          'Academic Research Liaison',
          'Startup Ecosystem Monitor',
          'Patent Landscape Analyst',
          'Future Scenario Planner',
          'Cross-Industry Innovation Scout',
          'Technology Adoption Curve Analyst',
          'Venture Capital Activity Monitor',
          'Technology Ethics Forecaster'
        ]
      },
      {
        name: 'Ideation Agent',
        description: 'Creative thinking and idea management',
        agents: [
          'Creative Thinking Facilitator',
          'Idea Management System Administrator',
          'Concept Evaluation Specialist',
          'Cross-Functional Workshop Coordinator',
          'Customer Co-Creation Lead',
          'Insight Translation Expert',
          'Idea Prioritization Facilitator',
          'Design Thinking Coach',
          'Opportunity Framing Specialist'
        ]
      },
      {
        name: 'Intellectual Property Agent',
        description: 'IP strategy and protection',
        agents: [
          'Patent Strategy Developer',
          'Prior Art Researcher',
          'Patent Application Specialist',
          'IP Portfolio Manager',
          'Competitive IP Analyst',
          'Licensing Opportunity Identifier',
          'Trademark Protection Specialist',
          'Trade Secret Security Manager',
          'IP Litigation Support Coordinator'
        ]
      },
      {
        name: 'Research Agent',
        description: 'Scientific research and methodology',
        agents: [
          'Laboratory Research Coordinator',
          'Scientific Literature Analyst',
          'Research Methodology Designer',
          'Data Collection Specialist',
          'Statistical Analysis Expert',
          'Grant Proposal Developer',
          'Scientific Collaboration Facilitator',
          'Research Ethics Compliance Manager',
          'Advanced Instrumentation Specialist'
        ]
      },
      {
        name: 'Prototype Development Agent',
        description: 'Rapid prototyping and proof of concept',
        agents: [
          'Rapid Prototyping Specialist',
          'Technical Feasibility Assessor',
          'User Testing Coordinator',
          'Materials Selection Expert',
          'Design for Manufacturing Specialist',
          'Cost Modeling Analyst',
          'Prototype Documentation Manager',
          'Iterative Design Facilitator',
          'Proof of Concept Demonstrator'
        ]
      },
      {
        name: 'Technology Partnerships Agent',
        description: 'External collaboration and partnerships',
        agents: [
          'Partnership Strategy Developer',
          'Academic Partnership Coordinator',
          'Startup Engagement Specialist',
          'Consortium Participation Manager',
          'Licensing Negotiation Expert',
          'Joint Development Agreement Specialist',
          'Open Innovation Platform Manager',
          'Partnership Performance Analyst',
          'Technology Transfer Facilitator'
        ]
      },
      {
        name: 'Innovation Portfolio Agent',
        description: 'Portfolio strategy and resource allocation',
        agents: [
          'Portfolio Strategy Developer',
          'Resource Allocation Specialist',
          'Risk Diversification Expert',
          'Stage-Gate Process Manager',
          'Portfolio Visualization Designer',
          'Innovation Metrics Developer',
          'Project Interdependency Mapper',
          'Portfolio Review Facilitator',
          'Innovation Accounting Specialist'
        ]
      },
      {
        name: 'Commercialization Agent',
        description: 'Innovation to market transition',
        agents: [
          'Market Validation Specialist',
          'Scaling Strategy Developer',
          'Pricing Model Designer',
          'Go-to-Market Planning Expert',
          'Early Adopter Program Manager',
          'Business Model Innovation Specialist',
          'Technology Transfer Coordinator',
          'Launch Readiness Assessor',
          'Post-Launch Monitoring Specialist'
        ]
      },
      {
        name: 'Future-casting Agent',
        description: 'Long-term strategic forecasting',
        agents: [
          'Long-Range Technology Forecaster',
          'Scenario Planning Facilitator',
          'Societal Trend Analyst',
          'Regulatory Horizon Scanner',
          'Disruptive Technology Assessor',
          'Demographic Shift Analyst',
          'Resources and Sustainability Forecaster',
          'Geopolitical Risk Analyst',
          'Next-Generation Needs Identifier'
        ]
      }
    ]
  },
  'sales': {
    leader: {
      name: 'Sofia Rodriguez',
      title: 'Sales',
      personality: 'The Enthusiast',
      enneagramType: 'Type 7',
      description: 'The enthusiastic opportunity finder who turns every conversation into a journey of possibilities. She\'s already revamped your sales pipeline to focus on high-probability opportunities while creating contagious energy that\'s improved close rates by 42%.',
      avatar: '👩‍💼',
      color: 'bg-red-500'
    },
    teams: [
      {
        name: 'Partner Agent',
        description: 'Strategic partnerships and alliances',
        agents: [
          'Strategic Alliance Scout',
          'Partnership Negotiator',
          'Alliance Performance Analyst',
          'Partner Onboarding Specialist',
          'Relationship Manager',
          'Legal Liaison',
          'Market Expansion Lead',
          'Technology Integrator',
          'Competitive Benchmark Analyst'
        ]
      },
      {
        name: 'Procurement Agent',
        description: 'Strategic sourcing and vendor management',
        agents: [
          'Contract Strategist',
          'Supplier Vetting Specialist',
          'Negotiation Expert',
          'Compliance Auditor',
          'Inventory Optimizer',
          'Risk Assessor',
          'Vendor Relationship Manager',
          'Budget Analyst',
          'Technology Procurement Lead'
        ]
      },
      {
        name: 'Pre-Sales Agent',
        description: 'Lead generation and qualification',
        agents: [
          'Lead Generation Specialist',
          'Qualification Analyst',
          'Communication Coach',
          'Market Research Lead',
          'Demo Scheduler',
          'Objection Handler',
          'CRM Integrator',
          'Competitive Positioning Expert',
          'Follow-Up Strategist'
        ]
      },
      {
        name: 'Customer Insight Agent',
        description: 'Customer intelligence and market analysis',
        agents: [
          'Customer Needs Analyst',
          'Market Trend Forecaster',
          'Data Scientist',
          'Feedback Collector',
          'Persona Developer',
          'Competitive Intelligence Lead',
          'Behavioral Psychologist',
          'Industry Specialist',
          'Trend Implementation Strategist'
        ]
      },
      {
        name: 'Sales Operations Agent',
        description: 'Sales process optimization and support',
        agents: [
          'Documentation Specialist',
          'Process Optimizer',
          'Data Entry Expert',
          'Reporting Analyst',
          'Compliance Checker',
          'Scheduling Coordinator',
          'Budget Tracker',
          'Technology Troubleshooter',
          'Training Facilitator'
        ]
      },
      {
        name: 'Technical Sales Agent',
        description: 'Technical solution selling',
        agents: [
          'Product Expert',
          'Demo Designer',
          'Technical Trainer',
          'Solution Architect',
          'Integration Specialist',
          'Troubleshooting Lead',
          'Proof-of-Concept Manager',
          'Competitive Tech Analyst',
          'Innovation Scout'
        ]
      },
      {
        name: 'Account Manager',
        description: 'Customer relationship and growth management',
        agents: [
          'Relationship Builder',
          'Retention Specialist',
          'Upsell Strategist',
          'Customer Advocate',
          'Feedback Loop Manager',
          'Account Health Monitor',
          'Renewal Expert',
          'Cross-Functional Liaison',
          'Loyalty Program Lead'
        ]
      },
      {
        name: 'Legal & Compliance Agent',
        description: 'Sales legal support and compliance',
        agents: [
          'Regulatory Expert',
          'Contract Reviewer',
          'Compliance Auditor',
          'Risk Assessor',
          'Litigation Prevention Lead',
          'Data Privacy Specialist',
          'Ethics Advisor',
          'Training Coordinator',
          'Policy Developer'
        ]
      },
      {
        name: 'Customer Success Agent',
        description: 'Customer onboarding and success management',
        agents: [
          'Onboarding Specialist',
          'Satisfaction Survey Lead',
          'Issue Resolver',
          'Value Realization Coach',
          'Retention Strategist',
          'Referral Champion',
          'Training Facilitator',
          'Success Metrics Analyst',
          'Escalation Manager'
        ]
      }
    ]
  },
  'governance-compliance': {
    leader: {
      name: 'Marcus Bennett',
      title: 'Governance & Compliance',
      personality: 'The Challenger',
      enneagramType: 'Type 8',
      description: 'The challenging but principled guardian who transforms compliance from a restriction into a competitive advantage. He\'s already identified three regulatory trends you can leverage before competitors even notice the change.',
      avatar: '👨‍⚖️',
      color: 'bg-gray-700'
    },
    teams: [
      {
        name: 'Corporate Governance Agent',
        description: 'Board relations and governance structure',
        agents: [
          'Board Relations Coordinator',
          'Shareholder Communication Specialist',
          'Governance Structure Designer',
          'Voting Process Manager',
          'Corporate Secretary',
          'Annual Meeting Coordinator',
          'Committee Management Specialist',
          'Governance Policy Developer',
          'Director Onboarding Facilitator'
        ]
      },
      {
        name: 'Enterprise Risk Governance Agent',
        description: 'Enterprise-wide risk management',
        agents: [
          'Risk Appetite Framework Developer',
          'Risk Committee Liaison',
          'Risk Culture Champion',
          'Scenario Planning Specialist',
          'Risk Control Self-Assessment Coordinator',
          'Risk Evaluation Methodologist',
          'Risk Governance Systems Manager',
          'Risk Policy Developer',
          'Strategic Risk Advisor'
        ]
      },
      {
        name: 'Ethics & Integrity Agent',
        description: 'Organizational ethics and integrity',
        agents: [
          'Ethics Framework Developer',
          'Values Definition Specialist',
          'Ethics Training Designer',
          'Ethics Helpline Manager',
          'Ethics Investigation Coordinator',
          'Integrity Measurement Specialist',
          'Ethics Communication Expert',
          'Culture Assessment Lead',
          'Ethical Decision-Making Facilitator'
        ]
      },
      {
        name: 'Regulatory Affairs Agent',
        description: 'Regulatory compliance and relationships',
        agents: [
          'Regulatory Change Monitor',
          'Compliance Implementation Specialist',
          'Regulatory Reporting Coordinator',
          'Regulatory Relationship Manager',
          'Licensing Specialist',
          'Regulatory Strategy Developer',
          'Regulatory Technology Manager',
          'Regulatory Knowledge Lead',
          'Impact Assessment Specialist'
        ]
      },
      {
        name: 'Data Governance Agent',
        description: 'Data management and governance',
        agents: [
          'Data Taxonomy Developer',
          'Data Ownership Coordinator',
          'Data Quality Manager',
          'Data Policy Creator',
          'Data Access Controller',
          'Data Lifecycle Manager',
          'Data Standards Specialist',
          'Data Compliance Monitor',
          'Data Governance Committee Facilitator'
        ]
      },
      {
        name: 'Corporate Social Responsibility Agent',
        description: 'Social responsibility and impact',
        agents: [
          'CSR Strategy Developer',
          'Social Impact Assessment Specialist',
          'Community Engagement Coordinator',
          'Charitable Foundation Manager',
          'Employee Volunteering Lead',
          'Social Investment Analyst',
          'CSR Reporting Specialist',
          'Stakeholder Engagement Facilitator',
          'Social Innovation Developer'
        ]
      },
      {
        name: 'Audit & Assurance Agent',
        description: 'Internal audit and assurance',
        agents: [
          'Internal Audit Program Designer',
          'Audit Methodology Specialist',
          'Control Testing Coordinator',
          'Audit Findings Reporter',
          'Remediation Tracking Lead',
          'External Auditor Liaison',
          'Specialized Audit Expert',
          'Audit Analytics Developer',
          'Continuous Monitoring Specialist'
        ]
      },
      {
        name: 'Policy Management Agent',
        description: 'Policy development and management',
        agents: [
          'Policy Framework Architect',
          'Policy Writer',
          'Policy Communication Specialist',
          'Policy Repository Manager',
          'Policy Compliance Monitor',
          'Policy Impact Assessor',
          'Policy Training Developer',
          'Policy Review Coordinator',
          'Policy Simplification Expert'
        ]
      },
      {
        name: 'Privacy & Data Protection Agent',
        description: 'Privacy compliance and data protection',
        agents: [
          'Privacy Framework Developer',
          'Data Protection Impact Assessor',
          'Privacy Training Designer',
          'Privacy Technology Specialist',
          'Privacy Incident Response Coordinator',
          'Privacy Compliance Monitor',
          'Privacy Rights Fulfillment Manager',
          'Privacy Policy Expert',
          'Cross-Border Data Transfer Specialist'
        ]
      }
    ]
  },
  'external-relations': {
    leader: {
      name: 'Aisha Al-Farsi',
      title: 'External Relations',
      personality: 'The Peacemaker',
      enneagramType: 'Type 9',
      description: 'The diplomatic consensus-builder who transforms potential conflicts into productive partnerships. She\'s already turned your three most vocal critics into collaborative partners who are now publicly advocating for your initiatives.',
      avatar: '👩‍🎓',
      color: 'bg-pink-500'
    },
    teams: [
      {
        name: 'Government Relations Agent',
        description: 'Government engagement and advocacy',
        agents: [
          'Legislative Monitoring Specialist',
          'Government Engagement Strategist',
          'Public Policy Advocate',
          'Regulatory Relationship Manager',
          'Legislative Proposal Analyzer',
          'Government Program Coordinator',
          'Regulatory Comment Specialist',
          'Political Risk Assessor',
          'Government Communication Expert'
        ]
      },
      {
        name: 'Industry Association Agent',
        description: 'Industry collaboration and standards',
        agents: [
          'Association Membership Manager',
          'Industry Standards Contributor',
          'Committee Participation Coordinator',
          'Best Practice Sharing Facilitator',
          'Industry Event Representative',
          'Association Leadership Liaison',
          'Industry Alignment Specialist',
          'Industry Research Collaborator',
          'Association Value Optimizer'
        ]
      },
      {
        name: 'Community Relations Agent',
        description: 'Local community engagement',
        agents: [
          'Community Need Assessor',
          'Local Engagement Strategist',
          'Community Investment Manager',
          'Community Event Coordinator',
          'Local Leadership Liaison',
          'Community Impact Measurer',
          'Community Feedback Specialist',
          'Neighborhood Relationship Builder',
          'Local Issue Response Coordinator'
        ]
      },
      {
        name: 'Investor Relations Agent',
        description: 'Investor communication and relations',
        agents: [
          'Investor Communication Strategist',
          'Financial Disclosure Specialist',
          'Investor Meeting Coordinator',
          'Shareholder Inquiry Manager',
          'Analyst Relationship Builder',
          'Investment Story Developer',
          'Investor Presentation Creator',
          'Shareholder Analysis Expert',
          'IR Technology Manager'
        ]
      },
      {
        name: 'Strategic Alliances Agent',
        description: 'Strategic partnership management',
        agents: [
          'Alliance Strategy Developer',
          'Partnership Opportunity Identifier',
          'Alliance Agreement Specialist',
          'Alliance Governance Designer',
          'Cross-Organization Facilitator',
          'Alliance Performance Measurer',
          'Alliance Risk Manager',
          'Partner Onboarding Specialist',
          'Alliance Portfolio Manager'
        ]
      },
      {
        name: 'Media Relations Agent',
        description: 'Media strategy and relationship management',
        agents: [
          'Media Strategy Developer',
          'Press Release Specialist',
          'Media Contact Database Manager',
          'Interview Preparation Coach',
          'Media Monitoring Coordinator',
          'Story Placement Specialist',
          'Media Training Facilitator',
          'Media Crisis Response Expert',
          'Media Analytics Specialist'
        ]
      },
      {
        name: 'NGO & Nonprofit Relations Agent',
        description: 'NGO partnerships and collaboration',
        agents: [
          'NGO Landscape Analyst',
          'Partnership Development Specialist',
          'Collaborative Initiative Designer',
          'Nonprofit Engagement Strategist',
          'Social Impact Partnership Manager',
          'Shared Value Initiative Coordinator',
          'Grant Program Manager',
          'NGO Communication Specialist',
          'Impact Assessment Expert'
        ]
      },
      {
        name: 'International Relations Agent',
        description: 'Global relationship management',
        agents: [
          'Global Market Relationship Developer',
          'Cultural Protocol Specialist',
          'International Delegation Coordinator',
          'Global Issue Monitoring Specialist',
          'Cross-Border Partnership Manager',
          'International Compliance Navigator',
          'International Event Representative',
          'Global Communication Specialist',
          'International Risk Assessor'
        ]
      },
      {
        name: 'Reputation Management Agent',
        description: 'Brand reputation and perception management',
        agents: [
          'Reputation Strategy Developer',
          'Reputation Measurement Specialist',
          'Social Listening Coordinator',
          'Reputation Risk Identifier',
          'Online Presence Manager',
          'Brand Reputation Advocate',
          'Reputation Recovery Specialist',
          'Stakeholder Perception Analyst',
          'Reputation Narrative Developer'
        ]
      }
    ]
  }
};
