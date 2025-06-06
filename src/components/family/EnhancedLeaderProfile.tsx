
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Users, Target, Star, Brain, Heart, Zap } from 'lucide-react';
import { getLeaderImageUrl } from '@/utils/supabase-images';

interface Division {
  name: string;
  description: string;
  agents: Array<{
    name: string;
    specialization: string;
    achievement?: string;
  }>;
}

interface EnhancedLeaderProfileProps {
  leader: {
    id: string;
    name: string;
    title: string;
    personality: string;
    enneagramType: string;
    motto: string;
    background: string;
    domainOverview: string;
    color: string;
    agentCount: number;
  };
  divisions: Division[];
  onBack: () => void;
}

export const EnhancedLeaderProfile = ({ leader, divisions, onBack }: EnhancedLeaderProfileProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageUrl = getLeaderImageUrl(leader.name);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const totalAgents = divisions.reduce((sum, division) => sum + division.agents.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Header with Back Button */}
      <div className="bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Family
          </Button>
        </div>
      </div>

      {/* Enhanced Leader Profile */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Card className="mb-8 border-2 border-gray-200 bg-gradient-to-r from-white to-gray-50/50 shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Professional Photo */}
              <div className="relative">
                <div className={`absolute inset-0 ${leader.color} rounded-2xl blur-xl opacity-30`} />
                
                {!imageLoaded && !imageError && (
                  <div className={`w-32 h-32 ${leader.color} rounded-2xl flex items-center justify-center text-white animate-pulse border-4 border-white/50 shadow-2xl`}>
                    <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                  </div>
                )}
                
                {!imageError && (
                  <img
                    src={imageUrl}
                    alt={leader.name}
                    className={`relative w-32 h-32 rounded-2xl object-cover border-4 border-white/50 shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                )}
                
                {imageError && (
                  <div className={`w-32 h-32 ${leader.color} rounded-2xl flex items-center justify-center text-white text-4xl font-bold border-4 border-white/50 shadow-2xl`}>
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>

              {/* Leader Info */}
              <div className="flex-1 text-center lg:text-left">
                <CardTitle className="text-4xl text-gray-900 mb-2">{leader.name}</CardTitle>
                <p className="text-2xl text-gray-600 mb-4">{leader.title}</p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
                  <Badge variant="outline" className="text-sm bg-blue-50">
                    {leader.enneagramType}
                  </Badge>
                  <Badge variant="secondary" className="text-sm bg-purple-50">
                    {leader.personality}
                  </Badge>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                  <p className="text-lg italic text-gray-800 font-medium">"{leader.motto}"</p>
                </div>

                <div className="flex justify-center lg:justify-start space-x-6 text-sm text-gray-600">
                  <span className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span className="font-semibold">{divisions.length} Divisions</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold">{totalAgents} AI Agents</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <Brain className="h-4 w-4" />
                    <span className="font-semibold">Neural Integration</span>
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Detailed Profile Tabs */}
        <Tabs defaultValue="background" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="background" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Background & Philosophy</span>
            </TabsTrigger>
            <TabsTrigger value="divisions" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Agent Divisions</span>
            </TabsTrigger>
            <TabsTrigger value="network" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Family Connections</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="background" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Personal Background & Domain Philosophy</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Background Story</h3>
                  <p className="text-gray-700 leading-relaxed">{leader.background}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Domain Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{leader.domainOverview}</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Role & Personality Dynamics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As the family's {leader.personality.toLowerCase()}, {leader.name.split(' ')[0]} brings essential balance to the Holo-Org ecosystem. 
                    Their {leader.enneagramType} personality type creates natural synergies with other family members, 
                    particularly in how they approach problem-solving and decision-making within the neural network.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="divisions" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {divisions.map((division, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg text-gray-900 flex items-center justify-between">
                      {division.name}
                      <Badge variant="outline" className="text-xs">
                        {division.agents.length} Agents
                      </Badge>
                    </CardTitle>
                    <p className="text-sm text-gray-600">{division.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {division.agents.map((agent, agentIndex) => (
                        <div 
                          key={agentIndex}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{agent.name}</span>
                            <p className="text-xs text-gray-600">{agent.specialization}</p>
                            {agent.achievement && (
                              <p className="text-xs text-blue-600 italic mt-1">{agent.achievement}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-purple-500" />
                  <span>Neural Network Connections</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Brain className="h-16 w-16 mx-auto text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Family Connection Matrix</h3>
                  <p className="text-gray-600 mb-6">
                    {leader.name} maintains dynamic neural connections with all family members, 
                    with strongest bonds to complementary personality types and overlapping domain expertise.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* This would show connection strengths to other family members */}
                    <div className="bg-blue-50 rounded-lg p-3">
                      <div className="text-sm font-medium">High Synergy</div>
                      <div className="text-xs text-gray-600">Investigator + Helper</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm font-medium">Complementary</div>
                      <div className="text-xs text-gray-600">Detail + Vision</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="text-sm font-medium">Neural Amplification</div>
                      <div className="text-xs text-gray-600">Shared Infrastructure</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
