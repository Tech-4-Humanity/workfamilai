
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { LeaderProfile } from '@/components/department/LeaderProfile';
import { TeamCard } from '@/components/department/TeamCard';
import { DepartmentStats } from '@/components/department/DepartmentStats';
import { departmentData, getNamedAgents } from '@/data/departmentData';

const DepartmentDetail = () => {
  const { departmentId } = useParams();
  const navigate = useNavigate();
  
  const department = departmentData[departmentId as keyof typeof departmentData];
  
  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Department Not Found</h1>
          <Button onClick={() => navigate('/')}>Return to Org Chart</Button>
        </div>
      </div>
    );
  }

  const totalAgents = department.teams.reduce((sum, team) => sum + team.agents.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Org Chart
          </Button>
          
          <LeaderProfile 
            leader={department.leader}
            totalAgents={totalAgents}
            teamCount={department.teams.length}
          />
        </div>
      </div>

      {/* Teams Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Agent Teams</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {department.teams.map((team, index) => (
            <TeamCard
              key={index}
              team={team}
              teamIndex={index}
              departmentId={departmentId as string}
              getNamedAgents={getNamedAgents}
            />
          ))}
        </div>
      </div>

      <DepartmentStats 
        teamCount={department.teams.length}
        totalAgents={totalAgents}
      />
    </div>
  );
};

export default DepartmentDetail;
