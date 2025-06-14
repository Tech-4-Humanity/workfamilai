
import React from 'react';
import { LanguageIndicator } from '@/components/ui/language-indicator';

interface ChatLanguageBarProps {
  supportedLanguages: string[];
  primaryLanguage: string;
  culturalProfile: any;
}

export const ChatLanguageBar = ({
  supportedLanguages,
  primaryLanguage,
  culturalProfile
}: ChatLanguageBarProps) => {
  return (
    <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">Language Capabilities:</span>
          <LanguageIndicator 
            languages={supportedLanguages}
            primaryLanguage={primaryLanguage}
            variant="compact"
            showPopover={true}
          />
        </div>
        {culturalProfile && (
          <div className="text-xs text-gray-500">
            {culturalProfile.timeZone} • {culturalProfile.workingHours}
          </div>
        )}
      </div>
    </div>
  );
};
