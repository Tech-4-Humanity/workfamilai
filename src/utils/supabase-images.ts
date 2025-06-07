
import { supabase } from '@/integrations/supabase/client';

// Updated to use real Supabase storage for leadership photos
export const getStorageImageUrl = (bucket: string, path: string): string => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

export const getLeaderImageUrl = (leaderName: string): string => {
  // Map leader names to high-quality professional photos
  const imageMap: Record<string, string> = {
    'Trojan Oz': '/lovable-uploads/4d1b5377-5288-4575-8000-bd5f463358b7.png',
    'Dr. Amara Chen': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Miguel Santos': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Priya Sharma': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Theo Williams': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Dr. Yuna Kim': 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'David Okafor': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Sofia Rodriguez': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Marcus Bennett': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=face&auto=format&q=90',
    'Aisha Al-Farsi': 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=600&fit=crop&crop=face&auto=format&q=90'
  };
  
  return imageMap[leaderName] || '/placeholder.svg';
};

// New function for family dynamics visualization
export const getFamilyConnectionStrength = (leader1: string, leader2: string): number => {
  // Define personality-based connection strengths (0-1 scale)
  const connections: Record<string, Record<string, number>> = {
    'Dr. Amara Chen': {
      'Miguel Santos': 0.9, // Perfectionist + Helper = Quality customer experiences
      'Priya Sharma': 0.8,  // Perfectionist + Achiever = Excellence in execution
      'Dr. Yuna Kim': 0.95, // Perfectionist + Investigator = Deep problem solving
      'David Okafor': 0.7,  // Perfectionist + Loyalist = Reliable innovation
      'Sofia Rodriguez': 0.6, // Different approaches but complementary
      'Marcus Bennett': 0.8, // Both value precision and standards
      'Aisha Al-Farsi': 0.7, // Perfectionist needs diplomatic support
      'Theo Williams': 0.8   // Perfectionist + Individualist = Creative solutions
    }
    // Add more connections as needed
  };
  
  return connections[leader1]?.[leader2] || connections[leader2]?.[leader1] || 0.5;
};
