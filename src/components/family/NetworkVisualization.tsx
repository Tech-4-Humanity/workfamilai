
import React from 'react';
import { NetworkMember } from './NetworkMember';

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

interface NetworkVisualizationProps {
  familyMembers: FamilyMember[];
}

export const NetworkVisualization = ({ familyMembers }: NetworkVisualizationProps) => {
  return (
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
        <NetworkMember key={member.id} member={member} index={index} />
      ))}
    </div>
  );
};
