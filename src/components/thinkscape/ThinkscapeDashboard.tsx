
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Network, 
  Lightbulb, 
  Users, 
  TrendingUp,
  Activity,
  Zap
} from 'lucide-react';
import { useKnowledgeBase } from '@/hooks/useKnowledgeBase';

export const ThinkscapeDashboard = () => {
  const [knowledgeStats, setKnowledgeStats] = useState({
    totalKnowledge: 0,
    activeCollaborations: 0,
    recentInsights: 0,
    networkConnections: 0
  });

  const { getRelevantKnowledge, getCollaborationInsights } = useKnowledgeBase();

  useEffect(() => {
    // Load dashboard statistics
    loadDashboardStats();
  }, []);

  const loadDashboardStats = async () => {
    // This would be replaced with actual data fetching
    setKnowledgeStats({
      totalKnowledge: 156,
      activeCollaborations: 23,
      recentInsights: 8,
      networkConnections: 42
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            Thinkscape Dashboard
          </h1>
          <p className="text-muted-foreground">
            Collaborative AI Intelligence Network
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
            <CardTitle className="text-sm font-medium">Total Knowledge</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{knowledgeStats.totalKnowledge}</div>
            <p className="text-xs text-muted-foreground">
              +12 from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Collaborations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{knowledgeStats.activeCollaborations}</div>
            <p className="text-xs text-muted-foreground">
              +3 sessions today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent Insights</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{knowledgeStats.recentInsights}</div>
            <p className="text-xs text-muted-foreground">
              In the last 24h
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network Connections</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{knowledgeStats.networkConnections}</div>
            <p className="text-xs text-muted-foreground">
              Cross-agent links
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Knowledge Network</TabsTrigger>
          <TabsTrigger value="insights">Live Insights</TabsTrigger>
          <TabsTrigger value="collaborations">Active Sessions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Family Knowledge Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <Network className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Interactive knowledge network visualization coming soon</p>
                <p className="text-sm">Connect with family members to see collaboration patterns</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Live Learning Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Product-Marketing Synergy Detected</p>
                    <p className="text-xs text-muted-foreground">
                      Dr. Amara Chen and Miguel Santos showed strong collaboration patterns in recent conversations
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">2 minutes ago</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Cross-Cultural Knowledge Sharing</p>
                    <p className="text-xs text-muted-foreground">
                      Cultural expertise from Asian markets being applied to Latin American strategies
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">15 minutes ago</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Innovation Pipeline Optimization</p>
                    <p className="text-xs text-muted-foreground">
                      David Okafor's R&D insights enhanced product development workflows
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">1 hour ago</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="collaborations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Collaboration Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">Product Launch Strategy</p>
                      <p className="text-xs text-muted-foreground">
                        Dr. Amara Chen, Miguel Santos, Sofia Rodriguez
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">HR Process Optimization</p>
                      <p className="text-xs text-muted-foreground">
                        Priya Sharma, Dr. Yuna Kim
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">Planning</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div>
                      <p className="text-sm font-medium">Innovation Research</p>
                      <p className="text-xs text-muted-foreground">
                        David Okafor, Theo Williams, Marcus Bennett
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Knowledge Velocity</CardTitle>
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
                <CardTitle className="text-lg">Collaboration Effectiveness</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">94%</div>
                    <p className="text-sm text-muted-foreground">Overall effectiveness</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Problem Resolution</span>
                      <span className="font-medium">96%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Knowledge Transfer</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>User Satisfaction</span>
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
