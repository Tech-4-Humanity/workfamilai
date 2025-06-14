
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';

// Comprehensive agent name aliases and standardization
const agentNameAliases: Record<string, string[]> = {
  'aisha-al-farsi': ['Aisha Al-Farsi', 'Dr. Aisha Al-Farsi', 'Aisha Al Farsi'],
  'amara-chen': ['Amara Chen', 'Dr. Amara Chen', 'Dr Amara Chen'],
  'yuna-kim': ['Yuna Kim', 'Dr. Yuna Kim', 'Dr Yuna Kim'],
  'priya-sharma': ['Priya Sharma', 'Dr. Priya Sharma'],
  'miguel-santos': ['Miguel Santos', 'Dr. Miguel Santos'],
  'sofia-rodriguez': ['Sofia Rodriguez', 'Dr. Sofia Rodriguez'],
  'marcus-bennett': ['Marcus Bennett', 'Dr. Marcus Bennett'],
  'theo-williams': ['Theo Williams', 'Dr. Theo Williams'],
  'david-okafor': ['David Okafor', 'Dr. David Okafor'],
  'elena-vasquez': ['Elena Vasquez', 'Dr. Elena Vasquez']
};

// Enhanced agent to department mapping with better coverage
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
  
  // Department leaders themselves
  'Aisha Al-Farsi': 'aisha-al-farsi',
  'Dr. Aisha Al-Farsi': 'aisha-al-farsi',
  'Priya Sharma': 'priya-sharma',
  'Dr. Priya Sharma': 'priya-sharma',
  'Miguel Santos': 'miguel-santos',
  'Dr. Miguel Santos': 'miguel-santos',
  'Sofia Rodriguez': 'sofia-rodriguez',
  'Dr. Sofia Rodriguez': 'sofia-rodriguez',
  'Marcus Bennett': 'marcus-bennett',
  'Dr. Marcus Bennett': 'marcus-bennett',
  'Theo Williams': 'theo-williams',
  'Dr. Theo Williams': 'theo-williams',
  'David Okafor': 'david-okafor',
  'Dr. David Okafor': 'david-okafor',
  'Elena Vasquez': 'elena-vasquez',
  'Dr. Elena Vasquez': 'elena-vasquez'
};

const normalizeAgentName = (agentName: string): string => {
  if (!agentName || typeof agentName !== 'string') {
    console.warn('Invalid agent name provided:', agentName);
    return '';
  }
  
  // Try to find exact match first
  const directMatch = agentName.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '');
  
  // Check if this matches any known aliases
  for (const [standardId, aliases] of Object.entries(agentNameAliases)) {
    if (aliases.some(alias => alias.toLowerCase() === agentName.toLowerCase())) {
      return standardId;
    }
  }
  
  return directMatch;
};

export const getAgentCulturalProfile = (agentName: string) => {
  try {
    console.log('Getting cultural profile for agent:', agentName);
    
    if (!agentName) {
      console.warn('No agent name provided to getAgentCulturalProfile');
      return null;
    }
    
    // Normalize and try direct lookup
    const normalizedName = normalizeAgentName(agentName);
    let profile = getCulturalProfile(normalizedName);
    
    if (!profile) {
      // Try department mapping
      const departmentLeaderId = agentToDepartmentMapping[agentName];
      if (departmentLeaderId) {
        profile = getCulturalProfile(departmentLeaderId);
        console.log(`Mapped ${agentName} to department leader ${departmentLeaderId}:`, !!profile);
      } else {
        console.log(`No department mapping found for ${agentName}`);
      }
    }
    
    return profile;
  } catch (error) {
    console.error('Error getting cultural profile for agent:', agentName, error);
    return null;
  }
};

export const getAgentSupportedLanguages = (agentName: string): string[] => {
  try {
    console.log('Getting supported languages for agent:', agentName);
    
    if (!agentName) {
      console.warn('No agent name provided to getAgentSupportedLanguages');
      return ['en'];
    }
    
    // Try normalized direct lookup
    const normalizedName = normalizeAgentName(agentName);
    let languages = getSupportedLanguagesForMember(normalizedName);
    
    // If not found or only English, try department mapping
    if (!languages || languages.length === 0 || (languages.length === 1 && languages[0] === 'en')) {
      const departmentLeaderId = agentToDepartmentMapping[agentName];
      if (departmentLeaderId) {
        languages = getSupportedLanguagesForMember(departmentLeaderId);
        console.log(`Mapped ${agentName} languages to department leader ${departmentLeaderId}:`, languages);
      }
    }
    
    // Ensure we always return valid array with at least English
    const result = Array.isArray(languages) && languages.length > 0 ? languages : ['en'];
    console.log(`Final languages for ${agentName}:`, result);
    return result;
  } catch (error) {
    console.error('Error getting supported languages for agent:', agentName, error);
    return ['en'];
  }
};

export const getAgentPrimaryLanguage = (agentName: string): string => {
  try {
    const profile = getAgentCulturalProfile(agentName);
    const primaryLang = profile?.primaryLanguage || 'en';
    console.log(`Primary language for ${agentName}:`, primaryLang);
    return primaryLang;
  } catch (error) {
    console.error('Error getting primary language for agent:', agentName, error);
    return 'en';
  }
};
