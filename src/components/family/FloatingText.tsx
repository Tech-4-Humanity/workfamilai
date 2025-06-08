
import React from 'react';

interface FloatingTextProps {
  text: string;
  delay: number;
  color: string;
  position: { x: number; y: number };
  size?: 'sm' | 'md' | 'lg';
}

export const FloatingText = ({ text, delay, color, position, size = 'sm' }: FloatingTextProps) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <div
      className={`absolute pointer-events-none select-none ${sizeClasses[size]} bg-black/80 backdrop-blur-sm rounded-full border border-white/20 text-white whitespace-nowrap z-10 animate-pulse`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${delay}s`,
        color: color,
        animation: `pulse 3s ease-in-out infinite, float 3s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {text}
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};
