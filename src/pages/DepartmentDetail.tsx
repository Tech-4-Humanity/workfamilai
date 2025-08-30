
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { familyMemberDetails } from '@/data/familyMembers';
import { DepartmentStats } from '@/components/department/DepartmentStats';
import { DivisionsGrid } from '@/components/department/DivisionsGrid';
import { LeaderProfilePreview } from '@/components/department/LeaderProfilePreview';
import { EnhancedLeaderProfile } from '@/components/family/EnhancedLeaderProfile';
import { Footer } from '@/components/ui/footer';
import { useFamilyAgentQueries } from '@/hooks/useFamilyAgentQueries';

const DepartmentDetail = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [showEnhancedProfile, setShowEnhancedProfile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getAgentsByFamilyMember } = useFamilyAgentQueries();

  // Memoize family member data for performance
  const familyMemberData = useMemo(() => {
    return departmentId ? familyMemberDetails.find(member => member.id === departmentId) : null;
  }, [departmentId]);

  // Get agents for this family member from the database (optional integration)
  const { data: databaseAgents = [] } = departmentId ? getAgentsByFamilyMember(departmentId) : { data: [] };

  // Error boundary for missing family member
  if (!familyMemberData || !departmentId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('department.notFound')}</h1>
          <p className="text-gray-600 mb-8">{t('department.notFoundMessage')}</p>
          <Button 
            onClick={() => navigate('/')}
            className="px-6 py-3"
          >
            {t('family.backToFamily')}
          </Button>
        </div>
      </div>
    );
  }

  // Handle enhanced profile view with loading state
  const handleViewProfile = async () => {
    setIsLoading(true);
    // Simulate brief loading for enhanced experience
    setTimeout(() => {
      setShowEnhancedProfile(true);
      setIsLoading(false);
    }, 300);
  };

  // Show enhanced family experience
  if (showEnhancedProfile) {
    // Transform the leader data to match the expected structure
    const transformedLeader = {
      id: departmentId || '',
      name: familyMemberData.leader.name,
      title: familyMemberData.leader.title,
      personality: familyMemberData.leader.personality,
      enneagramType: familyMemberData.leader.enneagramType,
      motto: familyMemberData.leader.motto,
      background: familyMemberData.leader.background,
      domainOverview: '',
      color: 'blue',
      agentCount: 81 // Each department leader manages 81 agents (9 divisions × 9 agents)
    };

    return (
      <EnhancedLeaderProfile
        leader={transformedLeader}
        divisions={familyMemberData.divisions}
        onBack={() => setShowEnhancedProfile(false)}
      />
    );
  }

  // Each department leader manages 81 agents (9 divisions × 9 agents each)
  const totalAgents = 81;

  // Show department detail view with optimized performance
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <div className="container max-w-7xl mx-auto py-8 px-4 flex-grow">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 flex items-center hover:bg-blue-50 transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          {t('family.backToFamily')}
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <LeaderProfilePreview 
              leader={familyMemberData.leader}
              divisionsCount={familyMemberData.divisions.length}
              totalAgents={totalAgents}
              onViewProfile={handleViewProfile}
            />
          </div>
          
          <div className="lg:col-span-2">
            <DepartmentStats 
              divisionsCount={familyMemberData.divisions.length}
              totalAgents={totalAgents}
              leaderPersonality={familyMemberData.leader.personality}
            />
            
            <DivisionsGrid 
              divisions={familyMemberData.divisions}
              familyMemberId={departmentId}
            />
          </div>
        </div>
        
        {databaseAgents.length > 0 && (
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold mb-2 text-blue-900">🔗 {t('department.databaseIntegration')}</h3>
            <p className="text-sm text-blue-700">
              {t('department.databaseMessage', { count: databaseAgents.length })}
            </p>
          </div>
        )}
      </div>
      
      {/* Loading overlay for enhanced profile */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
            <span className="text-gray-700">{t('department.loadingProfile')}</span>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default DepartmentDetail;
