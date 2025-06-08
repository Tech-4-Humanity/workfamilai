
import React from 'react';
import { Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

interface NetworkMemberProps {
  member: FamilyMember;
  index: number;
}

export const NetworkMember = ({ member, index }: NetworkMemberProps) => {
  const navigate = useNavigate();

  const handleMemberClick = (memberId: string) => {
    if (memberId === 'trojan-oz') {
      navigate('/admin');
    } else {
      navigate(`/department/${memberId}`);
    }
  };

  return (
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
  );
};
