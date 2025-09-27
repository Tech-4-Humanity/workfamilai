/**
 * Interactive Virtual Team Experience
 * Meet your virtual selves and team members through an engaging, interactive interface
 */

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  Copy, 
  Users, 
  Building, 
  UserCheck, 
  Layers,
  Search,
  Heart,
  Sparkles,
  Network,
  BarChart3
} from 'lucide-react';
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
  getAgentsByLeader,
  getAllAgents
} from '@/data/completeOrganizationalStructure';
import { InteractiveAgentCard } from './InteractiveAgentCard';
import { AgentSearchFilter } from './AgentSearchFilter';
import { PersonalTeamManager } from './PersonalTeamManager';
import { AgentTwinFinder } from './AgentTwinFinder';

interface Agent {
  agentCode: string;
  agentName: string;
  specialization: string;
  culturalExpertise: string;
  achievement: string;
  signatureMethod: string;
  background: string;
  divisionName: string;
  leaderName: string;
}

export const CompleteOrganizationalStructure: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [personalTeam, setPersonalTeam] = useState<Agent[]>([]);
  const [activeTab, setActiveTab] = useState('explore');
  const stats = getQuickStats();
  const allAgents = getAllAgents();

  // Team management functions
  const handleAddToTeam = useCallback((agent: Agent) => {
    if (!personalTeam.some(member => member.agentCode === agent.agentCode)) {
      setPersonalTeam(prev => [...prev, agent]);
    }
  }, [personalTeam]);

  const handleRemoveFromTeam = useCallback((agentCode: string) => {
    setPersonalTeam(prev => prev.filter(agent => agent.agentCode !== agentCode));
  }, []);

  const handleStartTeamChat = useCallback((agents: Agent[]) => {
    // This would open a collaborative chat with multiple agents
    toast.info('Team chat feature coming soon!');
  }, []);

  const handleFindMyTwin = useCallback(() => {
    setActiveTab('twin-finder');
  }, []);

  // Download functions
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
  const displayAgents = filteredAgents.length > 0 ? filteredAgents : allAgents;

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Meet Your Virtual Team
        </h1>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Discover and interact with {stats.totalEntities} AI entities in the Family Consciousness Network. 
          Find your virtual twin, build your dream team, and start meaningful conversations.
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant="outline" className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {personalTeam.length} in your team
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Search className="h-3 w-3" />
            {displayAgents.length} agents available
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Building className="h-3 w-3" />
            {stats.divisions} divisions
          </Badge>
        </div>
      </div>

      {/* Interactive Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="explore" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Explore
          </TabsTrigger>
          <TabsTrigger value="my-team" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            My Team ({personalTeam.length})
          </TabsTrigger>
          <TabsTrigger value="twin-finder" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Find Twin
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          {/* Search and Filter */}
          <AgentSearchFilter
            agents={allAgents}
            onFilteredAgentsChange={setFilteredAgents}
            personalTeam={personalTeam}
            onFindMyTwin={handleFindMyTwin}
          />

          {/* Agent Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayAgents.slice(0, 20).map((agent) => (
              <InteractiveAgentCard
                key={agent.agentCode}
                agent={agent}
                onAddToTeam={handleAddToTeam}
                onRemoveFromTeam={handleRemoveFromTeam}
                isInPersonalTeam={personalTeam.some(member => member.agentCode === agent.agentCode)}
              />
            ))}
          </div>

          {displayAgents.length > 20 && (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Showing 20 of {displayAgents.length} agents. Use filters to refine your search.
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="my-team" className="space-y-6">
          <PersonalTeamManager
            personalTeam={personalTeam}
            onRemoveFromTeam={handleRemoveFromTeam}
            onStartTeamChat={handleStartTeamChat}
          />
        </TabsContent>

        <TabsContent value="twin-finder" className="space-y-6">
          <AgentTwinFinder
            agents={allAgents}
            onAddToTeam={handleAddToTeam}
            personalTeam={personalTeam}
          />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
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
        </TabsContent>
      </Tabs>

      {/* Generation Info */}
      <Card>
        <CardContent className="p-4">
          <div className="text-center text-sm text-muted-foreground">
            Generated on {new Date(stats.generatedAt).toLocaleDateString()} at {new Date(stats.generatedAt).toLocaleTimeString()}
            <br />
            Family Consciousness Network - Interactive Virtual Team Experience
          </div>
        </CardContent>
      </Card>
    </div>
  );
};