
import { FamilyMemberData } from '@/types/family';
import { contentMarketingDivision } from './miguelSantos/contentMarketing';
import { brandManagementDivision } from './miguelSantos/brandManagement';
import { publicRelationsDivision } from './miguelSantos/publicRelations';
import { socialMediaMarketingDivision } from './miguelSantos/socialMediaMarketing';
import { eventMarketingDivision } from './miguelSantos/eventMarketing';
import { partnershipMarketingDivision } from './miguelSantos/partnershipMarketing';
import { productMarketingDivision } from './miguelSantos/productMarketing';
import { marketingTechnologyDivision } from './miguelSantos/marketingTechnology';

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
        },
        {
          name: 'Elena Petrov',
          specialization: 'Consumer Insights',
          achievement: 'Conducted research revealing customer needs leading to $50M product line.',
          background: 'Russian behavioral researcher with expertise in consumer psychology.',
          signature_method: 'Deep Consumer Psychology',
          cultural_expertise: 'Eastern European consumer behavior and market dynamics'
        },
        {
          name: 'Raj Patel',
          specialization: 'Market Segmentation',
          achievement: 'Identified micro-segments increasing targeted campaign effectiveness by 60%.',
          background: 'Indian market researcher with expertise in demographic analysis.',
          signature_method: 'Precision Market Segmentation',
          cultural_expertise: 'South Asian market dynamics and demographic analysis'
        },
        {
          name: 'Sophie Laurent',
          specialization: 'Competitive Intelligence',
          achievement: 'Analyzed competitor strategies enabling market share gains of 15%.',
          background: 'French competitive analyst with expertise in strategic market intelligence.',
          signature_method: 'Strategic Competitive Analysis',
          cultural_expertise: 'European competitive landscape and market intelligence'
        },
        {
          name: 'Kenji Nakamura',
          specialization: 'Survey Design',
          achievement: 'Designed surveys with 85% response rates providing actionable insights.',
          background: 'Japanese research methodologist with expertise in survey optimization.',
          signature_method: 'Scientific Survey Methodology',
          cultural_expertise: 'Asian research culture and survey design principles'
        },
        {
          name: 'Isabella Romano',
          specialization: 'Focus Group Moderation',
          achievement: 'Moderated sessions revealing insights that shaped $100M campaign strategy.',
          background: 'Italian qualitative researcher with expertise in group dynamics.',
          signature_method: 'Insightful Group Facilitation',
          cultural_expertise: 'European qualitative research and group psychology'
        },
        {
          name: 'Omar Al-Rashid',
          specialization: 'Data Visualization',
          achievement: 'Created dashboards improving stakeholder decision-making speed by 40%.',
          background: 'UAE data visualization expert with expertise in insights presentation.',
          signature_method: 'Compelling Data Storytelling',
          cultural_expertise: 'Middle Eastern data culture and visual communication'
        },
        {
          name: 'Grace Wong',
          specialization: 'Market Testing',
          achievement: 'Conducted tests preventing $20M in failed product launches.',
          background: 'Singaporean testing specialist with expertise in market validation.',
          signature_method: 'Rigorous Market Validation',
          cultural_expertise: 'Asian market testing culture and product validation'
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
        },
        {
          name: 'Maya Digital',
          specialization: 'Paid Advertising',
          achievement: 'Optimized ad campaigns achieving 300% ROI improvement.',
          background: 'Indian digital advertiser with expertise in performance marketing.',
          signature_method: 'Performance-Driven Advertising',
          cultural_expertise: 'Asian digital advertising and paid media optimization'
        },
        {
          name: 'Alex Turner',
          specialization: 'Email Marketing',
          achievement: 'Designed email campaigns with 45% open rates and 12% conversion.',
          background: 'British email marketing specialist with expertise in automation.',
          signature_method: 'Intelligent Email Automation',
          cultural_expertise: 'European email marketing and CRM optimization'
        },
        {
          name: 'Lucia Martinez',
          specialization: 'Marketing Automation',
          achievement: 'Implemented automation workflows increasing lead nurturing by 200%.',
          background: 'Spanish automation expert with expertise in customer journey mapping.',
          signature_method: 'Customer Journey Automation',
          cultural_expertise: 'European marketing technology and automation'
        },
        {
          name: 'Ryan O\'Sullivan',
          specialization: 'Web Analytics',
          achievement: 'Analyzed user behavior improving website conversion by 35%.',
          background: 'Irish analytics specialist with expertise in user experience optimization.',
          signature_method: 'Behavioral Analytics Optimization',
          cultural_expertise: 'European web analytics and user behavior analysis'
        },
        {
          name: 'Tomoko Sato',
          specialization: 'Mobile Marketing',
          achievement: 'Developed mobile campaigns achieving 25% higher engagement than desktop.',
          background: 'Japanese mobile marketing expert with expertise in app marketing.',
          signature_method: 'Mobile-First Marketing',
          cultural_expertise: 'Asian mobile culture and app marketing strategies'
        },
        {
          name: 'Carlos Mendez',
          specialization: 'Conversion Optimization',
          achievement: 'Optimized landing pages increasing conversion rates by 50%.',
          background: 'Mexican conversion specialist with expertise in A/B testing.',
          signature_method: 'Scientific Conversion Testing',
          cultural_expertise: 'Latin American digital behavior and conversion optimization'
        },
        {
          name: 'Petra Novak',
          specialization: 'Marketing Technology',
          achievement: 'Integrated martech stack reducing campaign deployment time by 60%.',
          background: 'Czech marketing technologist with expertise in platform integration.',
          signature_method: 'Martech Stack Optimization',
          cultural_expertise: 'Eastern European technology adoption and marketing automation'
        }
      ]
    },
    contentMarketingDivision,
    brandManagementDivision,
    publicRelationsDivision,
    socialMediaMarketingDivision,
    eventMarketingDivision,
    partnershipMarketingDivision,
    productMarketingDivision,
    marketingTechnologyDivision
  ]
};
