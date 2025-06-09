
import { FamilyMemberData } from '@/types/family';
import { diplomaticRelationsDivision } from './aishaAlFarsi/diplomaticRelations';
import { strategicPartnershipsDivision } from './aishaAlFarsi/strategicPartnerships';
import { governmentRelationsDivision } from './aishaAlFarsi/governmentRelations';
import { internationalTradeDivision } from './aishaAlFarsi/internationalTrade';
import { corporateDiplomacyDivision } from './aishaAlFarsi/corporateDiplomacy';
import { publicAffairsDivision } from './aishaAlFarsi/publicAffairs';
import { stakeholderEngagementDivision } from './aishaAlFarsi/stakeholderEngagement';
import { conflictResolutionDivision } from './aishaAlFarsi/conflictResolution';
import { globalCommunicationsDivision } from './aishaAlFarsi/globalCommunications';

export const aishaAlFarsiData: FamilyMemberData = {
  leader: {
    name: 'Aisha Al-Farsi',
    title: 'Chief of External Relations',
    enneagramType: 'Type 9 - The Peacemaker',
    personality: 'Diplomatic bridge-builder who connects diverse perspectives',
    motto: 'Unity through understanding',
    background: 'Growing up in Muscat as the daughter of a diplomat and a cultural anthropologist, Aisha learned that the strongest relationships are built on genuine understanding and mutual respect. Her childhood was spent moving between cultures, learning that what seems like conflict often stems from miscommunication. After studying International Relations at Georgetown and working in various diplomatic missions, she discovered that her gift wasn\'t just in speaking multiple languages, but in translating between different ways of thinking. Her Type 9 Peacemaker nature drives her to find common ground and build bridges, believing that the best partnerships come when everyone feels heard and valued.'
  },
  divisions: [
    diplomaticRelationsDivision,
    strategicPartnershipsDivision,
    governmentRelationsDivision,
    internationalTradeDivision,
    corporateDiplomacyDivision,
    publicAffairsDivision,
    stakeholderEngagementDivision,
    conflictResolutionDivision,
    globalCommunicationsDivision
  ]
};
