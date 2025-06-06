
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { familyMemberDetails } from '@/data/familyMembers';
import { DepartmentStats } from '@/components/department/DepartmentStats';
import { DivisionsGrid } from '@/components/department/DivisionsGrid';
import { LeaderProfilePreview } from '@/components/department/LeaderProfilePreview';
import { EnhancedLeaderProfile } from '@/components/family/EnhancedLeaderProfile';
import { FamilyMember } from '@/types/family';

const DepartmentDetail = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  const [showEnhancedProfile, setShowEnhancedProfile] = useState<boolean>(false);

  // Get the family member details for this department
  const enhancedData = departmentId ? familyMemberDetails[departmentId as keyof typeof familyMemberDetails] : null;

  if (!enhancedData || !departmentId) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Family Member Not Found</h1>
        <p className="mb-8">The family member you are looking for does not exist in our database.</p>
        <Button onClick={() => navigate('/')}>Return Home</Button>
      </div>
    );
  }

  // Show enhanced family experience
  if (showEnhancedProfile) {
    // Transform the leader data to match the expected structure
    const transformedLeader = {
      id: departmentId || '',
      name: enhancedData.leader.name,
      title: enhancedData.leader.title,
      personality: enhancedData.leader.personality,
      enneagramType: enhancedData.leader.enneagramType,
      motto: enhancedData.leader.motto,
      background: enhancedData.leader.background,
      domainOverview: '', // This field exists in the expected type but not in our data
      color: 'blue', // Default color
      agentCount: enhancedData.divisions.reduce((sum, division) => sum + division.agents.length, 0)
    };

    return (
      <EnhancedLeaderProfile
        leader={transformedLeader}
        divisions={enhancedData.divisions}
        onBack={() => setShowEnhancedProfile(false)}
      />
    );
  }

  // Show department detail view
  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/')} 
        className="mb-8 flex items-center"
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to All Departments
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <LeaderProfilePreview 
            leader={enhancedData.leader}
            departmentId={departmentId}
            onViewEnhancedProfile={() => setShowEnhancedProfile(true)}
          />
        </div>
        
        <div className="lg:col-span-2">
          <DepartmentStats 
            agentCount={enhancedData.divisions.reduce((sum, division) => sum + division.agents.length, 0)}
            divisionCount={enhancedData.divisions.length}
          />
          
          <DivisionsGrid 
            divisions={enhancedData.divisions}
            departmentId={departmentId}
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
