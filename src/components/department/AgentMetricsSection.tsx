import React from 'react';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Code, Target, Zap } from 'lucide-react';

interface AgentMetricsSectionProps {
  familyAgentData: any;
}

export const AgentMetricsSection = ({ familyAgentData }: AgentMetricsSectionProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-3 mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-slate-800 text-sm">Agent Metrics</h4>
        <Badge variant="secondary" className="text-xs">
          {familyAgentData.agent_code}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* SFIA Level and Delivery Type */}
        <div className="flex items-center space-x-2">
          <Target className="h-3 w-3 text-blue-600" />
          <span className="text-slate-600">SFIA {familyAgentData.sfia_level}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Zap className="h-3 w-3 text-green-600" />
          <span className="text-slate-600">{familyAgentData.delivery_type}</span>
        </div>

        {/* Cost and Coverage */}
        {familyAgentData.final_cost && (
          <div className="flex items-center space-x-2">
            <DollarSign className="h-3 w-3 text-yellow-600" />
            <span className="text-slate-600">{formatCurrency(familyAgentData.final_cost)}</span>
          </div>
        )}
        {familyAgentData.task_coverage_pct && (
          <div className="flex items-center space-x-2">
            <Target className="h-3 w-3 text-purple-600" />
            <span className="text-slate-600">{familyAgentData.task_coverage_pct}% Coverage</span>
          </div>
        )}
      </div>

      {/* Tech Stack */}
      {familyAgentData.tech_stack && (
        <div className="mt-2">
          <div className="flex items-center space-x-2 mb-1">
            <Code className="h-3 w-3 text-gray-600" />
            <span className="font-medium text-slate-700 text-xs">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {familyAgentData.tech_stack.split(',').slice(0, 3).map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                {tech.trim()}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Domain */}
      {familyAgentData.domain && (
        <div className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
          <span className="font-medium">Domain:</span> {familyAgentData.domain}
        </div>
      )}
    </div>
  );
};