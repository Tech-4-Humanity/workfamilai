import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface QuoteSubmission {
  workPackageId: string;
  workPackageName: string;
  [key: string]: any;
}

export const useWorkPackageQuote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitQuote = async (data: QuoteSubmission) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(
        'https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/submit-work-package-quote',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit quote request');
      }

      const result = await response.json();
      
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });

      return result;
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitQuote,
    isSubmitting,
  };
};
