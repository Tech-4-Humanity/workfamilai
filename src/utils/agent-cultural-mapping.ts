
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';

// Map agent names to their department leaders for cultural profile inheritance
const agentToDepartmentMapping: Record<string, string> = {
  // External Relations Department (Aisha Al-Farsi)
  'Ahmed Hassan': 'aisha-al-farsi',
  'Fatma Al-Zahra': 'aisha-al-farsi',
  'Omar Khalil': 'aisha-al-farsi',
  'Layla Mansouri': 'aisha-al-farsi',
  'Yusuf Al-Rashid': 'aisha-al-farsi',
  'Nadia Habib': 'aisha-al-farsi',
  'Samir Qadri': 'aisha-al-farsi',
  'Rania Farouk': 'aisha-al-farsi',
  'Khalid Benali': 'aisha-al-farsi',
  'Chen Wei': 'aisha-al-farsi',
  'Maria Rodriguez': 'aisha-al-farsi',
  'Sophie Laurent': 'aisha-al-farsi',
  'Raj Patel': 'aisha-al-farsi',
  
  // Product Development Department (Amara Chen)
  'Dr. Amara Chen': 'amara-chen',
  'Amara Chen': 'amara-chen',
  
  // Customer Success Department (Yuna Kim)  
  'Dr. Yuna Kim': 'yuna-kim',
  'Yuna Kim': 'yuna-kim',
  
  // Add more mappings as needed for other departments
  'Priya Sharma': 'priya-sharma',
  'Miguel Santos': 'miguel-santos',
  'Sofia Rodriguez': 'sofia-rodriguez',
  'Marcus Bennett': 'marcus-bennett',
  'Theo Williams': 'theo-williams',
  'David Okafor': 'david-okafor',
  'Elena Vasquez': 'elena-vasquez'
};

export const getAgentCulturalProfile = (agentName: string) => {
  console.log('Getting cultural profile for agent:', agentName);
  
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
  console.log('Getting supported languages for agent:', agentName);
  
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
  
  // Fallback to English if still no languages
  const result = languages && languages.length > 0 ? languages : ['en'];
  console.log(`Final languages for ${agentName}:`, result);
  return result;
};

export const getAgentPrimaryLanguage = (agentName: string): string => {
  const profile = getAgentCulturalProfile(agentName);
  const primaryLang = profile?.primaryLanguage || 'en';
  console.log(`Primary language for ${agentName}:`, primaryLang);
  return primaryLang;
};
