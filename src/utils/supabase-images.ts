
import { supabase } from "@/integrations/supabase/client";

export const getStorageImageUrl = (bucket: string, path: string): string => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};

export const getLeaderImageUrl = (leaderName: string): string => {
  // Oz gets special treatment from his own bucket
  if (leaderName === 'Trojan Oz') {
    return getStorageImageUrl('trojan-oz', 'oz-profile.jpg');
  }
  
  // Map leader names to their image files in the exec team bucket
  const imageMap: Record<string, string> = {
    'Dr. Amara Chen': 'amara-chen.jpg',
    'Miguel Santos': 'miguel-santos.jpg',
    'Priya Sharma': 'priya-sharma.jpg',
    'Theo Williams': 'theo-williams.jpg',
    'Dr. Yuna Kim': 'yuna-kim.jpg',
    'David Okafor': 'david-okafor.jpg',
    'Sofia Rodriguez': 'sofia-rodriguez.jpg',
    'Marcus Bennett': 'marcus-bennett.jpg',
    'Aisha Al-Farsi': 'aisha-al-farsi.jpg'
  };
  
  const imagePath = imageMap[leaderName];
  if (imagePath) {
    return getStorageImageUrl('exec-leadership-team-images-except-trojan-oz', imagePath);
  }
  
  // Fallback to a default image if not found
  return '/placeholder.svg';
};
