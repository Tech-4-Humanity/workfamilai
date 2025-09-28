import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllAgents, LEADERSHIP_SUMMARY } from '@/data/completeOrganizationalStructure';
import { downloadOrganizationalCSV, downloadCompleteStructureJSON } from '@/utils/downloadOrganizationalData';
import { InteractiveAgentCard } from './InteractiveAgentCard';
import { AgentSearchFilter } from './AgentSearchFilter';
import { PersonalTeamManager } from './PersonalTeamManager';
import { AgentTwinFinder } from './AgentTwinFinder';
import { NetworkVisualization3D } from './NetworkVisualization3D';
import { AchievementSystem } from './AchievementSystem';
import { AgentComparison } from './AgentComparison';
import { VoiceQueryInterface } from './VoiceQueryInterface';
import { 
  Users, 
  Download, 
  FileSpreadsheet, 
  Database,
  Crown,
  Sparkles,
  Network,
  Trophy,
  Scale,
  Mic
} from 'lucide-react';

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

interface SearchFilters {
  specialization: string;
  division: string;
  culture: string;
  searchText: string;
}

export const CompleteOrganizationalStructure: React.FC = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    specialization: '',
    division: '',
    culture: '',
    searchText: ''
  });
  const [personalTeam, setPersonalTeam] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [activeTab, setActiveTab] = useState('explore');
  const [userStats, setUserStats] = useState({
    agentsInteracted: 0,
    divisionsExplored: 0,
    teamMembers: 0,
    conversationsStarted: 0,
    culturalConnections: 0,
    twinMatches: 0
  });

  const allAgents = getAllAgents();
  const totalAgents = allAgents.length;
  const totalLeaders = LEADERSHIP_SUMMARY.length;

  // Filter agents based on search criteria
  const filteredAgents = useMemo(() => {
    return allAgents.filter(agent => {
      if (filters.searchText && !agent.agentName.toLowerCase().includes(filters.searchText.toLowerCase()) &&
          !agent.specialization.toLowerCase().includes(filters.searchText.toLowerCase()) &&
          !agent.divisionName.toLowerCase().includes(filters.searchText.toLowerCase())) {
        return false;
      }
      if (filters.specialization && agent.specialization !== filters.specialization) return false;
      if (filters.division && agent.divisionName !== filters.division) return false;
      if (filters.culture && !agent.culturalExpertise.toLowerCase().includes(filters.culture.toLowerCase())) return false;
      return true;
    });
  }, [allAgents, filters]);

  const addToPersonalTeam = (agent: Agent) => {
    if (!personalTeam.find(member => member.agentCode === agent.agentCode)) {
      setPersonalTeam([...personalTeam, agent]);
      
      // Update user stats
      setUserStats(prev => ({
        ...prev,
        teamMembers: prev.teamMembers + 1,
        divisionsExplored: Math.max(prev.divisionsExplored, new Set([...personalTeam, agent].map(a => a.divisionName)).size)
      }));
    }
  };

  const removeFromPersonalTeam = (agentCode: string) => {
    setPersonalTeam(personalTeam.filter(member => member.agentCode !== agentCode));
    setUserStats(prev => ({
      ...prev,
      teamMembers: Math.max(0, prev.teamMembers - 1)
    }));
  };

  const startTeamChat = (agents: Agent[]) => {
    // This would open a multi-agent chat interface
    console.log('Starting team chat with:', agents);
  };

  const handleAgentInteraction = (agent: Agent) => {
    setUserStats(prev => ({
      ...prev,
      agentsInteracted: prev.agentsInteracted + 1,
      conversationsStarted: prev.conversationsStarted + 1,
      culturalConnections: prev.culturalConnections + (prev.culturalConnections < 10 ? 1 : 0)
    }));
  };

  const handleTwinMatch = () => {
    setUserStats(prev => ({
      ...prev,
      twinMatches: prev.twinMatches + 1
    }));
  };

  const downloadCSV = () => downloadOrganizationalCSV();
  const downloadJSON = () => downloadCompleteStructureJSON();

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-600" />
                Interactive Organizational Network
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Meet, interact, and build your virtual team with {totalAgents} AI agents across {totalLeaders} divisions
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={downloadCSV}>
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button variant="outline" onClick={downloadJSON}>
                <Database className="h-4 w-4 mr-2" />
                Export JSON
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Interface Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="explore" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Explore
          </TabsTrigger>
          <TabsTrigger value="network" className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            Network
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center gap-2">
            <Crown className="h-4 w-4" />
            My Team
          </TabsTrigger>
          <TabsTrigger value="compare" className="flex items-center gap-2">
            <Scale className="h-4 w-4" />
            Compare
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <Mic className="h-4 w-4" />
            Voice
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            Progress
          </TabsTrigger>
        </TabsList>

        {/* Explore Tab */}
        <TabsContent value="explore" className="space-y-6">
          {/* Agent Twin Finder */}
          <AgentTwinFinder
            agents={filteredAgents}
            onAddToTeam={(agent) => {
              addToPersonalTeam(agent);
              handleTwinMatch();
            }}
            personalTeam={personalTeam}
          />

          {/* Search and Filter */}
          <AgentSearchFilter
            agents={allAgents}
            onFilteredAgentsChange={(agents) => setFilters({
              specialization: '',
              division: '',
              culture: '',
              searchText: ''
            })}
            personalTeam={personalTeam}
            onFindMyTwin={() => setActiveTab('explore')}
          />

          {/* Agent Grid */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  Interactive Agent Directory
                  <Badge variant="secondary">{filteredAgents.length} agents</Badge>
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAgents.map((agent) => (
                  <InteractiveAgentCard
                    key={agent.agentCode}
                    agent={agent}
                    onAddToTeam={addToPersonalTeam}
                    isInPersonalTeam={personalTeam.some(member => member.agentCode === agent.agentCode)}
                    onRemoveFromTeam={removeFromPersonalTeam}
                    onInteraction={() => handleAgentInteraction(agent)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Network Visualization Tab */}
        <TabsContent value="network">
          <NetworkVisualization3D
            agents={filteredAgents}
            onAgentSelect={(agent) => setSelectedAgent(agent)}
            selectedAgent={selectedAgent}
          />
        </TabsContent>

        {/* Personal Team Tab */}
        <TabsContent value="team">
          <PersonalTeamManager
            personalTeam={personalTeam}
            onRemoveFromTeam={removeFromPersonalTeam}
            onStartTeamChat={startTeamChat}
          />
        </TabsContent>

        {/* Agent Comparison Tab */}
        <TabsContent value="compare">
          <AgentComparison
            agents={filteredAgents}
            onAddToTeam={addToPersonalTeam}
          />
        </TabsContent>

        {/* Voice Interface Tab */}
        <TabsContent value="voice">
          <VoiceQueryInterface
            agents={filteredAgents}
            onAgentSelect={(agent) => setSelectedAgent(agent)}
            onSearchResults={(results) => {
              // This would update the search results
              console.log('Voice search results:', results);
            }}
          />
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <AchievementSystem
            userStats={userStats}
            onAchievementUnlock={(achievement) => {
              console.log('Achievement unlocked:', achievement);
              // Could show a toast notification here
            }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};