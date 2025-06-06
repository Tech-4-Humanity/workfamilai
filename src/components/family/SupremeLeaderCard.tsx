
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Users } from 'lucide-react';
import { getLeaderImageUrl } from '@/utils/supabase-images';

interface SupremeLeaderCardProps {
  totalDepartments: number;
  totalAgents: number;
}

export const SupremeLeaderCard = ({ totalDepartments, totalAgents }: SupremeLeaderCardProps) => {
  const ozImageUrl = getLeaderImageUrl('Trojan Oz');

  return (
    <Card className="max-w-md mx-auto mb-8 border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-50/80 to-orange-50/80 backdrop-blur-lg shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-500">
      {/* Premium neural network background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="gold" />
              <stop offset="100%" stopColor="orange" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#neuralGlow)" opacity="0.3" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 100 + 60 * Math.cos(angle);
            const y1 = 100 + 60 * Math.sin(angle);
            const x2 = 100 + 40 * Math.cos(angle);
            const y2 = 100 + 40 * Math.sin(angle);
            return (
              <g key={i}>
                <circle cx={x1} cy={y1} r="3" fill="gold" opacity="0.6" />
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="gold" strokeWidth="1" opacity="0.4" />
              </g>
            );
          })}
        </svg>
      </div>

      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
          <CardTitle className="text-2xl text-gray-900 font-bold">Supreme Leader</CardTitle>
          <Star className="h-6 w-6 text-yellow-500 animate-pulse" />
        </div>
      </CardHeader>

      <CardContent className="text-center relative z-10">
        {/* Professional photo with crown effect */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <img
            src={ozImageUrl}
            alt="Trojan Oz"
            className="relative w-24 h-24 mx-auto rounded-full object-cover border-4 border-yellow-400/50 shadow-2xl"
            onError={(e) => {
              // Fallback to crown emoji if image fails to load
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="hidden w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full items-center justify-center text-4xl border-4 border-yellow-400/50 shadow-2xl">
            👑
          </div>
          {/* Crown overlay */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <span className="text-2xl">👑</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trojan Oz</h2>
        <p className="text-lg text-gray-700 mb-4 font-medium">Chief Executive Officer</p>
        <p className="text-sm text-gray-600 mb-6 italic">
          "Leading the AI revolution with wisdom, vision, and an unshakeable belief in human potential amplified by artificial intelligence."
        </p>
        
        <div className="flex justify-center space-x-6 text-sm text-gray-600">
          <span className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="font-semibold">{totalDepartments} Departments</span>
          </span>
          <span className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="font-semibold">{totalAgents} AI Agents</span>
          </span>
        </div>
      </CardContent>

      {/* Premium glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/10 to-orange-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};
