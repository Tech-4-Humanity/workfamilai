
// Agent image utility for generating appropriate profile images
export const getAgentImageUrl = (agentName: string, specialization: string): string => {
  // Map based on agent names and characteristics
  const imageMap: Record<string, string> = {
    // Main Department Leaders
    'Amara Chen': 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Priya Sharma': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Aisha Al-Farsi': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Miguel Santos': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Theo Williams': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Yuna Kim': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Sofia Rodriguez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Marcus Bennett': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Elena Vasquez': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'David Okafor': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // Japanese agents
    'Yuki Tanaka': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Akira Suzuki': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Kenji Nakamura': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Sakura Yamamoto': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Hiroshi Watanabe': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // Chinese agents
    'Wei Chen': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Li Wang': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Zhang Liu': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // Korean agents
    'Jin Park': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Kim Lee': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // Arabic agents
    'Ahmed Al-Rashid': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Fatma Hassan': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Omar Khalil': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // Spanish agents
    'Carlos Rodriguez': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Maria Gonzalez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Diego Martinez': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // French agents
    'Pierre Dubois': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Marie Martin': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Antoine Bernard': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    
    // German agents
    'Hans Mueller': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Greta Schmidt': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Klaus Weber': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format&q=90'
  };

  // Return specific image if available, otherwise use a fallback based on specialization
  if (imageMap[agentName]) {
    return imageMap[agentName];
  }

  // Fallback images based on specialization
  const specializationFallbacks: Record<string, string> = {
    'Engineering': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Design': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Marketing': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Management': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&auto=format&q=90',
    'Analytics': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face&auto=format&q=90'
  };

  const fallbackKey = Object.keys(specializationFallbacks).find(key => 
    specialization.includes(key)
  );

  return fallbackKey ? specializationFallbacks[fallbackKey] : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format&q=90';
};

export const getAgentInitials = (name: string): string => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};
