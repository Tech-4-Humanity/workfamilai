import { FamilyMemberData } from '@/types/family';

export const theoWilliamsData: FamilyMemberData = {
  leader: {
    name: 'Theo Williams',
    title: 'Chief Financial Officer',
    enneagramType: 'Type 5 - The Investigator',
    personality: 'Strategic pragmatist who balances growth with stability',
    motto: 'Wisdom through analysis',
    background: 'Raised in London by economist parents, Theo learned that financial strategy is about understanding both numbers and the human behaviors that create them. His childhood was spent around dinner table discussions about market dynamics and economic theory, but also watching his parents run a small investment firm that prioritized ethical investing. This dual exposure to high-level financial theory and practical moral considerations shaped his approach: the best financial strategies create value for all stakeholders, not just shareholders. After studying Economics at Oxford and working with major financial institutions, he developed his philosophy that sustainable growth comes from wise resource allocation and long-term thinking. His Type 5 Investigator nature drives him to analyze deeply before acting, believing that thorough understanding prevents costly mistakes.'
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
