import { Card, CardContent } from '@/components/ui/card';
import { LanguageFilter } from '@/components/ui/language-filter';
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';
import { Division } from '@/types/family';
import { useState, useMemo } from 'react';
import { DivisionCard } from './DivisionCard';

interface DivisionsGridProps {
  divisions: Division[];
}

export const DivisionsGrid = ({ divisions }: DivisionsGridProps) => {
  const [languageFilter, setLanguageFilter] = useState<string[]>([]);

  // Enhanced language assignment based on agent names and specializations
  const getAgentLanguages = (divisionIndex: number, agentIndex: number) => {
    const baseLanguages = getSupportedLanguagesForMember('priya-sharma');
    const agent = divisions[divisionIndex]?.agents[agentIndex];
    
    if (!agent) return baseLanguages;

    // Name-based language assignment
    const nameLanguageMap: Record<string, string[]> = {
      // Japanese names
      'Yuki': ['ja', 'en'],
      'Akira': ['ja', 'en'], 
      'Kenji': ['ja', 'en'],
      'Sakura': ['ja', 'en'],
      'Hiroshi': ['ja', 'en'],
      // Chinese names
      'Wei': ['zh', 'en'],
      'Li': ['zh', 'en'],
      'Chen': ['zh', 'en'],
      'Zhang': ['zh', 'en'],
      'Wang': ['zh', 'en'],
      // Korean names
      'Jin': ['ko', 'en'],
      'Park': ['ko', 'en'],
      'Kim': ['ko', 'en'],
      'Lee': ['ko', 'en'],
      // Arabic names
      'Ahmed': ['ar', 'en'],
      'Fatma': ['ar', 'en'],
      'Omar': ['ar', 'en'],
      'Layla': ['ar', 'en'],
      // Spanish names
      'Carlos': ['es', 'en'],
      'Maria': ['es', 'en'],
      'Diego': ['es', 'en'],
      'Sofia': ['es', 'en'],
      // French names
      'Pierre': ['fr', 'en'],
      'Marie': ['fr', 'en'],
      'Antoine': ['fr', 'en'],
      'Camille': ['fr', 'en'],
      // German names
      'Hans': ['de', 'en'],
      'Greta': ['de', 'en'],
      'Klaus': ['de', 'en'],
      'Ingrid': ['de', 'en']
    };

    // Check if agent name matches cultural language patterns
    const agentFirstName = agent.name.split(' ')[0];
    const nameBasedLanguages = nameLanguageMap[agentFirstName];
    
    if (nameBasedLanguages) {
      return [...new Set([...baseLanguages, ...nameBasedLanguages])];
    }

    // Specialization-based language assignment
    const specializationLanguages: Record<string, string[]> = {
      'Cultural Integration': ['hi', 'ur', 'ar', 'zh'],
      'Global Talent': ['zh', 'ja', 'ko', 'hi'],
      'International Relations': ['fr', 'de', 'es', 'ar'],
      'Cross-Cultural': ['ar', 'zh', 'ja', 'ko'],
      'Diversity': ['es', 'fr', 'ar', 'hi'],
      'Japanese Market': ['ja', 'en'],
      'Asian Markets': ['zh', 'ja', 'ko'],
      'European Markets': ['fr', 'de', 'es'],
      'MENA Region': ['ar', 'fr'],
      'Latin America': ['es', 'en'],
      'Multilingual': ['fr', 'de', 'es', 'zh', 'ja']
    };

    const extraLangs = Object.entries(specializationLanguages)
      .filter(([key]) => agent.specialization.includes(key) || agent.background.includes(key))
      .flatMap(([, langs]) => langs);
    
    return [...new Set([...baseLanguages, ...extraLangs])];
  };

  const getPrimaryLanguage = () => {
    const profile = getCulturalProfile('priya-sharma');
    return profile?.primaryLanguage || 'en';
  };

  // Filter divisions and agents based on language selection
  const filteredDivisions = useMemo(() => {
    if (languageFilter.length === 0) return divisions;

    return divisions.map(division => ({
      ...division,
      agents: division.agents.filter((agent, agentIndex) => {
        const divisionIndex = divisions.findIndex(d => d.name === division.name);
        const agentLanguages = getAgentLanguages(divisionIndex, agentIndex);
        return languageFilter.some(lang => agentLanguages.includes(lang));
      })
    })).filter(division => division.agents.length > 0);
  }, [divisions, languageFilter]);

  const handleLanguageToggle = (language: string) => {
    setLanguageFilter(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const handleClearLanguageFilter = () => {
    setLanguageFilter([]);
  };

  const totalFilteredAgents = filteredDivisions.reduce((sum, div) => sum + div.agents.length, 0);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Divisions & AI Agents</h2>
          <p className="text-gray-600">
            {languageFilter.length > 0 
              ? `Showing ${totalFilteredAgents} agents matching language criteria`
              : `All ${divisions.reduce((sum, div) => sum + div.agents.length, 0)} agents across ${divisions.length} divisions`
            }
          </p>
        </div>
      </div>

      {/* Language Filter */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardContent className="p-4">
          <LanguageFilter
            selectedLanguages={languageFilter}
            onLanguageToggle={handleLanguageToggle}
            onClearAll={handleClearLanguageFilter}
          />
        </CardContent>
      </Card>
      
      {filteredDivisions.map((division, divisionIndex) => (
        <DivisionCard
          key={divisionIndex}
          division={division}
          divisionIndex={divisionIndex}
          originalDivisions={divisions}
          getAgentLanguages={getAgentLanguages}
          getPrimaryLanguage={getPrimaryLanguage}
        />
      ))}

      {filteredDivisions.length === 0 && languageFilter.length > 0 && (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-6 text-center">
            <p className="text-yellow-800">
              No agents found matching the selected language criteria. Try adjusting your language filters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
