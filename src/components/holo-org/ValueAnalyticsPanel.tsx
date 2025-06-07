
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const ValueAnalyticsPanel = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Partnership Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Dr. Amara Chen</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Miguel Santos</span>
                <span>87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Priya Sharma</span>
                <span>84%</span>
              </div>
              <Progress value={84} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Business Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">94%</div>
              <p className="text-sm text-muted-foreground">Overall partnership value</p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Client Satisfaction</span>
                <span className="font-medium">96%</span>
              </div>
              <div className="flex justify-between">
                <span>Value Delivery</span>
                <span className="font-medium">92%</span>
              </div>
              <div className="flex justify-between">
                <span>Partnership Growth</span>
                <span className="font-medium">95%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
