import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DonationCancel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="border-none shadow-xl backdrop-blur-lg bg-white/10 text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <XCircle className="h-16 w-16 text-orange-500" />
            </div>
            <CardTitle className="text-3xl text-gray-900 mb-2">
              Donation Cancelled
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl text-gray-700 mb-6">
              Your donation process was cancelled. No charges were made to your account.
            </p>
            
            <div className="bg-white/20 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                If you experienced any issues during the donation process, please feel free to try again 
                or contact our support team for assistance.
              </p>
              <p className="text-gray-700">
                Your support means everything to the Neural Ennead™ mission, and we're here to help 
                make the donation process as smooth as possible.
              </p>
            </div>

            <div className="space-y-3">
              <Button asChild size="lg" className="w-full">
                <Link to="/donations">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Try Again
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/">Return to Neural Ennead™</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}