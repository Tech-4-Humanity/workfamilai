
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
  return (
    <div className={`bg-${agentColor}-600 text-white p-4 rounded-t-lg`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 border-2 border-white/20">
            <AvatarImage src={agentImageUrl} alt={agentName} />
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
