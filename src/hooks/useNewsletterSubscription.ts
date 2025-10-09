import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface SubscribeParams {
  email: string;
  source?: string;
  courseInterests?: {
    categories?: string[];
    courses?: string[];
  };
  metadata?: Record<string, any>;
}

export const useNewsletterSubscription = () => {
  const mutation = useMutation({
    mutationFn: async (params: SubscribeParams) => {
      const { data, error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: params,
      });

      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      if (data.alreadySubscribed) {
        toast({
          title: "Already Subscribed",
          description: data.message,
        });
      } else if (data.reactivated) {
        toast({
          title: "Welcome Back!",
          description: data.message,
        });
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: data.message,
        });
      }
    },
    onError: (error: any) => {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  return {
    subscribe: async (params: SubscribeParams) => {
      try {
        await mutation.mutateAsync(params);
        return true;
      } catch {
        return false;
      }
    },
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
