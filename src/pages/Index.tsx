
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LeaderCard } from '@/components/family/LeaderCard';
import { SupremeLeaderCard } from '@/components/family/SupremeLeaderCard';
import { useAgentData } from '@/hooks/useAgentData';

const departmentHeads = [
  {
    id: 'product-development',
    name: 'Dr. Amara Chen',
    title: 'Product Development',
    personality: 'The Perfectionist',
    enneagramType: 'Type 1',
    description: 'The perfectionist who never misses a detail and transforms product ideas into flawless realities.',
    color: 'bg-blue-500',
    avatar: '🔬'
  },
  {
    id: 'marketing',
    name: 'Miguel Santos',
    title: 'Marketing',
    personality: 'The Helper',
    enneagramType: 'Type 2',
    description: 'The empathetic helper who intuitively understands customer needs before they can articulate them.',
    color: 'bg-green-500',
    avatar: '📈'
  },
  {
    id: 'human-resources',
    name: 'Priya Sharma',
    title: 'Human Resources',
    personality: 'The Achiever',
    enneagramType: 'Type 3',
    description: 'The achievement-oriented talent developer who turns HR from cost center into strategic powerhouse.',
    color: 'bg-purple-500',
    avatar: '👥'
  },
  {
    id: 'finance-operations',
    name: 'Theo Williams',
    title: 'Finance & Operations',
    personality: 'The Individualist',
    enneagramType: 'Type 4',
    description: 'The creative individualist who sees patterns others miss and finds hidden revenue streams.',
    color: 'bg-orange-500',
    avatar: '💼'
  },
  {
    id: 'customer-support',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support',
    personality: 'The Investigator',
    enneagramType: 'Type 5',
    description: 'The investigative problem-solver who transforms support from reactive firefighting to proactive prevention.',
    color: 'bg-teal-500',
    avatar: '🔍'
  },
  {
    id: 'innovation-rd',
    name: 'David Okafor',
    title: 'Innovation & R&D',
    personality: 'The Loyalist',
    enneagramType: 'Type 6',
    description: 'The loyal but questioning innovation leader who balances breakthrough thinking with practical implementation.',
    color: 'bg-indigo-500',
    avatar: '💡'
  },
  {
    id: 'sales',
    name: 'Sofia Rodriguez',
    title: 'Sales',
    personality: 'The Enthusiast',
    enneagramType: 'Type 7',
    description: 'The enthusiastic opportunity finder who turns every conversation into a journey of possibilities.',
    color: 'bg-red-500',
    avatar: '🎯'
  },
  {
    id: 'governance-compliance',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance',
    personality: 'The Challenger',
    enneagramType: 'Type 8',
    description: 'The challenging but principled guardian who transforms compliance from restriction into competitive advantage.',
    color: 'bg-gray-700',
    avatar: '⚖️'
  },
  {
    id: 'external-relations',
    name: 'Aisha Al-Farsi',
    title: 'External Relations',
    personality: 'The Peacemaker',
    enneagramType: 'Type 9',
    description: 'The diplomatic consensus-builder who transforms conflicts into productive partnerships.',
    color: 'bg-pink-500',
    avatar: '🤝'
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { totalAgents, getDepartmentAgentCount } = useAgentData();

  const filteredDepartments = departmentHeads.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.personality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add real agent counts to department data
  const departmentsWithRealCounts = filteredDepartments.map(dept => ({
    ...dept,
    agentCount: getDepartmentAgentCount(dept.id)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-bounce">🏛️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Holo-Org Command Center
            </h1>
            <p className="text-xl text-gray-600 mb-6">The AI Agent Family Organizational Chart</p>
            <p className="text-sm text-gray-500 italic mb-8">Nine Minds, One Mission • 2025 Vision</p>
            
            {/* Supreme Leader Card with real total */}
            <SupremeLeaderCard 
              totalDepartments={departmentHeads.length} 
              totalAgents={totalAgents || 0} 
            />
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search the family..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg backdrop-blur-sm bg-white/70 border-white/30 focus:bg-white/90 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Department Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsWithRealCounts.map((dept) => (
            <LeaderCard
              key={dept.id}
              leader={dept}
              onClick={() => navigate(`/department/${dept.id}`)}
            />
          ))}
        </div>
        
        {departmentsWithRealCounts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No family members found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Stats Footer with real data */}
      <div className="relative z-10 bg-white/80 backdrop-blur-lg border-t border-white/20 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">1</div>
              <div className="text-sm text-gray-600">Supreme Leader</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700">9</div>
              <div className="text-sm text-gray-600">Department Heads</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">
                {totalAgents?.toLocaleString() || '10,000+'}
              </div>
              <div className="text-sm text-gray-600">AI Agents</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:text-orange-700">24/7</div>
              <div className="text-sm text-gray-600">Operational</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
