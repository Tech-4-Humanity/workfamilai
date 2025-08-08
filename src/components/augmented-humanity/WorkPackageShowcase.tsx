import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Brain, Users, Lightbulb, TrendingUp, Shield, Target } from 'lucide-react';

const workPackages = [
  {
    title: "Augmented Decision Making",
    subtitle: "AI-Led Discovery Workshops",
    description: "Enhance human judgment with AI-powered insights while preserving intuitive wisdom and cultural context.",
    value: "$45,000 - $75,000",
    icon: Brain,
    category: "Strategic Intelligence",
    outcomes: ["Enhanced decision quality", "Preserved human intuition", "Cultural sensitivity"],
    color: "primary"
  },
  {
    title: "Augmented Talent Pipeline",
    subtitle: "Signal-Based Recruitment & Development",
    description: "Expand talent identification capabilities while honoring diverse cultural backgrounds and authentic potential.",
    value: "$35,000 - $65,000", 
    icon: Users,
    category: "Human Capital",
    outcomes: ["Wider talent discovery", "Cultural diversity", "Authentic assessment"],
    color: "secondary"
  },
  {
    title: "Augmented Organizational Intelligence",
    subtitle: "Consciousness-Level Analytics",
    description: "Amplify organizational awareness through AI insights while maintaining human-centered leadership approaches.",
    value: "$55,000 - $95,000",
    icon: TrendingUp,
    category: "Organizational Enhancement",
    outcomes: ["Deeper awareness", "Human-centered metrics", "Cultural alignment"],
    color: "accent"
  },
  {
    title: "Augmented Innovation Labs",
    subtitle: "Human-AI Creative Partnerships",
    description: "Accelerate innovation through collaborative intelligence that enhances rather than replaces human creativity.",
    value: "$40,000 - $80,000",
    icon: Lightbulb,
    category: "Innovation Enhancement",
    outcomes: ["Enhanced creativity", "Faster ideation", "Human-AI synergy"],
    color: "primary"
  },
  {
    title: "Augmented Security Posture",
    subtitle: "Human-Centered Risk Management",
    description: "Strengthen security through AI augmentation while preserving human judgment in critical decision points.",
    value: "$50,000 - $85,000",
    icon: Shield,
    category: "Security Enhancement", 
    outcomes: ["Stronger defenses", "Human oversight", "Ethical boundaries"],
    color: "secondary"
  },
  {
    title: "Augmented Leadership Development",
    subtitle: "AI-Enhanced Executive Coaching",
    description: "Develop authentic leadership capabilities through AI insights that honor individual and cultural strengths.",
    value: "$30,000 - $60,000",
    icon: Target,
    category: "Leadership Enhancement",
    outcomes: ["Authentic development", "Cultural wisdom", "Enhanced capabilities"],
    color: "accent"
  }
];

export const WorkPackageShowcase = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Augmented Humanity Work Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Proven solutions that enhance human potential through AI partnership. Each package is designed 
            to amplify your unique strengths while preserving cultural wisdom and authentic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workPackages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={pkg.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-background/60 backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {pkg.category}
                    </Badge>
                    <IconComponent className={`h-5 w-5 text-${pkg.color}`} />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {pkg.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Outcomes:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {pkg.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${pkg.color}`} />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-foreground">
                        {pkg.value}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs hover-scale"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 py-4 shadow-elegant hover:shadow-glow transition-all duration-300">
            Explore All Work Packages
          </Button>
        </div>
      </div>
    </div>
  );
};