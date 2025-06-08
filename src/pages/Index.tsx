
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { LeaderCard } from '@/components/family/LeaderCard';
import { Footer } from '@/components/ui/footer';
import { HeroSection } from '@/components/home/HeroSection';
import { QuickStats } from '@/components/home/QuickStats';
import { NavigationSection } from '@/components/home/NavigationSection';
import { familyMembers } from '@/data/familyMembers';
import { getTotalAgentCount } from '@/utils/familyAgentGeneration';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <HeroSection 
        currentAgentCount={totalAgentCount}
        animatedCount={animatedCount}
        onExploreNetwork={handleExploreNetwork}
        onMeetFamily={handleMeetFamily}
      />

      {/* Neural Network Section */}
      <div id="neural-network" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <FamilyNeuralNetwork />
      </div>

      {/* Family Members Grid */}
      <div id="family-members" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Family</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each family member brings unique expertise and personality, leading specialized teams 
            of AI agents that work together to solve complex organizational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {familyMembers.map((leader) => (
            <LeaderCard 
              key={leader.id}
              leader={leader}
              onClick={() => handleLeaderClick(leader.id)}
            />
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
