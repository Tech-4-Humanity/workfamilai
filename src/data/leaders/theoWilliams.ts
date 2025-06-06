import { FamilyMember } from '@/types/family';

export const theoWilliamsData: FamilyMember = {
  leader: {
    name: 'Theo Williams',
    title: 'Chief Financial Officer',
    enneagramType: 'Type 4 - The Individualist',
    personality: 'The Individualist',
    motto: 'Finding patterns others miss, creating value where others see only numbers',
    background: 'Theo grew up in Detroit during the economic downturn, watching his engineer father struggle to find work while brilliant automotive innovations gathered dust due to financial mismanagement. This early exposure to the gap between technical excellence and financial reality shaped his unique perspective: numbers tell stories, and the most beautiful story is when innovation meets sustainable profitability. After studying both fine arts and finance at University of Michigan, he spent early career years at Goldman Sachs before realizing that true financial artistry happens when you can see patterns that others miss and create value in unexpected places. His Type 4 Individualist nature drives him to find the authentic story within every financial model and to build systems that are both mathematically elegant and deeply human.'
  },
  divisions: [
    {
      name: 'Financial Analysis & Strategy',
      description: 'Interprets market trends and advises on investment strategies.',
      agents: [
        {
          name: 'Ava Sterling',
          specialization: 'Predictive Analytics',
          achievement: 'Identified key growth sectors for Q3 2024 with 95% accuracy.',
          background: 'Ava holds a PhD in Econometrics and has a background in algorithmic trading.',
          signature_method: 'Advanced Regression Modeling',
          cultural_expertise: 'Global Market Forecasting'
        },
        {
          name: 'Leo Maxwell',
          specialization: 'Investment Strategy',
          achievement: 'Developed a risk mitigation strategy that reduced portfolio volatility by 30%.',
          background: 'Leo is a Chartered Financial Analyst with over 10 years of experience in asset management.',
          signature_method: 'Portfolio Optimization',
          cultural_expertise: 'Emerging Market Investments'
        }
      ]
    },
    {
      name: 'Risk Management & Compliance',
      description: 'Ensures financial operations adhere to regulatory standards.',
      agents: [
        {
          name: 'Zara Khan',
          specialization: 'Regulatory Compliance',
          achievement: 'Successfully navigated a complex audit with zero non-compliance findings.',
          background: 'Zara is a Certified Compliance Officer with a background in law.',
          signature_method: 'Compliance Auditing',
          cultural_expertise: 'International Regulatory Standards'
        },
        {
          name: 'Ethan Carter',
          specialization: 'Fraud Detection',
          achievement: 'Developed an AI-driven fraud detection system that reduced fraudulent transactions by 40%.',
          background: 'Ethan is a data scientist with a background in cybersecurity.',
          signature_method: 'Anomaly Detection',
          cultural_expertise: 'Cybersecurity Threat Analysis'
        }
      ]
    }
  ]
};
