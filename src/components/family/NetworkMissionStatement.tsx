
import React from 'react';

export const NetworkMissionStatement = () => {
  return (
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
  );
};
