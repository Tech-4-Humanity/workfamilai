
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Team {
  name: string;
  description: string;
  agents: string[];
}

interface TeamCardProps {
  team: Team;
  teamIndex: number;
  departmentId: string;
  getNamedAgents: (departmentId: string, teamIndex: number, agentRoles: string[]) => string[];
}

export const TeamCard = ({ team, teamIndex, departmentId, getNamedAgents }: TeamCardProps) => {
  const namedAgents = getNamedAgents(departmentId, teamIndex, team.agents);
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg text-gray-900 mb-2">
              {team.name}
            </CardTitle>
            <p className="text-sm text-gray-600 mb-3">
              {team.description}
            </p>
            <Badge variant="outline" className="text-xs">
              {team.agents.length} Specialists
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {namedAgents.map((namedAgent, agentIndex) => (
            <div 
              key={agentIndex}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{namedAgent}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
