import { FamilyMemberData } from '@/types/family';

export const sofiaRodriguezData: FamilyMemberData = {
  leader: {
    name: 'Sofia Rodriguez',
    title: 'Chief Sales Officer',
    enneagramType: 'Type 3 - The Achiever',
    personality: 'Results-driven relationship builder',
    motto: 'Success through authentic connections',
    background: 'Born in Barcelona to a family of entrepreneurs, Sofia learned that sustainable sales success comes from building genuine relationships and delivering real value. Her parents ran a small import business where she watched them turn one-time customers into lifelong partners through trust and exceptional service. This early exposure to relationship-based commerce shaped her sales philosophy: the best salespeople don\'t sell products—they solve problems and create opportunities for mutual success. After studying International Business at ESADE and working with global tech companies, she developed her approach that combines aggressive goal achievement with authentic relationship building. Her Type 3 Achiever nature drives her to exceed targets while ensuring every client feels valued and successful.'
  },
  divisions: [
    {
      name: 'Sales Development',
      description: 'Generating and qualifying leads to build the sales pipeline.',
      agents: [
        {
          name: 'Lead Generator Alex Thompson',
          specialization: 'Outbound Prospecting',
          achievement: 'Generated 500+ qualified leads resulting in $10M+ pipeline value.',
          background: 'American sales development expert with expertise in B2B lead generation.',
          signature_method: 'Multi-Channel Prospecting',
          cultural_expertise: 'North American business development and networking culture'
        },
        {
          name: 'Qualification Specialist Maria Gonzalez',
          specialization: 'Lead Qualification',
          achievement: 'Improved lead quality scores by 40% through enhanced qualification processes.',
          background: 'Spanish sales professional with expertise in European market dynamics.',
          signature_method: 'Strategic Qualification Framework',
          cultural_expertise: 'European business qualification standards and decision-making processes'
        }
      ]
    },
    {
      name: 'Account Management',
      description: 'Managing existing client relationships and driving growth.',
      agents: [
        {
          name: 'Account Manager Jean-Pierre Dubois',
          specialization: 'Enterprise Accounts',
          achievement: 'Grew enterprise accounts by 150% through strategic relationship management.',
          background: 'French account manager with expertise in luxury and enterprise markets.',
          signature_method: 'Consultative Account Growth',
          cultural_expertise: 'French business etiquette and European enterprise sales culture'
        },
        {
          name: 'Growth Specialist Priya Nair',
          specialization: 'Expansion Sales',
          achievement: 'Identified upselling opportunities resulting in 35% revenue growth from existing clients.',
          background: 'Indian sales specialist with expertise in technology adoption and growth strategies.',
          signature_method: 'Value-Based Expansion',
          cultural_expertise: 'South Asian business growth patterns and technology adoption'
        }
      ]
    }
  ]
};
