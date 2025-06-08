
import { useState, useCallback } from 'react';
import { OrganizationalInvolvement, QueryResult } from '@/types/organizational';
import { organizationalData, taskMapping } from '@/data/organizationalData';

export const useVoiceQuery = () => {
  const [isListening, setIsListening] = useState(false);
  const [lastQuery, setLastQuery] = useState<string>('');
  const [lastResult, setLastResult] = useState<QueryResult | null>(null);

  const processQuery = useCallback((query: string): QueryResult => {
    const lowerQuery = query.toLowerCase();
    setLastQuery(query);

    // Extract task from query
    const task = extractTask(lowerQuery);
    if (!task) {
      return {
        agents: [],
        totalCost: 0,
        riskLevel: 'Unknown',
        insights: ['Task not recognized. Try queries like "list agents for cloud migration" or "show costs for survey design"']
      };
    }

    // Filter agents with involvement in the task
    const relevantAgents = organizationalData.filter(agent => {
      const involvement = agent[task] as number;
      return involvement > 0;
    });

    if (relevantAgents.length === 0) {
      return {
        agents: [],
        totalCost: 0,
        riskLevel: 'Unknown',
        insights: [`No agents found with involvement in ${task.replace(/_/g, ' ')}`]
      };
    }

    const totalCost = relevantAgents.reduce((sum, agent) => sum + agent.cost, 0);
    const riskLevels = relevantAgents.map(agent => agent.risk_level);
    const highestRisk = riskLevels.includes('High') ? 'High' : riskLevels.includes('Medium') ? 'Medium' : 'Low';

    const insights = generateInsights(relevantAgents, task, lowerQuery);

    const result: QueryResult = {
      agents: relevantAgents,
      totalCost,
      riskLevel: highestRisk,
      insights
    };

    setLastResult(result);
    return result;
  }, []);

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      return Promise.reject(new Error('Speech recognition not supported'));
    }

    return new Promise<string>((resolve, reject) => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resolve(transcript);
      };

      recognition.onerror = (event) => {
        reject(new Error(`Speech recognition error: ${event.error}`));
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    });
  }, []);

  const extractTask = (query: string): keyof OrganizationalInvolvement | null => {
    for (const [taskName, taskKey] of Object.entries(taskMapping)) {
      if (query.includes(taskName)) {
        return taskKey;
      }
    }
    return null;
  };

  const generateInsights = (agents: OrganizationalInvolvement[], task: keyof OrganizationalInvolvement, query: string): string[] => {
    const insights: string[] = [];

    // Basic agent count
    insights.push(`Found ${agents.length} agent${agents.length === 1 ? '' : 's'} for ${task.replace(/_/g, ' ')}`);

    // Cost analysis
    if (query.includes('cost')) {
      const totalCost = agents.reduce((sum, agent) => sum + agent.cost, 0);
      const avgCost = totalCost / agents.length;
      insights.push(`Total cost: $${totalCost.toLocaleString()}`);
      insights.push(`Average cost per agent: $${Math.round(avgCost).toLocaleString()}`);
    }

    // Risk analysis
    if (query.includes('risk')) {
      const riskCounts = agents.reduce((acc, agent) => {
        acc[agent.risk_level] = (acc[agent.risk_level] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      Object.entries(riskCounts).forEach(([level, count]) => {
        insights.push(`${count} agent${count === 1 ? '' : 's'} with ${level} risk level`);
      });
    }

    // Availability insights
    const avgAvailability = agents.reduce((sum, agent) => sum + agent.fte_availability, 0) / agents.length;
    insights.push(`Average availability: ${Math.round(avgAvailability * 100)}%`);

    return insights;
  };

  const speakResult = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  return {
    isListening,
    lastQuery,
    lastResult,
    processQuery,
    startListening,
    speakResult
  };
};
