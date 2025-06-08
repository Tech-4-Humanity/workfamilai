
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
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {division.agents.map((agent, agentIndex) => (
                <Card key={agentIndex} className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-5 flex-1 flex flex-col">
                    {/* Agent Name - Most Prominent */}
                    <h4 className="font-bold text-gray-900 text-xl mb-2 leading-tight">
                      {agent.name}
                    </h4>
                    
                    {/* Specialization Badge */}
                    <div className="mb-3">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {agent.specialization}
                      </Badge>
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
                        agentBackground={`${agent.background} I specialize in ${agent.specialization} and my signature method is ${agent.signature_method}. My greatest achievement is ${agent.achievement}.`}
                        agentColor="indigo"
                        buttonText={`Chat with ${agent.name.split(' ')[0]}`}
                        buttonVariant="outline"
                        buttonSize="sm"
                        triggerClassName="w-full"
                      />
                    </div>
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
