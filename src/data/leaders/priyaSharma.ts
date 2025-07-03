
import { FamilyMemberData } from '@/types/family';
import { talentAcquisitionDivision } from './priyaSharma/talentAcquisition';
import { learningDevelopmentDivision } from './priyaSharma/learningDevelopment';
import { performanceManagementDivision } from './priyaSharma/performanceManagement';
import { employeeEngagementDivision } from './priyaSharma/employeeEngagement';
import { diversityInclusionDivision } from './priyaSharma/diversityInclusion';
import { compensationBenefitsDivision } from './priyaSharma/compensationBenefits';
import { hrOperationsDivision } from './priyaSharma/hrOperations';
import { organizationalDevelopmentDivision } from './priyaSharma/organizationalDevelopment';
import { employeeRelationsDivision } from './priyaSharma/employeeRelations';

export const priyaSharmaData: FamilyMemberData = {
  leader: {
    name: 'Priya Sharma',
    title: 'Chief People Officer',
    enneagramType: 'Type 2 - The Helper',
    personality: 'Empathetic leader who nurtures human potential',
    motto: 'People first, always',
    background: 'Born in Mumbai to a family of educators and social workers, Priya learned that organisational success flows from individual fulfilment and collective well-being. Her childhood was spent around dinner table discussions about human development and social justice, watching her parents dedicate their lives to helping others reach their potential. This early exposure to service and growth shaped her core belief: when people feel valued, supported, and empowered, they naturally contribute their best work. After studying Organisational Psychology at Delhi University and Human Resources at Wharton, she developed her philosophy that HR isn\'t about managing people—it\'s about creating conditions where people can thrive. Her Type 2 Helper nature drives her to identify and nurture the unique gifts each person brings, believing that authentic care for individuals creates unstoppable organisations.'
  },
  divisions: [
    talentAcquisitionDivision,
    learningDevelopmentDivision,
    performanceManagementDivision,
    employeeEngagementDivision,
    diversityInclusionDivision,
    compensationBenefitsDivision,
    hrOperationsDivision,
    organizationalDevelopmentDivision,
    employeeRelationsDivision
  ]
};
