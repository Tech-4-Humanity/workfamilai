
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
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Brain,
      labelKey: 'family.activeDepartments',
      value: 10,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Network,
      labelKey: 'family.neuralConnections',
      value: Math.floor(currentAgentCount * 1.2),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Layers,
      labelKey: 'family.consciousnessLayers',
      value: 9,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.labelKey} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.bgColor} mb-4`}>
                  <IconComponent className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 font-medium">
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
