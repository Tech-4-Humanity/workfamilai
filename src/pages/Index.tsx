
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, ChevronRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const departmentHeads = [
  {
    id: 'product-development',
    name: 'Dr. Amara Chen',
    title: 'Product Development',
    personality: 'The Perfectionist',
    enneagramType: 'Type 1',
    description: 'The perfectionist who never misses a detail and transforms product ideas into flawless realities.',
    color: 'bg-blue-500',
    agentCount: 81,
    avatar: '👩‍🔬'
  },
  {
    id: 'marketing',
    name: 'Miguel Santos',
    title: 'Marketing',
    personality: 'The Helper',
    enneagramType: 'Type 2',
    description: 'The empathetic helper who intuitively understands customer needs before they can articulate them.',
    color: 'bg-green-500',
    agentCount: 81,
    avatar: '👨‍💼'
  },
  {
    id: 'human-resources',
    name: 'Priya Sharma',
    title: 'Human Resources',
    personality: 'The Achiever',
    enneagramType: 'Type 3',
    description: 'The achievement-oriented talent developer who turns HR from cost center into strategic powerhouse.',
    color: 'bg-purple-500',
    agentCount: 81,
    avatar: '👩‍💼'
  },
  {
    id: 'finance-operations',
    name: 'Theo Williams',
    title: 'Finance & Operations',
    personality: 'The Individualist',
    enneagramType: 'Type 4',
    description: 'The creative individualist who sees patterns others miss and finds hidden revenue streams.',
    color: 'bg-orange-500',
    agentCount: 81,
    avatar: '👨‍💻'
  },
  {
    id: 'customer-support',
    name: 'Dr. Yuna Kim',
    title: 'Customer Support',
    personality: 'The Investigator',
    enneagramType: 'Type 5',
    description: 'The investigative problem-solver who transforms support from reactive firefighting to proactive prevention.',
    color: 'bg-teal-500',
    agentCount: 81,
    avatar: '👩‍⚕️'
  },
  {
    id: 'innovation-rd',
    name: 'David Okafor',
    title: 'Innovation & R&D',
    personality: 'The Loyalist',
    enneagramType: 'Type 6',
    description: 'The loyal but questioning innovation leader who balances breakthrough thinking with practical implementation.',
    color: 'bg-indigo-500',
    agentCount: 81,
    avatar: '👨‍🔬'
  },
  {
    id: 'sales',
    name: 'Sofia Rodriguez',
    title: 'Sales',
    personality: 'The Enthusiast',
    enneagramType: 'Type 7',
    description: 'The enthusiastic opportunity finder who turns every conversation into a journey of possibilities.',
    color: 'bg-red-500',
    agentCount: 81,
    avatar: '👩‍💼'
  },
  {
    id: 'governance-compliance',
    name: 'Marcus Bennett',
    title: 'Governance & Compliance',
    personality: 'The Challenger',
    enneagramType: 'Type 8',
    description: 'The challenging but principled guardian who transforms compliance from restriction into competitive advantage.',
    color: 'bg-gray-700',
    agentCount: 81,
    avatar: '👨‍⚖️'
  },
  {
    id: 'external-relations',
    name: 'Aisha Al-Farsi',
    title: 'External Relations',
    personality: 'The Peacemaker',
    enneagramType: 'Type 9',
    description: 'The diplomatic consensus-builder who transforms conflicts into productive partnerships.',
    color: 'bg-pink-500',
    agentCount: 81,
    avatar: '👩‍🎓'
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredDepartments = departmentHeads.filter(dept =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.personality.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalAgents = departmentHeads.reduce((sum, dept) => sum + dept.agentCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏛️</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Holo-Org Command Center</h1>
            <p className="text-xl text-gray-600 mb-6">The AI Agent Family Organizational Chart</p>
            
            {/* Leader Card */}
            <Card className="max-w-md mx-auto mb-8 border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <CardTitle className="text-2xl text-gray-900">Supreme Leader</CardTitle>
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl mb-3">👑</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Trojan Oz</h2>
                <p className="text-lg text-gray-700 mb-4">Chief Executive Officer</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    9 Departments
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {totalAgents} AI Agents
                  </span>
                </div>
              </CardContent>
            </Card>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search departments or leaders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Department Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDepartments.map((dept, index) => (
            <Card 
              key={dept.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              onClick={() => navigate(`/department/${dept.id}`)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-12 h-12 ${dept.color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}>
                        {dept.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {dept.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{dept.title}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {dept.enneagramType}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {dept.personality}
                      </Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {dept.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{dept.agentCount} AI Agents</span>
                  </div>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-50 group-hover:border-blue-200">
                    View Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No departments found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-sm text-gray-600">Supreme Leader</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">9</div>
              <div className="text-sm text-gray-600">Department Heads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{totalAgents}</div>
              <div className="text-sm text-gray-600">AI Agents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Operational</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
