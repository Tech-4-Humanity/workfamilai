
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { AgentCard } from './AgentCard';
import { Division } from '@/types/family';

interface DivisionCardProps {
  division: Division;
  divisionIndex: number;
  originalDivisions: Division[];
  getAgentLanguages: (divisionIndex: number, agentIndex: number) => string[];
  getPrimaryLanguage: () => string;
}

export const DivisionCard = ({ 
  division, 
  divisionIndex, 
  originalDivisions, 
  getAgentLanguages, 
  getPrimaryLanguage 
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
            const originalDivisionIndex = originalDivisions.findIndex(d => d.name === division.name);
            const originalAgentIndex = originalDivisions[originalDivisionIndex]?.agents.findIndex(a => a.name === agent.name) ?? agentIndex;
            const agentLanguages = getAgentLanguages(originalDivisionIndex, originalAgentIndex);
            const primaryLanguage = getPrimaryLanguage();

            return (
              <AgentCard
                key={agentIndex}
                agent={agent}
                agentLanguages={agentLanguages}
                primaryLanguage={primaryLanguage}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
