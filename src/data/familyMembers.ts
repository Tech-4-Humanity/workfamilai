
import { FamilyMember } from '@/types/family';
import { Shield, Users, Globe, Megaphone, Heart, Calculator, Headphones, Lightbulb, TrendingUp } from 'lucide-react';

// Calculate actual agent counts from leader data
import { amaraChenData } from './leaders/amaraChen';
import { marcusBennettData } from './leaders/marcusBennett';
import { aishaAlFarsiData } from './leaders/aishaAlFarsi';
import { miguelSantosData } from './leaders/miguelSantos';
import { priyaSharmaData } from './leaders/priyaSharma';
import { theoWilliamsData } from './leaders/theoWilliams';
import { yunaKimData } from './leaders/yunaKim';
import { davidOkaforData } from './leaders/davidOkafor';
import { sofiaRodriguezData } from './leaders/sofiaRodriguez';

// Helper function to count agents in divisions
const countAgents = (divisions: any[]) => {
  return divisions.reduce((total, division) => total + division.agents.length, 0);
};

export const familyMembers: FamilyMember[] = [
  {
    id: 'amara-chen',
    name: 'Amara Chen',
    title: 'Chief Product Officer',
    personality: 'Visionary perfectionist who transforms ideas into reality',
    enneagramType: 'Type 1 - The Perfectionist',
    motto: 'Excellence through iteration',
    background: 'Born in Singapore to a family that valued both innovation and craftsmanship, Amara learned early that the best products come from understanding both cutting-edge technology and human needs.',
    domainOverview: 'Product Development & Innovation',
    color: 'blue',
    icon: Users,
    description: 'Leading product strategy and development with a focus on user-centered design and technical excellence.',
    agentCount: countAgents(amaraChenData.divisions),
    avatar: '/placeholder-avatar-1.jpg'
  },
  {
    id: 'marcus-bennett',
    name: 'Marcus Bennett',
    title: 'Chief of Governance & Compliance',
    personality: 'Principled and strong-willed',
    enneagramType: 'Type 8 - The Challenger',
    motto: 'Protecting integrity through strength',
    background: 'Born in Atlanta to a family with deep roots in civil rights advocacy, Marcus developed a powerful sense of justice and ethical clarity.',
    domainOverview: 'Governance, Compliance & Risk Management',
    color: 'red',
    icon: Shield,
    description: 'Establishing robust governance frameworks and ensuring organizational integrity through comprehensive compliance programs.',
    agentCount: countAgents(marcusBennettData.divisions),
    avatar: '/placeholder-avatar-2.jpg'
  },
  {
    id: 'aisha-al-farsi',
    name: 'Aisha Al-Farsi',
    title: 'Chief of External Relations',
    personality: 'Diplomatic bridge-builder who connects diverse perspectives',
    enneagramType: 'Type 9 - The Peacemaker',
    motto: 'Unity through understanding',
    background: 'Growing up in Muscat as the daughter of a diplomat and a cultural anthropologist, Aisha learned that the strongest relationships are built on genuine understanding.',
    domainOverview: 'External Relations & Partnerships',
    color: 'green',
    icon: Globe,
    description: 'Managing strategic partnerships and external stakeholder relationships to drive organizational growth and collaboration.',
    agentCount: countAgents(aishaAlFarsiData.divisions),
    avatar: '/placeholder-avatar-3.jpg'
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    title: 'Chief Marketing Officer',
    personality: 'Creative storyteller who amplifies authentic voices',
    enneagramType: 'Type 7 - The Enthusiast',
    motto: 'Every story deserves to be heard',
    background: 'Raised in São Paulo by a journalist mother and musician father, Miguel learned that the most powerful marketing comes from authentic storytelling.',
    domainOverview: 'Marketing & Brand Strategy',
    color: 'purple',
    icon: Megaphone,
    description: 'Developing comprehensive marketing strategies and brand narratives that resonate with diverse audiences.',
    agentCount: countAgents(miguelSantosData.divisions),
    avatar: '/placeholder-avatar-4.jpg'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Chief People Officer',
    personality: 'Empathetic leader who nurtures human potential',
    enneagramType: 'Type 2 - The Helper',
    motto: 'People first, always',
    background: 'Born in Mumbai to a family of educators and social workers, Priya learned that organizational success flows from individual fulfillment.',
    domainOverview: 'Human Resources & People Development',
    color: 'pink',
    icon: Heart,
    description: 'Fostering talent development and creating inclusive workplace cultures that enable everyone to thrive.',
    agentCount: countAgents(priyaSharmaData.divisions),
    avatar: '/placeholder-avatar-5.jpg'
  },
  {
    id: 'theo-williams',
    name: 'Theo Williams',
    title: 'Chief Financial Officer',
    personality: 'Strategic pragmatist who balances growth with stability',
    enneagramType: 'Type 5 - The Investigator',
    motto: 'Wisdom through analysis',
    background: 'Raised in London by economist parents, Theo learned that financial strategy is about understanding both numbers and the human behaviors that create them.',
    domainOverview: 'Finance & Operations',
    color: 'amber',
    icon: Calculator,
    description: 'Managing financial strategy and operations to ensure sustainable growth and operational excellence.',
    agentCount: countAgents(theoWilliamsData.divisions),
    avatar: '/placeholder-avatar-6.jpg'
  },
  {
    id: 'yuna-kim',
    name: 'Yuna Kim',
    title: 'Chief Customer Officer',
    personality: 'Service-oriented perfectionist who elevates every interaction',
    enneagramType: 'Type 1 - The Perfectionist',
    motto: 'Excellence in every interaction',
    background: 'Born in Seoul to a family that ran a traditional tea house, Yuna learned that exceptional service comes from anticipating needs and caring deeply about each customer\'s experience.',
    domainOverview: 'Customer Experience & Support',
    color: 'teal',
    icon: Headphones,
    description: 'Delivering exceptional customer experiences and building lasting relationships through outstanding service.',
    agentCount: countAgents(yunaKimData.divisions),
    avatar: '/placeholder-avatar-7.jpg'
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    title: 'Chief Innovation Officer',
    personality: 'The Loyalist',
    enneagramType: 'Type 6 - The Loyalist',
    motto: 'Balance breakthrough thinking with practical implementation',
    background: 'Born in Lagos to a family that valued both tradition and education, David grew up watching his engineer father constantly improve local infrastructure.',
    domainOverview: 'Innovation & Research',
    color: 'indigo',
    icon: Lightbulb,
    description: 'Driving innovation initiatives and research programs that balance breakthrough thinking with practical implementation.',
    agentCount: countAgents(davidOkaforData.divisions),
    avatar: '/placeholder-avatar-8.jpg'
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Chief Sales Officer',
    personality: 'Results-driven relationship builder',
    enneagramType: 'Type 3 - The Achiever',
    motto: 'Success through authentic connections',
    background: 'Born in Barcelona to a family of entrepreneurs, Sofia learned that sustainable sales success comes from building genuine relationships and delivering real value.',
    domainOverview: 'Sales & Revenue Growth',
    color: 'orange',
    icon: TrendingUp,
    description: 'Leading sales strategy and revenue growth through relationship-driven approaches and market expansion.',
    agentCount: countAgents(sofiaRodriguezData.divisions),
    avatar: '/placeholder-avatar-9.jpg'
  }
];

export const familyMemberDetails = {
  'amara-chen': amaraChenData,
  'marcus-bennett': marcusBennettData,
  'aisha-al-farsi': aishaAlFarsiData,
  'miguel-santos': miguelSantosData,
  'priya-sharma': priyaSharmaData,
  'theo-williams': theoWilliamsData,
  'yuna-kim': yunaKimData,
  'david-okafor': davidOkaforData,
  'sofia-rodriguez': sofiaRodriguezData
};

// Calculate total agents across all family members
export const totalAgentCount = familyMembers.reduce((total, member) => total + member.agentCount, 0);
