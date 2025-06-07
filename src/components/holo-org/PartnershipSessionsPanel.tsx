
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const PartnershipSessionsPanel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Partnership Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <div>
                <p className="text-sm font-medium">Client Strategy Development</p>
                <p className="text-xs text-muted-foreground">
                  Dr. Amara Chen, Miguel Santos, Sofia Rodriguez
                </p>
              </div>
            </div>
            <Badge variant="secondary">Active Partner</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              <div>
                <p className="text-sm font-medium">Organizational Optimization</p>
                <p className="text-xs text-muted-foreground">
                  Priya Sharma, Dr. Yuna Kim
                </p>
              </div>
            </div>
            <Badge variant="outline">Advisory Role</Badge>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <div>
                <p className="text-sm font-medium">Innovation Consulting</p>
                <p className="text-xs text-muted-foreground">
                  David Okafor, Theo Williams, Marcus Bennett
                </p>
              </div>
            </div>
            <Badge variant="secondary">Customer Success</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
