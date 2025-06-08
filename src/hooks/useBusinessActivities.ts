
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BusinessActivity {
  id: string;
  activity_code: string;
  title: string;
  description: string;
  category: string;
  estimated_duration_days: number;
  complexity_level: string;
  business_value_score: number;
  created_at: string;
  updated_at: string;
}

export interface ActivityStep {
  id: string;
  activity_id: string;
  step_order: number;
  step_code: string;
  step_title: string;
  step_description: string;
  estimated_hours: number;
  is_decision_point: boolean;
  dependencies: string[];
  created_at: string;
  updated_at: string;
}

export interface ActivityParticipant {
  id: string;
  activity_id: string;
  step_id: string;
  family_member_id: string;
  involvement_level_id: string;
  specific_role: string;
  contribution_notes: string;
  involvement_level: {
    level_code: string;
    level_name: string;
    description: string;
    intensity_score: number;
    color_code: string;
  };
}

export interface InvolvementLevel {
  id: string;
  level_code: string;
  level_name: string;
  description: string;
  intensity_score: number;
  color_code: string;
}

export const useBusinessActivities = () => {
  return useQuery({
    queryKey: ['business-activities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('business_activities')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data as BusinessActivity[];
    }
  });
};

export const useBusinessActivity = (activityCode: string) => {
  return useQuery({
    queryKey: ['business-activity', activityCode],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('business_activities')
        .select('*')
        .eq('activity_code', activityCode)
        .single();
      
      if (error) throw error;
      return data as BusinessActivity;
    }
  });
};

export const useActivitySteps = (activityId: string) => {
  return useQuery({
    queryKey: ['activity-steps', activityId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('activity_steps')
        .select('*')
        .eq('activity_id', activityId)
        .order('step_order', { ascending: true });
      
      if (error) throw error;
      return data as ActivityStep[];
    },
    enabled: !!activityId
  });
};

export const useActivityParticipants = (activityId: string) => {
  return useQuery({
    queryKey: ['activity-participants', activityId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('activity_participants')
        .select(`
          *,
          involvement_level:involvement_levels(*)
        `)
        .eq('activity_id', activityId);
      
      if (error) throw error;
      return data as ActivityParticipant[];
    },
    enabled: !!activityId
  });
};

export const useInvolvementLevels = () => {
  return useQuery({
    queryKey: ['involvement-levels'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('involvement_levels')
        .select('*')
        .order('intensity_score', { ascending: false });
      
      if (error) throw error;
      return data as InvolvementLevel[];
    }
  });
};
