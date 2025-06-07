
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { auditId, baseUrl } = await req.json()
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    console.log(`Starting comprehensive audit for ${baseUrl}`)

    // Initialize audit results
    const auditResults = {
      pages_crawled: [],
      broken_links: [],
      missing_handlers: [],
      performance_metrics: {},
      accessibility_issues: [],
      seo_analysis: {}
    }

    // Simulate comprehensive audit checks
    try {
      // Check main URL
      const response = await fetch(baseUrl, {
        headers: {
          'User-Agent': 'Holo-Org Site Auditor 1.0'
        }
      })

      auditResults.pages_crawled.push({
        url: baseUrl,
        status: response.ok ? 'ok' : 'error',
        status_code: response.status,
        timestamp: new Date().toISOString(),
        response_time: Date.now() // Simplified
      })

      if (response.ok) {
        const htmlContent = await response.text()
        
        // Basic SEO analysis
        const titleMatch = htmlContent.match(/<title[^>]*>([^<]+)<\/title>/i)
        const metaDescMatch = htmlContent.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i)
        
        auditResults.seo_analysis = {
          has_title: !!titleMatch,
          title_length: titleMatch ? titleMatch[1].length : 0,
          has_meta_description: !!metaDescMatch,
          meta_description_length: metaDescMatch ? metaDescMatch[1].length : 0
        }

        // Check for common accessibility issues
        const accessibilityChecks = {
          missing_alt_tags: (htmlContent.match(/<img(?![^>]*alt=)/gi) || []).length,
          missing_form_labels: (htmlContent.match(/<input(?![^>]*id=)[^>]*>/gi) || []).length
        }

        if (accessibilityChecks.missing_alt_tags > 0 || accessibilityChecks.missing_form_labels > 0) {
          auditResults.accessibility_issues.push(accessibilityChecks)
        }
      }

    } catch (error) {
      console.error('Audit error:', error)
      auditResults.pages_crawled.push({
        url: baseUrl,
        status: 'error',
        error_message: error.message,
        timestamp: new Date().toISOString()
      })
    }

    // Generate insights based on results
    const insights = []

    if (auditResults.seo_analysis.title_length && auditResults.seo_analysis.title_length > 60) {
      insights.push({
        insight_type: 'seo',
        title: 'Page Title Too Long',
        description: `Title length of ${auditResults.seo_analysis.title_length} characters exceeds recommended 60 characters`,
        severity: 'warning',
        impact_score: 2,
        recommendation: 'Shorten page title for better search engine visibility'
      })
    }

    if (!auditResults.seo_analysis.has_meta_description) {
      insights.push({
        insight_type: 'seo',
        title: 'Missing Meta Description',
        description: 'Page is missing meta description tag',
        severity: 'warning',
        impact_score: 3,
        recommendation: 'Add meta description for better search engine results'
      })
    }

    if (auditResults.accessibility_issues.length > 0) {
      insights.push({
        insight_type: 'accessibility',
        title: 'Accessibility Issues Detected',
        description: 'Found potential accessibility compliance issues',
        severity: 'warning',
        impact_score: 4,
        recommendation: 'Review and fix accessibility issues for better user experience'
      })
    }

    // Update audit report
    await supabaseClient
      .from('site_audit_reports')
      .update({
        status: 'completed',
        pages_crawled: auditResults.pages_crawled,
        broken_links: auditResults.broken_links,
        missing_handlers: auditResults.missing_handlers,
        performance_metrics: auditResults.performance_metrics,
        completed_at: new Date().toISOString()
      })
      .eq('id', auditId)

    // Insert insights
    if (insights.length > 0) {
      await supabaseClient
        .from('audit_insights')
        .insert(insights.map(insight => ({
          ...insight,
          audit_report_id: auditId
        })))
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        auditId, 
        results: auditResults,
        insights: insights.length 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
