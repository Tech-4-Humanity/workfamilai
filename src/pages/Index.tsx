import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { Footer } from '@/components/ui/footer';
import { QuickStats } from '@/components/home/QuickStats';
import { PartnerCarousel } from '@/components/ui/partner-carousel';
import { BreadcrumbIndicator } from '@/components/guidance/BreadcrumbIndicator';
import { QuickActionToolbar } from '@/components/guidance/QuickActionToolbar';
import { ProgressIndicator } from '@/components/guidance/ProgressIndicator';
import { InteractiveTour } from '@/components/guidance/InteractiveTour';
import { ContextualHelp } from '@/components/guidance/ContextualHelp';
import { getTotalAgentCount } from '@/utils/familyAgentGeneration';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const totalAgentCount = getTotalAgentCount(); // 729 agents
  const [animatedCount, setAnimatedCount] = useState(0);
  const [showTour, setShowTour] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  // Animated counter for agent count
  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setAnimatedCount(Math.floor(totalAgentCount * easeOut));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [totalAgentCount]);

  const handleShowTour = () => {
    setShowTour(true);
  };

  const handleShowHelp = () => {
    setShowHelp(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col page-enter">
      {/* User Guidance Components */}
      <BreadcrumbIndicator />
      <ProgressIndicator />
      <QuickActionToolbar 
        onShowTour={handleShowTour}
        onShowHelp={handleShowHelp}
      />
      <InteractiveTour 
        isOpen={showTour}
        onClose={() => setShowTour(false)}
      />
      <ContextualHelp 
        isOpen={showHelp}
        onClose={() => setShowHelp(false)}
      />
      {/* Neural Network Section */}
      <div id="neural-network" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-200">
        <FamilyNeuralNetwork />
      </div>

      {/* Quick Stats */}
      <QuickStats 
        animatedCount={animatedCount}
        currentAgentCount={totalAgentCount}
      />

      <Footer />
      <PartnerCarousel />
    </div>
  );
};

export default Index;
