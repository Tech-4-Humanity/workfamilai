
interface Division {
  name: string;
  description: string;
  agents: Array<{
    name: string;
    specialization?: string;
    achievement?: string;
  }>;
}

interface DivisionsGridProps {
  divisions: Division[];
}

export const DivisionsGrid = ({ divisions }: DivisionsGridProps) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Agent Divisions
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {divisions.map((division, index) => (
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
  );
};
