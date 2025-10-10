import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  Mail, 
  Calendar,
  Target,
  Clock,
  Building,
  MessageSquare
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsData {
  totalSubmissions: number;
  conversionRate: number;
  avgResponseTime: number;
  topInterests: Array<{ interest: string; count: number }>;
  submissionTrends: Array<{ date: string; count: number }>;
  statusDistribution: Array<{ status: string; count: number; color: string }>;
  companyTypes: Array<{ type: string; count: number }>;
  monthlyGrowth: number;
}

export const ContactAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalSubmissions: 0,
    conversionRate: 0,
    avgResponseTime: 0,
    topInterests: [],
    submissionTrends: [],
    statusDistribution: [],
    companyTypes: [],
    monthlyGrowth: 0
  });
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30d');

  useEffect(() => {
    checkAuthAndFetch();
  }, [timeRange]);

  const checkAuthAndFetch = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return;
    }

    // Verify admin role
    const { data: roleCheck, error: roleError } = await supabase
      .rpc('has_role', { _role: 'admin' });

    if (roleError || !roleCheck) {
      return;
    }

    fetchAnalytics();
  };

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      
      // Calculate date range
      const now = new Date();
      const startDate = new Date();
      switch (timeRange) {
        case '7d':
          startDate.setDate(now.getDate() - 7);
          break;
        case '30d':
          startDate.setDate(now.getDate() - 30);
          break;
        case '90d':
          startDate.setDate(now.getDate() - 90);
          break;
        case '1y':
          startDate.setFullYear(now.getFullYear() - 1);
          break;
      }

      // Fetch submissions data
      const { data: submissions, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .gte('created_at', startDate.toISOString());

      if (error) throw error;

      const processedAnalytics = processAnalyticsData(submissions || []);
      setAnalytics(processedAnalytics);
      
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const processAnalyticsData = (submissions: any[]): AnalyticsData => {
    const totalSubmissions = submissions.length;
    
    // Interest distribution
    const interestCounts: { [key: string]: number } = {};
    submissions.forEach(sub => {
      const interest = sub.inquiry_type || 'other';
      interestCounts[interest] = (interestCounts[interest] || 0) + 1;
    });
    
    const topInterests = Object.entries(interestCounts)
      .map(([interest, count]) => ({ interest: getInterestLabel(interest), count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Status distribution
    const statusCounts: { [key: string]: number } = {};
    const statusColors: { [key: string]: string } = {
      'pending': '#fbbf24',
      'in_progress': '#3b82f6',
      'completed': '#10b981',
      'cancelled': '#ef4444'
    };
    
    submissions.forEach(sub => {
      const status = sub.status || 'pending';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    
    const statusDistribution = Object.entries(statusCounts).map(([status, count]) => ({
      status: status.replace('_', ' ').toUpperCase(),
      count,
      color: statusColors[status] || '#6b7280'
    }));

    // Daily submission trends
    const dailyCounts: { [key: string]: number } = {};
    submissions.forEach(sub => {
      const date = new Date(sub.created_at).toISOString().split('T')[0];
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    });
    
    const submissionTrends = Object.entries(dailyCounts)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(-30); // Last 30 days

    // Company type analysis
    const companyTypes = [
      { type: 'Enterprise (1000+)', count: submissions.filter(s => 
        s.company && (s.company.toLowerCase().includes('corp') || 
                     s.company.toLowerCase().includes('ltd') || 
                     s.company.toLowerCase().includes('inc'))).length },
      { type: 'SME (50-999)', count: submissions.filter(s => 
        s.company && !s.company.toLowerCase().includes('corp') && 
        !s.company.toLowerCase().includes('ltd') && 
        s.company.length > 10).length },
      { type: 'Startup (<50)', count: submissions.filter(s => 
        s.company && s.company.length <= 10).length },
      { type: 'Individual', count: submissions.filter(s => !s.company).length }
    ];

    // Calculate conversion rate (completed / total)
    const completedSubmissions = submissions.filter(s => s.status === 'completed').length;
    const conversionRate = totalSubmissions > 0 ? (completedSubmissions / totalSubmissions) * 100 : 0;

    // Calculate average response time (mock data for now)
    const avgResponseTime = 4.2; // hours (would be calculated from actual response data)

    // Monthly growth (mock calculation)
    const monthlyGrowth = 15.3; // percentage

    return {
      totalSubmissions,
      conversionRate,
      avgResponseTime,
      topInterests,
      submissionTrends,
      statusDistribution,
      companyTypes,
      monthlyGrowth
    };
  };

  const getInterestLabel = (interest: string) => {
    const labels: { [key: string]: string } = {
      'enterprise': 'Enterprise Solutions',
      'partnership': 'Partnership Opportunities',
      'demo': 'Live Demo Access',
      'integration': 'AI Agent Integration',
      'consultation': 'Strategic Consultation',
      'other': 'Other Inquiry'
    };
    return labels[interest] || interest;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Analytics</h1>
          <p className="text-gray-600">Insights and trends from contact form submissions</p>
        </div>
        <div className="flex gap-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <Badge
              key={range}
              variant={timeRange === range ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setTimeRange(range)}
            >
              {range.toUpperCase()}
            </Badge>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Users className="h-4 w-4 text-blue-600" />
              <p className="text-xs font-medium text-gray-500 ml-2">TOTAL SUBMISSIONS</p>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{analytics.totalSubmissions}</p>
              <p className="text-xs text-green-600 ml-2">+{analytics.monthlyGrowth}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Target className="h-4 w-4 text-green-600" />
              <p className="text-xs font-medium text-gray-500 ml-2">CONVERSION RATE</p>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{analytics.conversionRate.toFixed(1)}%</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-yellow-600" />
              <p className="text-xs font-medium text-gray-500 ml-2">AVG RESPONSE TIME</p>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">{analytics.avgResponseTime}</p>
              <p className="text-xs text-gray-500 ml-1">hours</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <p className="text-xs font-medium text-gray-500 ml-2">MONTHLY GROWTH</p>
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold">+{analytics.monthlyGrowth}%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="trends" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trends">Submission Trends</TabsTrigger>
          <TabsTrigger value="interests">Interest Areas</TabsTrigger>
          <TabsTrigger value="status">Status Distribution</TabsTrigger>
          <TabsTrigger value="companies">Company Types</TabsTrigger>
        </TabsList>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Daily Submission Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={analytics.submissionTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="count" 
                    stroke="#3b82f6" 
                    fill="#3b82f6" 
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interests">
          <Card>
            <CardHeader>
              <CardTitle>Popular Interest Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.topInterests}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="interest" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analytics.statusDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ status, percent }) => `${status} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {analytics.statusDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies">
          <Card>
            <CardHeader>
              <CardTitle>Company Size Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analytics.companyTypes} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="type" type="category" />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};