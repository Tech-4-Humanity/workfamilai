
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, Database, Users, Trash2 } from 'lucide-react';
import { useFamilyAgentIntegration } from '@/hooks/useFamilyAgentIntegration';
import { useToast } from '@/hooks/use-toast';

export const FamilyAgentIntegration = () => {
  const { toast } = useToast();
  const {
    familyAgents,
    isLoading,
    currentAgentCount,
    generatedAgentCount,
    integrateFamilyAgents,
    clearAllFamilyAgents,
    isIntegrating,
    isClearing,
    integrationError,
    integrationSuccess,
    clearError,
    clearSuccess
  } = useFamilyAgentIntegration();

  const handleIntegration = async () => {
    try {
      await integrateFamilyAgents();
      toast({
        title: "Integration Successful",
        description: `Successfully integrated ${generatedAgentCount} family agents into the database.`,
      });
    } catch (error) {
      toast({
        title: "Integration Failed",
        description: "Failed to integrate family agents. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleClear = async () => {
    if (window.confirm('Are you sure you want to clear all family agents? This action cannot be undone.')) {
      try {
        await clearAllFamilyAgents();
        toast({
          title: "Cleared Successfully",
          description: "All family agents have been removed from the database.",
        });
      } catch (error) {
        toast({
          title: "Clear Failed",
          description: "Failed to clear family agents. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const integrationProgress = currentAgentCount && generatedAgentCount 
    ? (currentAgentCount / generatedAgentCount) * 100 
    : 0;

  const isFullyIntegrated = currentAgentCount === generatedAgentCount && generatedAgentCount > 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Neural Ennead™ Family Agent Integration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{generatedAgentCount}</div>
              <div className="text-sm text-muted-foreground">Generated Agents</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">{currentAgentCount || 0}</div>
              <div className="text-sm text-muted-foreground">Database Agents</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{integrationProgress.toFixed(1)}%</div>
              <div className="text-sm text-muted-foreground">Integration Complete</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Integration Progress</span>
              <span>{currentAgentCount || 0} / {generatedAgentCount} agents</span>
            </div>
            <Progress value={integrationProgress} className="h-2" />
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2">
            {isFullyIntegrated ? (
              <Badge variant="default" className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Fully Integrated
              </Badge>
            ) : (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Database className="h-3 w-3" />
                Partial Integration
              </Badge>
            )}
            
            {integrationError && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Integration Error
              </Badge>
            )}
            
            {integrationSuccess && (
              <Badge variant="default" className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                Recently Updated
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleIntegration}
              disabled={isIntegrating || isLoading}
              className="flex-1"
            >
              {isIntegrating ? 'Integrating...' : 'Integrate Family Agents'}
            </Button>
            
            <Button
              onClick={handleClear}
              disabled={isClearing || isLoading || currentAgentCount === 0}
              variant="destructive"
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              {isClearing ? 'Clearing...' : 'Clear All'}
            </Button>
          </div>

          {/* Family Member Breakdown */}
          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Family Member Distribution</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              {Object.entries({
                'Dr. Amara Chen': 'Product Development',
                'Miguel Santos': 'Marketing', 
                'Priya Sharma': 'Human Resources',
                'Theo Williams': 'Finance & Operations',
                'Dr. Yuna Kim': 'Customer Support',
                'David Okafor': 'Innovation & R&D',
                'Sofia Rodriguez': 'Sales',
                'Marcus Bennett': 'Governance & Compliance',
                'Aisha Al-Farsi': 'External Relations'
              }).map(([name, domain]) => (
                <div key={name} className="flex justify-between p-2 bg-muted rounded">
                  <span className="font-medium">{name}</span>
                  <span className="text-muted-foreground">~81 agents</span>
                </div>
              ))}
            </div>
          </div>

          {/* Integration Details */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>• Each family leader manages 3-4 specialized divisions</p>
            <p>• Total of 729 agents across all Neural Ennead™ family members</p>
            <p>• Agents are distributed across different SFIA levels and specializations</p>
            <p>• Integration processes agents in batches of 50 for optimal performance</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
