
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users } from 'lucide-react';
import { Leader } from '@/data/departmentData';

interface LeaderProfileProps {
  leader: Leader;
  teamCount: number;
  totalAgents: number;
}

const LeaderProfile = ({ leader, teamCount, totalAgents }: LeaderProfileProps) => {
  return (
    <div className="text-center mb-8">
      <Card className="max-w-2xl mx-auto border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className={`w-16 h-16 ${leader.color} rounded-full flex items-center justify-center text-white text-2xl`}>
              {leader.avatar}
            </div>
            <div className="text-left">
              <CardTitle className="text-3xl text-gray-900">{leader.name}</CardTitle>
              <p className="text-xl text-gray-600">{leader.title}</p>
            </div>
          </div>
          <div className="flex justify-center space-x-3 mb-4">
            <Badge variant="outline" className="text-sm">
              {leader.enneagramType}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {leader.personality}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-6">
            {leader.description}
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-600">
            <span className="flex items-center">
              <Target className="h-4 w-4 mr-1" />
              {teamCount} Agent Teams
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {totalAgents} AI Agents
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeaderProfile;
