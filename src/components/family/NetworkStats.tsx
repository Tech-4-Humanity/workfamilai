
import React from 'react';
import { Users, Target, Zap, Brain } from 'lucide-react';

interface NetworkStatsProps {
  animatedCounts: {
    members: number;
    agents: number;
    capabilities: number;
  };
}

export const NetworkStats = ({ animatedCounts }: NetworkStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-center">
          <div className="relative mb-3">
            <Users className="h-8 w-8 mx-auto text-blue-400" />
            <div className="absolute inset-0 h-8 w-8 mx-auto bg-blue-400 rounded-full opacity-20 animate-ping"></div>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-1">{animatedCounts.members}</div>
          <div className="text-xs text-blue-800 font-medium">Network Members</div>
          <div className="text-xs text-blue-700 mt-1">Patron + Family</div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-center">
          <div className="relative mb-3">
            <Target className="h-8 w-8 mx-auto text-green-400" />
            <div className="absolute inset-0 h-8 w-8 mx-auto bg-green-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-1">{animatedCounts.agents.toLocaleString()}</div>
          <div className="text-xs text-green-800 font-medium">Core Agents</div>
          <div className="text-xs text-green-700 mt-1">Active Network</div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-center">
          <div className="relative mb-3">
            <Zap className="h-8 w-8 mx-auto text-purple-400" />
            <div className="absolute inset-0 h-8 w-8 mx-auto bg-purple-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-1">{(animatedCounts.capabilities / 1000).toFixed(0)}K+</div>
          <div className="text-xs text-purple-800 font-medium">Capabilities</div>
          <div className="text-xs text-purple-700 mt-1">Neural Pathways</div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 backdrop-blur-md p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 text-center">
          <div className="relative mb-3">
            <Brain className="h-8 w-8 mx-auto text-yellow-400" />
            <div className="absolute inset-0 h-8 w-8 mx-auto bg-yellow-400 rounded-full opacity-20 animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-1">24/7</div>
          <div className="text-xs text-yellow-800 font-medium">Neural Activity</div>
          <div className="text-xs text-yellow-700 mt-1">Always Learning</div>
        </div>
      </div>
    </div>
  );
};
