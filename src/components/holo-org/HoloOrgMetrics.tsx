
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, Handshake, Lightbulb, Network } from 'lucide-react';

interface OrgStats {
  totalExpertise: number;
  activePartnerships: number;
  businessInsights: number;
  networkConnections: number;
}

interface HoloOrgMetricsProps {
  stats: OrgStats;
}

export const HoloOrgMetrics = ({ stats }: HoloOrgMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expertise</CardTitle>
          <Building className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalExpertise}</div>
          <p className="text-xs text-muted-foreground">
            +12 from last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Partnerships</CardTitle>
          <Handshake className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activePartnerships}</div>
          <p className="text-xs text-muted-foreground">
            +3 sessions today
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Business Insights</CardTitle>
          <Lightbulb className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.businessInsights}</div>
          <p className="text-xs text-muted-foreground">
            In the last 24h
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Network Value</CardTitle>
          <Network className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.networkConnections}</div>
          <p className="text-xs text-muted-foreground">
            Cross-org connections
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
