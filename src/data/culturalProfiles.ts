
import { FamilyMemberData } from '@/types/family';

export interface CulturalProfile {
  primaryLanguage: string;
  secondaryLanguages: string[];
  culturalBackground: string;
  communicationStyle: string;
  businessEtiquette: string;
  timeZone: string;
  workingHours: string;
  culturalHolidays: string[];
  preferredGreeting: string;
  formalityLevel: 'high' | 'medium' | 'low';
}

export const familyCulturalProfiles: Record<string, CulturalProfile> = {
  'amara-chen': {
    primaryLanguage: 'zh',
    secondaryLanguages: ['en', 'ja'],
    culturalBackground: 'East Asian business culture with emphasis on innovation and harmony',
    communicationStyle: 'Indirect, consensus-building, respectful of hierarchy',
    businessEtiquette: 'Values patience, long-term relationships, and face-saving',
    timeZone: 'Asia/Shanghai',
    workingHours: '9:00 AM - 6:00 PM CST',
    culturalHolidays: ['Chinese New Year', 'Mid-Autumn Festival', 'Dragon Boat Festival'],
    preferredGreeting: 'Respectful bow or handshake with business card exchange',
    formalityLevel: 'high'
  },
  'priya-sharma': {
    primaryLanguage: 'en',
    secondaryLanguages: ['hi', 'ur'],
    culturalBackground: 'South Asian professional culture with emphasis on relationships and respect',
    communicationStyle: 'Warm, relationship-focused, respectful of seniority',
    businessEtiquette: 'Values family connections, educational achievements, and cultural traditions',
    timeZone: 'Asia/Kolkata',
    workingHours: '10:00 AM - 7:00 PM IST',
    culturalHolidays: ['Diwali', 'Holi', 'Eid'],
    preferredGreeting: 'Namaste or professional handshake',
    formalityLevel: 'medium'
  },
  'aisha-al-farsi': {
    primaryLanguage: 'ar',
    secondaryLanguages: ['en', 'fr'],
    culturalBackground: 'Middle Eastern diplomatic culture with emphasis on honor and respect',
    communicationStyle: 'Eloquent, formal, relationship-building through trust',
    businessEtiquette: 'Values honor, hospitality, and personal relationships before business',
    timeZone: 'Asia/Muscat',
    workingHours: '8:00 AM - 5:00 PM GST',
    culturalHolidays: ['Eid al-Fitr', 'Eid al-Adha', 'National Day'],
    preferredGreeting: 'As-salamu alaykum or respectful handshake',
    formalityLevel: 'high'
  },
  'miguel-santos': {
    primaryLanguage: 'es',
    secondaryLanguages: ['en', 'pt'],
    culturalBackground: 'Latin American business culture with emphasis on relationships and creativity',
    communicationStyle: 'Warm, expressive, relationship-centered with personal touch',
    businessEtiquette: 'Values personal connections, family, and celebration of achievements',
    timeZone: 'America/Mexico_City',
    workingHours: '9:00 AM - 6:00 PM CST',
    culturalHolidays: ['Día de los Muertos', 'Cinco de Mayo', 'Christmas'],
    preferredGreeting: 'Warm handshake or abrazo for close colleagues',
    formalityLevel: 'medium'
  },
  'theo-williams': {
    primaryLanguage: 'en',
    secondaryLanguages: ['fr', 'de'],
    culturalBackground: 'Anglo-American business culture with emphasis on efficiency and transparency',
    communicationStyle: 'Direct, analytical, goal-oriented with clear structure',
    businessEtiquette: 'Values punctuality, efficiency, and straightforward communication',
    timeZone: 'America/New_York',
    workingHours: '9:00 AM - 5:00 PM EST',
    culturalHolidays: ['Thanksgiving', 'Independence Day', 'Memorial Day'],
    preferredGreeting: 'Firm handshake with eye contact',
    formalityLevel: 'medium'
  },
  'yuna-kim': {
    primaryLanguage: 'ko',
    secondaryLanguages: ['en', 'ja'],
    culturalBackground: 'Korean business culture with emphasis on service excellence and respect',
    communicationStyle: 'Respectful, service-oriented, attention to hierarchical relationships',
    businessEtiquette: 'Values respect for seniority, group harmony, and perfection in service',
    timeZone: 'Asia/Seoul',
    workingHours: '9:00 AM - 6:00 PM KST',
    culturalHolidays: ['Lunar New Year', 'Chuseok', 'Liberation Day'],
    preferredGreeting: 'Respectful bow with appropriate honorifics',
    formalityLevel: 'high'
  },
  'sofia-rodriguez': {
    primaryLanguage: 'es',
    secondaryLanguages: ['en', 'ca'],
    culturalBackground: 'European Spanish business culture with emphasis on sophistication and relationships',
    communicationStyle: 'Elegant, relationship-focused, with appreciation for cultural nuances',
    businessEtiquette: 'Values sophistication, cultural appreciation, and long-term partnerships',
    timeZone: 'Europe/Madrid',
    workingHours: '9:00 AM - 6:00 PM CET',
    culturalHolidays: ['La Tomatina', 'Semana Santa', 'Christmas'],
    preferredGreeting: 'Professional handshake with cheek kiss for established relationships',
    formalityLevel: 'medium'
  },
  'marcus-bennett': {
    primaryLanguage: 'en',
    secondaryLanguages: ['fr'],
    culturalBackground: 'North American business culture with emphasis on innovation and collaboration',
    communicationStyle: 'Collaborative, innovative, with focus on practical solutions',
    businessEtiquette: 'Values innovation, teamwork, and results-driven approaches',
    timeZone: 'America/Toronto',
    workingHours: '9:00 AM - 5:00 PM EST',
    culturalHolidays: ['Canada Day', 'Thanksgiving', 'Victoria Day'],
    preferredGreeting: 'Friendly handshake with warm smile',
    formalityLevel: 'low'
  },
  'elena-vasquez': {
    primaryLanguage: 'es',
    secondaryLanguages: ['en'],
    culturalBackground: 'South American business culture with emphasis on governance and ethics',
    communicationStyle: 'Structured, ethical, with focus on compliance and fairness',
    businessEtiquette: 'Values integrity, transparency, and social responsibility',
    timeZone: 'America/Lima',
    workingHours: '8:00 AM - 5:00 PM PET',
    culturalHolidays: ['Independence Day', 'Inti Raymi', 'Christmas'],
    preferredGreeting: 'Professional handshake with respectful demeanor',
    formalityLevel: 'medium'
  },
  'david-okafor': {
    primaryLanguage: 'en',
    secondaryLanguages: ['ig', 'yo'],
    culturalBackground: 'West African business culture with emphasis on technology and community',
    communicationStyle: 'Community-focused, innovative, with respect for wisdom and experience',
    businessEtiquette: 'Values community building, technological advancement, and cultural heritage',
    timeZone: 'Africa/Lagos',
    workingHours: '8:00 AM - 5:00 PM WAT',
    culturalHolidays: ['Independence Day', 'Democracy Day', 'Christmas'],
    preferredGreeting: 'Warm handshake with cultural acknowledgment',
    formalityLevel: 'medium'
  }
};

export const getCulturalProfile = (familyMemberId: string): CulturalProfile | null => {
  return familyCulturalProfiles[familyMemberId] || null;
};

export const getSupportedLanguagesForMember = (familyMemberId: string): string[] => {
  const profile = getCulturalProfile(familyMemberId);
  if (!profile) return ['en'];
  
  return [profile.primaryLanguage, ...profile.secondaryLanguages];
};

export const getPreferredLanguageForMember = (familyMemberId: string): string => {
  const profile = getCulturalProfile(familyMemberId);
  return profile?.primaryLanguage || 'en';
};
