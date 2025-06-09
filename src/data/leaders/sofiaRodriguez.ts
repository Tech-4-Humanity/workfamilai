
import { FamilyMemberData } from '@/types/family';
import { salesDevelopmentDivision } from './sofiaRodriguez/salesDevelopment';
import { accountManagementDivision } from './sofiaRodriguez/accountManagement';
import { salesOperationsDivision } from './sofiaRodriguez/salesOperations';
import { customerAcquisitionDivision } from './sofiaRodriguez/customerAcquisition';
import { salesTrainingDivision } from './sofiaRodriguez/salesTraining';
import { competitiveIntelligenceDivision } from './sofiaRodriguez/competitiveIntelligence';
import { salesTechnologyDivision } from './sofiaRodriguez/salesTechnology';
import { channelPartnershipDivision } from './sofiaRodriguez/channelPartnership';
import { salesLeadershipDivision } from './sofiaRodriguez/salesLeadership';

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
    salesDevelopmentDivision,
    accountManagementDivision,
    salesOperationsDivision,
    customerAcquisitionDivision,
    salesTrainingDivision,
    competitiveIntelligenceDivision,
    salesTechnologyDivision,
    channelPartnershipDivision,
    salesLeadershipDivision
  ]
};
