
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { AgentCard } from './AgentCard';
import { Division } from '@/types/family';
import { generateAgentCode } from '@/utils/familyAgentGeneration';

interface DivisionCardProps {
  division: Division;
  divisionIndex: number;
  originalDivisions: Division[];
  getAgentLanguages: (divisionIndex: number, agentIndex: number) => string[];
  getPrimaryLanguage: () => string;
  familyMemberId?: string;
  familyAgentsMap?: Map<string, any>;
}

export const DivisionCard = ({ 
  division, 
  divisionIndex, 
  originalDivisions, 
  getAgentLanguages, 
  getPrimaryLanguage,
  familyMemberId,
  familyAgentsMap
}: DivisionCardProps) => {
  return (
    <Card className="overflow-hidden">
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
          // Generate agent code and get family agent data if available
          const agentCode = familyMemberId ? generateAgentCode(familyMemberId, divisionIndex, agentIndex) : null;
          const familyAgentData = agentCode && familyAgentsMap ? familyAgentsMap.get(agentCode) : null;
          
          return (
            <AgentCard
              key={`agent-${divisionIndex}-${agentIndex}`}
              agent={agent}
              agentLanguages={getAgentLanguages(divisionIndex, agentIndex)}
              primaryLanguage={getPrimaryLanguage()}
              familyAgentData={familyAgentData}
            />
          );
        })}
        </div>
      </CardContent>
    </Card>
  );
};
