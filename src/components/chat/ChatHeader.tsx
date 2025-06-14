
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LanguageIndicator } from '@/components/ui/language-indicator';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { getAgentInitials } from '@/utils/agent-images';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  agentName: string;
  agentPersonality: string;
  agentColor: string;
  agentImageUrl?: string;
  agentLanguages: string[];
  primaryLanguage: string;
  onClose?: () => void;
}

const ChatHeaderContent = ({
  agentName,
  agentPersonality,
  agentColor,
  agentImageUrl,
  agentLanguages,
  primaryLanguage,
  onClose
}: ChatHeaderProps) => {
  // Debug logging
  console.log('ChatHeader Debug:', {
    agentName,
    agentImageUrl,
    agentLanguages,
    primaryLanguage,
    agentColor
  });

  // Use static color classes to avoid Tailwind purging issues
  const getHeaderColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-600';
      case 'green': return 'bg-green-600';
      case 'purple': return 'bg-purple-600';
      case 'red': return 'bg-red-600';
      case 'orange': return 'bg-orange-600';
      case 'indigo': return 'bg-indigo-600';
      case 'pink': return 'bg-pink-600';
      case 'teal': return 'bg-teal-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className={`${getHeaderColorClass(agentColor)} text-white p-4 rounded-t-lg`}>
      <div className="flex items-center gap-4">
        <ErrorBoundary fallback={
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {getAgentInitials(agentName)}
            </span>
          </div>
        }>
          <Avatar className="w-12 h-12 border-2 border-white/20">
            <AvatarImage 
              src={agentImageUrl} 
              alt={agentName}
              onLoad={() => console.log('Avatar image loaded successfully:', agentImageUrl)}
              onError={() => console.log('Avatar image failed to load:', agentImageUrl)}
            />
            <AvatarFallback className="bg-white/20 text-white font-semibold">
              {getAgentInitials(agentName)}
            </AvatarFallback>
          </Avatar>
        </ErrorBoundary>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{agentName}</h3>
          <p className="text-sm opacity-90 mb-2">{agentPersonality}</p>
          {agentLanguages.length > 0 && (
            <div className="flex items-center">
              <ErrorBoundary fallback={
                <div className="flex items-center space-x-1 text-sm opacity-75">
                  <span>🌐 Languages</span>
                </div>
              }>
                <LanguageIndicator 
                  languages={agentLanguages}
                  primaryLanguage={primaryLanguage}
                  variant="minimal"
                  className="opacity-90"
                />
              </ErrorBoundary>
              <span className="text-xs ml-2 opacity-75">
                Speaks {agentLanguages.length} language{agentLanguages.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        {onClose && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export const ChatHeader = (props: ChatHeaderProps) => {
  return (
    <ErrorBoundary fallback={
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {getAgentInitials(props.agentName)}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{props.agentName}</h3>
            <p className="text-sm opacity-90">Agent Assistant</p>
          </div>
          {props.onClose && (
            <Button
              variant="ghost"
              size="sm"
              onClick={props.onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    }>
      <ChatHeaderContent {...props} />
    </ErrorBoundary>
  );
};
