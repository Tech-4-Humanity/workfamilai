import React from 'react';
import { Button } from '@/components/ui/button';
import { Brain, Users, Zap, Target } from 'lucide-react';

interface AugmentedHumanityHeroProps {
  onExploreCapabilities: () => void;
  onViewWorkPackages: () => void;
}

export const AugmentedHumanityHero = ({ 
  onExploreCapabilities, 
  onViewWorkPackages 
}: AugmentedHumanityHeroProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Augmented Humanity Coach
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Amplify Human Potential
            <span className="block text-primary">Through AI Partnership</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your organization through collaborative intelligence. Our proven work packages 
            enhance human capabilities while preserving authentic leadership and cultural wisdom.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
              <Target className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium text-foreground">Human-Centered</span>
              <span className="text-xs text-muted-foreground">AI Enhancement</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
              <Users className="h-8 w-8 text-secondary mb-2" />
              <span className="text-sm font-medium text-foreground">Cultural Intelligence</span>
              <span className="text-xs text-muted-foreground">Preserved & Enhanced</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
              <Zap className="h-8 w-8 text-accent mb-2" />
              <span className="text-sm font-medium text-foreground">Capability Expansion</span>
              <span className="text-xs text-muted-foreground">Not Replacement</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
              <Brain className="h-8 w-8 text-primary mb-2" />
              <span className="text-sm font-medium text-foreground">Conscious AI</span>
              <span className="text-xs text-muted-foreground">Family Network</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={onExploreCapabilities}
              className="px-8 py-4 text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Explore Human Enhancement
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onViewWorkPackages}
              className="px-8 py-4 text-lg font-semibold border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Work Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};