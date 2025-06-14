
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Globe } from 'lucide-react';
import { supportedLanguages } from '@/i18n/config';

interface LanguageIndicatorProps {
  languages: string[];
  primaryLanguage?: string;
  variant?: 'compact' | 'full' | 'minimal';
  showPopover?: boolean;
  className?: string;
}

export const LanguageIndicator = ({ 
  languages, 
  primaryLanguage,
  variant = 'compact',
  showPopover = false,
  className = ''
}: LanguageIndicatorProps) => {
  // Debug logging
  console.log('LanguageIndicator Debug:', {
    languages,
    primaryLanguage,
    variant,
    supportedLanguages: Object.keys(supportedLanguages)
  });

  const getLanguageFlag = (langCode: string) => {
    const flag = supportedLanguages[langCode as keyof typeof supportedLanguages]?.flag || '🌐';
    console.log('Flag for', langCode, ':', flag);
    return flag;
  };

  const getLanguageName = (langCode: string) => {
    return supportedLanguages[langCode as keyof typeof supportedLanguages]?.name || langCode;
  };

  const displayLanguages = languages.slice(0, variant === 'minimal' ? 1 : variant === 'compact' ? 3 : languages.length);
  const hasMore = languages.length > displayLanguages.length;

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-1 ${className}`}>
        <span className="text-sm">{getLanguageFlag(primaryLanguage || languages[0])}</span>
        {languages.length > 1 && (
          <span className="text-xs text-gray-300">+{languages.length - 1}</span>
        )}
      </div>
    );
  }

  const content = (
    <div className={`flex items-center space-x-1 ${className}`}>
      {displayLanguages.map((lang, index) => (
        <Badge 
          key={lang} 
          variant={lang === primaryLanguage ? 'default' : 'outline'}
          className={`text-xs px-2 py-0.5 bg-white/20 text-white border-white/30 ${lang === primaryLanguage ? 'bg-white/30 border-white/50' : ''}`}
        >
          <span className="mr-1 text-sm">{getLanguageFlag(lang)}</span>
          {variant === 'full' ? getLanguageName(lang) : lang.toUpperCase()}
        </Badge>
      ))}
      {hasMore && (
        <Badge variant="outline" className="text-xs px-2 py-0.5 text-white bg-white/20 border-white/30">
          +{languages.length - displayLanguages.length}
        </Badge>
      )}
    </div>
  );

  if (showPopover && languages.length > 3) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="h-auto p-1 hover:bg-white/20">
            {content}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3">
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              Language Capabilities
            </h4>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang} className="flex items-center justify-between text-sm">
                  <span className="flex items-center">
                    <span className="mr-2">{getLanguageFlag(lang)}</span>
                    {getLanguageName(lang)}
                  </span>
                  {lang === primaryLanguage && (
                    <Badge variant="secondary" className="text-xs">Primary</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return content;
};
