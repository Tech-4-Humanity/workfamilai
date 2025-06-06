
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EnhancedLeaderProfile } from '@/components/family/EnhancedLeaderProfile';
import { LeaderProfilePreview } from '@/components/department/LeaderProfilePreview';
import { DivisionsGrid } from '@/components/department/DivisionsGrid';
import { DepartmentStats } from '@/components/department/DepartmentStats';
import { familyMemberDetails } from '@/data/familyMembers';

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
          
          <LeaderProfilePreview
            leader={enhancedData.leader}
            divisionsCount={enhancedData.divisions.length}
            totalAgents={totalAgents}
            onViewProfile={() => setShowEnhancedProfile(true)}
          />
        </div>
      </div>

      <DivisionsGrid divisions={enhancedData.divisions} />

      <DepartmentStats
        divisionsCount={enhancedData.divisions.length}
        totalAgents={totalAgents}
        leaderPersonality={enhancedData.leader.personality}
      />
    </div>
  );
};

export default DepartmentDetail;
