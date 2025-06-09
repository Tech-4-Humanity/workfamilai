
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { supportedLanguages } from '@/i18n/config';

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Update document direction for RTL languages
    document.dir = supportedLanguages[lng as keyof typeof supportedLanguages]?.rtl ? 'rtl' : 'ltr';
  };

  const currentLanguage = supportedLanguages[i18n.language as keyof typeof supportedLanguages];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLanguage?.flag} {currentLanguage?.name}
          </span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {Object.entries(supportedLanguages).map(([code, language]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={`flex items-center gap-2 ${
              i18n.language === code ? 'bg-accent' : ''
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {i18n.language === code && (
              <span className="ml-auto text-xs text-muted-foreground">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
