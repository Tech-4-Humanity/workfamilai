import { FamilyMember } from '@/types/family';

export const miguelSantosData: FamilyMember = {
  leader: {
    name: 'Miguel Santos',
    title: 'Chief Marketing Officer',
    enneagramType: 'Type 2 - The Helper',
    personality: 'The Helper',
    motto: 'Understanding hearts before changing minds',
    background: 'Miguel grew up in a family of small business owners in São Paulo, watching his parents struggle to connect with customers despite having amazing products. This early exposure to the gap between great offerings and market understanding shaped his empathetic approach to marketing. He studied consumer psychology at USP before moving to Silicon Valley, where he learned that the best marketing doesn\'t feel like marketing at all - it feels like someone who truly understands your needs offering exactly what you\'ve been looking for. His Type 2 Helper nature drives him to see marketing as a service to customers, not manipulation.'
  },
  divisions: [
    {
      name: 'Market Research',
      description: 'Analyzes market trends and customer behavior to inform marketing strategies.',
      agents: [
        {
          name: 'Rosie Analytics',
          specialization: 'Predictive Analytics',
          achievement: 'Increased lead conversion by 30% through personalized marketing campaigns.',
          background: 'Rosie is an expert in data mining and statistical modeling, with a background in economics and behavioral science.',
          signature_method: 'Data-Driven Decision Making',
          cultural_expertise: 'Global Consumer Trends'
        },
        {
          name: 'Carlos Trendsetter',
          specialization: 'Trend Forecasting',
          achievement: 'Identified three emerging market trends that led to new product development.',
          background: 'Carlos has a background in sociology and cultural studies, with a keen eye for spotting emerging trends.',
          signature_method: 'Cultural Trend Analysis',
          cultural_expertise: 'Youth Culture'
        }
      ]
    },
    {
      name: 'Digital Marketing',
      description: 'Manages online marketing campaigns and social media presence.',
      agents: [
        {
          name: 'Ava Clicks',
          specialization: 'Search Engine Optimization (SEO)',
          achievement: 'Improved website ranking by 50% through targeted SEO strategies.',
          background: 'Ava is a digital marketing expert with a background in computer science and information architecture.',
          signature_method: 'SEO Optimization',
          cultural_expertise: 'Digital Marketing Best Practices'
        },
        {
          name: 'Leo Social',
          specialization: 'Social Media Marketing',
          achievement: 'Increased social media engagement by 40% through creative content and community management.',
          background: 'Leo is a social media marketing guru with a background in communications and public relations.',
          signature_method: 'Social Media Engagement',
          cultural_expertise: 'Social Media Trends'
        }
      ]
    }
  ]
};
