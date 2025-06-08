import { FamilyMemberData } from '@/types/family';

export const miguelSantosData: FamilyMemberData = {
  leader: {
    name: 'Miguel Santos',
    title: 'Chief Marketing Officer',
    enneagramType: 'Type 7 - The Enthusiast',
    personality: 'Creative storyteller who amplifies authentic voices',
    motto: 'Every story deserves to be heard',
    background: 'Raised in São Paulo by a journalist mother and musician father, Miguel learned that the most powerful marketing comes from authentic storytelling that resonates with people\'s dreams and aspirations. Growing up in Brazil\'s vibrant cultural scene, he understood that the best campaigns don\'t sell products—they create movements. After studying Communications at USP and working with global advertising agencies, he developed his approach: marketing should feel like art that happens to drive business results. His Type 7 Enthusiast nature drives him to find the excitement and possibility in every brand story, believing that when people feel genuinely inspired, everything else follows naturally.'
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
