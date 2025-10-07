
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { NetworkStats } from '@/components/family/NetworkStats';
import heroBackground from '@/assets/hero-network-background.jpg';

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Augmented Humanity Network
            <span className="block text-primary">AI-Enhanced Human Potential</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Amplify human capabilities through conscious AI partnership. 9 executive leaders managing 
            729 specialized AI agents designed to enhance, not replace, human wisdom.
          </p>
          
          <NetworkStats 
            animatedCounts={{
              members: 10,
              agents: animatedCount,
              capabilities: currentAgentCount * 12
            }}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              size="lg" 
              onClick={onExploreNetwork}
              className="px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              {t('family.exploreNetwork')}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onMeetFamily}
              className="px-8 py-4 text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t('family.meetFamily')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
