
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Mic, BarChart3, Users, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { VoiceQueryInterface } from './VoiceQueryInterface';
import { organizationalData } from '@/data/organizationalData';

export const OrganizationalDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('voice-query');

  const totalAgents = organizationalData.length;
  const totalCost = organizationalData.reduce((sum, agent) => sum + agent.cost, 0);
  const avgAvailability = organizationalData.reduce((sum, agent) => sum + agent.fte_availability, 0) / totalAgents;
  const riskDistribution = organizationalData.reduce((acc, agent) => {
    acc[agent.risk_level] = (acc[agent.risk_level] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/holo-org')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Holo-Org</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Brain className="w-8 h-8 text-purple-600" />
              Organizational Intelligence
            </h1>
            <p className="text-muted-foreground">
              Voice-activated insights and thinkscape knowledge sharing
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-3 py-1">
            <Mic className="w-3 h-3 mr-1" />
            Voice Enabled
          </Badge>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAgents}</div>
            <p className="text-xs text-muted-foreground">Active in organization</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Combined resource cost</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(avgAvailability * 100)}%</div>
            <p className="text-xs text-muted-foreground">FTE availability</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Risk Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-1">
              {Object.entries(riskDistribution).map(([level, count]) => (
                <Badge 
                  key={level} 
                  variant={level === 'High' ? 'destructive' : level === 'Medium' ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {level}: {count}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="voice-query" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice Query
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Knowledge Base
          </TabsTrigger>
        </TabsList>

        <TabsContent value="voice-query" className="space-y-4">
          <VoiceQueryInterface />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Analytics</CardTitle>
              <CardDescription>
                Detailed breakdown of organizational capabilities and resource allocation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Cost Distribution</h4>
                  <div className="space-y-2">
                    {organizationalData.map((agent, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{agent.persona}</span>
                        <span className="text-sm font-medium">${agent.cost.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Capability Coverage</h4>
                  <div className="space-y-2">
                    {organizationalData.map((agent, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{agent.persona}</span>
                        <span className="text-sm">{agent.capability_tags}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thinkscape Knowledge Sharing</CardTitle>
              <CardDescription>
                Interconnected knowledge patterns and collaborative insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Sample Voice Queries</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="p-2 bg-muted rounded text-sm">
                      "List agents for cloud migration"
                    </div>
                    <div className="p-2 bg-muted rounded text-sm">
                      "Show costs for survey design"
                    </div>
                    <div className="p-2 bg-muted rounded text-sm">
                      "What's the risk for RFT management"
                    </div>
                    <div className="p-2 bg-muted rounded text-sm">
                      "Who handles CRM training"
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Knowledge Integration Points</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Voice queries automatically cross-reference family member capabilities</li>
                    <li>• Real-time cost and risk analysis across all activities</li>
                    <li>• Skills-based resource matching with availability tracking</li>
                    <li>• Interactive visualizations responsive to voice commands</li>
                    <li>• Integration with business scenario workflows</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
