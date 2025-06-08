
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Clock, BarChart3, Users, GitBranch, Timer } from 'lucide-react';
import { useBusinessActivity } from '@/hooks/useBusinessActivities';
import { ActivityFlowChart } from '@/components/scenarios/ActivityFlowChart';
import { FamilyInvolvementMap } from '@/components/scenarios/FamilyInvolvementMap';
import { ProcessTimeline } from '@/components/scenarios/ProcessTimeline';

const ScenarioDetail = () => {
  const { scenarioId } = useParams<{ scenarioId: string }>();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('flow');
  
  const { data: activity, isLoading, error } = useBusinessActivity(scenarioId || '');

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div className="p-6">
        <Button
          variant="outline"
          onClick={() => navigate('/scenarios')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Scenarios
        </Button>
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Scenario not found or failed to load.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/scenarios')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Scenarios</span>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{activity.title}</h1>
            <p className="text-muted-foreground">{activity.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Category</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="capitalize">
              {activity.category.replace('-', ' ')}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{activity.estimated_duration_days}</p>
            <p className="text-sm text-muted-foreground">days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Complexity</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge className={getComplexityColor(activity.complexity_level)}>
              {activity.complexity_level.charAt(0).toUpperCase() + activity.complexity_level.slice(1)}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Business Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold">{activity.business_value_score}</p>
              <span className="text-sm text-muted-foreground">/10</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeView} onValueChange={setActiveView} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="flow" className="flex items-center gap-2">
            <GitBranch className="h-4 w-4" />
            Process Flow
          </TabsTrigger>
          <TabsTrigger value="involvement" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Family Involvement
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <Timer className="h-4 w-4" />
            Timeline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flow" className="space-y-4">
          <ActivityFlowChart activityId={activity.id} />
        </TabsContent>

        <TabsContent value="involvement" className="space-y-4">
          <FamilyInvolvementMap activityId={activity.id} />
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <ProcessTimeline activityId={activity.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScenarioDetail;
