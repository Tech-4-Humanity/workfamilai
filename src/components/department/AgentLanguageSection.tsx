
import React from 'react';
import { LanguageIndicator } from '@/components/ui/language-indicator';

interface AgentLanguageSectionProps {
  languages: string[];
  primaryLanguage: string;
}

export const AgentLanguageSection = ({ languages, primaryLanguage }: AgentLanguageSectionProps) => {
  return (
    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-blue-800">Language Capabilities</span>
        <span className="text-xs text-blue-600">{languages.length} languages</span>
      </div>
      <LanguageIndicator 
        languages={languages}
        primaryLanguage={primaryLanguage}
        variant="compact"
        showPopover={true}
        className="justify-start"
      />
    </div>
  );
};
