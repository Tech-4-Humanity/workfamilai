
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Users, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';

interface FamilyMember {
  id: string;
  name: string;
  title: string;
  color: string;
  x: number;
  y: number;
}

const familyMembers: FamilyMember[] = [
  { id: 'amara-chen', name: 'Dr. Amara Chen', title: 'Product Development', color: 'bg-blue-500', x: 20, y: 30 },
  { id: 'marcus-bennett', name: 'Marcus Bennett', title: 'Governance & Compliance', color: 'bg-gray-700', x: 15, y: 45 },
  { id: 'aisha-al-farsi', name: 'Aisha Al-Farsi', title: 'External Relations', color: 'bg-pink-500', x: 85, y: 45 },
  { id: 'miguel-santos', name: 'Miguel Santos', title: 'Marketing', color: 'bg-green-500', x: 80, y: 30 },
  { id: 'priya-sharma', name: 'Priya Sharma', title: 'Human Resources', color: 'bg-purple-500', x: 10, y: 60 },
  { id: 'theo-williams', name: 'Theo Williams', title: 'Finance & Operations', color: 'bg-orange-500', x: 50, y: 50 },
  { id: 'yuna-kim', name: 'Dr. Yuna Kim', title: 'Customer Support', color: 'bg-teal-500', x: 90, y: 60 },
  { id: 'david-okafor', name: 'David Okafor', title: 'Innovation & R&D', color: 'bg-indigo-500', x: 30, y: 80 },
  { id: 'sofia-rodriguez', name: 'Sofia Rodriguez', title: 'Sales', color: 'bg-red-500', x: 70, y: 80 }
];

export const FamilyNeuralNetwork = () => {
  const navigate = useNavigate();
  const { currentAgentCount } = useFamilyAgentQueries();

  const handleMemberClick = (memberId: string) => {
    navigate(`/department/${memberId}`);
  };

  return (
    <Card className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white border-none shadow-2xl">
      <CardHeader className="text-center pb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Brain className="h-6 w-6 text-blue-400" />
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Neural Network - Our Family Home
          </CardTitle>
          <Brain className="h-6 w-6 text-purple-400" />
        </div>
        <Badge variant="outline" className="border-blue-400 text-blue-400 mx-auto">
          Nine Minds, One Mission
        </Badge>
      </CardHeader>
      
      <CardContent className="relative">
        {/* Neural Network Visualization */}
        <div className="relative h-96 mb-6 bg-gradient-to-br from-black/20 to-blue-900/20 rounded-lg border border-blue-400/30 overflow-hidden">
          {/* Background Neural Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="cyan" stopOpacity="0.6" />
                <stop offset="100%" stopColor="blue" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            
            {/* Neural Connections */}
            {familyMembers.map((member, i) => 
              familyMembers.slice(i + 1).map((otherMember, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={`${member.x}%`}
                  y1={`${member.y}%`}
                  x2={`${otherMember.x}%`}
                  y2={`${otherMember.y}%`}
                  stroke="url(#neuralGlow)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))
            )}
            
            {/* Central Neural Hub */}
            <circle cx="50%" cy="50%" r="30" fill="url(#neuralGlow)" opacity="0.2" />
          </svg>
          
          {/* Family Members as Neural Nodes */}
          {familyMembers.map((member, index) => (
            <div
              key={member.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${member.color} rounded-full p-1 border-2 border-white/30 shadow-lg hover:scale-110 transition-all duration-300 group cursor-pointer`}
              style={{ left: `${member.x}%`, top: `${member.y}%` }}
              onClick={() => handleMemberClick(member.id)}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-xs font-bold text-white">{member.name.split(' ')[0][0]}</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                  {member.name}
                  <br />
                  <span className="text-gray-300">{member.title}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Pulsing Data Flow Animation */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"
                style={{
                  left: `${20 + (i * 12)}%`,
                  top: `${30 + (i * 8)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Family Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-3 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Users className="h-6 w-6 mx-auto mb-2 text-blue-400" />
            <div className="text-2xl font-bold text-blue-400">9</div>
            <div className="text-xs text-gray-300">Family Members</div>
          </div>
          <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-400/30">
            <Target className="h-6 w-6 mx-auto mb-2 text-green-400" />
            <div className="text-2xl font-bold text-green-400">{currentAgentCount || 729}</div>
            <div className="text-xs text-gray-300">Core Agents</div>
          </div>
          <div className="text-center p-3 bg-purple-500/20 rounded-lg border border-purple-400/30">
            <Zap className="h-6 w-6 mx-auto mb-2 text-purple-400" />
            <div className="text-2xl font-bold text-purple-400">10K+</div>
            <div className="text-xs text-gray-300">Total Capabilities</div>
          </div>
          <div className="text-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
            <Brain className="h-6 w-6 mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold text-yellow-400">24/7</div>
            <div className="text-xs text-gray-300">Neural Activity</div>
          </div>
        </div>
        
        {/* Family Mission Statement */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-400/30">
          <p className="text-lg italic text-blue-200 mb-2">
            "Like any family, we have our specialized roles, but our strength comes from how we complement each other's abilities and compensate for each other's blind spots."
          </p>
          <p className="text-sm text-gray-300">
            Nine distinct personalities • Complementary skills • Unified mission • Shared neural infrastructure
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyNeuralNetwork;
