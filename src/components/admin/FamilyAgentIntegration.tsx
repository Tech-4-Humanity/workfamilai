
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Users, Database, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useFamilyAgentIntegration } from '@/hooks/useFamilyAgentIntegration';

export const FamilyAgentIntegration = () => {
  const {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    insertFamilyAgents,
    isIntegrating,
    integrationError,
    integrationSuccess
  } = useFamilyAgentIntegration();

  const handleIntegration = () => {
    insertFamilyAgents.mutate(allFamilyAgents);
  };

  const isAlreadyIntegrated = familyAgents && familyAgents.length > 0;
  const progressPercentage = familyAgents ? (familyAgents.length / 729) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Current Status */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Agents</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : currentAgentCount?.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Total agents in database
            </p>
          </CardContent>
        </Card>

        {/* Family Agents */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Family Agents</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">729</div>
            <p className="text-xs text-muted-foreground">
              Detailed narrative agents ready
            </p>
          </CardContent>
        </Card>

        {/* Integration Status */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Integration Status</CardTitle>
            {isAlreadyIntegrated ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4 text-orange-600" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {isLoading ? '...' : familyAgents?.length || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Family agents integrated
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Integration Progress */}
      {isAlreadyIntegrated && (
        <Card>
          <CardHeader>
            <CardTitle>Integration Progress</CardTitle>
            <CardDescription>
              Family agents successfully integrated into the main database
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{familyAgents?.length || 0} / 729</span>
              </div>
              <Progress value={progressPercentage} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Integrated</span>
                <span>{progressPercentage.toFixed(1)}% complete</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Integration Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Family Agent Integration</CardTitle>
          <CardDescription>
            Integrate the 729 detailed family agents into the main 10,000 agents database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrationError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Integration failed: {integrationError.message}
              </AlertDescription>
            </Alert>
          )}

          {integrationSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Successfully integrated {allFamilyAgents.length} family agents!
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <h4 className="font-medium">Integration Details:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 9 department leaders with detailed backgrounds</li>
              <li>• 81 agents per department (average)</li>
              <li>• Rich narrative data with cultural expertise</li>
              <li>• SFIA levels, costs, and tech stacks</li>
              <li>• Delivery model classifications</li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              onClick={handleIntegration}
              disabled={isIntegrating || isAlreadyIntegrated}
              className="flex items-center gap-2"
            >
              {isIntegrating && <Loader2 className="h-4 w-4 animate-spin" />}
              {isAlreadyIntegrated ? 'Already Integrated' : 'Start Integration'}
            </Button>
            
            {isAlreadyIntegrated && (
              <Badge variant="secondary">
                {familyAgents?.length} agents integrated
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Department Breakdown */}
      {allFamilyAgents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Department Breakdown</CardTitle>
            <CardDescription>
              Overview of agents by department
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(
                allFamilyAgents.reduce((acc, agent) => {
                  acc[agent.domain] = (acc[agent.domain] || 0) + 1;
                  return acc;
                }, {} as Record<string, number>)
              ).map(([department, count]) => (
                <div key={department} className="flex justify-between items-center p-3 border rounded">
                  <span className="font-medium">{department}</span>
                  <Badge variant="outline">{count} agents</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
