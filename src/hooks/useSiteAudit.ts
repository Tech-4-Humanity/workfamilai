
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AuditReport {
  id: string;
  audit_type: string;
  status: string;
  base_url: string;
  pages_crawled: any;
  broken_links: any;
  missing_handlers: any;
  performance_metrics: any;
  started_at: string;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

interface AuditInsight {
  id: string;
  audit_report_id: string;
  insight_type: string;
  title: string;
  description: string;
  severity: string;
  impact_score: number;
  recommendation?: string;
  data_points: any;
  created_at: string;
}

export const useSiteAudit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAudit, setCurrentAudit] = useState<AuditReport | null>(null);

  const startManualAudit = useCallback(async (baseUrl: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('site_audit_reports')
        .insert({
          audit_type: 'manual',
          status: 'running',
          base_url: baseUrl
        })
        .select()
        .single();

      if (error) throw error;
      
      setCurrentAudit(data);
      
      // Start client-side audit
      await performClientSideAudit(data.id, baseUrl);
      
      return data;
    } catch (error) {
      console.error('Error starting audit:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const performClientSideAudit = async (auditId: string, baseUrl: string) => {
    const results = {
      pages_crawled: [],
      broken_links: [],
      missing_handlers: [],
      performance_metrics: {}
    };

    try {
      // Check current page links
      const links = Array.from(document.querySelectorAll('a[href]'));
      const buttons = Array.from(document.querySelectorAll('button'));
      
      // Analyze buttons for missing handlers
      buttons.forEach((button, index) => {
        const hasHandler = button.onclick || 
                          button.getAttribute('onClick') || 
                          button.closest('[data-testid]') ||
                          button.type === 'submit';
        
        if (!hasHandler && button.textContent?.trim()) {
          results.missing_handlers.push({
            page: window.location.href,
            snippet: button.outerHTML.substring(0, 200),
            text: button.textContent.trim()
          });
        }
      });

      // Basic performance metrics
      if (window.performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        results.performance_metrics = {
          load_time: navigation.loadEventEnd - navigation.fetchStart,
          dom_ready: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          page_size: document.documentElement.outerHTML.length
        };
      }

      results.pages_crawled.push({
        url: window.location.href,
        status: 'ok',
        timestamp: new Date().toISOString()
      });

      // Generate insights
      const insights = generateAuditInsights(results);

      // Update audit report
      await supabase
        .from('site_audit_reports')
        .update({
          status: 'completed',
          pages_crawled: results.pages_crawled,
          broken_links: results.broken_links,
          missing_handlers: results.missing_handlers,
          performance_metrics: results.performance_metrics,
          completed_at: new Date().toISOString()
        })
        .eq('id', auditId);

      // Insert insights
      if (insights.length > 0) {
        await supabase
          .from('audit_insights')
          .insert(insights.map(insight => ({
            ...insight,
            audit_report_id: auditId
          })));
      }

    } catch (error) {
      console.error('Audit failed:', error);
      await supabase
        .from('site_audit_reports')
        .update({
          status: 'failed',
          completed_at: new Date().toISOString()
        })
        .eq('id', auditId);
    }
  };

  const generateAuditInsights = (results: any): Omit<AuditInsight, 'id' | 'audit_report_id' | 'created_at'>[] => {
    const insights = [];

    if (results.missing_handlers.length > 0) {
      insights.push({
        insight_type: 'ui_quality',
        title: 'Interactive Elements Missing Handlers',
        description: `Found ${results.missing_handlers.length} buttons that may be missing click handlers`,
        severity: 'warning',
        impact_score: 3,
        recommendation: 'Review button implementations for proper event handling',
        data_points: { count: results.missing_handlers.length }
      });
    }

    if (results.performance_metrics.load_time > 3000) {
      insights.push({
        insight_type: 'performance',
        title: 'Slow Page Load Performance',
        description: `Page load time of ${Math.round(results.performance_metrics.load_time)}ms exceeds recommended threshold`,
        severity: 'warning',
        impact_score: 4,
        recommendation: 'Consider optimizing assets and reducing bundle size',
        data_points: { load_time: results.performance_metrics.load_time }
      });
    }

    return insights;
  };

  const getRecentAudits = useCallback(async (limit = 10) => {
    const { data, error } = await supabase
      .from('site_audit_reports')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  }, []);

  const getAuditInsights = useCallback(async (auditId?: string) => {
    let query = supabase
      .from('audit_insights')
      .select('*')
      .order('created_at', { ascending: false });

    if (auditId) {
      query = query.eq('audit_report_id', auditId);
    }

    const { data, error } = await query.limit(20);
    if (error) throw error;
    return data;
  }, []);

  return {
    isLoading,
    currentAudit,
    startManualAudit,
    getRecentAudits,
    getAuditInsights
  };
};
