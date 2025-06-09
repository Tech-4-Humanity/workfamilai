
import { FamilyMemberData } from '@/types/family';
import { customerSupportDivision } from './yunaKim/customerSupport';
import { customerSuccessDivision } from './yunaKim/customerSuccess';
import { qualityAssuranceDivision } from './yunaKim/qualityAssurance';
import { customerExperienceDivision } from './yunaKim/customerExperience';
import { customerInsightsDivision } from './yunaKim/customerInsights';
import { customerRetentionDivision } from './yunaKim/customerRetention';
import { serviceDeliveryDivision } from './yunaKim/serviceDelivery';
import { customerCommunicationsDivision } from './yunaKim/customerCommunications';
import { customerFeedbackDivision } from './yunaKim/customerFeedback';

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
    customerSupportDivision,
    customerSuccessDivision,
    qualityAssuranceDivision,
    customerExperienceDivision,
    customerInsightsDivision,
    customerRetentionDivision,
    serviceDeliveryDivision,
    customerCommunicationsDivision,
    customerFeedbackDivision
  ]
};
