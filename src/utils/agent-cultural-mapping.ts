
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';

// Map agent names to their department leaders for cultural profile inheritance
const agentToDepartmentMapping: Record<string, string> = {
  'Ahmed Hassan': 'aisha-al-farsi',
  'Fatma Al-Zahra': 'aisha-al-farsi',
  'Omar Khalil': 'aisha-al-farsi',
  'Layla Mansouri': 'aisha-al-farsi',
  'Yusuf Al-Rashid': 'aisha-al-farsi',
  'Nadia Habib': 'aisha-al-farsi',
  'Samir Qadri': 'aisha-al-farsi',
  'Rania Farouk': 'aisha-al-farsi',
  'Khalid Benali': 'aisha-al-farsi'
};

export const getAgentCulturalProfile = (agentName: string) => {
  // First try to get direct profile for the agent
  const agentId = agentName.toLowerCase().replace(/\s+/g, '-');
  let profile = getCulturalProfile(agentId);
  
  if (!profile) {
    // If no direct profile, try to map to department leader
    const departmentLeaderId = agentToDepartmentMapping[agentName];
    if (departmentLeaderId) {
      profile = getCulturalProfile(departmentLeaderId);
      console.log(`Mapped ${agentName} to department leader ${departmentLeaderId}:`, profile);
    }
  }
  
  return profile;
};

export const getAgentSupportedLanguages = (agentName: string): string[] => {
  // First try direct lookup
  const agentId = agentName.toLowerCase().replace(/\s+/g, '-');
  let languages = getSupportedLanguagesForMember(agentId);
  
  // If no languages found, try department mapping
  if (!languages || languages.length === 0 || (languages.length === 1 && languages[0] === 'en')) {
    const departmentLeaderId = agentToDepartmentMapping[agentName];
    if (departmentLeaderId) {
      languages = getSupportedLanguagesForMember(departmentLeaderId);
      console.log(`Mapped ${agentName} languages to department leader ${departmentLeaderId}:`, languages);
    }
  }
  
  return languages || ['en'];
};

export const getAgentPrimaryLanguage = (agentName: string): string => {
  const profile = getAgentCulturalProfile(agentName);
  return profile?.primaryLanguage || 'en';
};
