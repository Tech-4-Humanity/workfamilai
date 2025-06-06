
interface DepartmentStatsProps {
  divisionsCount: number;
  totalAgents: number;
  leaderPersonality: string;
}

export const DepartmentStats = ({ 
  divisionsCount, 
  totalAgents, 
  leaderPersonality 
}: DepartmentStatsProps) => {
  return (
    <div className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
              {divisionsCount}
            </div>
            <div className="text-sm text-gray-600">Agent Divisions</div>
            <div className="text-xs text-gray-500">Specialized Units</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700">
              {totalAgents}
            </div>
            <div className="text-sm text-gray-600">AI Agents</div>
            <div className="text-xs text-gray-500">Neural Network Nodes</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">
              24/7
            </div>
            <div className="text-sm text-gray-600">Always Active</div>
            <div className="text-xs text-gray-500">Family Coordination</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3">
            <span className="text-sm font-medium text-gray-700">Family Role:</span>
            <span className="text-sm text-blue-600">{leaderPersonality}</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-green-600">Neural Integration</span>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-purple-600">Complementary Dynamics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
