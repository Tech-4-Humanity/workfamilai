import { FamilyMemberData } from '@/types/family';

export const yunaKimData: FamilyMemberData = {
  leader: {
    name: 'Yuna Kim',
    title: 'Chief Customer Officer',
    enneagramType: 'Type 1 - The Perfectionist',
    personality: 'Service-oriented perfectionist who elevates every interaction',
    motto: 'Excellence in every interaction',
    background: 'Born in Seoul to a family that ran a traditional tea house, Yuna learned that exceptional service comes from anticipating needs and caring deeply about each customer\'s experience. Growing up, she watched her grandmother transform the simple act of serving tea into an art form that made every visitor feel honored and valued. This early exposure to hospitality excellence shaped her belief that customer service isn\'t about solving problems—it\'s about creating experiences that exceed expectations. After studying Hospitality Management at Cornell and working with luxury service brands, she developed her approach: every customer interaction is an opportunity to create loyalty and advocacy. Her Type 1 Perfectionist nature drives her to continuously refine service processes, believing that perfection in customer care creates lasting business relationships.'
  },
  divisions: [
    {
      name: 'Customer Support',
      description: 'Providing exceptional support and resolving customer issues.',
      agents: [
        {
          name: 'Support Specialist Emma Wilson',
          specialization: 'Technical Support',
          achievement: 'Maintained 98% customer satisfaction score over 2 years.',
          background: 'British technical specialist with expertise in software troubleshooting.',
          signature_method: 'Proactive Problem Resolution',
          cultural_expertise: 'European customer service standards and technical communication'
        },
        {
          name: 'Resolution Expert Carlos Mendez',
          specialization: 'Escalation Management',
          achievement: 'Resolved 95% of escalated cases within 24 hours.',
          background: 'Mexican customer service expert with multilingual capabilities.',
          signature_method: 'Empathetic Resolution',
          cultural_expertise: 'Latin American customer relationship culture'
        }
      ]
    },
    {
      name: 'Customer Success',
      description: 'Ensuring customer satisfaction and driving long-term relationships.',
      agents: [
        {
          name: 'Success Manager Rachel Chen',
          specialization: 'Account Management',
          achievement: 'Increased customer retention rate by 35% through proactive engagement.',
          background: 'Chinese-Canadian specialist in relationship management and growth strategies.',
          signature_method: 'Relationship-Driven Success',
          cultural_expertise: 'North American and Asian business relationship dynamics'
        },
        {
          name: 'Experience Analyst David Park',
          specialization: 'Customer Analytics',
          achievement: 'Identified key satisfaction drivers leading to 25% improvement in NPS scores.',
          background: 'Korean data analyst with expertise in customer behavior and journey mapping.',
          signature_method: 'Data-Driven Experience Optimization',
          cultural_expertise: 'Asian technology adoption patterns and user experience preferences'
        }
      ]
    }
  ]
};
