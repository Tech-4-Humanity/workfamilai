
// Agent image utility for generating appropriate profile images
export const getAgentImageUrl = (agentName: string, specialization: string): string => {
  console.log('Getting image for agent:', agentName, 'specialization:', specialization);
  
  // Map based on agent names and characteristics - using more reliable image sources
  const imageMap: Record<string, string> = {
    // Main Department Leaders - Using higher quality, more reliable sources
    'Amara Chen': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Priya Sharma': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Aisha Al-Farsi': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Miguel Santos': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Theo Williams': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Yuna Kim': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Sofia Rodriguez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Marcus Bennett': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Elena Vasquez': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'David Okafor': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Alternative name variations
    'Dr. Amara Chen': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Dr. Yuna Kim': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Japanese agents
    'Yuki Tanaka': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Akira Suzuki': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Kenji Nakamura': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Sakura Yamamoto': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Hiroshi Watanabe': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Chinese agents
    'Wei Chen': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Li Wang': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Zhang Liu': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Korean agents
    'Jin Park': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Kim Lee': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Arabic agents
    'Ahmed Al-Rashid': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Fatma Hassan': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Omar Khalil': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // Spanish agents
    'Carlos Rodriguez': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Maria Gonzalez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Diego Martinez': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // French agents
    'Pierre Dubois': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Marie Martin': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Antoine Bernard': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    
    // German agents
    'Hans Mueller': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Greta Schmidt': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Klaus Weber': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80'
  };

  // Return specific image if available
  const selectedImage = imageMap[agentName];
  if (selectedImage) {
    console.log('Found image for', agentName, ':', selectedImage);
    return selectedImage;
  }

  console.log('No specific image found for', agentName, ', using fallback');

  // Fallback images based on specialization
  const specializationFallbacks: Record<string, string> = {
    'Engineering': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Design': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Marketing': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Management': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Analytics': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80'
  };

  const fallbackKey = Object.keys(specializationFallbacks).find(key => 
    specialization.includes(key)
  );

  const fallbackImage = fallbackKey ? specializationFallbacks[fallbackKey] : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80';
  console.log('Using fallback image:', fallbackImage);
  
  return fallbackImage;
};

export const getAgentInitials = (name: string): string => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  console.log('Generated initials for', name, ':', initials);
  return initials;
};
