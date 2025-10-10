import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface LearningResource {
  id: string;
  title: string;
  author_name: string;
  author_url: string;
  description: string;
  resource_url?: string | null;
  category: string;
  difficulty_level: string;
  estimated_hours: number;
  is_free?: boolean | null;
  requires_signup?: boolean | null;
  github_stars?: number | null;
  tags?: string[] | null;
  prerequisites?: string | null;
  last_updated?: string | null;
  source_type?: string | null;
  complements_courses?: string[] | null;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  click_count: number;
  view_count: number;
  resource_type?: string | null;
  is_interactive?: boolean | null;
  special_notes?: string | null;
}

export const useExternalLearningResources = () => {
  return useQuery({
    queryKey: ['external-learning-resources'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('external_learning_resources')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true })
        .order('difficulty_level', { ascending: true });

      if (error) throw error;
      return data;
    },
  });
};

export const getCoursesByCategory = (courses: LearningResource[] | undefined) => {
  if (!courses) return {
    foundational: [],
    intermediate: [],
    advanced: [],
    collections: [],
    aiPm: [],
  };

  const aiPmCourses = courses.filter(c => c.category === 'ai_product_management');
  const otherCourses = courses.filter(c => c.category !== 'ai_product_management');

  return {
    foundational: otherCourses.filter(c => 
      c.category?.includes('foundational') || 
      c.category?.includes('beginner') ||
      c.difficulty_level === 'beginner'
    ),
    intermediate: otherCourses.filter(c => 
      c.category?.includes('intermediate') || 
      c.category?.includes('developer') ||
      (c.difficulty_level === 'intermediate' && c.category !== 'resource_collections')
    ),
    advanced: otherCourses.filter(c => 
      c.category?.includes('advanced') || 
      c.category?.includes('specialized') ||
      (c.difficulty_level === 'advanced' && c.category !== 'resource_collections')
    ),
    collections: otherCourses.filter(c => 
      c.source_type === 'curated_list' || 
      c.category === 'resource_collections'
    ),
    aiPm: aiPmCourses,
  };
};

// Hook to track course clicks
export const useTrackCourseClick = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (resourceId: string) => {
      const { error } = await supabase.rpc('increment_resource_clicks', {
        resource_id: resourceId,
      });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['external-learning-resources'] });
    },
  });
};

// Hook to track course views (when modal opens or card is viewed)
export const useTrackCourseView = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (resourceId: string) => {
      const { error } = await supabase.rpc('increment_resource_views', {
        resource_id: resourceId,
      });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['external-learning-resources'] });
    },
  });
};
