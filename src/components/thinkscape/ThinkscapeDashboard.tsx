
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Network, 
  Lightbulb, 
  Users, 
  TrendingUp,
  Activity,
  Handshake
} from 'lucide-react';
import { useKnowledgeBase } from '@/hooks/useKnowledgeBase';

export const ThinkscapeDashboard = () => {
  const [orgStats, setOrgStats] = useState({
    totalExpertise: 0,
    activePartnerships: 0,
    businessInsights: 0,
    networkConnections: 0
  });

  const { getRelevantKnowledge, getCollaborationInsights } = useKnowledgeBase();

  useEffect(() => {
    // Load organizational statistics
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
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Building className="w-8 h-8 text-blue-600" />
            Holo-Org Dashboard
          </h1>
          <p className="text-muted-foreground">
            Organizational Intelligence & Partnership Network
          </p>
        </div>
        <Badge variant="secondary" className="px-3 py-1">
          <Activity className="w-3 h-3 mr-1" />
          Live Network
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expertise</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{orgStats.totalExpertise}</div>
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
            <div className="text-2xl font-bold">{orgStats.activePartnerships}</div>
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
            <div className="text-2xl font-bold">{orgStats.businessInsights}</div>
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
            <div className="text-2xl font-bold">{orgStats.networkConnections}</div>
            <p className="text-xs text-muted-foreground">
              Cross-org connections
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Partnership Network</TabsTrigger>
          <TabsTrigger value="insights">Business Insights</TabsTrigger>
          <TabsTrigger value="partnerships">Active Partnerships</TabsTrigger>
          <TabsTrigger value="analytics">Value Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Partnership Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Network className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Interactive partnership network visualization</p>
                <p className="text-sm">Connect with partners, advisors, and customers to see collaboration patterns</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="partnerships" className="space-y-4">
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
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
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
        </TabsContent>
      </Tabs>
    </div>
  );
};
