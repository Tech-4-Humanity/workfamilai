
import { Button } from '@/components/ui/button';
import { getLeaderImageUrl } from '@/utils/supabase-images';

interface LeaderProfilePreviewProps {
  leader: {
    name: string;
    title: string;
    enneagramType: string;
    personality: string;
    motto: string;
    background: string;
  };
  divisionsCount: number;
  totalAgents: number;
  onViewProfile: () => void;
}

export const LeaderProfilePreview = ({ 
  leader, 
  divisionsCount, 
  totalAgents, 
  onViewProfile 
}: LeaderProfilePreviewProps) => {
  return (
    <div className="text-center mb-8">
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl border-2 border-gray-200 shadow-lg">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img 
              src={getLeaderImageUrl(leader.name)}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900">{leader.name}</h1>
            <p className="text-xl text-gray-600">{leader.title}</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {leader.enneagramType}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
            {leader.personality}
          </span>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-lg italic text-blue-800 font-medium">"{leader.motto}"</p>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          {leader.background}
        </p>
        
        <div className="flex justify-center space-x-6 text-sm text-gray-600 mb-4">
          <span className="flex items-center">
            👥 {divisionsCount} Divisions
          </span>
          <span className="flex items-center">
            🤖 {totalAgents} AI Agents
          </span>
        </div>

        <Button
          onClick={onViewProfile}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          View Complete Family Profile
        </Button>
      </div>
    </div>
  );
};
