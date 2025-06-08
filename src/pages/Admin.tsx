
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FamilyAgentIntegration } from '@/components/admin/FamilyAgentIntegration';
import { SupremeLeaderDashboard } from '@/components/admin/SupremeLeaderDashboard';
import { DivisionLeadersPanel } from '@/components/admin/DivisionLeadersPanel';
import { Footer } from '@/components/ui/footer';
import { Database, Users, Settings, BarChart3, Crown, Building2 } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <div className="container mx-auto p-6 space-y-6 flex-grow">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage system configuration, data integration, and consciousness pyramid
          </p>
        </div>

        <Tabs defaultValue="supreme" className="space-y-4">
          <TabsList>
            <TabsTrigger value="supreme" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Supreme Leader
            </TabsTrigger>
            <TabsTrigger value="divisions" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Division Leaders
            </TabsTrigger>
            <TabsTrigger value="integration" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Agent Integration
            </TabsTrigger>
            <TabsTrigger value="database" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Database
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="supreme" className="space-y-4">
            <SupremeLeaderDashboard />
          </TabsContent>

          <TabsContent value="divisions" className="space-y-4">
            <DivisionLeadersPanel />
          </TabsContent>

          <TabsContent value="integration" className="space-y-4">
            <FamilyAgentIntegration />
          </TabsContent>

          <TabsContent value="database" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Database Management</CardTitle>
                <CardDescription>
                  Monitor and manage database operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Database management tools coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>
                  View system performance and usage analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
