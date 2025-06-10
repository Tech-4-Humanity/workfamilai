
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Brain, Network, Layers } from 'lucide-react';

interface QuickStatsProps {
  animatedCount: number;
  currentAgentCount: number;
}

export const QuickStats = ({ animatedCount, currentAgentCount }: QuickStatsProps) => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      labelKey: 'family.totalAgents',
      value: animatedCount,
      color: 'text-white',
      bgColor: 'bg-blue-600 border-blue-500'
    },
    {
      icon: Brain,
      labelKey: 'family.activeDepartments',
      value: 10,
      color: 'text-white',
      bgColor: 'bg-green-600 border-green-500'
    },
    {
      icon: Network,
      labelKey: 'family.neuralConnections',
      value: Math.floor(currentAgentCount * 1.2),
      color: 'text-white',
      bgColor: 'bg-purple-600 border-purple-500'
    },
    {
      icon: Layers,
      labelKey: 'family.consciousnessLayers',
      value: 9,
      color: 'text-white',
      bgColor: 'bg-orange-600 border-orange-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.labelKey} className="text-center hover:shadow-xl transition-all duration-300 border-2 overflow-hidden">
              <CardContent className={`p-6 ${stat.bgColor.split(' ')[0]} bg-gradient-to-br from-current to-opacity-90`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border-2 border-white/30 mb-4 backdrop-blur-sm`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-base text-white font-semibold drop-shadow-sm">
                  {t(stat.labelKey)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
