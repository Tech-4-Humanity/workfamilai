
// Updated to use Unsplash images instead of Supabase storage
export const getStorageImageUrl = (bucket: string, path: string): string => {
  // This function is kept for compatibility but not used anymore
  return '/placeholder.svg';
};

export const getLeaderImageUrl = (leaderName: string): string => {
  // Map leader names to curated Unsplash images
  const imageMap: Record<string, string> = {
    'Trojan Oz': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Dr. Amara Chen': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Miguel Santos': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Priya Sharma': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Theo Williams': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Dr. Yuna Kim': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'David Okafor': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Sofia Rodriguez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Marcus Bennett': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80',
    'Aisha Al-Farsi': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face&auto=format&q=80'
  };
  
  const imageUrl = imageMap[leaderName];
  if (imageUrl) {
    return imageUrl;
  }
  
  // Fallback to a default image if not found
  return '/placeholder.svg';
};
