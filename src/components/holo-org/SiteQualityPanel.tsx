
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle, Clock, Play, RefreshCw } from 'lucide-react';
import { useSiteAudit } from '@/hooks/useSiteAudit';
import { useToast } from '@/hooks/use-toast';

export const SiteQualityPanel = () => {
  const { startManualAudit, getRecentAudits, getAuditInsights, isLoading } = useSiteAudit();
  const { toast } = useToast();
  const [recentAudits, setRecentAudits] = useState([]);
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [auditsData, insightsData] = await Promise.all([
        getRecentAudits(5),
        getAuditInsights()
      ]);
      setRecentAudits(auditsData);
      setInsights(insightsData);
    } catch (error) {
      console.error('Error loading audit data:', error);
    }
  };

  const handleStartAudit = async () => {
    try {
      await startManualAudit(window.location.origin);
      toast({
        title: "Site Audit Started",
        description: "Quality check is running for the current application",
      });
      // Reload data after a short delay
      setTimeout(loadData, 2000);
    } catch (error) {
      toast({
        title: "Audit Failed",
        description: "Could not start site quality audit",
        variant: "destructive"
      });
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'error': return 'destructive';
      case 'warning': return 'outline';
      case 'info': return 'secondary';
      default: return 'secondary';
    }
  };

  const getOverallScore = () => {
    if (insights.length === 0) return 100;
    const totalImpact = insights.reduce((sum, insight) => sum + insight.impact_score, 0);
    const maxPossibleImpact = insights.length * 5;
    return Math.max(0, 100 - (totalImpact / maxPossibleImpact) * 100);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Site Quality Audit
            <Button 
              onClick={handleStartAudit} 
              disabled={isLoading}
              size="sm"
              className="ml-2"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 animate-spin mr-1" />
              ) : (
                <Play className="w-4 h-4 mr-1" />
              )}
              {isLoading ? 'Running...' : 'Start Audit'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {Math.round(getOverallScore())}%
              </div>
              <p className="text-sm text-muted-foreground">Overall Quality Score</p>
              <Progress value={getOverallScore()} className="mt-2" />
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Recent Audits</h4>
              {recentAudits.slice(0, 3).map((audit) => (
                <div key={audit.id} className="flex items-center justify-between p-2 border rounded">
                  <div className="flex items-center gap-2">
                    {audit.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : audit.status === 'running' ? (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    <span className="text-sm">
                      {new Date(audit.started_at).toLocaleString()}
                    </span>
                  </div>
                  <Badge variant={audit.status === 'completed' ? 'default' : 'secondary'}>
                    {audit.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quality Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {insights.slice(0, 4).map((insight) => (
              <div key={insight.id} className="p-3 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{insight.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {insight.description}
                    </p>
                    {insight.recommendation && (
                      <p className="text-xs text-blue-600 mt-1">
                        💡 {insight.recommendation}
                      </p>
                    )}
                  </div>
                  <Badge variant={getSeverityColor(insight.severity)} className="ml-2">
                    {insight.severity}
                  </Badge>
                </div>
              </div>
            ))}
            
            {insights.length === 0 && (
              <div className="text-center py-4 text-muted-foreground">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No quality issues detected</p>
                <p className="text-xs">Run an audit to check for potential improvements</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
