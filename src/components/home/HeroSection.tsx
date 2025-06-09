
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { NetworkStats } from '@/components/family/NetworkStats';

interface HeroSectionProps {
  currentAgentCount: number;
  animatedCount: number;
  onExploreNetwork: () => void;
  onMeetFamily: () => void;
}

export const HeroSection = ({ 
  currentAgentCount, 
  animatedCount, 
  onExploreNetwork, 
  onMeetFamily 
}: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('family.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('family.subtitle')}
          </p>
          
          <NetworkStats 
            animatedCount={animatedCount}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              onClick={onExploreNetwork}
              className="px-8 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('family.exploreNetwork')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onMeetFamily}
              className="px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('family.meetFamily')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
