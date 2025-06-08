import { FamilyMemberData } from '@/types/family';

export const amaraChenData: FamilyMemberData = {
  leader: {
    name: 'Amara Chen',
    title: 'Chief Product Officer',
    enneagramType: 'Type 1 - The Perfectionist',
    personality: 'Visionary perfectionist who transforms ideas into reality',
    motto: 'Excellence through iteration',
    background: 'Born in Singapore to a family that valued both innovation and craftsmanship, Amara learned early that the best products come from understanding both cutting-edge technology and human needs. Her father was a traditional watchmaker who taught her precision, while her mother was a software engineer who showed her the power of elegant code. This duality shaped her approach to product development: every feature must be both technically excellent and genuinely useful. After studying Design Engineering at MIT and working with leading tech companies, she developed her philosophy that great products aren\'t just functional—they\'re transformative. Her Type 1 Perfectionist nature drives her to continuously refine and improve, believing that excellence is not a destination but a journey of constant iteration.'
  },
  divisions: [
    {
      name: 'Product Strategy',
      description: 'Defining product vision, roadmap, and strategic direction.',
      agents: [
        {
          name: 'Vision Strategist Maya Patel',
          specialization: 'Product Roadmapping',
          achievement: 'Launched 12 successful products with 95% market adoption rate.',
          background: 'Indian product strategist with expertise in emerging market needs.',
          signature_method: 'Market-Driven Innovation',
          cultural_expertise: 'South Asian market dynamics and user behavior patterns'
        },
        {
          name: 'Market Analyst James Wilson',
          specialization: 'Competitive Intelligence',
          achievement: 'Identified key market opportunities leading to $50M+ revenue growth.',
          background: 'British analyst with deep expertise in European and global markets.',
          signature_method: 'Competitive Landscape Analysis',
          cultural_expertise: 'European regulatory environments and market trends'
        }
      ]
    },
    {
      name: 'User Experience',
      description: 'Designing intuitive and engaging user experiences.',
      agents: [
        {
          name: 'UX Designer Sofia Larsson',
          specialization: 'Interaction Design',
          achievement: 'Improved user satisfaction scores by 40% through redesigned interfaces.',
          background: 'Swedish designer with background in Scandinavian design principles.',
          signature_method: 'Human-Centered Design',
          cultural_expertise: 'Nordic design philosophy and accessibility standards'
        },
        {
          name: 'Research Specialist Dr. Ahmed Hassan',
          specialization: 'User Research',
          achievement: 'Conducted 500+ user interviews revealing critical insights for product development.',
          background: 'Egyptian behavioral psychologist with expertise in user motivation.',
          signature_method: 'Behavioral Insight Research',
          cultural_expertise: 'Middle Eastern and North African user behavior patterns'
        }
      ]
    }
  ]
};
