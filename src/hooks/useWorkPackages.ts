import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface WorkPackage {
  id: string;
  name: string;
  category: string;
  subcategory: string | null;
  description: string | null;
  base_price: number | null;
  tier: string | null;
  target_audience: string | null;
  customer_outcome: string | null;
  deliverables: any;
  tags: string[] | null;
  is_active: boolean;
  ai_leverage_level: string | null;
  delivery_timeframe_days: number | null;
}

export const useWorkPackages = () => {
  return useQuery({
    queryKey: ['work-packages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('work_packages')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true })
        .order('name', { ascending: true });
      
      if (error) throw error;
      return data as WorkPackage[];
    },
  });
};
