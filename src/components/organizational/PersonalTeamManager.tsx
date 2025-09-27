import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  Users, 
  MessageCircle, 
  Download, 
  Share2, 
  BarChart3,
  Sparkles,
  Crown,
  X,
  Globe,
  Award
} from 'lucide-react';
import { getAgentImageUrl } from '@/utils/agent-images';
import { ChatModal } from '@/components/chat/ChatModal';
import { EnhancedChatModal } from '@/components/chat/EnhancedChatModal';
import { toast } from 'sonner';

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

interface PersonalTeamManagerProps {
  personalTeam: Agent[];
  onRemoveFromTeam: (agentCode: string) => void;
  onStartTeamChat: (agents: Agent[]) => void;
}

export const PersonalTeamManager: React.FC<PersonalTeamManagerProps> = ({
  personalTeam,
  onRemoveFromTeam,
  onStartTeamChat
}) => {
  const [teamStats, setTeamStats] = useState({
    coverageScore: 0,
    diversityScore: 0,
    leadershipCoverage: 0,
    culturalDiversity: 0
  });

  // Calculate team analytics
  useEffect(() => {
    if (personalTeam.length === 0) {
      setTeamStats({ coverageScore: 0, diversityScore: 0, leadershipCoverage: 0, culturalDiversity: 0 });
      return;
    }

    const uniqueSpecializations = new Set(personalTeam.map(a => a.specialization));
    const uniqueLeaders = new Set(personalTeam.map(a => a.leaderName));
    const uniqueCultures = new Set(personalTeam.map(a => a.culturalExpertise));
    const uniqueDivisions = new Set(personalTeam.map(a => a.divisionName));

    setTeamStats({
      coverageScore: Math.min((uniqueSpecializations.size / 20) * 100, 100), // Assuming 20 key specializations
      diversityScore: Math.min((uniqueDivisions.size / 10) * 100, 100), // 10 main divisions
      leadershipCoverage: Math.min((uniqueLeaders.size / 10) * 100, 100), // 10 leaders
      culturalDiversity: Math.min((uniqueCultures.size / 15) * 100, 100) // Assuming 15 major cultures
    });
  }, [personalTeam]);

  const handleExportTeam = () => {
    const teamData = {
      teamName: `My Virtual Team - ${new Date().toLocaleDateString()}`,
      members: personalTeam.map(agent => ({
        name: agent.agentName,
        specialization: agent.specialization,
        division: agent.divisionName,
        leader: agent.leaderName,
        culture: agent.culturalExpertise,
        achievement: agent.achievement
      })),
      stats: teamStats,
      createdAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(teamData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `virtual-team-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Team exported successfully!');
  };

  const handleShareTeam = async () => {
    const shareData = {
      title: 'My Virtual Team',
      text: `Check out my virtual team of ${personalTeam.length} AI agents with ${teamStats.coverageScore.toFixed(0)}% skill coverage!`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        // Fallback to clipboard
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        toast.success('Team details copied to clipboard!');
      }
    } else {
      await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      toast.success('Team details copied to clipboard!');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (personalTeam.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Build Your Virtual Team</h3>
          <p className="text-muted-foreground mb-4">
            Start adding agents to create your personalized virtual team. 
            Click the heart icon on any agent card to add them to your team.
          </p>
          <Badge variant="outline" className="text-sm">
            0 team members
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Team Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              My Virtual Team
              <Badge variant="secondary">{personalTeam.length} members</Badge>
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleShareTeam}>
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportTeam}>
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button 
                size="sm" 
                onClick={() => onStartTeamChat(personalTeam)}
                disabled={personalTeam.length < 2}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Team Chat
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Team Analytics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(teamStats.coverageScore)}`}>
                {teamStats.coverageScore.toFixed(0)}%
              </div>
              <div className="text-sm text-muted-foreground">Skill Coverage</div>
              <Progress value={teamStats.coverageScore} className="mt-1" />
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(teamStats.diversityScore)}`}>
                {teamStats.diversityScore.toFixed(0)}%
              </div>
              <div className="text-sm text-muted-foreground">Division Diversity</div>
              <Progress value={teamStats.diversityScore} className="mt-1" />
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(teamStats.leadershipCoverage)}`}>
                {teamStats.leadershipCoverage.toFixed(0)}%
              </div>
              <div className="text-sm text-muted-foreground">Leadership Coverage</div>
              <Progress value={teamStats.leadershipCoverage} className="mt-1" />
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${getScoreColor(teamStats.culturalDiversity)}`}>
                {teamStats.culturalDiversity.toFixed(0)}%
              </div>
              <div className="text-sm text-muted-foreground">Cultural Diversity</div>
              <Progress value={teamStats.culturalDiversity} className="mt-1" />
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalTeam.map((agent) => (
              <Card key={agent.agentCode} className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onRemoveFromTeam(agent.agentCode)}
                >
                  <X className="h-4 w-4" />
                </Button>
                
                <CardContent className="p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={getAgentImageUrl(agent.agentName, agent.specialization)} />
                      <AvatarFallback>
                        {agent.agentName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{agent.agentName}</h4>
                      <p className="text-xs text-muted-foreground truncate">{agent.divisionName}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        {agent.specialization}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Globe className="h-3 w-3" />
                      <span className="truncate">{agent.culturalExpertise}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Award className="h-3 w-3" />
                      <span className="truncate">{agent.achievement}</span>
                    </div>
                  </div>

                  <div className="flex gap-1">
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
                    <EnhancedChatModal
                      agentName={agent.agentName}
                      agentPersonality={agent.specialization}
                      agentBackground={`${agent.background} I work in ${agent.divisionName} under ${agent.leaderName}.`}
                      buttonText="Enhanced"
                      buttonVariant="default"
                      buttonSize="sm"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};