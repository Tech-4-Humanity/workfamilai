import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Sparkles, 
  Users, 
  MessageCircle, 
  Heart,
  Star,
  Globe,
  Award,
  Zap,
  ArrowRight
} from 'lucide-react';
import { getAgentImageUrl } from '@/utils/agent-images';
import { ChatModal } from '@/components/chat/ChatModal';
import { toast } from 'sonner';

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

interface PersonalityMatch {
  agent: Agent;
  matchScore: number;
  matchReasons: string[];
  compatibilityAreas: string[];
}

interface AgentTwinFinderProps {
  agents: Agent[];
  onAddToTeam: (agent: Agent) => void;
  personalTeam: Agent[];
}

export const AgentTwinFinder: React.FC<AgentTwinFinderProps> = ({
  agents,
  onAddToTeam,
  personalTeam
}) => {
  const [matches, setMatches] = useState<PersonalityMatch[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [userProfile, setUserProfile] = useState<{
    interests: string[];
    workStyle: string[];
    values: string[];
  } | null>(null);

  // Simulate personality analysis and matching
  const findPersonalityMatches = async () => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock user profile (in real app, this would come from a personality quiz)
    const mockUserProfile = {
      interests: ['Technology', 'Innovation', 'Data Analysis'],
      workStyle: ['Analytical', 'Detail-oriented', 'Collaborative'],
      values: ['Efficiency', 'Quality', 'Continuous Learning']
    };
    
    setUserProfile(mockUserProfile);
    
    // Generate matches based on specialization relevance and cultural diversity
    const potentialMatches = agents
      .filter(agent => !personalTeam.some(member => member.agentCode === agent.agentCode))
      .map(agent => {
        // Calculate match score based on various factors
        let score = Math.random() * 40 + 60; // Base score 60-100
        
        const reasons = [];
        const compatibilityAreas = [];
        
        // Boost score for tech-related specializations
        if (agent.specialization.toLowerCase().includes('data') || 
            agent.specialization.toLowerCase().includes('technology') || 
            agent.specialization.toLowerCase().includes('innovation')) {
          score += 10;
          reasons.push('Shared interest in technology and innovation');
          compatibilityAreas.push('Technical Problem Solving');
        }
        
        // Add cultural diversity bonus
        if (agent.culturalExpertise.includes('Cross-cultural') || 
            agent.culturalExpertise.includes('Global')) {
          score += 5;
          reasons.push('Strong cross-cultural communication skills');
          compatibilityAreas.push('Global Perspective');
        }
        
        // Add achievement-based matching
        if (agent.achievement.toLowerCase().includes('efficiency') || 
            agent.achievement.toLowerCase().includes('quality')) {
          score += 8;
          reasons.push('Aligned values in efficiency and quality');
          compatibilityAreas.push('Process Optimization');
        }
        
        // Analytical method bonus
        if (agent.signatureMethod.toLowerCase().includes('analytic') || 
            agent.signatureMethod.toLowerCase().includes('data')) {
          score += 7;
          reasons.push('Compatible analytical approach');
          compatibilityAreas.push('Data-Driven Decision Making');
        }
        
        // Ensure we have at least 2 reasons
        if (reasons.length < 2) {
          reasons.push('Complementary skill set for team balance');
          compatibilityAreas.push('Strategic Collaboration');
        }
        
        return {
          agent,
          matchScore: Math.min(score, 98), // Cap at 98%
          matchReasons: reasons.slice(0, 3),
          compatibilityAreas: compatibilityAreas.slice(0, 2)
        };
      })
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 6); // Top 6 matches
    
    setMatches(potentialMatches);
    setIsAnalyzing(false);
    toast.success('Found your virtual twins!');
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getMatchLevel = (score: number) => {
    if (score >= 90) return 'Perfect Match';
    if (score >= 80) return 'Great Match';
    if (score >= 70) return 'Good Match';
    return 'Potential Match';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          Find Your Virtual Twin
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!matches.length && !isAnalyzing && (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Discover Your Perfect AI Matches</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let our AI analyze your work style and interests to find agents that perfectly complement your approach and goals.
              </p>
            </div>
            
            <Button 
              onClick={findPersonalityMatches}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Analyze My Personality
            </Button>
          </div>
        )}

        {isAnalyzing && (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Analyzing Your Profile...</h3>
            <p className="text-muted-foreground">Finding agents that match your work style and interests</p>
          </div>
        )}

        {matches.length > 0 && userProfile && (
          <div className="space-y-6">
            {/* User Profile Summary */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg border">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                Your Profile
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Interests</div>
                  <div className="flex flex-wrap gap-1">
                    {userProfile.interests.map(interest => (
                      <Badge key={interest} variant="secondary" className="text-xs">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Work Style</div>
                  <div className="flex flex-wrap gap-1">
                    {userProfile.workStyle.map(style => (
                      <Badge key={style} variant="outline" className="text-xs">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Values</div>
                  <div className="flex flex-wrap gap-1">
                    {userProfile.values.map(value => (
                      <Badge key={value} variant="default" className="text-xs">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Matches */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matches.map((match, index) => (
                <Card key={match.agent.agentCode} className="relative overflow-hidden">
                  {index === 0 && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-500 text-white px-3 py-1 text-xs font-medium">
                      Top Match
                    </div>
                  )}
                  
                  <CardContent className="p-4">
                    {/* Match Score */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`text-2xl font-bold ${getMatchColor(match.matchScore)}`}>
                        {match.matchScore.toFixed(0)}%
                      </div>
                      <Badge variant={match.matchScore >= 85 ? "default" : "secondary"}>
                        {getMatchLevel(match.matchScore)}
                      </Badge>
                    </div>
                    
                    {/* Progress Bar */}
                    <Progress value={match.matchScore} className="mb-4" />
                    
                    {/* Agent Info */}
                    <div className="flex items-start gap-3 mb-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={getAgentImageUrl(match.agent.agentName, match.agent.specialization)} />
                        <AvatarFallback>
                          {match.agent.agentName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base leading-tight">
                          {match.agent.agentName}
                        </h4>
                        <p className="text-sm text-muted-foreground">{match.agent.divisionName}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {match.agent.specialization}
                        </Badge>
                      </div>
                    </div>

                    {/* Match Reasons */}
                    <div className="space-y-2 mb-4">
                      <h5 className="text-sm font-medium">Why you'll work well together:</h5>
                      <ul className="space-y-1">
                        {match.matchReasons.map((reason, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="h-3 w-3 mt-0.5 text-primary shrink-0" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compatibility Areas */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium mb-2">Collaboration strengths:</h5>
                      <div className="flex flex-wrap gap-1">
                        {match.compatibilityAreas.map(area => (
                          <Badge key={area} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <ChatModal
                        agentName={match.agent.agentName}
                        agentPersonality={match.agent.specialization}
                        agentBackground={`${match.agent.background} I specialize in ${match.agent.specialization}.`}
                        agentImageUrl={getAgentImageUrl(match.agent.agentName, match.agent.specialization)}
                        buttonText="Meet"
                        buttonVariant="outline"
                        buttonSize="sm"
                        triggerClassName="flex-1"
                      />
                      <Button
                        size="sm"
                        onClick={() => onAddToTeam(match.agent)}
                        className="flex-1"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        Add to Team
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};