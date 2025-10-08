import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Lightbulb, TrendingUp, Shield, Target, Loader2 } from 'lucide-react';
import { analytics } from '@/utils/analytics';
import { useWorkPackages } from '@/hooks/useWorkPackages';

export const WorkPackageShowcase = () => {
  const { data: workPackages, isLoading, error } = useWorkPackages();
  const handleLearnMoreClick = (packageTitle: string) => {
    analytics.track('work_package_clicked', { package_title: packageTitle });
    // Scroll to top of work packages section for more details
    const element = document.getElementById('work-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreAllClick = () => {
    analytics.track('work-packages-viewed', { source: 'explore_all_button' });
    // Smooth scroll to work packages section
    const element = document.getElementById('work-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="py-16 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-muted-foreground">Loading work packages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-destructive">Error loading work packages. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!workPackages || workPackages.length === 0) {
    return (
      <div className="py-16 bg-gradient-to-br from-background via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">No work packages available at this time.</p>
        </div>
      </div>
    );
  }

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
          {workPackages.map((pkg) => {
            const iconMap: Record<string, any> = {
              'Training AI': Lightbulb,
              'Strategic Intelligence': Sparkles,
              'Human Capital': Users,
              'Organizational Enhancement': TrendingUp,
              'Innovation Enhancement': Lightbulb,
              'Security Enhancement': Shield,
              'Leadership Enhancement': Target,
            };
            
            const IconComponent = iconMap[pkg.category] || Sparkles;
            
            return (
              <Card 
                key={pkg.id}
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-background/60 backdrop-blur-sm"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {pkg.category}
                    </Badge>
                    {pkg.tier && (
                      <Badge variant="outline" className="text-xs">
                        {pkg.tier}
                      </Badge>
                    )}
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {pkg.name}
                  </CardTitle>
                  {pkg.subcategory && (
                    <p className="text-sm text-muted-foreground font-medium">
                      {pkg.subcategory}
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  {pkg.target_audience && (
                    <div>
                      <p className="text-xs font-semibold text-foreground">Target Audience:</p>
                      <p className="text-xs text-muted-foreground">{pkg.target_audience}</p>
                    </div>
                  )}
                  
                  {pkg.customer_outcome && (
                    <div>
                      <p className="text-xs font-semibold text-foreground">Outcome:</p>
                      <p className="text-xs text-muted-foreground">{pkg.customer_outcome}</p>
                    </div>
                  )}
                  
                  <div className="pt-2 border-t border-border/50">
                    <div className="flex justify-between items-center">
                      {pkg.base_price && (
                        <p className="text-sm font-bold text-primary">
                          From ${(pkg.base_price / 1000).toFixed(0)}k
                        </p>
                      )}
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="text-xs hover-scale"
                        onClick={() => handleLearnMoreClick(pkg.name)}
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
          <Button 
            size="lg" 
            className="px-8 py-4 shadow-elegant hover:shadow-glow transition-all duration-300"
            onClick={handleExploreAllClick}
          >
            Explore All Work Packages
          </Button>
        </div>
      </div>
    </div>
  );
};