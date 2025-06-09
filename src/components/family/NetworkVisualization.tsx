
import React from 'react';
import { NetworkMember } from './NetworkMember';
import { getCulturalProfile } from '@/data/culturalProfiles';
import { supportedLanguages } from '@/i18n/config';

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
  const getLanguageFlag = (memberId: string) => {
    const profile = getCulturalProfile(memberId);
    const primaryLang = profile?.primaryLanguage || 'en';
    return supportedLanguages[primaryLang as keyof typeof supportedLanguages]?.flag || '🌐';
  };

  return (
    <div className="relative h-[500px] mb-8 bg-gradient-to-br from-black/30 to-blue-900/30 rounded-xl border border-cyan-400/30 overflow-hidden backdrop-blur-sm">
      {/* Advanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(6,182,212,0.05)_180deg,transparent_360deg)] animate-spin" style={{ animationDuration: '30s' }}></div>
        
        {/* Additional floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
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
                strokeWidth={member.isPatron || otherMember.isPatron ? "3" : "2"}
                opacity={member.isPatron || otherMember.isPatron ? "0.7" : "0.5"}
                filter="url(#glow)"
              >
                <animate
                  attributeName="opacity"
                  values={member.isPatron || otherMember.isPatron ? "0.5;0.9;0.5" : "0.3;0.7;0.3"}
                  dur={`${3 + (i + j) * 0.3}s`}
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Enhanced data flow particles */}
              <circle r="3" fill="rgba(6,182,212,0.9)" opacity="0.8">
                <animateMotion
                  dur={`${4 + (i + j) * 0.2}s`}
                  repeatCount="indefinite"
                >
                  <mpath href={`#path-${i}-${j}`} />
                </animateMotion>
                <animate attributeName="r" values="2;4;2" dur="1s" repeatCount="indefinite" />
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
        
        {/* Enhanced central neural hub for Patron */}
        <circle cx="50%" cy="50%" r="40" fill="url(#connectionGlow)" opacity="0.5">
          <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Enhanced Family Member Nodes with Faces and Language Indicators */}
      {familyMembers.map((member, index) => (
        <div key={member.id}>
          <NetworkMember member={member} index={index} />
          {/* Language flag overlay */}
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
            style={{ 
              left: `${member.x}%`, 
              top: `${member.y}%`,
              transform: 'translate(-50%, -50%) translate(20px, -20px)'
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-lg border border-white/50">
              {getLanguageFlag(member.id)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
