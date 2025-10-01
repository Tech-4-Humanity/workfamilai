import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavigationHeader } from '@/components/ui/navigation-header';
import { Footer } from '@/components/ui/footer';
import { useSiteAudit } from '@/hooks/useSiteAudit';
import { AlertCircle, CheckCircle, ExternalLink, Link as LinkIcon, FileText, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SiteAudit = () => {
  const { toast } = useToast();
  const { isLoading, startManualAudit, getRecentAudits, getAuditInsights } = useSiteAudit();
  const [audits, setAudits] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [linkStats, setLinkStats] = useState({ total: 0, internal: 0, external: 0 });

  useEffect(() => {
    loadData();
    analyzePage();
  }, []);

  const loadData = async () => {
    try {
      const [auditsData, insightsData] = await Promise.all([
        getRecentAudits(5),
        getAuditInsights()
      ]);
      setAudits(auditsData || []);
      setInsights(insightsData || []);
    } catch (error) {
      console.error('Failed to load audit data:', error);
    }
  };

  const analyzePage = () => {
    const allLinks = Array.from(document.querySelectorAll('a[href]'));
    const internal = allLinks.filter(link => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('/') || href.startsWith('#');
    });
    const external = allLinks.filter(link => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('http');
    });

    setLinkStats({
      total: allLinks.length,
      internal: internal.length,
      external: external.length
    });
  };

  const handleRunAudit = async () => {
    try {
      toast({
        title: "Audit Started",
        description: "Running comprehensive site audit...",
      });
      
      await startManualAudit(window.location.origin);
      
      toast({
        title: "Audit Complete",
        description: "Site audit has finished successfully.",
      });
      
      await loadData();
    } catch (error) {
      toast({
        title: "Audit Failed",
        description: "Failed to complete site audit.",
        variant: "destructive",
      });
    }
  };

  const totalRoutes = 15; // From App.tsx routes

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'warning': return 'secondary';
      case 'info': return 'outline';
      default: return 'outline';
    }
  };

  const getOverallScore = () => {
    if (insights.length === 0) return 95;
    const criticalCount = insights.filter(i => i.severity === 'critical').length;
    const warningCount = insights.filter(i => i.severity === 'warning').length;
    return Math.max(50, 100 - (criticalCount * 10) - (warningCount * 5));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavigationHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Site Quality Audit</h1>
              <p className="text-muted-foreground">Comprehensive analysis of site health and quality</p>
            </div>
            <Button onClick={handleRunAudit} disabled={isLoading}>
              {isLoading ? 'Running Audit...' : 'Run Audit'}
            </Button>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Overall Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{getOverallScore()}/100</div>
                <p className="text-xs text-muted-foreground">Site Quality</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalRoutes}</div>
                <p className="text-xs text-muted-foreground">Routes Configured</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Total Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{linkStats.total}</div>
                <p className="text-xs text-muted-foreground">
                  {linkStats.internal} internal, {linkStats.external} external
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Issues Found</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{insights.length}</div>
                <p className="text-xs text-muted-foreground">Quality Insights</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Audits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Audits
              </CardTitle>
            </CardHeader>
            <CardContent>
              {audits.length === 0 ? (
                <p className="text-sm text-muted-foreground">No audits run yet. Click "Run Audit" to start.</p>
              ) : (
                <div className="space-y-3">
                  {audits.map((audit) => (
                    <div key={audit.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium text-sm">{audit.audit_type}</div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(audit.started_at).toLocaleString()}
                        </div>
                      </div>
                      <Badge variant={audit.status === 'completed' ? 'default' : 'secondary'}>
                        {audit.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quality Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quality Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              {insights.length === 0 ? (
                <p className="text-sm text-muted-foreground">No insights yet. Run an audit to generate insights.</p>
              ) : (
                <div className="space-y-4">
                  {insights.map((insight) => (
                    <div key={insight.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {insight.severity === 'critical' ? (
                            <AlertCircle className="h-5 w-5 text-destructive" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-muted-foreground" />
                          )}
                          <h3 className="font-semibold">{insight.title}</h3>
                        </div>
                        <Badge variant={getSeverityColor(insight.severity)}>
                          {insight.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                      {insight.recommendation && (
                        <div className="bg-muted/50 p-2 rounded text-xs">
                          <strong>Recommendation:</strong> {insight.recommendation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Link Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Link Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Internal Links</span>
                  <Badge variant="outline">{linkStats.internal}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">External Links</span>
                  <Badge variant="outline">{linkStats.external}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Total Links</span>
                  <Badge>{linkStats.total}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SiteAudit;
