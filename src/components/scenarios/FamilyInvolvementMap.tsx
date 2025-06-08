
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useActivityParticipants } from '@/hooks/useBusinessActivities';
import { familyMembers } from '@/data/familyMembers';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';

interface FamilyInvolvementMapProps {
  activityId: string;
}

export const FamilyInvolvementMap: React.FC<FamilyInvolvementMapProps> = ({ activityId }) => {
  const { data: participants = [], isLoading } = useActivityParticipants(activityId);
  const { familyAgents } = useFamilyAgentQueries();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  // Group participants by family member
  const participantsByMember = participants.reduce((acc, participant) => {
    if (!acc[participant.family_member_id]) {
      acc[participant.family_member_id] = [];
    }
    acc[participant.family_member_id].push(participant);
    return acc;
  }, {} as Record<string, typeof participants>);

  const getFamilyMember = (memberId: string) => {
    return familyMembers.find(m => m.id === memberId);
  };

  const getFamilyAgentCount = (memberId: string) => {
    if (!familyAgents) return 0;
    return familyAgents.filter(agent => agent.family_member_id === memberId).length;
  };

  const getInvolvementColor = (levelCode: string) => {
    switch (levelCode) {
      case 'lead': return 'bg-red-500';
      case 'support': return 'bg-orange-500';
      case 'consult': return 'bg-yellow-500';
      case 'review': return 'bg-purple-500';
      case 'inform': return 'bg-gray-500';
      default: return 'bg-gray-300';
    }
  };

  const calculateMemberInvolvement = (memberParticipants: typeof participants) => {
    if (memberParticipants.length === 0) return 0;
    const totalIntensity = memberParticipants.reduce(
      (sum, p) => sum + p.involvement_level.intensity_score, 0
    );
    return Math.round(totalIntensity / memberParticipants.length);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Neural Ennead Family Involvement Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map(member => {
              const memberParticipants = participantsByMember[member.id] || [];
              const avgInvolvement = calculateMemberInvolvement(memberParticipants);
              const isInvolved = memberParticipants.length > 0;
              const agentCount = getFamilyAgentCount(member.id);
              
              return (
                <Card 
                  key={member.id} 
                  className={`transition-all ${
                    isInvolved ? 'ring-2 ring-blue-200 shadow-md' : 'opacity-50'
                  }`}
                >
                  <CardContent className="pt-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          isInvolved ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-400'
                        }`}
                      >
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {agentCount} agents
                        </Badge>
                      </div>
                    </div>
                    
                    {isInvolved ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Involvement Level</span>
                          <Badge variant="outline">{avgInvolvement}/10</Badge>
                        </div>
                        
                        <div className="space-y-2">
                          {memberParticipants.map((participant, index) => (
                            <div key={participant.id} className="text-sm">
                              <div className="flex items-center justify-between">
                                <Badge 
                                  className={`${getInvolvementColor(participant.involvement_level.level_code)} text-white`}
                                >
                                  {participant.involvement_level.level_name}
                                </Badge>
                                <span className="text-muted-foreground">
                                  {participant.involvement_level.intensity_score}/10
                                </span>
                              </div>
                              {participant.specific_role && (
                                <p className="text-muted-foreground mt-1">
                                  Role: {participant.specific_role}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-2 border-t">
                          <p className="text-xs text-muted-foreground">
                            {memberParticipants.length} participation{memberParticipants.length !== 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <p className="text-sm text-muted-foreground">Not involved</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {agentCount} agents available
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Involvement Level Legend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { code: 'lead', name: 'Lead', color: 'bg-red-500', description: 'Primary responsibility' },
              { code: 'support', name: 'Support', color: 'bg-orange-500', description: 'Active contribution' },
              { code: 'consult', name: 'Consult', color: 'bg-yellow-500', description: 'Expert guidance' },
              { code: 'review', name: 'Review', color: 'bg-purple-500', description: 'Feedback provider' },
              { code: 'inform', name: 'Inform', color: 'bg-gray-500', description: 'Kept updated' }
            ].map(level => (
              <div key={level.code} className="text-center">
                <div className={`w-8 h-8 rounded ${level.color} mx-auto mb-2`}></div>
                <p className="font-semibold text-sm">{level.name}</p>
                <p className="text-xs text-muted-foreground">{level.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
