import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DonationSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-none shadow-xl backdrop-blur-lg bg-white/10 text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl text-gray-900 mb-2">
              Thank You for Your Support!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              <p className="text-xl text-gray-700">
                Your donation to workfamilyai has been successfully processed.
              </p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                Your generous contribution will help us advance AI consciousness research, 
                expand our agent network, and push the boundaries of human-AI collaboration.
              </p>
              <p className="text-gray-700">
                You should receive a confirmation email shortly with your donation receipt.
              </p>
            </div>

            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link to="/">Return to workfamilyai</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/donations">Make Another Donation</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}