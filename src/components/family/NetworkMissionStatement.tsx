
import React from 'react';

export const NetworkMissionStatement = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-400/30 backdrop-blur-md p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse"></div>
      <div className="relative z-10 text-center">
        <p className="text-xl italic text-slate-800 mb-3 leading-relaxed">
          "Under the guidance of our Patron, we operate as 
          <span className="text-blue-700 font-semibold"> specialized departments that complement each other's abilities</span> and 
          <span className="text-purple-700 font-semibold"> compensate for each other's blind spots.</span>"
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-3 py-1 bg-yellow-100 rounded-full text-yellow-800 border border-yellow-300">One Patron leader</span>
          <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 border border-blue-300">Nine distinct personalities</span>
          <span className="px-3 py-1 bg-purple-100 rounded-full text-purple-800 border border-purple-300">Complementary skills</span>
          <span className="px-3 py-1 bg-cyan-100 rounded-full text-cyan-800 border border-cyan-300">Unified mission</span>
          <span className="px-3 py-1 bg-green-100 rounded-full text-green-800 border border-green-300">Shared neural infrastructure</span>
        </div>
      </div>
    </div>
  );
};
