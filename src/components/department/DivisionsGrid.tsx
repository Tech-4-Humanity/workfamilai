
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Star, Award } from 'lucide-react';
import { ChatModal } from '@/components/chat/ChatModal';
import { Division } from '@/types/family';

interface DivisionsGridProps {
  divisions: Division[];
}

export const DivisionsGrid = ({ divisions }: DivisionsGridProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Divisions & AI Agents</h2>
      
      {divisions.map((division, divisionIndex) => (
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {division.agents.map((agent, agentIndex) => (
                <Card key={agentIndex} className="border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-900 text-lg">{agent.name}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {agent.specialization}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {agent.background}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{agent.achievement}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-yellow-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{agent.signature_method}</span>
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-2">
                        <strong>Cultural Expertise:</strong> {agent.cultural_expertise}
                      </div>
                    </div>

                    <ChatModal
                      agentName={agent.name}
                      agentPersonality={agent.specialization}
                      agentBackground={`${agent.background} I specialize in ${agent.specialization} and my signature method is ${agent.signature_method}. My greatest achievement is ${agent.achievement}.`}
                      agentColor="indigo"
                      buttonText={`Chat with ${agent.name.split(' ')[0]}`}
                      buttonVariant="outline"
                      buttonSize="sm"
                      triggerClassName="w-full"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
