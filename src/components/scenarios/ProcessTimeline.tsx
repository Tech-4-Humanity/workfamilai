
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import { useActivitySteps, useActivityParticipants } from '@/hooks/useBusinessActivities';
import { familyMembers } from '@/data/familyMembers';

interface ProcessTimelineProps {
  activityId: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ activityId }) => {
  const { data: steps = [], isLoading: stepsLoading } = useActivitySteps(activityId);
  const { data: participants = [], isLoading: participantsLoading } = useActivityParticipants(activityId);

  if (stepsLoading || participantsLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="animate-pulse space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const getStepParticipants = (stepId: string) => {
    return participants.filter(p => p.step_id === stepId);
  };

  const getFamilyMemberName = (memberId: string) => {
    const member = familyMembers.find(m => m.id === memberId);
    return member?.name || memberId;
  };

  const getInvolvementColor = (levelCode: string) => {
    switch (levelCode) {
      case 'lead': return 'bg-red-100 text-red-800 border-red-200';
      case 'support': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'consult': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'review': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'inform': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Calculate cumulative hours for timeline positioning
  let cumulativeHours = 0;
  const stepsWithTiming = steps.map(step => {
    const startHour = cumulativeHours;
    cumulativeHours += step.estimated_hours || 8; // Default 8 hours if not specified
    return {
      ...step,
      startHour,
      endHour: cumulativeHours
    };
  });

  const totalHours = cumulativeHours;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Process Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Timeline header */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Start</span>
              <span>Total Duration: {Math.round(totalHours / 8)} days ({totalHours} hours)</span>
              <span>End</span>
            </div>
            
            {/* Timeline visualization */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-full h-1 bg-gray-200 rounded"></div>
              
              {stepsWithTiming.map((step, index) => {
                const stepParticipants = getStepParticipants(step.id);
                const leftPosition = (step.startHour / totalHours) * 100;
                const width = ((step.endHour - step.startHour) / totalHours) * 100;
                
                return (
                  <div key={step.id} className="relative mb-8">
                    {/* Timeline bar segment */}
                    <div 
                      className={`absolute h-1 ${
                        step.is_decision_point ? 'bg-orange-500' : 'bg-blue-500'
                      } rounded`}
                      style={{
                        left: `${leftPosition}%`,
                        width: `${width}%`,
                        top: '0'
                      }}
                    ></div>
                    
                    {/* Step marker */}
                    <div 
                      className="absolute transform -translate-x-1/2"
                      style={{ left: `${leftPosition}%`, top: '-8px' }}
                    >
                      <div className={`w-4 h-4 rounded-full ${
                        step.is_decision_point ? 'bg-orange-500' : 'bg-blue-500'
                      } border-2 border-white shadow`}></div>
                    </div>
                    
                    {/* Step content */}
                    <div 
                      className="absolute pt-8"
                      style={{ 
                        left: `${leftPosition}%`,
                        width: `${Math.max(width, 25)}%`,
                        minWidth: '200px'
                      }}
                    >
                      <Card className="shadow-sm">
                        <CardContent className="pt-3 pb-3">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold text-sm">{step.step_title}</h4>
                              <div className="flex items-center space-x-1">
                                {step.is_decision_point ? (
                                  <AlertTriangle className="h-3 w-3 text-orange-500" />
                                ) : (
                                  <CheckCircle className="h-3 w-3 text-blue-500" />
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {step.estimated_hours || 8}h
                                </Badge>
                              </div>
                            </div>
                            
                            {step.step_description && (
                              <p className="text-xs text-muted-foreground">
                                {step.step_description}
                              </p>
                            )}
                            
                            {stepParticipants.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {stepParticipants.map(participant => (
                                  <Badge 
                                    key={participant.id}
                                    variant="outline"
                                    className={`text-xs ${getInvolvementColor(participant.involvement_level.level_code)}`}
                                  >
                                    <Users className="h-2 w-2 mr-1" />
                                    {getFamilyMemberName(participant.family_member_id)}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            
                            <div className="text-xs text-muted-foreground">
                              Hour {step.startHour} - {step.endHour}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Timeline Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{steps.length}</p>
              <p className="text-sm text-muted-foreground">Total Steps</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{steps.filter(s => s.is_decision_point).length}</p>
              <p className="text-sm text-muted-foreground">Decision Points</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{Math.round(totalHours / 8)}</p>
              <p className="text-sm text-muted-foreground">Working Days</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{new Set(participants.map(p => p.family_member_id)).size}</p>
              <p className="text-sm text-muted-foreground">Family Members</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
