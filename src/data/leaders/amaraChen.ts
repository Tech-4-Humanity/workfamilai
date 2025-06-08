
import { FamilyMemberData } from '@/types/family';
import { softwareEngineeringDivision } from './amaraChen/softwareEngineering';
import { userExperienceDivision } from './amaraChen/userExperience';
import { productEngineeringDivision } from './amaraChen/productEngineering';
import { productAnalyticsDivision } from './amaraChen/productAnalytics';
import { productOperationsDivision } from './amaraChen/productOperations';
import { qualityAssuranceDivision } from './amaraChen/qualityAssurance';
import { innovationLabsDivision } from './amaraChen/innovationLabs';
import { platformEngineeringDivision } from './amaraChen/platformEngineering';
import { productSecurityDivision } from './amaraChen/productSecurity';

export const amaraChenData: FamilyMemberData = {
  leader: {
    name: 'Amara Chen',
    title: 'Chief Technology Officer',
    enneagramType: 'Type 5 - The Investigator',
    personality: 'Innovative architect of technological futures',
    motto: 'Innovation through understanding',
    background: 'Born in Singapore to a family where her mother was a software engineer and her father a philosophy professor, Amara learned that the most powerful technology comes from deep understanding of both human needs and technical possibilities. Growing up in a multicultural tech hub, she watched how technology could either divide or unite people, depending on how thoughtfully it was designed. After studying Computer Science at MIT and working with leading tech companies, she developed her approach: the best technology feels invisible because it seamlessly enhances human capability. Her Type 5 Investigator nature drives her to understand systems deeply before building, believing that sustainable innovation comes from wisdom, not just intelligence.'
  },
  divisions: [
    softwareEngineeringDivision,
    userExperienceDivision,
    productEngineeringDivision,
    productAnalyticsDivision,
    productOperationsDivision,
    qualityAssuranceDivision,
    innovationLabsDivision,
    platformEngineeringDivision,
    productSecurityDivision
  ]
};
