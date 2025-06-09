
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Award } from 'lucide-react';
import { ChatModal } from '@/components/chat/ChatModal';
import { LanguageIndicator } from '@/components/ui/language-indicator';
import { LanguageFilter } from '@/components/ui/language-filter';
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';
import { Division } from '@/types/family';
import { useState, useMemo } from 'react';

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
        <Card key={divisionIndex} className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl text-gray-900">{division.name}</CardTitle>
                <p className="text-gray-600 mt-1">{division.description}</p>
              </div>
              <div className="flex items-center text-blue-600">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-semibold">{division.agents.length} Agents</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {division.agents.map((agent, agentIndex) => {
                const originalDivisionIndex = divisions.findIndex(d => d.name === division.name);
                const originalAgentIndex = divisions[originalDivisionIndex]?.agents.findIndex(a => a.name === agent.name) ?? agentIndex;
                const agentLanguages = getAgentLanguages(originalDivisionIndex, originalAgentIndex);
                const primaryLanguage = getPrimaryLanguage();

                return (
                  <Card key={agentIndex} className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-5 flex-1 flex flex-col">
                      {/* Agent Name - Most Prominent */}
                      <h4 className="font-bold text-gray-900 text-xl mb-2 leading-tight">
                        {agent.name}
                      </h4>
                      
                      {/* Specialization Badge and Language Indicators */}
                      <div className="mb-3 space-y-2">
                        <Badge variant="secondary" className="text-sm font-medium">
                          {agent.specialization}
                        </Badge>
                        <LanguageIndicator 
                          languages={agentLanguages}
                          primaryLanguage={primaryLanguage}
                          variant="compact"
                          showPopover={true}
                        />
                      </div>
                      
                      {/* Full Background - No truncation */}
                      <div className="flex-1 mb-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {agent.background}
                        </p>
                      </div>
                      
                      {/* Achievement and Method */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start text-sm">
                          <Award className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{agent.achievement}</span>
                        </div>
                        
                        <div className="flex items-start text-sm">
                          <Star className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{agent.signature_method}</span>
                        </div>
                      </div>
                      
                      {/* Cultural Expertise */}
                      <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-50 rounded">
                        <strong>Cultural Expertise:</strong> {agent.cultural_expertise}
                      </div>

                      {/* Chat Button */}
                      <div className="mt-auto">
                        <ChatModal
                          agentName={agent.name}
                          agentPersonality={agent.specialization}
                          agentBackground={`${agent.background} I specialize in ${agent.specialization} and my signature method is ${agent.signature_method}. My greatest achievement is ${agent.achievement}. I can communicate fluently in: ${agentLanguages.join(', ')}.`}
                          agentColor="indigo"
                          buttonText={`Chat with ${agent.name.split(' ')[0]}`}
                          buttonVariant="outline"
                          buttonSize="sm"
                          triggerClassName="w-full"
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
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
