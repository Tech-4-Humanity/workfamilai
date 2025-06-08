import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useFamilyAgentIntegration } from '@/hooks/useFamilyAgentIntegration';
import { useAgentCounts } from '@/hooks/useAgentCounts';
import { Button } from '@/components/ui/button';
import { Shield, Building, BarChart3, Mic } from 'lucide-react';
import { FamilyNeuralNetwork } from '@/components/family/FamilyNeuralNetwork';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast()
  const {
    familyAgents,
    isLoading,
    currentAgentCount,
    allFamilyAgents,
    insertFamilyAgents,
    isIntegrating,
    integrationError,
    integrationSuccess
  } = useFamilyAgentIntegration();

  const {
    agentFunctionCounts,
    agentDomainCounts,
    isLoading: areAgentCountsLoading
  } = useAgentCounts();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (integrationSuccess) {
      toast({
        title: "Integration Successful",
        description: "Family agents have been successfully integrated.",
      })
    }
  }, [integrationSuccess, toast]);

  useEffect(() => {
    if (integrationError) {
      toast({
        variant: "destructive",
        title: "Integration Error",
        description: "There was an error integrating family agents.",
      })
    }
  }, [integrationError, toast]);

  useEffect(() => {
    if (isIntegrating) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.min(100, prevProgress + 10);
          return newProgress;
        });
      }, 500);

      return () => clearInterval(interval);
    } else {
      setProgress(integrationSuccess ? 100 : 0);
    }
  }, [isIntegrating, integrationSuccess]);

  const handleIntegrateFamily = async () => {
    if (allFamilyAgents && allFamilyAgents.length > 0) {
      insertFamilyAgents.mutate(allFamilyAgents);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Neural Ennead Family
          </h1>
          <p className="text-lg text-gray-600">
            Voice-activated insights and collaborative intelligence network
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => navigate('/admin')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Shield className="h-4 w-4" />
              <span>Admin Dashboard</span>
            </Button>
            <Button
              onClick={() => navigate('/holo-org')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Building className="h-4 w-4" />
              <span>Holo-Org Dashboard</span>
            </Button>
            <Button
              onClick={() => navigate('/organizational-intelligence')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Mic className="h-4 w-4" />
              <span>Voice Intelligence</span>
            </Button>
            <Button
              onClick={() => navigate('/scenarios')}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Business Scenarios</span>
            </Button>
          </div>
        </div>

        {/* Family Neural Network */}
        <FamilyNeuralNetwork />
      </div>
    </div>
  );
};

export default Index;
