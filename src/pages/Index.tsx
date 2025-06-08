
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import { LeaderCard } from '@/components/family/LeaderCard';
import { familyMembers } from '@/data/familyMembers';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, Target, Zap } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const { currentAgentCount, isLoading } = useFamilyAgentQueries();

  const handleLeaderClick = (leaderId: string) => {
    navigate(`/department/${leaderId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Neural Ennead Family
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Nine specialized AI family members, each leading their own teams of agents, 
              working together as a unified neural network to transform how organizations operate.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="h-5 w-5" />
                <span>9 Family Leaders</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Target className="h-5 w-5" />
                <span>{currentAgentCount || 729} AI Agents</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Brain className="h-5 w-5" />
                <span>Unified Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neural Network Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <FamilyNeuralNetwork />
      </div>

      {/* Family Members Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
                {currentAgentCount || 729}
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
    </div>
  );
};

export default Index;
