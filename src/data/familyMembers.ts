
export interface FamilyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  expertise: string[];
  avatar?: string;
  color: string;
}

export const familyMembers: FamilyMember[] = [
  {
    id: 'trojan-oz',
    name: 'Trojan Oz',
    title: 'Supreme Leader',
    department: 'Executive',
    expertise: ['Strategic Leadership', 'Vision', 'Decision Making'],
    color: 'bg-yellow-400'
  },
  {
    id: 'amara-chen',
    name: 'Dr. Amara Chen',
    title: 'Product Development Leader',
    department: 'Product Analytics Division',
    expertise: ['Data Analysis', 'SQL', 'Product Strategy'],
    color: 'bg-blue-500'
  },
  {
    id: 'miguel-santos',
    name: 'Miguel Santos',
    title: 'Marketing Leader',
    department: 'Digital Marketing Division',
    expertise: ['Survey Design', 'Marketing', 'Content Creation'],
    color: 'bg-green-500'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    title: 'Human Resources Leader',
    department: 'Talent Acquisition Division',
    expertise: ['Recruitment', 'Onboarding', 'HR Strategy'],
    color: 'bg-purple-500'
  },
  {
    id: 'theo-williams',
    name: 'Theo Williams',
    title: 'Finance & Operations Leader',
    department: 'Logistics Division',
    expertise: ['Logistics', 'Route Optimization', 'Supply Chain'],
    color: 'bg-orange-500'
  },
  {
    id: 'yuna-kim',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support Leader',
    department: 'Support Operations Division',
    expertise: ['Technical Support', 'CRM', 'Customer Service'],
    color: 'bg-teal-500'
  },
  {
    id: 'david-okafor',
    name: 'David Okafor',
    title: 'Innovation & R&D Leader',
    department: 'Innovation',
    expertise: ['Research', 'Innovation', 'Technology'],
    color: 'bg-indigo-500'
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodriguez',
    title: 'Sales Leader',
    department: 'Pre-Sales Division',
    expertise: ['Sales', 'Proposal Writing', 'Government Relations'],
    color: 'bg-red-500'
  },
  {
    id: 'marcus-bennett',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance Leader',
    department: 'Regulatory Affairs Division',
    expertise: ['Compliance', 'Proposal Review', 'Legal'],
    color: 'bg-gray-700'
  },
  {
    id: 'aisha-al-farsi',
    name: 'Aisha Al-Farsi',
    title: 'External Relations Leader',
    department: 'External Relations',
    expertise: ['Partnerships', 'External Relations', 'Strategy'],
    color: 'bg-pink-500'
  }
];
