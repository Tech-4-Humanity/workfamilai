
import React from 'react';
import { Button } from '@/components/ui/button';
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
  onClose?: () => void;
}

export const ChatHeader = ({
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

  // Fix dynamic color class issue by using static classes
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'bg-blue-600',
      'green': 'bg-green-600',
      'purple': 'bg-purple-600',
      'red': 'bg-red-600',
      'orange': 'bg-orange-600',
      'indigo': 'bg-indigo-600',
      'pink': 'bg-pink-600',
      'teal': 'bg-teal-600'
    };
    return colorMap[color] || 'bg-blue-600';
  };

  return (
    <div className={`${getColorClasses(agentColor)} text-white p-4 rounded-t-lg`}>
      <div className="flex justify-between items-center">
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
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            ×
          </Button>
        )}
      </div>
    </div>
  );
};
