
interface QuickStatsProps {
  animatedCount: number;
  currentAgentCount: number | null;
}

export const QuickStats = ({ animatedCount, currentAgentCount }: QuickStatsProps) => {
  return (
    <div className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700">
              9
            </div>
            <div className="text-sm text-gray-600">Family Members</div>
            <div className="text-xs text-gray-500">Each with unique expertise</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2 group-hover:text-green-700">
              {animatedCount || currentAgentCount || 729}
            </div>
            <div className="text-sm text-gray-600">AI Agents</div>
            <div className="text-xs text-gray-500">Specialized capabilities</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:text-purple-700">
              81
            </div>
            <div className="text-sm text-gray-600">Agents per Family</div>
            <div className="text-xs text-gray-500">Balanced distribution</div>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:text-orange-700">
              24/7
            </div>
            <div className="text-sm text-gray-600">Always Active</div>
            <div className="text-xs text-gray-500">Continuous collaboration</div>
          </div>
        </div>
      </div>
    </div>
  );
};
