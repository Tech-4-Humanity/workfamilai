
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { LeaderCard } from '@/components/family/LeaderCard';
import { Footer } from '@/components/ui/footer';
import { familyMembers } from '@/data/familyMembers';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, Target, Zap, ArrowDown, Sparkles, Activity, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Index = () => {
  const navigate = useNavigate();
  const { currentAgentCount, isLoading } = useFamilyAgentQueries();
  const [animatedCount, setAnimatedCount] = useState(0);
  const [currentDemo, setCurrentDemo] = useState(0);

  // Animated counter for agent count
  useEffect(() => {
    if (currentAgentCount) {
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setAnimatedCount(Math.floor(currentAgentCount * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [currentAgentCount]);

  // Rotating demo showcases
  const demoShowcases = [
    "Processing real-time customer inquiries across 9 departments",
    "Analyzing market trends and generating strategic insights",
    "Coordinating cross-functional team collaborations",
    "Optimizing operational workflows and resource allocation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoShowcases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Neural Ennead Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Nine specialized AI family members, each leading their own teams of agents, 
              working together as a unified neural network to transform how organizations operate.
            </p>
            
            {/* Interactive Hero Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div 
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-cyan-400/50"
                onClick={() => handleMeetFamily()}
              >
                <Users className="h-5 w-5 group-hover:text-cyan-400 transition-colors" />
                <span className="group-hover:text-cyan-300 transition-colors">9 Family Leaders</span>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </div>
              <div 
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-green-400/50"
                onClick={() => handleExploreNetwork()}
              >
                <Target className="h-5 w-5 group-hover:text-green-400 transition-colors" />
                <span className="group-hover:text-green-300 transition-colors">
                  {animatedCount || currentAgentCount || 729} AI Agents
                </span>
                <Activity className="h-4 w-4 opacity-60 animate-pulse" />
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </div>
              <div 
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 cursor-pointer hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 hover:border-purple-400/50"
                onClick={() => handleExploreNetwork()}
              >
                <Brain className="h-5 w-5 group-hover:text-purple-400 transition-colors" />
                <span className="group-hover:text-purple-300 transition-colors">Unified Intelligence</span>
                <Sparkles className="h-4 w-4 opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Dynamic Activity Showcase */}
            <div className="mb-8 h-16 flex items-center justify-center">
              <div className="flex items-center space-x-3 bg-blue-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-blue-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-sm font-medium">
                  Live: {demoShowcases[currentDemo]}
                </span>
                <Zap className="h-4 w-4 text-yellow-400 animate-pulse" />
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                onClick={handleExploreNetwork}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group"
                size="lg"
              >
                <Brain className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore Neural Network
                <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Button>
              <Button 
                onClick={handleMeetFamily}
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                size="lg"
              >
                <Users className="mr-2 h-5 w-5 group-hover:text-cyan-400 transition-colors" />
                Meet Your AI Family
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => navigate('/scenarios')}
                variant="outline" 
                className="border-2 border-purple-400/50 text-purple-200 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
                size="lg"
              >
                <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin transition-all" />
                See Live Demo
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-cyan-400 opacity-70" />
            </div>
          </div>
        </div>
      </div>

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
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
                9
              </div>
              <div className="text-sm text-gray-600">Family Members</div>
              <div className="text-xs text-gray-500">Each with unique expertise</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700">
                {animatedCount || currentAgentCount || 729}
              </div>
              <div className="text-sm text-gray-600">AI Agents</div>
              <div className="text-xs text-gray-500">Specialized capabilities</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">
                81
              </div>
              <div className="text-sm text-gray-600">Agents per Family</div>
              <div className="text-xs text-gray-500">Balanced distribution</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:text-orange-700">
                24/7
              </div>
              <div className="text-sm text-gray-600">Always Active</div>
              <div className="text-xs text-gray-500">Continuous collaboration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore the Family</h3>
            <p className="text-gray-600 mb-8">
              Dive deeper into each family member's domain and discover their specialized teams of AI agents.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate('/scenarios')} variant="outline">
                View Business Scenarios
              </Button>
              <Button onClick={() => navigate('/admin')} variant="outline">
                Family Management
              </Button>
              <Button onClick={() => navigate('/holo-org')} variant="outline">
                Holo-Org Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
