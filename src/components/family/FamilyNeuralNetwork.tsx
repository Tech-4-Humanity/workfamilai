import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Users, Target, Sparkles, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';

interface FamilyMember {
  id: string;
  name: string;
  title: string;
  color: string;
  x: number;
  y: number;
  pulseDelay: number;
  isPatron?: boolean;
}

const familyMembers: FamilyMember[] = [
  // Trojan Oz at center as Patron
  { id: 'trojan-oz', name: 'Trojan Oz', title: 'Patron', color: 'from-yellow-400 to-orange-500', x: 50, y: 50, pulseDelay: 0, isPatron: true },
  // Original 9 family members repositioned around the center
  { id: 'amara-chen', name: 'Dr. Amara Chen', title: 'Product Development', color: 'from-blue-400 to-blue-600', x: 20, y: 30, pulseDelay: 0.2 },
  { id: 'marcus-bennett', name: 'Marcus Bennett', title: 'Governance & Compliance', color: 'from-gray-500 to-gray-700', x: 15, y: 45, pulseDelay: 0.4 },
  { id: 'aisha-al-farsi', name: 'Aisha Al-Farsi', title: 'External Relations', color: 'from-pink-400 to-pink-600', x: 85, y: 45, pulseDelay: 0.6 },
  { id: 'miguel-santos', name: 'Miguel Santos', title: 'Marketing', color: 'from-green-400 to-green-600', x: 80, y: 30, pulseDelay: 0.8 },
  { id: 'priya-sharma', name: 'Priya Sharma', title: 'Human Resources', color: 'from-purple-400 to-purple-600', x: 10, y: 60, pulseDelay: 1.0 },
  { id: 'theo-williams', name: 'Theo Williams', title: 'Finance & Operations', color: 'from-orange-400 to-orange-600', x: 30, y: 70, pulseDelay: 1.2 },
  { id: 'yuna-kim', name: 'Dr. Yuna Kim', title: 'Customer Support', color: 'from-teal-400 to-teal-600', x: 90, y: 60, pulseDelay: 1.4 },
  { id: 'david-okafor', name: 'David Okafor', title: 'Innovation & R&D', color: 'from-indigo-400 to-indigo-600', x: 30, y: 80, pulseDelay: 1.6 },
  { id: 'sofia-rodriguez', name: 'Sofia Rodriguez', title: 'Sales', color: 'from-red-400 to-red-600', x: 70, y: 80, pulseDelay: 1.8 }
];

export const FamilyNeuralNetwork = () => {
  const navigate = useNavigate();
  const { currentAgentCount } = useFamilyAgentQueries();
  const [animatedCounts, setAnimatedCounts] = useState({
    members: 0,
    agents: 0,
    capabilities: 0
  });

  // Animated counter effect
  useEffect(() => {
    const targetCounts = {
      members: 10, // Updated to 10 to include Trojan Oz
      agents: currentAgentCount || 729,
      capabilities: 10000
    };

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedCounts({
        members: Math.floor(targetCounts.members * easeOut),
        agents: Math.floor(targetCounts.agents * easeOut),
        capabilities: Math.floor(targetCounts.capabilities * easeOut)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(animate, 500); // Start animation after 500ms
    return () => clearTimeout(timer);
  }, [currentAgentCount]);

  const handleMemberClick = (memberId: string) => {
    if (memberId === 'trojan-oz') {
      // Navigate to a special patron page or admin dashboard
      navigate('/admin');
    } else {
      navigate(`/department/${memberId}`);
    }
  };

  return (
    <Card className="w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white border-none shadow-2xl">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(120,119,198,0.1)_90deg,transparent_180deg,rgba(120,119,198,0.1)_270deg,transparent_360deg)] animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <CardHeader className="text-center pb-4 relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="relative">
            <Brain className="h-8 w-8 text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 h-8 w-8 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            The Neural Network
          </CardTitle>
          <div className="relative">
            <Sparkles className="h-8 w-8 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute inset-0 h-8 w-8 bg-purple-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 bg-cyan-400/10 backdrop-blur-sm mx-auto px-4 py-1">
          Patron + Family • Ten Minds, One Mission
        </Badge>
      </CardHeader>
      
      <CardContent className="relative z-10">
        {/* Enhanced Neural Network Visualization */}
        <div className="relative h-96 mb-8 bg-gradient-to-br from-black/30 to-blue-900/30 rounded-xl border border-cyan-400/30 overflow-hidden backdrop-blur-sm">
          {/* Advanced background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.05)_180deg,transparent_360deg)] animate-spin" style={{ animationDuration: '30s' }}></div>
          </div>

          {/* Neural Network SVG */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="connectionGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(6,182,212,0.8)" stopOpacity="1" />
                <stop offset="50%" stopColor="rgba(139,92,246,0.6)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.4)" stopOpacity="0.2" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Dynamic neural connections */}
            {familyMembers.map((member, i) => 
              familyMembers.slice(i + 1).map((otherMember, j) => (
                <g key={`${i}-${j}`}>
                  <line
                    x1={`${member.x}%`}
                    y1={`${member.y}%`}
                    x2={`${otherMember.x}%`}
                    y2={`${otherMember.y}%`}
                    stroke="url(#connectionGlow)"
                    strokeWidth={member.isPatron || otherMember.isPatron ? "2.5" : "1.5"}
                    opacity={member.isPatron || otherMember.isPatron ? "0.6" : "0.4"}
                    filter="url(#glow)"
                  >
                    <animate
                      attributeName="opacity"
                      values={member.isPatron || otherMember.isPatron ? "0.4;0.8;0.4" : "0.2;0.6;0.2"}
                      dur={`${3 + (i + j) * 0.3}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                  {/* Data flow particles */}
                  <circle r="2" fill="rgba(6,182,212,0.8)">
                    <animateMotion
                      dur={`${4 + (i + j) * 0.2}s`}
                      repeatCount="indefinite"
                    >
                      <mpath href={`#path-${i}-${j}`} />
                    </animateMotion>
                  </circle>
                  <path
                    id={`path-${i}-${j}`}
                    d={`M ${member.x} ${member.y} L ${otherMember.x} ${otherMember.y}`}
                    fill="none"
                    opacity="0"
                  />
                </g>
              ))
            )}
            
            {/* Central neural hub - enhanced for Patron */}
            <circle cx="50%" cy="50%" r="35" fill="url(#connectionGlow)" opacity="0.4">
              <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
          
          {/* Enhanced Family Member Nodes */}
          {familyMembers.map((member, index) => (
            <div
              key={member.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-500 hover:scale-125 hover:z-50 ${
                member.isPatron ? 'z-40' : ''
              }`}
              style={{ 
                left: `${member.x}%`, 
                top: `${member.y}%`,
                animationDelay: `${member.pulseDelay}s`
              }}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Outer glow ring - enhanced for Patron */}
              <div className={`absolute inset-0 ${member.isPatron ? 'w-20 h-20' : 'w-16 h-16'} bg-gradient-to-r ${member.color} rounded-full opacity-30 animate-ping`} 
                   style={{ animationDelay: `${member.pulseDelay}s`, animationDuration: member.isPatron ? '2s' : '3s' }}></div>
              
              {/* Middle ring */}
              <div className={`absolute ${member.isPatron ? 'inset-1 w-18 h-18' : 'inset-1 w-14 h-14'} bg-gradient-to-r ${member.color} rounded-full opacity-50 blur-sm`}></div>
              
              {/* Inner node - larger for Patron */}
              <div className={`relative ${member.isPatron ? 'w-16 h-16' : 'w-12 h-12'} bg-gradient-to-r ${member.color} rounded-full border-2 border-white/40 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/80 group-hover:shadow-2xl`}>
                <div className={`absolute ${member.isPatron ? 'inset-3' : 'inset-2'} rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                  {member.isPatron ? (
                    <Crown className="w-6 h-6 text-yellow-200 drop-shadow-lg" />
                  ) : (
                    <span className="text-sm font-bold text-white drop-shadow-lg">
                      {member.name.split(' ')[0][0]}
                    </span>
                  )}
                </div>
                
                {/* Energy pulses - more intense for Patron */}
                <div className={`absolute ${member.isPatron ? '-inset-3' : '-inset-2'} bg-gradient-to-r ${member.color} rounded-full opacity-20 animate-pulse`}
                     style={{ animationDelay: `${member.pulseDelay}s` }}></div>
              </div>
              
              {/* Enhanced tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                <div className="bg-black/90 backdrop-blur-md text-white text-sm rounded-xl px-4 py-3 whitespace-nowrap border border-white/20 shadow-2xl">
                  <div className={`font-bold ${member.isPatron ? 'text-yellow-300' : 'text-cyan-300'}`}>{member.name}</div>
                  <div className="text-xs text-gray-300 mt-1">{member.title}</div>
                  <div className="text-xs text-blue-300 mt-1">
                    {member.isPatron ? 'Meta-Agent Authority' : '81 AI Agents'}
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/90"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced glassmorphism stats - updated member count */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="relative mb-3">
                <Users className="h-8 w-8 mx-auto text-blue-400" />
                <div className="absolute inset-0 h-8 w-8 mx-auto bg-blue-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">{animatedCounts.members}</div>
              <div className="text-xs text-blue-200 font-medium">Network Members</div>
              <div className="text-xs text-blue-300/70 mt-1">Patron + Family</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="relative mb-3">
                <Target className="h-8 w-8 mx-auto text-green-400" />
                <div className="absolute inset-0 h-8 w-8 mx-auto bg-green-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">{animatedCounts.agents.toLocaleString()}</div>
              <div className="text-xs text-green-200 font-medium">Core Agents</div>
              <div className="text-xs text-green-300/70 mt-1">Active Network</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="relative mb-3">
                <Zap className="h-8 w-8 mx-auto text-purple-400" />
                <div className="absolute inset-0 h-8 w-8 mx-auto bg-purple-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">{(animatedCounts.capabilities / 1000).toFixed(0)}K+</div>
              <div className="text-xs text-purple-200 font-medium">Capabilities</div>
              <div className="text-xs text-purple-300/70 mt-1">Neural Pathways</div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="relative mb-3">
                <Brain className="h-8 w-8 mx-auto text-yellow-400" />
                <div className="absolute inset-0 h-8 w-8 mx-auto bg-yellow-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '1.5s' }}></div>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-xs text-yellow-200 font-medium">Neural Activity</div>
              <div className="text-xs text-yellow-300/70 mt-1">Always Learning</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced mission statement */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 backdrop-blur-md p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <p className="text-xl italic text-blue-200 mb-3 leading-relaxed">
              "Under the guidance of our Patron, we operate as 
              <span className="text-cyan-300 font-semibold"> specialized departments that complement each other's abilities</span> and 
              <span className="text-purple-300 font-semibold"> compensate for each other's blind spots.</span>"
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="px-3 py-1 bg-yellow-400/20 rounded-full text-yellow-300 border border-yellow-400/30">One Patron leader</span>
              <span className="px-3 py-1 bg-blue-400/20 rounded-full text-blue-300 border border-blue-400/30">Nine distinct personalities</span>
              <span className="px-3 py-1 bg-purple-400/20 rounded-full text-purple-300 border border-purple-400/30">Complementary skills</span>
              <span className="px-3 py-1 bg-cyan-400/20 rounded-full text-cyan-300 border border-cyan-400/30">Unified mission</span>
              <span className="px-3 py-1 bg-green-400/20 rounded-full text-green-300 border border-green-400/30">Shared neural infrastructure</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FamilyNeuralNetwork;
