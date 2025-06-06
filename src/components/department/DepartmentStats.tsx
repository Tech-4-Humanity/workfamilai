
interface DepartmentStatsProps {
  teamCount: number;
  totalAgents: number;
}

export const DepartmentStats = ({ teamCount, totalAgents }: DepartmentStatsProps) => {
  return (
    <div className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">{teamCount}</div>
            <div className="text-sm text-gray-600">Agent Teams</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">{totalAgents}</div>
            <div className="text-sm text-gray-600">Specialized AI Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Always Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};
