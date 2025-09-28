import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  Scale, 
  X, 
  Star, 
  Globe, 
  Award, 
  Users,
  MessageCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { getAgentImageUrl } from '@/utils/agent-images';
import { ChatModal } from '@/components/chat/ChatModal';

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

interface AgentComparisonProps {
  agents: Agent[];
  onAddToTeam?: (agent: Agent) => void;
}

export const AgentComparison: React.FC<AgentComparisonProps> = ({
  agents,
  onAddToTeam
}) => {
  const [selectedAgents, setSelectedAgents] = useState<Agent[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const addAgentToComparison = (agent: Agent) => {
    if (selectedAgents.length < 3 && !selectedAgents.some(a => a.agentCode === agent.agentCode)) {
      setSelectedAgents([...selectedAgents, agent]);
    }
  };

  const removeAgentFromComparison = (agentCode: string) => {
    setSelectedAgents(selectedAgents.filter(a => a.agentCode !== agentCode));
  };

  const startComparison = () => {
    setIsComparing(true);
  };

  const clearComparison = () => {
    setSelectedAgents([]);
    setIsComparing(false);
  };

  // Calculate compatibility scores between agents
  const getCompatibilityScore = (agent1: Agent, agent2: Agent) => {
    let score = 50; // Base score

    // Same division bonus
    if (agent1.divisionName === agent2.divisionName) score += 20;
    
    // Cultural diversity bonus
    if (agent1.culturalExpertise !== agent2.culturalExpertise) score += 15;

    // Complementary skills bonus
    if (agent1.specialization !== agent2.specialization) score += 10;

    // Same leader familiarity bonus
    if (agent1.leaderName === agent2.leaderName) score += 5;

    return Math.min(score, 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const AgentSelector = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-blue-500" />
          Compare Agents
          <Badge variant="secondary">{selectedAgents.length}/3 selected</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Selected Agents */}
          {selectedAgents.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Selected for Comparison:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedAgents.map(agent => (
                  <div key={agent.agentCode} className="flex items-center gap-2 bg-muted rounded-full pl-1 pr-3 py-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={getAgentImageUrl(agent.agentName, agent.specialization)} />
                      <AvatarFallback className="text-xs">
                        {agent.agentName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{agent.agentName}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0"
                      onClick={() => removeAgentFromComparison(agent.agentCode)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              onClick={startComparison}
              disabled={selectedAgents.length < 2}
              className="flex-1"
            >
              Compare Selected Agents
            </Button>
            {selectedAgents.length > 0 && (
              <Button variant="outline" onClick={clearComparison}>
                Clear All
              </Button>
            )}
          </div>

          {/* Quick Add Suggestions */}
          {selectedAgents.length < 3 && (
            <div className="border-t pt-4">
              <h4 className="font-medium text-sm mb-2">Quick Add Agents:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                {agents
                  .filter(agent => !selectedAgents.some(selected => selected.agentCode === agent.agentCode))
                  .slice(0, 8)
                  .map(agent => (
                    <div key={agent.agentCode} className="flex items-center gap-2 p-2 border rounded hover:bg-muted/50 cursor-pointer" onClick={() => addAgentToComparison(agent)}>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={getAgentImageUrl(agent.agentName, agent.specialization)} />
                        <AvatarFallback className="text-xs">
                          {agent.agentName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{agent.agentName}</p>
                        <p className="text-xs text-muted-foreground truncate">{agent.specialization}</p>
                      </div>
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  const ComparisonView = () => (
    <div className="space-y-6">
      {/* Comparison Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-blue-500" />
              Agent Comparison
            </CardTitle>
            <Button variant="outline" onClick={() => setIsComparing(false)}>
              <ArrowRight className="h-4 w-4 mr-1" />
              Back to Selection
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Compatibility Matrix */}
      {selectedAgents.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Team Compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {selectedAgents.map((agent1, i) => 
                selectedAgents.slice(i + 1).map((agent2, j) => {
                  const compatibilityScore = getCompatibilityScore(agent1, agent2);
                  return (
                    <div key={`${agent1.agentCode}-${agent2.agentCode}`} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={getAgentImageUrl(agent1.agentName, agent1.specialization)} />
                            <AvatarFallback className="text-xs">
                              {agent1.agentName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{agent1.agentName}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={getAgentImageUrl(agent2.agentName, agent2.specialization)} />
                            <AvatarFallback className="text-xs">
                              {agent2.agentName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{agent2.agentName}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`text-lg font-bold ${getScoreColor(compatibilityScore)}`}>
                          {compatibilityScore}%
                        </div>
                        <div className="text-xs text-muted-foreground">compatibility</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detailed Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedAgents.map((agent) => (
          <Card key={agent.agentCode} className="relative">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={getAgentImageUrl(agent.agentName, agent.specialization)} />
                  <AvatarFallback>
                    {agent.agentName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{agent.agentName}</CardTitle>
                  <p className="text-sm text-muted-foreground">{agent.divisionName}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => removeAgentFromComparison(agent.agentCode)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Specialization */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">Specialization</span>
                </div>
                <Badge variant="outline">{agent.specialization}</Badge>
              </div>

              {/* Cultural Expertise */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Cultural Expertise</span>
                </div>
                <p className="text-sm text-muted-foreground">{agent.culturalExpertise}</p>
              </div>

              {/* Achievement */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Key Achievement</span>
                </div>
                <p className="text-sm text-muted-foreground">{agent.achievement}</p>
              </div>

              {/* Leadership */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Reports to</span>
                </div>
                <p className="text-sm text-muted-foreground">{agent.leaderName}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <ChatModal
                  agentName={agent.agentName}
                  agentPersonality={agent.specialization}
                  agentBackground={`${agent.background} I specialize in ${agent.specialization}.`}
                  agentImageUrl={getAgentImageUrl(agent.agentName, agent.specialization)}
                  buttonText="Chat"
                  buttonVariant="outline"
                  buttonSize="sm"
                  triggerClassName="flex-1"
                />
                {onAddToTeam && (
                  <Button
                    size="sm"
                    onClick={() => onAddToTeam(agent)}
                    className="flex-1"
                  >
                    Add to Team
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (isComparing && selectedAgents.length >= 2) {
    return <ComparisonView />;
  }

  return <AgentSelector />;
};