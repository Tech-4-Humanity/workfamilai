
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChatModal } from '@/components/chat/ChatModal';
import { AgentLanguageSection } from './AgentLanguageSection';
import { AgentDetailsSection } from './AgentDetailsSection';
import { AgentMetricsSection } from './AgentMetricsSection';
import { Agent } from '@/types/family';
import { getAgentImageUrl } from '@/utils/agent-images';

interface AgentCardProps {
  agent: Agent;
  agentLanguages: string[];
  primaryLanguage: string;
  familyAgentData?: any;
}

export const AgentCard = ({ agent, agentLanguages, primaryLanguage, familyAgentData }: AgentCardProps) => {
  // Improved sentence structure for agent descriptions
  const improveAgentDescription = (background: string): string => {
    return background
      .replace(/\s+/g, ' ') // Remove extra spaces
      .replace(/\.\s*([a-z])/g, '. $1') // Ensure proper spacing after periods
      .replace(/([a-z])\s*\./g, '$1.') // Remove spaces before periods
      .replace(/^([a-z])/, (match) => match.toUpperCase()) // Capitalize first letter
      .replace(/\s+([.!?])/g, '$1') // Remove spaces before punctuation
      .trim();
  };

  const improvedBackground = improveAgentDescription(agent.background);
  const agentImageUrl = getAgentImageUrl(agent.name, agent.specialization);

  return (
    <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-5 flex-1 flex flex-col">
        {/* Agent Name - Most Prominent */}
        <h4 className="font-bold text-gray-900 text-xl mb-3 leading-tight">
          {agent.name}
        </h4>
        
        {/* Enhanced Language Indicators - More Prominent */}
        <AgentLanguageSection 
          languages={agentLanguages}
          primaryLanguage={primaryLanguage}
        />
        
        {/* Specialization Badge */}
        <div className="mb-3">
          <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
            {agent.specialization}
          </Badge>
        </div>
        
        {/* Improved Background Description */}
        <div className="flex-1 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {improvedBackground}
          </p>
        </div>
        
        {/* Achievement, Method, and Cultural Expertise */}
        <AgentDetailsSection 
          achievement={agent.achievement}
          signatureMethod={agent.signature_method}
          culturalExpertise={agent.cultural_expertise}
        />

        {/* Family Agent Metrics (if available) */}
        {familyAgentData && (
          <AgentMetricsSection familyAgentData={familyAgentData} />
        )}

        {/* Chat Button */}
        <div className="mt-auto">
          <ChatModal
            agentName={agent.name}
            agentPersonality={agent.specialization}
            agentBackground={`${improvedBackground} I specialize in ${agent.specialization} and my signature method is ${agent.signature_method}. My greatest achievement is ${agent.achievement}. I can communicate fluently in: ${agentLanguages.join(', ')}.`}
            agentColor="indigo"
            agentImageUrl={agentImageUrl}
            agentLanguages={agentLanguages}
            primaryLanguage={primaryLanguage}
            buttonText={`Chat with ${agent.name.split(' ')[0]}`}
            buttonVariant="outline"
            buttonSize="sm"
            triggerClassName="w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};
