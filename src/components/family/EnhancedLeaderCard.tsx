
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChatModal } from '@/components/chat/ChatModal';
import { EnhancedChatModal } from '@/components/chat/EnhancedChatModal';
import { Brain, MessageCircle, Users } from 'lucide-react';
import { Leader } from '@/types/family';

interface EnhancedLeaderCardProps {
  leader: Leader;
  agentCount: number;
  color?: string;
}

export const EnhancedLeaderCard = ({ leader, agentCount, color = 'blue' }: EnhancedLeaderCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{leader.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{leader.title}</p>
          </div>
          <div className={`w-3 h-3 rounded-full bg-${color}-500`} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{leader.enneagramType}</Badge>
          <Badge variant="outline">{agentCount} agents</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2">Motto</h4>
          <p className="text-sm text-muted-foreground italic">"{leader.motto}"</p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2">Background</h4>
          <p className="text-sm text-muted-foreground line-clamp-4">
            {leader.background}
          </p>
        </div>
        
        <div className="flex gap-2 pt-2">
          <ChatModal
            agentName={leader.name}
            agentPersonality={leader.personality}
            agentBackground={leader.background}
            agentColor={color}
            buttonText="Chat"
            buttonVariant="outline"
            buttonSize="sm"
            triggerClassName="flex-1"
          />
          
          <EnhancedChatModal
            agentName={leader.name}
            agentPersonality={leader.personality}
            agentBackground={leader.background}
            agentColor={color}
            buttonText="Thinkscape"
            buttonVariant="default"
            buttonSize="sm"
            triggerClassName="flex-1"
          />
        </div>
        
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground pt-2 border-t">
          <Brain className="w-3 h-3" />
          <span>Enhanced with collaborative AI</span>
        </div>
      </CardContent>
    </Card>
  );
};
