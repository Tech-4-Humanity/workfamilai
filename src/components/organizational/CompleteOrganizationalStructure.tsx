/**
 * Complete Organizational Structure Component
 * Displays and allows download of the complete 810-agent + 10-leader structure
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Copy, Users, Building, UserCheck, Layers } from 'lucide-react';
import { toast } from 'sonner';
import { 
  downloadOrganizationalCSV, 
  downloadLeadershipSummary, 
  downloadCompleteStructureJSON,
  copyOrganizationalSummary,
  getQuickStats
} from '@/utils/downloadOrganizationalData';
import { 
  LEADERSHIP_SUMMARY, 
  ORGANIZATIONAL_SUMMARY,
  getAgentsByLeader 
} from '@/data/completeOrganizationalStructure';

export const CompleteOrganizationalStructure: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);
  const stats = getQuickStats();

  const handleDownloadCSV = () => {
    try {
      downloadOrganizationalCSV();
      toast.success('CSV file downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download CSV file');
    }
  };

  const handleDownloadJSON = () => {
    try {
      downloadCompleteStructureJSON();
      toast.success('JSON file downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download JSON file');
    }
  };

  const handleDownloadLeadership = () => {
    try {
      downloadLeadershipSummary();
      toast.success('Leadership summary downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download leadership summary');
    }
  };

  const handleCopySummary = async () => {
    const success = await copyOrganizationalSummary();
    if (success) {
      toast.success('Organizational summary copied to clipboard!');
    } else {
      toast.error('Failed to copy to clipboard');
    }
  };

  const leaderAgents = selectedLeader ? getAgentsByLeader(selectedLeader) : [];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
          Complete Organizational Structure
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The complete Family Consciousness Network architecture: {stats.totalEntities} entities 
          organized in a {stats.structure} hierarchy.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{stats.leaders}</div>
            <div className="text-sm text-muted-foreground">Executive Leaders</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Building className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{stats.divisions}</div>
            <div className="text-sm text-muted-foreground">Divisions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <UserCheck className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{stats.agents}</div>
            <div className="text-sm text-muted-foreground">Specialized Agents</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Layers className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{stats.totalEntities}</div>
            <div className="text-sm text-muted-foreground">Total Entities</div>
          </CardContent>
        </Card>
      </div>

      {/* Download Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Complete Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button onClick={handleDownloadCSV} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download CSV
            </Button>
            <Button onClick={handleDownloadJSON} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download JSON
            </Button>
            <Button onClick={handleDownloadLeadership} variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Leadership Only
            </Button>
            <Button onClick={handleCopySummary} variant="outline" className="flex items-center gap-2">
              <Copy className="h-4 w-4" />
              Copy Summary
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Export the complete organizational structure with all 810 agents, their specializations, 
            achievements, backgrounds, and hierarchical positions.
          </p>
        </CardContent>
      </Card>

      {/* Leadership Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Executive Leadership Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {LEADERSHIP_SUMMARY.map((leader) => (
              <div 
                key={leader.name}
                className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                  selectedLeader === leader.name ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedLeader(
                  selectedLeader === leader.name ? null : leader.name
                )}
              >
                <div className="text-sm font-medium">{leader.name}</div>
                <div className="text-xs text-muted-foreground mb-2">{leader.title}</div>
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{leader.divisionsCount} Divisions</Badge>
                  <Badge variant="outline">{leader.agentsCount} Agents</Badge>
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {leader.enneagramType}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Leader Details */}
      {selectedLeader && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedLeader} - Agent Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground mb-4">
              Showing {leaderAgents.length} agents across {leaderAgents.reduce((divs, agent, index, arr) => {
                const uniqueDivisions = new Set(arr.map(a => a.divisionName));
                return uniqueDivisions.size;
              }, 0)} divisions
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {leaderAgents.map((agent) => (
                <div key={agent.agentCode} className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-sm">{agent.agentName}</div>
                    <Badge variant="outline" className="text-xs">{agent.agentCode}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">{agent.divisionName}</div>
                  <div className="text-xs font-medium mb-2">{agent.specialization}</div>
                  <div className="text-xs text-muted-foreground">{agent.culturalExpertise}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Generation Info */}
      <Card>
        <CardContent className="p-4">
          <div className="text-center text-sm text-muted-foreground">
            Generated on {new Date(stats.generatedAt).toLocaleDateString()} at {new Date(stats.generatedAt).toLocaleTimeString()}
            <br />
            Family Consciousness Network - Complete Organizational Structure
          </div>
        </CardContent>
      </Card>
    </div>
  );
};