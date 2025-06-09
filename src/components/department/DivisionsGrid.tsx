
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

  // Generate language capabilities for agents based on their leader
  const getAgentLanguages = (divisionIndex: number, agentIndex: number) => {
    // For now, inherit from department leader (Priya Sharma in this case)
    // In a real system, each agent could have unique language capabilities
    const baseLanguages = getSupportedLanguagesForMember('priya-sharma');
    
    // Add some variation based on agent specialization
    const additionalLanguages: Record<string, string[]> = {
      'Cultural Integration': ['hi', 'ur', 'ar'],
      'Global Talent': ['zh', 'ja', 'ko'],
      'International Relations': ['fr', 'de', 'es'],
      'Cross-Cultural': ['ar', 'zh', 'ja'],
      'Diversity': ['es', 'fr', 'ar'],
    };

    const agent = divisions[divisionIndex]?.agents[agentIndex];
    if (agent) {
      const extraLangs = Object.entries(additionalLanguages)
        .filter(([key]) => agent.specialization.includes(key) || agent.name.includes(key))
        .flatMap(([, langs]) => langs);
      
      return [...new Set([...baseLanguages, ...extraLangs])];
    }
    
    return baseLanguages;
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
