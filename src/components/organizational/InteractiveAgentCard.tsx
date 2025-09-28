import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChatModal } from '@/components/chat/ChatModal';
import { EnhancedChatModal } from '@/components/chat/EnhancedChatModal';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Sparkles, 
  Heart, 
  HeartOff, 
  Users, 
  Globe, 
  Award,
  Zap,
  BookOpen
} from 'lucide-react';
import { getAgentImageUrl } from '@/utils/agent-images';
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

interface InteractiveAgentCardProps {
  agent: Agent;
  onAddToTeam: (agent: Agent) => void;
  onRemoveFromTeam: (agentCode: string) => void;
  isInPersonalTeam: boolean;
  onInteraction?: () => void;
  showQuickStats?: boolean;
}

export const InteractiveAgentCard: React.FC<InteractiveAgentCardProps> = ({
  agent,
  onAddToTeam,
  onRemoveFromTeam,
  isInPersonalTeam,
  onInteraction,
  showQuickStats = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [conversationCount] = useState(Math.floor(Math.random() * 50) + 1);
  const [availabilityStatus] = useState<'online' | 'busy' | 'away'>(['online', 'busy', 'away'][Math.floor(Math.random() * 3)] as any);
  
  const agentImageUrl = getAgentImageUrl(agent.agentName, agent.specialization);
  
  const handleTeamAction = () => {
    if (isInPersonalTeam) {
      onRemoveFromTeam(agent.agentCode);
      toast.success(`${agent.agentName.split(' ')[0]} removed from your team`);
    } else {
      onAddToTeam(agent);
      toast.success(`${agent.agentName.split(' ')[0]} added to your team!`);
    }
    onInteraction?.();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-400';
      case 'busy': return 'bg-red-400';
      case 'away': return 'bg-yellow-400';
      default: return 'bg-gray-400';
    }
  };

  const conversationStarters = [
    `How does your ${agent.specialization.toLowerCase()} expertise help teams?`,
    `Tell me about your greatest achievement`,
    `What's your signature method for ${agent.specialization.toLowerCase()}?`,
    `How does your ${agent.culturalExpertise} background influence your work?`
  ];

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isInPersonalTeam ? 'ring-2 ring-primary ring-opacity-50' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="p-4 relative">
        {/* Header with Avatar and Status */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative">
            <Avatar className="h-12 w-12 ring-2 ring-background shadow-md">
              <AvatarImage src={agentImageUrl} alt={agent.agentName} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {agent.agentName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            {/* Status indicator */}
            <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(availabilityStatus)}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
              {agent.agentName}
            </h3>
            <p className="text-sm text-muted-foreground">{agent.divisionName}</p>
            <div className="flex items-center gap-1 mt-1">
              <Badge variant="secondary" className="text-xs">
                {agent.specialization}
              </Badge>
              {showQuickStats && (
                <Badge variant="outline" className="text-xs">
                  {conversationCount} chats
                </Badge>
              )}
            </div>
          </div>

          {/* Team action button */}
          <Button
            size="sm"
            variant={isInPersonalTeam ? "default" : "outline"}
            onClick={handleTeamAction}
            className="shrink-0"
          >
            {isInPersonalTeam ? <HeartOff className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
          </Button>
        </div>

        {/* Agent Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2">
            <Globe className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground">{agent.culturalExpertise}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <Award className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground line-clamp-2">{agent.achievement}</span>
          </div>
          
          <div className="flex items-start gap-2">
            <Zap className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <span className="text-sm text-muted-foreground line-clamp-2">{agent.signatureMethod}</span>
          </div>
        </div>

        {/* Hover overlay with conversation starters */}
        {isHovered && (
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-4 flex flex-col justify-center transition-all duration-300">
            <h4 className="font-medium mb-3 text-center">Conversation Starters</h4>
            <div className="space-y-2">
              {conversationStarters.slice(0, 2).map((starter, index) => (
                <div key={index} className="text-xs text-muted-foreground p-2 bg-muted/50 rounded text-center">
                  "{starter}"
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <ChatModal
            agentName={agent.agentName}
            agentPersonality={agent.specialization}
            agentBackground={`${agent.background} I specialize in ${agent.specialization} and my signature method is ${agent.signatureMethod}. My greatest achievement is ${agent.achievement}.`}
            agentColor="primary"
            agentImageUrl={agentImageUrl}
            buttonText="Chat"
            buttonVariant="outline"
            buttonSize="sm"
            triggerClassName="flex-1"
          />
          
          <EnhancedChatModal
            agentName={agent.agentName}
            agentPersonality={agent.specialization}
            agentBackground={`${agent.background} I work in ${agent.divisionName} under ${agent.leaderName}'s leadership. I specialize in ${agent.specialization} and my signature method is ${agent.signatureMethod}.`}
            agentColor="primary"
            buttonText="Enhanced"
            buttonVariant="default"
            buttonSize="sm"
          />
        </div>

        {/* Agent relationships indicator */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>Team: {agent.leaderName}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <BookOpen className="h-3 w-3" />
            <span>{Math.floor(Math.random() * 20) + 5} skills</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};