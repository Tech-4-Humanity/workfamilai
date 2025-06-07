
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Network, Users, Lightbulb } from 'lucide-react';

interface ChatMessageProps {
  message: {
    id: string;
    type: 'user' | 'agent';
    content: string;
    timestamp: Date;
    agent_name?: string;
    knowledge_references?: string[];
    collaboration_suggestions?: Array<{
      agent: string;
      reason: string;
      strength: number;
    }>;
    insights_generated?: string[];
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
        <div className="text-sm mb-1">
          {message.type === 'agent' && message.agent_name && (
            <div className="font-medium text-xs opacity-70 mb-1">
              {message.agent_name}
            </div>
          )}
          {message.content}
        </div>
        
        {/* Expertise References */}
        {message.knowledge_references && message.knowledge_references.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {message.knowledge_references.slice(0, 3).map((ref, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                <Network className="w-2 h-2 mr-1" />
                Expertise
              </Badge>
            ))}
          </div>
        )}

        {/* Partnership Suggestions */}
        {message.collaboration_suggestions && message.collaboration_suggestions.length > 0 && (
          <div className="mt-2 space-y-1">
            <div className="text-xs opacity-70">Partnership opportunities:</div>
            {message.collaboration_suggestions.map((suggestion, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs mr-1">
                <Users className="w-2 h-2 mr-1" />
                {suggestion.agent}
              </Badge>
            ))}
          </div>
        )}

        {/* Business Insights */}
        {message.insights_generated && message.insights_generated.length > 0 && (
          <div className="mt-2 space-y-1">
            <div className="text-xs opacity-70">Business insights:</div>
            {message.insights_generated.map((insight, idx) => (
              <div key={idx} className="text-xs bg-yellow-100 dark:bg-yellow-900/20 rounded p-1 flex items-start gap-1">
                <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-600" />
                {insight}
              </div>
            ))}
          </div>
        )}
        
        <div className="text-xs opacity-50 mt-1">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};
