
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles } from 'lucide-react';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { soundEffects } from '@/utils/soundEffects';
import { NetworkVisualization } from './NetworkVisualization';
import { NetworkStats } from './NetworkStats';
import { NetworkMissionStatement } from './NetworkMissionStatement';

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
  const { currentAgentCount } = useFamilyAgentQueries();
  const [animatedCounts, setAnimatedCounts] = useState({
    members: 0,
    agents: 0,
    capabilities: 0
  });
  const hasPlayedAmbient = useRef(false);

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

    const timer = setTimeout(() => {
      animate();
      
      // Play ambient neural activity once
      if (!hasPlayedAmbient.current) {
        setTimeout(() => {
          soundEffects.playAmbientNeuralActivity();
          hasPlayedAmbient.current = true;
        }, 1000);
      }
    }, 500); // Start animation after 500ms
    
    return () => clearTimeout(timer);
  }, [currentAgentCount]);

  return (
    <Card className="w-full overflow-hidden relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white border-none shadow-2xl neural-shimmer hover-glow">
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
        {/* Enhanced Neural Network Visualization with Faces */}
        <NetworkVisualization familyMembers={familyMembers} />
        
        {/* Enhanced glassmorphism stats - updated member count */}
        <NetworkStats animatedCounts={animatedCounts} />
        
        {/* Enhanced mission statement */}
        <NetworkMissionStatement />
      </CardContent>
    </Card>
  );
};

export default FamilyNeuralNetwork;
