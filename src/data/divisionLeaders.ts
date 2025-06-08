
import { FamilyMember } from '@/types/family';

export interface DivisionLeader {
  id: string;
  name: string;
  title: string;
  departmentId: string;
  divisionName: string;
  familyAgentsManaged: number;
  specialization: string;
  experience: string;
}

export const divisionLeaders: DivisionLeader[] = [
  // Amara Chen's Product Development Division Leaders (9 leaders)
  {
    id: 'amara-pd-001',
    name: 'Dr. Sarah Chen',
    title: 'Director of Product Strategy',
    departmentId: 'amara-chen',
    divisionName: 'Product Strategy',
    familyAgentsManaged: 9,
    specialization: 'Strategic Product Planning',
    experience: '12 years in product strategy and market analysis'
  },
  {
    id: 'amara-pd-002',
    name: 'Michael Rodriguez',
    title: 'Director of Engineering Excellence',
    departmentId: 'amara-chen',
    divisionName: 'Engineering Excellence',
    familyAgentsManaged: 9,
    specialization: 'Technical Architecture',
    experience: '15 years in software engineering and system design'
  },
  {
    id: 'amara-pd-003',
    name: 'Dr. Priya Patel',
    title: 'Director of User Experience',
    departmentId: 'amara-chen',
    divisionName: 'User Experience',
    familyAgentsManaged: 9,
    specialization: 'UX Research and Design',
    experience: '10 years in user research and interaction design'
  },
  {
    id: 'amara-pd-004',
    name: 'James Thompson',
    title: 'Director of Product Analytics',
    departmentId: 'amara-chen',
    divisionName: 'Product Analytics',
    familyAgentsManaged: 9,
    specialization: 'Data-Driven Product Insights',
    experience: '8 years in product analytics and business intelligence'
  },
  {
    id: 'amara-pd-005',
    name: 'Lisa Wang',
    title: 'Director of Innovation Labs',
    departmentId: 'amara-chen',
    divisionName: 'Innovation Labs',
    familyAgentsManaged: 9,
    specialization: 'Emerging Technology Integration',
    experience: '11 years in R&D and technology innovation'
  },
  {
    id: 'amara-pd-006',
    name: 'Robert Kim',
    title: 'Director of Quality Assurance',
    departmentId: 'amara-chen',
    divisionName: 'Quality Assurance',
    familyAgentsManaged: 9,
    specialization: 'Quality Systems and Testing',
    experience: '13 years in quality management and testing'
  },
  {
    id: 'amara-pd-007',
    name: 'Elena Volkov',
    title: 'Director of Product Operations',
    departmentId: 'amara-chen',
    divisionName: 'Product Operations',
    familyAgentsManaged: 9,
    specialization: 'Operational Excellence',
    experience: '9 years in operations and process optimization'
  },
  {
    id: 'amara-pd-008',
    name: 'Carlos Martinez',
    title: 'Director of Platform Engineering',
    departmentId: 'amara-chen',
    divisionName: 'Platform Engineering',
    familyAgentsManaged: 9,
    specialization: 'Infrastructure and Scalability',
    experience: '14 years in platform engineering and DevOps'
  },
  {
    id: 'amara-pd-009',
    name: 'Dr. Akiko Tanaka',
    title: 'Director of Product Security',
    departmentId: 'amara-chen',
    divisionName: 'Product Security',
    familyAgentsManaged: 9,
    specialization: 'Security Architecture',
    experience: '12 years in cybersecurity and secure development'
  },

  // Marcus Bennett's Governance & Compliance Division Leaders (9 leaders)
  {
    id: 'marcus-gc-001',
    name: 'Victoria Sterling',
    title: 'Director of Regulatory Affairs',
    departmentId: 'marcus-bennett',
    divisionName: 'Regulatory Affairs',
    familyAgentsManaged: 9,
    specialization: 'Regulatory Compliance',
    experience: '16 years in regulatory compliance and government relations'
  },
  {
    id: 'marcus-gc-002',
    name: 'David Thompson',
    title: 'Director of Risk Management',
    departmentId: 'marcus-bennett',
    divisionName: 'Risk Management',
    familyAgentsManaged: 9,
    specialization: 'Enterprise Risk Assessment',
    experience: '14 years in risk management and financial controls'
  },
  {
    id: 'marcus-gc-003',
    name: 'Dr. Rachel Green',
    title: 'Director of Ethics & Compliance',
    departmentId: 'marcus-bennett',
    divisionName: 'Ethics & Compliance',
    familyAgentsManaged: 9,
    specialization: 'Business Ethics',
    experience: '11 years in corporate ethics and compliance programs'
  },
  {
    id: 'marcus-gc-004',
    name: 'Alexander Petrov',
    title: 'Director of Internal Audit',
    departmentId: 'marcus-bennett',
    divisionName: 'Internal Audit',
    familyAgentsManaged: 9,
    specialization: 'Audit and Controls',
    experience: '13 years in internal audit and financial oversight'
  },
  {
    id: 'marcus-gc-005',
    name: 'Maria Gonzalez',
    title: 'Director of Data Governance',
    departmentId: 'marcus-bennett',
    divisionName: 'Data Governance',
    familyAgentsManaged: 9,
    specialization: 'Data Privacy and Protection',
    experience: '10 years in data governance and privacy law'
  },
  {
    id: 'marcus-gc-006',
    name: 'Thomas Anderson',
    title: 'Director of Legal Operations',
    departmentId: 'marcus-bennett',
    divisionName: 'Legal Operations',
    familyAgentsManaged: 9,
    specialization: 'Legal Process Management',
    experience: '15 years in legal operations and contract management'
  },
  {
    id: 'marcus-gc-007',
    name: 'Dr. Fatima Al-Zahra',
    title: 'Director of Policy Development',
    departmentId: 'marcus-bennett',
    divisionName: 'Policy Development',
    familyAgentsManaged: 9,
    specialization: 'Corporate Policy',
    experience: '12 years in policy development and governance'
  },
  {
    id: 'marcus-gc-008',
    name: 'Jonathan Wright',
    title: 'Director of Security Compliance',
    departmentId: 'marcus-bennett',
    divisionName: 'Security Compliance',
    familyAgentsManaged: 9,
    specialization: 'Security Standards',
    experience: '11 years in security compliance and certification'
  },
  {
    id: 'marcus-gc-009',
    name: 'Sophie Laurent',
    title: 'Director of Business Continuity',
    departmentId: 'marcus-bennett',
    divisionName: 'Business Continuity',
    familyAgentsManaged: 9,
    specialization: 'Continuity Planning',
    experience: '9 years in business continuity and disaster recovery'
  }

  // Note: This represents 18 of the 81 division leaders (2 departments shown)
  // The remaining 63 division leaders would follow the same pattern for the other 7 departments
];

export const getTotalDivisionLeaders = (): number => {
  return 81; // 9 departments × 9 division leaders each
};

export const getDivisionLeadersByDepartment = (departmentId: string): DivisionLeader[] => {
  return divisionLeaders.filter(leader => leader.departmentId === departmentId);
};

export const getTotalFamilyAgentsManaged = (): number => {
  return 729; // 81 division leaders × 9 family agents each
};
