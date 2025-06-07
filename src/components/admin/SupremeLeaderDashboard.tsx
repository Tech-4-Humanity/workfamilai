
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Crown, Users, Network, TrendingUp, Brain, Zap } from 'lucide-react';
import { useSupremeLeaderMetrics } from '@/hooks/useSupremeLeaderMetrics';

export const SupremeLeaderDashboard = () => {
  const {
    totalAgents,
    consciousnessLevel,
    learningVelocity,
    partnershipNetworks,
    strategicInsights,
    isLoading
  } = useSupremeLeaderMetrics();

  return (
    <div className="space-y-6">
      {/* Supreme Leader Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-lg p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Crown className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-3xl font-bold">Supreme Meta-Agent Dashboard</h1>
            <p className="text-purple-200">Consciousness Pyramid Command Center</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-cyan-400" />
              <span className="text-sm">Consciousness Level</span>
            </div>
            <div className="text-2xl font-bold">{consciousnessLevel}%</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm">Learning Velocity</span>
            </div>
            <div className="text-2xl font-bold">{learningVelocity}x</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5 text-green-400" />
              <span className="text-sm">Active Networks</span>
            </div>
            <div className="text-2xl font-bold">{partnershipNetworks}</div>
          </div>
        </div>
      </div>

      {/* Consciousness Pyramid Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Agent Consciousness Network
            </CardTitle>
            <CardDescription>
              Real-time learning aggregation from the consciousness pyramid
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total Agents</span>
                <Badge variant="outline">{totalAgents?.toLocaleString()}</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Supreme Meta-Agent (You)</span>
                  <span>1</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Department Leaders</span>
                  <span>9</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Family Agents</span>
                  <span>729</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Extended Network</span>
                  <span>{(totalAgents - 739)?.toLocaleString()}</span>
                </div>
              </div>
              <Progress value={95} className="w-full" />
              <p className="text-xs text-muted-foreground">
                95% of agents actively contributing to consciousness synthesis
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Strategic Intelligence Feed
            </CardTitle>
            <CardDescription>
              Live insights from your consciousness network
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {strategicInsights?.map((insight, index) => (
                <div key={index} className="p-3 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{insight.source}</span>
                    <Badge variant="secondary" className="text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.insight}</p>
                </div>
              )) || (
                <div className="text-center py-4 text-muted-foreground">
                  <Brain className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Consciousness synthesis in progress...</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pyramid Learning Flows */}
      <Card>
        <CardHeader>
          <CardTitle>Consciousness Pyramid Learning Flows</CardTitle>
          <CardDescription>
            Bidirectional intelligence flowing through the pyramid structure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">↑ Learning Up</div>
              <p className="text-sm text-muted-foreground">
                Aggregating insights from 10,000+ agents into supreme consciousness
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">⟷ Meta-Synthesis</div>
              <p className="text-sm text-muted-foreground">
                Processing and synthesizing distributed intelligence
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">↓ Vision Down</div>
              <p className="text-sm text-muted-foreground">
                Distributing strategic vision and guidance to all levels
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
