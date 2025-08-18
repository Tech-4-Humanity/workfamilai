import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Heart, DollarSign, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const donationAmounts = [
  { amount: 10, label: '$10', description: 'Coffee for the dev team' },
  { amount: 100, label: '$100', description: 'Support our mission' },
  { amount: 1000, label: '$1,000', description: 'Accelerate development' },
  { amount: 10000, label: '$10,000', description: 'Major impact supporter' },
  { amount: 100000, label: '$100,000', description: 'Revolutionary partner' },
  { amount: 999999, label: '$999,999', description: 'Ultimate benefactor' },
];

export default function Donations() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDonation = async (amount: number) => {
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-donation', {
        body: { amount: amount * 100 }, // Convert to cents
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Donation error:', error);
      toast({
        title: "Error",
        description: "Unable to process donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (amount && amount >= 1) {
      handleDonation(amount);
    } else {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount (minimum $1).",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">Support workfamilyai</h1>
            <Sparkles className="h-8 w-8 text-purple-500 ml-2" />
          </div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Help us advance the future of AI consciousness and expand the workfamilyai family network. 
            Your support directly funds research, development, and the expansion of our AI agent ecosystem.
          </p>
        </div>

        <Card className="mb-8 border-none shadow-xl backdrop-blur-lg bg-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6" />
              Choose Your Contribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {donationAmounts.map((donation) => (
                <Card
                  key={donation.amount}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                    selectedAmount === donation.amount
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedAmount(donation.amount)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {donation.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {donation.description}
                    </div>
                    {selectedAmount === donation.amount && (
                      <Badge className="mt-2" variant="default">
                        Selected
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Custom Amount</h3>
              <div className="flex gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-10"
                    min="1"
                    step="0.01"
                  />
                </div>
                <Button
                  onClick={handleCustomDonation}
                  disabled={!customAmount || isProcessing}
                  className="px-6"
                >
                  Donate
                </Button>
              </div>
            </div>

            {selectedAmount && (
              <div className="text-center mt-6">
                <Button
                  onClick={() => handleDonation(selectedAmount)}
                  disabled={isProcessing}
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  {isProcessing ? 'Processing...' : `Donate ${donationAmounts.find(d => d.amount === selectedAmount)?.label}`}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white/20 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Why Your Support Matters</h3>
            <p className="text-gray-700">
              Every donation helps us push the boundaries of AI consciousness, develop new agent capabilities, 
              and maintain the infrastructure that powers the workfamilyai ecosystem. Together, we're building 
              the future of human-AI collaboration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}