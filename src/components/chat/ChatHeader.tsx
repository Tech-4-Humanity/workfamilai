
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LanguageIndicator } from '@/components/ui/language-indicator';
import { getAgentInitials } from '@/utils/agent-images';

interface ChatHeaderProps {
  agentName: string;
  agentPersonality: string;
  agentColor: string;
  agentImageUrl?: string;
  agentLanguages: string[];
  primaryLanguage: string;
  onClose?: () => void; // Make optional since we're not using it
}

export const ChatHeader = ({
  agentName,
  agentPersonality,
  agentColor,
  agentImageUrl,
  agentLanguages,
  primaryLanguage
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
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{agentName}</h3>
          <p className="text-sm opacity-90 mb-2">{agentPersonality}</p>
          {agentLanguages.length > 0 && (
            <div className="flex items-center">
              <LanguageIndicator 
                languages={agentLanguages}
                primaryLanguage={primaryLanguage}
                variant="minimal"
                className="opacity-90"
              />
              <span className="text-xs ml-2 opacity-75">
                Speaks {agentLanguages.length} languages
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
