
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Activity, ArrowLeft, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useKnowledgeBase } from '@/hooks/useKnowledgeBase';
import { HoloOrgMetrics } from './HoloOrgMetrics';
import { BusinessInsightsPanel } from './BusinessInsightsPanel';
import { PartnershipSessionsPanel } from './PartnershipSessionsPanel';
import { ValueAnalyticsPanel } from './ValueAnalyticsPanel';
import { PartnershipNetworkPanel } from './PartnershipNetworkPanel';
import { SiteQualityPanel } from './SiteQualityPanel';

export const HoloOrgDashboard = () => {
  const navigate = useNavigate();
  const [orgStats, setOrgStats] = useState({
    totalExpertise: 0,
    activePartnerships: 0,
    businessInsights: 0,
    networkConnections: 0
  });

  const { getRelevantKnowledge, getCollaborationInsights } = useKnowledgeBase();

  useEffect(() => {
    loadOrgStats();
  }, []);

  const loadOrgStats = async () => {
    // This would be replaced with actual data fetching
    setOrgStats({
      totalExpertise: 156,
      activePartnerships: 23,
      businessInsights: 8,
      networkConnections: 42
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Family</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Building className="w-8 h-8 text-blue-600" />
              Holo-Org Dashboard
            </h1>
            <p className="text-muted-foreground">
              Organizational Intelligence & Partnership Network
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-3 py-1">
            <Activity className="w-3 h-3 mr-1" />
            Live Network
          </Badge>
        </div>
      </div>

      <HoloOrgMetrics stats={orgStats} />

      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Partnership Network</TabsTrigger>
          <TabsTrigger value="insights">Business Insights</TabsTrigger>
          <TabsTrigger value="partnerships">Active Partnerships</TabsTrigger>
          <TabsTrigger value="analytics">Value Analytics</TabsTrigger>
          <TabsTrigger value="quality">Site Quality</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-4">
          <PartnershipNetworkPanel />
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <BusinessInsightsPanel />
        </TabsContent>

        <TabsContent value="partnerships" className="space-y-4">
          <PartnershipSessionsPanel />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <ValueAnalyticsPanel />
        </TabsContent>

        <TabsContent value="quality" className="space-y-4">
          <SiteQualityPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
};
