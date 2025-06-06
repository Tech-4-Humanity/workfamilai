
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EnhancedLeaderProfile } from '@/components/family/EnhancedLeaderProfile';
import { familyMemberDetails } from '@/data/familyMembers';
import { getLeaderImageUrl } from '@/utils/supabase-images';

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  const [showEnhancedProfile, setShowEnhancedProfile] = useState(false);
  
  // Get enhanced family data
  const enhancedData = familyMemberDetails[departmentId as keyof typeof familyMemberDetails];
  
  if (!enhancedData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Family Member Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Family Home
          </button>
        </div>
      </div>
    );
  }

  // Show enhanced family experience
  if (showEnhancedProfile) {
    return (
      <EnhancedLeaderProfile
        leader={enhancedData.leader}
        divisions={enhancedData.divisions}
        onBack={() => setShowEnhancedProfile(false)}
      />
    );
  }

  const totalAgents = enhancedData.divisions.reduce((sum, division) => sum + division.agents.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Header with Family Context */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button 
            onClick={() => navigate('/')}
            className="mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>←</span>
            <span>Back to Family Home</span>
          </button>
          
          {/* Enhanced Leader Profile Preview */}
          <div className="text-center mb-8">
            <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-gray-200 shadow-lg">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img 
                    src={getLeaderImageUrl(enhancedData.leader.name)}
                    alt={enhancedData.leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h1 className="text-3xl font-bold text-gray-900">{enhancedData.leader.name}</h1>
                  <p className="text-xl text-gray-600">{enhancedData.leader.title}</p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {enhancedData.leader.enneagramType}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {enhancedData.leader.personality}
                </span>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-lg italic text-blue-800 font-medium">"{enhancedData.leader.motto}"</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {enhancedData.leader.background}
              </p>
              
              <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  👥 {enhancedData.divisions.length} Divisions
                </span>
                <span className="flex items-center">
                  🤖 {totalAgents} AI Agents
                </span>
              </div>

              <button
                onClick={() => setShowEnhancedProfile(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                View Complete Family Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divisions Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Agent Divisions
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {enhancedData.divisions.map((division, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {division.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {division.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {division.agents.length} Specialists
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {division.agents.map((agent, agentIndex) => (
                    <div 
                      key={agentIndex}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                      <div>
                        <span className="text-sm font-medium text-gray-900">
                          {agent.name}
                        </span>
                        {agent.specialization && (
                          <p className="text-xs text-gray-600">{agent.specialization}</p>
                        )}
                        {agent.achievement && (
                          <p className="text-xs text-blue-600 italic mt-1">{agent.achievement}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Stats Footer */}
      <div className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
                {enhancedData.divisions.length}
              </div>
              <div className="text-sm text-gray-600">Agent Divisions</div>
              <div className="text-xs text-gray-500">Specialized Units</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700">{totalAgents}</div>
              <div className="text-sm text-gray-600">AI Agents</div>
              <div className="text-xs text-gray-500">Neural Network Nodes</div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">24/7</div>
              <div className="text-sm text-gray-600">Always Active</div>
              <div className="text-xs text-gray-500">Family Coordination</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3">
              <span className="text-sm font-medium text-gray-700">Family Role:</span>
              <span className="text-sm text-blue-600">{enhancedData.leader.personality}</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-green-600">Neural Integration</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-purple-600">Complementary Dynamics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
