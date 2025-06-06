
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users } from 'lucide-react';
import { getLeaderImageUrl } from '@/utils/supabase-images';
import { useState } from 'react';

interface LeaderCardProps {
  leader: {
    id: string;
    name: string;
    title: string;
    personality: string;
    enneagramType: string;
    description: string;
    color: string;
    agentCount: number;
    avatar?: string;
  };
  onClick: () => void;
}

export const LeaderCard = ({ leader, onClick }: LeaderCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imageUrl = getLeaderImageUrl(leader.name);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden"
      onClick={onClick}
    >
      {/* Neural network background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
              <line x1="10" y1="10" x2="20" y2="5" stroke="currentColor" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="5" y2="20" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#neural)" />
        </svg>
      </div>

      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              {/* Professional photo with improved error handling */}
              <div className="relative">
                <div className={`absolute inset-0 ${leader.color} rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                
                {!imageLoaded && !imageError && (
                  <div className={`w-16 h-16 ${leader.color} rounded-xl flex items-center justify-center text-white animate-pulse border-2 border-white/30 shadow-lg`}>
                    <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                  </div>
                )}
                
                {!imageError && (
                  <img
                    src={imageUrl}
                    alt={leader.name}
                    className={`relative w-16 h-16 rounded-xl object-cover border-2 border-white/30 shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                )}
                
                {imageError && (
                  <div className={`w-16 h-16 ${leader.color} rounded-xl flex items-center justify-center text-white text-2xl font-bold border-2 border-white/30 shadow-lg`}>
                    {leader.avatar}
                  </div>
                )}
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {leader.name}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium">{leader.title}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs backdrop-blur-sm bg-white/50">
                {leader.enneagramType}
              </Badge>
              <Badge variant="secondary" className="text-xs backdrop-blur-sm bg-white/30">
                {leader.personality}
              </Badge>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {leader.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{leader.agentCount?.toLocaleString() || '0'} AI Agents</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="group-hover:bg-blue-50 group-hover:border-blue-200 backdrop-blur-sm bg-white/50 transition-all duration-300"
          >
            Meet the Team
          </Button>
        </div>
      </CardContent>

      {/* Glassmorphism overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};
