
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, AlertTriangle, Clock, Users } from 'lucide-react';
import { useActivitySteps, useActivityParticipants } from '@/hooks/useBusinessActivities';
import { familyMembers } from '@/data/familyMembers';

interface ActivityFlowChartProps {
  activityId: string;
}

export const ActivityFlowChart: React.FC<ActivityFlowChartProps> = ({ activityId }) => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const { data: steps = [], isLoading: stepsLoading } = useActivitySteps(activityId);
  const { data: participants = [], isLoading: participantsLoading } = useActivityParticipants(activityId);

  if (stepsLoading || participantsLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
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
      case 'lead': return 'bg-red-500 text-white';
      case 'support': return 'bg-orange-500 text-white';
      case 'consult': return 'bg-yellow-500 text-black';
      case 'review': return 'bg-purple-500 text-white';
      case 'inform': return 'bg-gray-500 text-white';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Process Flow Visualization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const stepParticipants = getStepParticipants(step.id);
              const isSelected = selectedStep === step.id;
              
              return (
                <div key={step.id} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300"></div>
                  )}
                  
                  <Card 
                    className={`cursor-pointer transition-all ${
                      isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedStep(isSelected ? null : step.id)}
                  >
                    <CardContent className="pt-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex flex-col items-center">
                          <div className={`p-2 rounded-full ${
                            step.is_decision_point ? 'bg-orange-100' : 'bg-blue-100'
                          }`}>
                            {step.is_decision_point ? (
                              <AlertTriangle className="h-4 w-4 text-orange-600" />
                            ) : (
                              <Circle className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground mt-1">
                            Step {step.step_order}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{step.step_title}</h4>
                            <div className="flex items-center space-x-2">
                              {step.is_decision_point && (
                                <Badge variant="outline" className="text-orange-600">
                                  Decision Point
                                </Badge>
                              )}
                              {step.estimated_hours && (
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {step.estimated_hours}h
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          {step.step_description && (
                            <p className="text-sm text-muted-foreground mb-3">
                              {step.step_description}
                            </p>
                          )}
                          
                          {stepParticipants.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {stepParticipants.map(participant => (
                                <Badge 
                                  key={participant.id}
                                  className={getInvolvementColor(participant.involvement_level.level_code)}
                                >
                                  <Users className="h-3 w-3 mr-1" />
                                  {getFamilyMemberName(participant.family_member_id)} 
                                  ({participant.involvement_level.level_name})
                                </Badge>
                              ))}
                            </div>
                          )}
                          
                          {isSelected && (
                            <div className="mt-4 pt-4 border-t space-y-2">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Step Code:</span>
                                  <p className="text-muted-foreground">{step.step_code}</p>
                                </div>
                                {step.dependencies && step.dependencies.length > 0 && (
                                  <div>
                                    <span className="font-medium">Dependencies:</span>
                                    <p className="text-muted-foreground">
                                      {step.dependencies.join(', ')}
                                    </p>
                                  </div>
                                )}
                              </div>
                              
                              {stepParticipants.length > 0 && (
                                <div>
                                  <span className="font-medium">Detailed Participation:</span>
                                  <div className="mt-2 space-y-1">
                                    {stepParticipants.map(participant => (
                                      <div key={participant.id} className="text-sm">
                                        <span className="font-medium">
                                          {getFamilyMemberName(participant.family_member_id)}
                                        </span>
                                        {participant.specific_role && (
                                          <span className="text-muted-foreground">
                                            {' '}as {participant.specific_role}
                                          </span>
                                        )}
                                        {participant.contribution_notes && (
                                          <p className="text-muted-foreground ml-2">
                                            {participant.contribution_notes}
                                          </p>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
