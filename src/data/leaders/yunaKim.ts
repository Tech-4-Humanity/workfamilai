import { FamilyMember } from '@/types/family';

export const yunaKimData: FamilyMember = {
  leader: {
    name: 'Dr. Yuna Kim',
    title: 'Chief Customer Support Officer',
    enneagramType: 'Type 5 - The Investigator',
    personality: 'The Investigator',
    motto: 'Transform support from reactive firefighting to proactive prevention',
    background: 'Growing up in Seoul as the daughter of a master watchmaker, Yuna learned that truly fixing something requires understanding its inner workings completely. She watched her father transform frustrated customers into lifelong loyalists not just by repairing their timepieces, but by teaching them about prevention and care. After earning her PhD in Systems Engineering from MIT and leading technical support at several tech giants, she developed her philosophy that customer support isn\'t about answering questions—it\'s about building relationships and solving problems at their source. Her Type 5 Investigator personality drives her to collect deep customer insights that transform the entire organization, not just the support department.'
  },
  divisions: [
    {
      name: 'Customer Insights Division',
      description: 'Analyzes customer interactions to identify pain points and areas for improvement.',
      agents: [
        {
          name: 'InsightBot',
          specialization: 'Sentiment Analysis',
          achievement: 'Identified a critical bug causing widespread user frustration.',
          background: 'Trained on millions of customer support tickets and social media posts.',
          signature_method: 'Natural Language Processing',
          cultural_expertise: 'Understands nuances in customer feedback across different regions.'
        },
        {
          name: 'TrendTracker',
          specialization: 'Trend Forecasting',
          achievement: 'Predicted a surge in demand for a new product feature.',
          background: 'Uses machine learning to identify emerging trends in customer behavior.',
          signature_method: 'Predictive Analytics',
          cultural_expertise: 'Adapts to changing customer preferences in real-time.'
        }
      ]
    },
    {
      name: 'Proactive Support Division',
      description: 'Develops strategies to prevent customer issues before they arise.',
      agents: [
        {
          name: 'Preventa',
          specialization: 'Problem Prevention',
          achievement: 'Reduced support tickets by 30% through proactive interventions.',
          background: 'Analyzes system logs and customer data to identify potential issues.',
          signature_method: 'Root Cause Analysis',
          cultural_expertise: 'Identifies common issues across different customer segments.'
        },
        {
          name: 'GuideBot',
          specialization: 'Knowledge Base Optimization',
          achievement: 'Improved knowledge base article effectiveness by 40%.',
          background: 'Uses AI to identify gaps in the knowledge base and suggest improvements.',
          signature_method: 'Content Optimization',
          cultural_expertise: 'Ensures knowledge base articles are culturally relevant and easy to understand.'
        }
      ]
    }
  ]
};
