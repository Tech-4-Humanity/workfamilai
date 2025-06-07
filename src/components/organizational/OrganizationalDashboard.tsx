
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle2, 
  Users,
  BrainCircuit,
  Zap,
  Target
} from 'lucide-react';
import { useOrganizationalIntelligence } from '@/hooks/useOrganizationalIntelligence';
import { useChangeManagement } from '@/hooks/useChangeManagement';

export const OrganizationalDashboard = () => {
  const { getOrganizationalInsights, isLoading } = useOrganizationalIntelligence();
  const { getActiveChanges, getChangeAnalytics } = useChangeManagement();
  
  const [insights, setInsights] = useState<any>({ healthMetrics: [], pendingDecisions: [], knowledgeStatus: [] });
  const [activeChanges, setActiveChanges] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>({ changes: [], transfers: [] });

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const [insightsData, changesData, analyticsData] = await Promise.all([
          getOrganizationalInsights(),
          getActiveChanges(),
          getChangeAnalytics()
        ]);
        
        setInsights(insightsData);
        setActiveChanges(changesData);
        setAnalytics(analyticsData);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      }
    };

    loadDashboardData();
  }, [getOrganizationalInsights, getActiveChanges, getChangeAnalytics]);

  const getMetricIcon = (category: string, trend?: string) => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-red-500" />;
    
    switch (category) {
      case 'operational': return <Zap className="h-4 w-4 text-blue-500" />;
      case 'strategic': return <Target className="h-4 w-4 text-purple-500" />;
      case 'knowledge': return <BrainCircuit className="h-4 w-4 text-orange-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'implementation': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'current': return 'bg-green-100 text-green-800';
      case 'needs_review': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-32 bg-gray-200 rounded"></div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Organizational Intelligence</h1>
          <p className="text-gray-600">Real-time insights into organizational health and knowledge flow</p>
        </div>
        <Button>
          <BrainCircuit className="h-4 w-4 mr-2" />
          Generate Insights
        </Button>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Health Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.healthMetrics.length}</div>
            <div className="flex items-center space-x-2 mt-2">
              {insights.healthMetrics.filter((m: any) => m.trend_direction === 'up').length > 0 && (
                <TrendingUp className="h-4 w-4 text-green-500" />
              )}
              <span className="text-sm text-gray-600">Active monitoring</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending Decisions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.pendingDecisions.length}</div>
            <div className="flex items-center space-x-2 mt-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm text-gray-600">Awaiting approval</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Changes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeChanges.length}</div>
            <div className="flex items-center space-x-2 mt-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">In progress</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Knowledge Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.knowledgeStatus.filter((k: any) => k.validation_status === 'current').length}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm text-gray-600">Validated items</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Organizational Health Metrics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BrainCircuit className="h-5 w-5" />
              <span>Health Metrics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights.healthMetrics.slice(0, 5).map((metric: any) => (
                <div key={metric.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getMetricIcon(metric.metric_category, metric.trend_direction)}
                    <div>
                      <p className="font-medium">{metric.metric_name}</p>
                      <p className="text-sm text-gray-600 capitalize">{metric.metric_category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{metric.metric_value}</p>
                    <Badge className={`text-xs ${getStatusColor(metric.impact_level)}`}>
                      {metric.impact_level}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Decisions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Strategic Decisions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights.pendingDecisions.slice(0, 5).map((decision: any) => (
                <div key={decision.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{decision.decision_title}</p>
                      <p className="text-sm text-gray-600 capitalize">{decision.decision_type}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xs text-gray-500">Affected:</span>
                        {decision.affected_departments.slice(0, 2).map((dept: string) => (
                          <Badge key={dept} variant="outline" className="text-xs">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(decision.approval_status)} ml-2`}>
                      {decision.approval_status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Changes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Active Changes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activeChanges.slice(0, 5).map((change: any) => (
                <div key={change.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium">{change.change_title}</p>
                      <p className="text-sm text-gray-600 capitalize">{change.change_type.replace('_', ' ')}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Initiated by: {change.initiator}
                      </p>
                    </div>
                    <Badge className={`${getStatusColor(change.change_stage)} ml-2`}>
                      {change.change_stage}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Knowledge Status</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {insights.knowledgeStatus.slice(0, 5).map((knowledge: any, index: number) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium capitalize">{knowledge.department_id.replace('-', ' ')}</p>
                      <p className="text-sm text-gray-600 capitalize">{knowledge.expertise_level} level</p>
                    </div>
                    <Badge className={`${getStatusColor(knowledge.validation_status)}`}>
                      {knowledge.validation_status.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
