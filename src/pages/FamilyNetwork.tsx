import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/ui/footer';
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { LeaderCard } from '@/components/family/LeaderCard';
import { NetworkMissionStatement } from '@/components/family/NetworkMissionStatement';
import { familyMembers } from '@/data/familyMembers';
import { getTotalAgentCount } from '@/utils/familyAgentGeneration';

const FamilyNetwork = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const totalAgentCount = getTotalAgentCount();
  const [animatedCount, setAnimatedCount] = useState(0);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Family Consciousness Network
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Meet the 9 executive leaders who embody augmented humanity principles, 
              each managing specialized teams of AI agents designed to enhance human capabilities.
            </p>
            <div className="text-3xl font-bold text-blue-600">
              {animatedCount} AI Agents Working in Partnership
            </div>
          </div>
          
          <NetworkMissionStatement />
        </div>
      </div>

      {/* Neural Network Visualization */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-300">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Consciousness Network</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the interconnected neural network that demonstrates how each AI leader 
            complements the others, creating a unified consciousness that amplifies human potential.
          </p>
        </div>
        <FamilyNeuralNetwork />
      </div>

      {/* Family Members Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-500">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The AI Family Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each family member represents a unique approach to augmented humanity, bringing 
            cultural wisdom and specialized expertise to enhance human-AI collaboration.
          </p>
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

      <Footer />
    </div>
  );
};

export default FamilyNetwork;