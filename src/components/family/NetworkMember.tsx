
import React from 'react';
import { Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RobustImage } from '@/components/ui/robust-image';
import { getLeaderImageUrl } from '@/utils/supabase-images';
import { soundEffects } from '@/utils/soundEffects';
import { FloatingText } from './FloatingText';

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

  // Generate floating text elements for each member
  const getFloatingTexts = () => {
    const baseTexts = member.isPatron 
      ? ['Meta-Agent Authority', 'Strategic Oversight', 'Neural Coordination']
      : ['81 AI Agents', 'Processing...', 'Active Learning'];
    
    const roleTexts = member.title.split(' ');
    
    return [...baseTexts, ...roleTexts].map((text, i) => ({
      text,
      delay: member.pulseDelay + i * 0.5,
      color: member.isPatron ? '#fbbf24' : '#06b6d4',
      position: {
        x: member.x + (Math.cos((i * 60) * Math.PI / 180) * 15),
        y: member.y + (Math.sin((i * 60) * Math.PI / 180) * 15)
      }
    }));
  };

  const floatingTexts = getFloatingTexts();

  return (
    <>
      {/* Floating text elements */}
      {floatingTexts.map((textProps, i) => (
        <FloatingText
          key={`${member.id}-text-${i}`}
          {...textProps}
          size={member.isPatron ? 'md' : 'sm'}
        />
      ))}

      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer hover-lift hover-glow neural-shimmer hover:z-50 ${
          member.isPatron ? 'z-40 neural-breathing agent-active' : 'z-10'
        }`}
        style={{ 
          left: `${member.x}%`, 
          top: `${member.y}%`,
          animationDelay: `${member.pulseDelay}s`
        }}
        onClick={() => {
          soundEffects.playNeuralActivation(member.isPatron ? 1.5 : 1);
          handleMemberClick(member.id);
        }}
        onMouseEnter={() => soundEffects.playInteraction()}
      >
        {/* Outer glow ring - enhanced for Patron */}
        <div className={`absolute inset-0 ${member.isPatron ? 'w-24 h-24' : 'w-20 h-20'} bg-gradient-to-r ${member.color} rounded-full opacity-30 neural-pulse`} 
             style={{ animationDelay: `${member.pulseDelay}s` }}></div>
        
        {/* Middle ring */}
        <div className={`absolute ${member.isPatron ? 'inset-2 w-20 h-20' : 'inset-2 w-16 h-16'} bg-gradient-to-r ${member.color} rounded-full opacity-50 blur-sm neural-breathing`}></div>
        
        {/* Avatar container - larger for Patron */}
        <div className={`relative ${member.isPatron ? 'w-20 h-20' : 'w-16 h-16'} rounded-full border-2 ${member.isPatron ? 'border-yellow-400/60' : 'border-white/40'} shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-white/80 group-hover:shadow-2xl overflow-hidden`}>
          <Avatar className="w-full h-full">
            <RobustImage
              src={getLeaderImageUrl(member.name)}
              alt={member.name}
              className="w-full h-full object-cover"
              fallback={
                <AvatarFallback className={`bg-gradient-to-r ${member.color} text-white font-bold ${member.isPatron ? 'text-lg' : 'text-sm'}`}>
                  {member.name.split(' ')[0][0]}
                </AvatarFallback>
              }
            />
          </Avatar>
          
          {/* Patron crown overlay */}
          {member.isPatron && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full">
              <Crown className="w-8 h-8 text-yellow-300 drop-shadow-lg neural-pulse neural-glow" />
            </div>
          )}
          
          {/* Energy pulses - more intense for Patron */}
          <div className={`absolute ${member.isPatron ? '-inset-4' : '-inset-3'} bg-gradient-to-r ${member.color} rounded-full opacity-20 neural-breathing`}
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
    </>
  );
};
