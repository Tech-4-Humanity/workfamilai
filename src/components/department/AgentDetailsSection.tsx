
import React from 'react';
import { Award, Star } from 'lucide-react';

interface AgentDetailsSectionProps {
  achievement: string;
  signatureMethod: string;
  culturalExpertise: string;
}

export const AgentDetailsSection = ({ achievement, signatureMethod, culturalExpertise }: AgentDetailsSectionProps) => {
  return (
    <>
      {/* Achievement and Method with Better Spacing */}
      <div className="space-y-3 mb-4">
        <div className="flex items-start text-sm bg-green-50 p-3 rounded-lg border border-green-100">
          <Award className="h-4 w-4 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-green-800 block mb-1">Key Achievement</span>
            <span className="text-gray-700 leading-relaxed">{achievement}</span>
          </div>
        </div>
        
        <div className="flex items-start text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-100">
          <Star className="h-4 w-4 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-medium text-yellow-800 block mb-1">Signature Method</span>
            <span className="text-gray-700 leading-relaxed">{signatureMethod}</span>
          </div>
        </div>
      </div>
      
      {/* Cultural Expertise with Better Formatting */}
      <div className="text-xs mb-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
        <span className="font-semibold text-purple-800 block mb-1">Cultural Expertise:</span>
        <span className="text-gray-700 leading-relaxed">{culturalExpertise}</span>
      </div>
    </>
  );
};
