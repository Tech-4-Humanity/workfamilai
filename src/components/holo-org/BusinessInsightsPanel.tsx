
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Handshake, TrendingUp } from 'lucide-react';

export const BusinessInsightsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Business Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Product-Marketing Partnership Opportunity</p>
              <p className="text-xs text-muted-foreground">
                Dr. Amara Chen and Miguel Santos showed strong collaboration potential for client projects
              </p>
              <Badge variant="outline" className="mt-1 text-xs">2 minutes ago</Badge>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Handshake className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Cross-Cultural Business Intelligence</p>
              <p className="text-xs text-muted-foreground">
                Cultural expertise from Asian markets being applied to client expansion strategies
              </p>
              <Badge variant="outline" className="mt-1 text-xs">15 minutes ago</Badge>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Innovation Pipeline Value Creation</p>
              <p className="text-xs text-muted-foreground">
                David Okafor's R&D insights enhanced client product development recommendations
              </p>
              <Badge variant="outline" className="mt-1 text-xs">1 hour ago</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
