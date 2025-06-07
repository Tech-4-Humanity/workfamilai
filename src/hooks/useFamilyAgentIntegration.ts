
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { familyMemberDetails } from '@/data/familyMembers';

interface FamilyAgent {
  agent_code: string;
  persona: string;
  function: string;
  domain: string;
  sfia_level: string;
  core_skills: string;
  summary_bio: string;
  final_cost: string;
  consultant_hourly_rate: string;
  tech_stack: string;
  delivery_type: string;
  task_coverage_pct: number;
  specialization: string;
  achievement: string;
  background: string;
  signature_method: string;
  cultural_expertise: string;
  division_name: string;
}

export const useFamilyAgentIntegration = () => {
  const queryClient = useQueryClient();

  // Generate all 729 agents from family data
  const generateAllFamilyAgents = (): FamilyAgent[] => {
    const agents: FamilyAgent[] = [];
    let agentCounter = 10009; // Starting after the sample we tried to insert

    Object.entries(familyMemberDetails).forEach(([departmentId, familyMember]) => {
      const departmentName = getDepartmentName(departmentId);
      
      familyMember.divisions.forEach((division) => {
        division.agents.forEach((agent) => {
          const agentCode = `A${agentCounter.toString().padStart(5, '0')}`;
          
          agents.push({
            agent_code: agentCode,
            persona: agent.name,
            function: agent.specialization,
            domain: departmentName,
            sfia_level: determineSFIALevel(agent.specialization),
            core_skills: `${agent.signature_method}, ${agent.cultural_expertise}`,
            summary_bio: `${agent.background} ${agent.achievement}`,
            final_cost: estimateCost(agent.specialization).toString(),
            consultant_hourly_rate: estimateHourlyRate(agent.specialization).toString(),
            tech_stack: determineTechStack(agent.specialization, departmentName),
            delivery_type: determineDeliveryType(agent.specialization),
            task_coverage_pct: estimateTaskCoverage(agent.specialization),
            specialization: agent.specialization,
            achievement: agent.achievement,
            background: agent.background,
            signature_method: agent.signature_method,
            cultural_expertise: agent.cultural_expertise,
            division_name: division.name
          });
          
          agentCounter++;
        });
      });
    });

    return agents;
  };

  // Helper functions
  const getDepartmentName = (departmentId: string): string => {
    const departmentMap: Record<string, string> = {
      'product-development': 'Product Development',
      'governance-compliance': 'Governance & Compliance',
      'external-relations': 'External Relations',
      'marketing': 'Marketing',
      'human-resources': 'Human Resources',
      'finance-operations': 'Finance & Operations',
      'customer-support': 'Customer Support',
      'innovation-rd': 'Innovation & R&D',
      'sales': 'Sales'
    };
    return departmentMap[departmentId] || 'Unknown';
  };

  const determineSFIALevel = (specialization: string): string => {
    const seniorTerms = ['Lead', 'Senior', 'Chief', 'Director', 'Manager', 'Head'];
    const expertTerms = ['Expert', 'Specialist', 'Architect', 'Principal'];
    const midTerms = ['Analyst', 'Coordinator', 'Associate'];
    
    if (seniorTerms.some(term => specialization.includes(term))) return '6';
    if (expertTerms.some(term => specialization.includes(term))) return '5';
    if (midTerms.some(term => specialization.includes(term))) return '4';
    return '4'; // Default
  };

  const estimateCost = (specialization: string): number => {
    const level = determineSFIALevel(specialization);
    const baseCosts: Record<string, number> = {
      '4': 85000,
      '5': 140000,
      '6': 180000,
      '7': 220000
    };
    return baseCosts[level] || 85000;
  };

  const estimateHourlyRate = (specialization: string): number => {
    const level = determineSFIALevel(specialization);
    const baseRates: Record<string, number> = {
      '4': 125,
      '5': 190,
      '6': 250,
      '7': 300
    };
    return baseRates[level] || 125;
  };

  const determineTechStack = (specialization: string, domain: string): string => {
    const techStackMap: Record<string, string> = {
      'Product Development': 'Python, React, Node.js, AWS',
      'Governance & Compliance': 'Compliance Software, Legal Databases, Audit Tools',
      'External Relations': 'CRM, Communication Platforms, Analytics',
      'Marketing': 'Analytics Tools, Social Media Platforms, SEO Tools',
      'Human Resources': 'HRIS, Assessment Tools, Learning Platforms',
      'Finance & Operations': 'Financial Software, ERP, Analytics Platforms',
      'Customer Support': 'CRM, Support Platforms, Analytics Tools',
      'Innovation & R&D': 'Research Tools, Statistical Software, Prototyping',
      'Sales': 'CRM, Sales Tools, Analytics Platforms'
    };
    
    return techStackMap[domain] || 'Standard Business Tools';
  };

  const determineDeliveryType = (specialization: string): string => {
    const automatedTerms = ['Bot', 'AI', 'Automated', 'Algorithm', 'System'];
    const augmentedTerms = ['Analyst', 'Specialist', 'Coordinator'];
    
    if (automatedTerms.some(term => specialization.includes(term))) return 'Automated';
    if (augmentedTerms.some(term => specialization.includes(term))) return 'Augmented';
    return 'Human';
  };

  const estimateTaskCoverage = (specialization: string): number => {
    const deliveryType = determineDeliveryType(specialization);
    const coverageMap: Record<string, number> = {
      'Automated': 92,
      'Augmented': 87,
      'Human': 85
    };
    return coverageMap[deliveryType] || 85;
  };

  // Query to get current agent count
  const { data: currentAgentCount } = useQuery({
    queryKey: ['current-agent-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('10,000 agents')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      return count || 0;
    }
  });

  // Query to check if family agents are already integrated
  const { data: familyAgents, isLoading } = useQuery({
    queryKey: ['family-agents-integration'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('10,000 agents')
        .select('agent_code, persona, function, domain')
        .eq('input_source', 'family_integration_2024');
      
      if (error) throw error;
      return data || [];
    }
  });

  // Mutation to insert family agents in batches
  const insertFamilyAgents = useMutation({
    mutationFn: async (agents: FamilyAgent[]) => {
      // Insert in batches of 50 to avoid timeouts
      const batchSize = 50;
      const batches = [];
      
      for (let i = 0; i < agents.length; i += batchSize) {
        batches.push(agents.slice(i, i + batchSize));
      }

      let totalInserted = 0;
      
      for (const batch of batches) {
        const { data, error } = await supabase
          .from('10,000 agents')
          .insert(batch.map(agent => ({
            agent_code: agent.agent_code,
            persona: agent.persona,
            function: agent.function,
            domain: agent.domain,
            sfia_level: agent.sfia_level,
            core_skills: agent.core_skills,
            summary_bio: agent.summary_bio,
            final_cost: agent.final_cost,
            consultant_hourly_rate: agent.consultant_hourly_rate,
            tech_stack: agent.tech_stack,
            delivery_type: agent.delivery_type,
            task_coverage_pct: agent.task_coverage_pct,
            input_source: 'family_integration_2024'
          })));
        
        if (error) {
          console.error('Batch insert error:', error);
          throw error;
        }
        
        totalInserted += batch.length;
        console.log(`Inserted batch: ${totalInserted}/${agents.length} agents`);
        
        // Small delay between batches
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      return { totalInserted, totalAgents: agents.length };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['family-agents-integration'] });
      queryClient.invalidateQueries({ queryKey: ['current-agent-count'] });
      queryClient.invalidateQueries({ queryKey: ['agent-function-counts'] });
      queryClient.invalidateQueries({ queryKey: ['agent-domain-counts'] });
    }
  });

  // Get all family agents for integration
  const allFamilyAgents = generateAllFamilyAgents();

  return {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    insertFamilyAgents,
    isIntegrating: insertFamilyAgents.isPending,
    integrationError: insertFamilyAgents.error,
    integrationSuccess: insertFamilyAgents.isSuccess
  };
};
