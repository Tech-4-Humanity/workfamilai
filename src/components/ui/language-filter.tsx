
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, X } from 'lucide-react';
import { supportedLanguages } from '@/i18n/config';

interface LanguageFilterProps {
  selectedLanguages: string[];
  onLanguageToggle: (language: string) => void;
  onClearAll: () => void;
  className?: string;
}

export const LanguageFilter = ({
  selectedLanguages,
  onLanguageToggle,
  onClearAll,
  className = ''
}: LanguageFilterProps) => {
  const getLanguageFlag = (langCode: string) => {
    return supportedLanguages[langCode as keyof typeof supportedLanguages]?.flag || '🌐';
  };

  const getLanguageName = (langCode: string) => {
    return supportedLanguages[langCode as keyof typeof supportedLanguages]?.name || langCode;
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium flex items-center">
          <Globe className="h-4 w-4 mr-2" />
          Filter by Language
        </h3>
        {selectedLanguages.length > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearAll} className="h-auto p-1 text-xs">
            Clear All
          </Button>
        )}
      </div>

      <Select onValueChange={onLanguageToggle}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select language..." />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(supportedLanguages).map(([code, config]) => (
            <SelectItem key={code} value={code}>
              <span className="flex items-center">
                <span className="mr-2">{config.flag}</span>
                {config.name}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedLanguages.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedLanguages.map((lang) => (
            <Badge
              key={lang}
              variant="secondary"
              className="cursor-pointer hover:bg-red-100 hover:text-red-800 transition-colors"
              onClick={() => onLanguageToggle(lang)}
            >
              <span className="mr-1">{getLanguageFlag(lang)}</span>
              {getLanguageName(lang)}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
