
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Globe } from 'lucide-react';
import { supportedLanguages } from '@/i18n/config';
import { ErrorBoundary } from '@/components/ui/error-boundary';

interface LanguageIndicatorProps {
  languages: string[];
  primaryLanguage?: string;
  variant?: 'compact' | 'full' | 'minimal';
  showPopover?: boolean;
  className?: string;
}

const LanguageIndicatorContent = ({ 
  languages, 
  primaryLanguage,
  variant = 'compact',
  showPopover = false,
  className = ''
}: LanguageIndicatorProps) => {
  console.log('LanguageIndicator Debug:', {
    languages,
    primaryLanguage,
    variant,
    availableLanguages: Object.keys(supportedLanguages)
  });

  const getLanguageFlag = (langCode: string) => {
    const languageConfig = supportedLanguages[langCode as keyof typeof supportedLanguages];
    const flag = languageConfig?.flag || '🌐';
    console.log('Flag for', langCode, ':', flag);
    return flag;
  };

  const getLanguageName = (langCode: string) => {
    return supportedLanguages[langCode as keyof typeof supportedLanguages]?.name || langCode.toUpperCase();
  };

  // Enhanced language validation with better fallbacks
  const validLanguages = languages.filter(lang => {
    if (!lang || typeof lang !== 'string') return false;
    const isValid = supportedLanguages[lang as keyof typeof supportedLanguages] !== undefined;
    console.log(`Language ${lang} is valid:`, isValid);
    return isValid;
  });

  // If no valid languages, ensure we have English as fallback
  if (validLanguages.length === 0) {
    console.log('No valid languages found, defaulting to English');
    validLanguages.push('en');
  }

  console.log('Final valid languages:', validLanguages);

  if (variant === 'minimal') {
    return (
      <div className={`flex items-center space-x-1 ${className}`} role="img" aria-label="Supported languages">
        {validLanguages.slice(0, 3).map(lang => (
          <span 
            key={lang} 
            className="text-lg" 
            title={getLanguageName(lang)}
            role="img"
            aria-label={`${getLanguageName(lang)} language`}
          >
            {getLanguageFlag(lang)}
          </span>
        ))}
        {validLanguages.length > 3 && (
          <span 
            className="text-xs opacity-75" 
            title={`${validLanguages.length - 3} more languages`}
            aria-label={`${validLanguages.length - 3} additional languages`}
          >
            +{validLanguages.length - 3}
          </span>
        )}
      </div>
    );
  }

  const displayLanguages = validLanguages.slice(0, variant === 'compact' ? 3 : validLanguages.length);
  const hasMore = validLanguages.length > displayLanguages.length;

  const content = (
    <div className={`flex items-center space-x-1 ${className}`} role="group" aria-label="Language capabilities">
      {displayLanguages.map((lang) => (
        <Badge 
          key={lang} 
          variant={lang === primaryLanguage ? 'default' : 'outline'}
          className={`text-xs px-2 py-0.5 bg-white/20 text-white border-white/30 ${
            lang === primaryLanguage ? 'bg-white/30 border-white/50' : ''
          }`}
          role="img"
          aria-label={`${getLanguageName(lang)}${lang === primaryLanguage ? ' - Primary language' : ''}`}
        >
          <span className="mr-1 text-sm" role="img" aria-hidden="true">{getLanguageFlag(lang)}</span>
          {variant === 'full' ? getLanguageName(lang) : lang.toUpperCase()}
        </Badge>
      ))}
      {hasMore && (
        <Badge 
          variant="outline" 
          className="text-xs px-2 py-0.5 text-white bg-white/20 border-white/30"
          aria-label={`${validLanguages.length - displayLanguages.length} additional languages`}
        >
          +{validLanguages.length - displayLanguages.length}
        </Badge>
      )}
    </div>
  );

  if (showPopover && validLanguages.length > 3) {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-auto p-1 hover:bg-white/20"
            aria-label="View all supported languages"
          >
            {content}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-3" role="dialog" aria-labelledby="language-popover-title">
          <div className="space-y-2">
            <h4 id="language-popover-title" className="font-medium text-sm flex items-center">
              <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
              Language Capabilities
            </h4>
            <ul className="space-y-1" role="list">
              {validLanguages.map((lang) => (
                <li key={lang} className="flex items-center justify-between text-sm" role="listitem">
                  <span className="flex items-center">
                    <span className="mr-2 text-lg" role="img" aria-label={`${getLanguageName(lang)} flag`}>
                      {getLanguageFlag(lang)}
                    </span>
                    {getLanguageName(lang)}
                  </span>
                  {lang === primaryLanguage && (
                    <Badge variant="secondary" className="text-xs">Primary</Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return content;
};

export const LanguageIndicator = (props: LanguageIndicatorProps) => {
  return (
    <ErrorBoundary 
      fallback={
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Globe className="h-4 w-4" />
          <span>Languages</span>
        </div>
      }
    >
      <LanguageIndicatorContent {...props} />
    </ErrorBoundary>
  );
};
