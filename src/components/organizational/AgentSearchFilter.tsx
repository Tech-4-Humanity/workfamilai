import React, { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  X, 
  Users, 
  Globe, 
  Building, 
  Star,
  Sparkles,
  Heart
} from 'lucide-react';
import { LEADERSHIP_SUMMARY } from '@/data/completeOrganizationalStructure';

interface Agent {
  agentCode: string;
  agentName: string;
  specialization: string;
  culturalExpertise: string;
  achievement: string;
  signatureMethod: string;
  background: string;
  divisionName: string;
  leaderName: string;
}

interface FilterState {
  searchTerm: string;
  selectedLeader: string;
  selectedDivision: string;
  selectedCulture: string;
  selectedSpecialization: string;
}

interface AgentSearchFilterProps {
  agents: Agent[];
  onFilteredAgentsChange: (filteredAgents: Agent[]) => void;
  personalTeam: Agent[];
  onFindMyTwin: () => void;
}

export const AgentSearchFilter: React.FC<AgentSearchFilterProps> = ({
  agents,
  onFilteredAgentsChange,
  personalTeam,
  onFindMyTwin
}) => {
  const [filters, setFilters] = useState<FilterState>({
    searchTerm: '',
    selectedLeader: '',
    selectedDivision: '',
    selectedCulture: '',
    selectedSpecialization: ''
  });
  
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filter options
  const filterOptions = useMemo(() => {
    const leaders = [...new Set(agents.map(a => a.leaderName))].sort();
    const divisions = [...new Set(agents.map(a => a.divisionName))].sort();
    const cultures = [...new Set(agents.map(a => a.culturalExpertise))].sort();
    const specializations = [...new Set(agents.map(a => a.specialization))].sort();
    
    return { leaders, divisions, cultures, specializations };
  }, [agents]);

  // Filter agents based on current filters
  const filteredAgents = useMemo(() => {
    let filtered = agents;

    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(agent => 
        agent.agentName.toLowerCase().includes(term) ||
        agent.specialization.toLowerCase().includes(term) ||
        agent.culturalExpertise.toLowerCase().includes(term) ||
        agent.divisionName.toLowerCase().includes(term) ||
        agent.achievement.toLowerCase().includes(term) ||
        agent.signatureMethod.toLowerCase().includes(term)
      );
    }

    if (filters.selectedLeader) {
      filtered = filtered.filter(agent => agent.leaderName === filters.selectedLeader);
    }

    if (filters.selectedDivision) {
      filtered = filtered.filter(agent => agent.divisionName === filters.selectedDivision);
    }

    if (filters.selectedCulture) {
      filtered = filtered.filter(agent => agent.culturalExpertise === filters.selectedCulture);
    }

    if (filters.selectedSpecialization) {
      filtered = filtered.filter(agent => agent.specialization === filters.selectedSpecialization);
    }

    return filtered;
  }, [agents, filters]);

  // Update parent component when filtered agents change
  React.useEffect(() => {
    onFilteredAgentsChange(filteredAgents);
  }, [filteredAgents, onFilteredAgentsChange]);

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      selectedLeader: '',
      selectedDivision: '',
      selectedCulture: '',
      selectedSpecialization: ''
    });
  };

  const activeFilterCount = Object.values(filters).filter(v => v !== '').length;

  return (
    <div className="space-y-4">
      {/* Search bar and main controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents by name, specialization, culture, or skills..."
            value={filters.searchTerm}
            onChange={(e) => updateFilter('searchTerm', e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="relative"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {activeFilterCount > 0 && (
              <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={onFindMyTwin}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-200 hover:from-purple-500/20 hover:to-pink-500/20"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Find My Twin
          </Button>
        </div>
      </div>

      {/* Quick stats and team info */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{filteredAgents.length} agents found</span>
        </div>
        {personalTeam.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            <span>{personalTeam.length} in your team</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building className="h-4 w-4" />
          <span>{LEADERSHIP_SUMMARY.length} departments</span>
        </div>
      </div>

      {/* Expanded filters */}
      {showFilters && (
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Department Leader</label>
                <Select value={filters.selectedLeader} onValueChange={(value) => updateFilter('selectedLeader', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All leaders" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All leaders</SelectItem>
                    {filterOptions.leaders.map(leader => (
                      <SelectItem key={leader} value={leader}>{leader}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Division</label>
                <Select value={filters.selectedDivision} onValueChange={(value) => updateFilter('selectedDivision', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All divisions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All divisions</SelectItem>
                    {filterOptions.divisions.map(division => (
                      <SelectItem key={division} value={division}>{division}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Cultural Expertise</label>
                <Select value={filters.selectedCulture} onValueChange={(value) => updateFilter('selectedCulture', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All cultures" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All cultures</SelectItem>
                    {filterOptions.cultures.map(culture => (
                      <SelectItem key={culture} value={culture}>{culture}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Specialization</label>
                <Select value={filters.selectedSpecialization} onValueChange={(value) => updateFilter('selectedSpecialization', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="All specializations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All specializations</SelectItem>
                    {filterOptions.specializations.map(spec => (
                      <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters).map(([key, value]) => 
                  value && (
                    <Badge key={key} variant="secondary" className="flex items-center gap-1">
                      {value}
                      <button 
                        onClick={() => updateFilter(key as keyof FilterState, '')}
                        className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )
                )}
              </div>
              
              {activeFilterCount > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all filters
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};