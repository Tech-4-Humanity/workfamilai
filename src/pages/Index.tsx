
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { LeaderCard } from '@/components/family/LeaderCard';
import { Footer } from '@/components/ui/footer';
import { HeroSection } from '@/components/home/HeroSection';
import { WelcomeSection } from '@/components/home/WelcomeSection';
import { QuickStats } from '@/components/home/QuickStats';
import { NavigationSection } from '@/components/home/NavigationSection';
import { familyMembers } from '@/data/familyMembers';
import { getTotalAgentCount } from '@/utils/familyAgentGeneration';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const totalAgentCount = getTotalAgentCount(); // 729 agents
  const [animatedCount, setAnimatedCount] = useState(0);

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

  const handleLeaderClick = (leaderId: string) => {
    navigate(`/department/${leaderId}`);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreNetwork = () => {
    scrollToSection('neural-network');
  };

  const handleMeetFamily = () => {
    scrollToSection('family-members');
  };

  const handleGetStarted = () => {
    scrollToSection('family-members');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col page-enter">
      {/* Hero Section */}
      <div className="fade-in-up">
        <HeroSection 
          currentAgentCount={totalAgentCount}
          animatedCount={animatedCount}
          onExploreNetwork={handleExploreNetwork}
          onMeetFamily={handleMeetFamily}
        />
      </div>

      {/* Welcome Section with Interactive Elements */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 fade-in-up animate-delay-200">
        <WelcomeSection onGetStarted={handleGetStarted} />
      </div>

      {/* Neural Network Section */}
      <div id="neural-network" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-300">
        <FamilyNeuralNetwork />
      </div>

      {/* Family Members Grid */}
      <div id="family-members" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-500">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Family</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each family member brings unique expertise and personality, leading specialized teams 
            of AI agents that work together to solve complex organizational challenges.
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Trojan Oz represents the Board and Investment Community as a separate oversight system, 
              managing governance and strategic direction independent of operational departments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((leader, index) => (
            <div key={leader.id} className={`fade-in-up animate-delay-${(index % 3) * 100 + 100}`}>
              <LeaderCard 
                leader={leader}
                onClick={() => handleLeaderClick(leader.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <QuickStats 
        animatedCount={animatedCount}
        currentAgentCount={totalAgentCount}
      />

      {/* Navigation Section */}
      <NavigationSection />

      <Footer />
    </div>
  );
};

export default Index;
