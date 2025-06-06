import { FamilyMemberDetails } from '@/types/family';
import { amaraChenData } from './leaders/amaraChen';
import { marcusBennettData } from './leaders/marcusBennett';
import { aishaAlFarsiData } from './leaders/aishaAlFarsi';

export const familyMemberDetails: FamilyMemberDetails = {
  "product-development": amaraChenData,
  "governance-compliance": marcusBennettData,
  "external-relations": aishaAlFarsiData,
  // Note: Other family members need to be added with their complete 81-agent structures
  // This includes: marketing, human-resources, finance-operations, customer-support, innovation-rd, sales
};
