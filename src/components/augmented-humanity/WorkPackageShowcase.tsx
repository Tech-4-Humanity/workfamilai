import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Lightbulb, TrendingUp, Shield, Target, Loader2, CheckCircle2, Clock, Award, Zap } from 'lucide-react';
import { analytics } from '@/utils/analytics';
import { useWorkPackages, WorkPackage } from '@/hooks/useWorkPackages';
import { WorkPackageDetailModal } from './WorkPackageDetailModal';

export const WorkPackageShowcase = () => {
  const { data: workPackages, isLoading, error } = useWorkPackages();
  const [selectedPackage, setSelectedPackage] = useState<WorkPackage | null>(null);
  
  const handleLearnMoreClick = (pkg: WorkPackage) => {
    analytics.track('work_package_clicked', { package_title: pkg.name });
    setSelectedPackage(pkg);
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
                className="group hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-border/50 bg-background/60 backdrop-blur-sm flex flex-col"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {pkg.category}
                    </Badge>
                    {pkg.tier && (
                      <Badge variant="outline" className="text-xs">
                        {pkg.tier}
                      </Badge>
                    )}
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">
                    {pkg.name}
                  </CardTitle>
                  {pkg.subcategory && (
                    <p className="text-sm text-muted-foreground font-medium">
                      {pkg.subcategory}
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  {/* Key Benefits Section */}
                  {pkg.stakeholder_benefits && Object.keys(pkg.stakeholder_benefits).length > 0 && pkg.stakeholder_benefits.primary && pkg.stakeholder_benefits.primary.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">Key Benefits</p>
                      </div>
                      <ul className="space-y-1.5">
                        {pkg.stakeholder_benefits.primary.slice(0, 3).map((benefit: string, idx: number) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* What's Included Section */}
                  {pkg.deliverables && Array.isArray(pkg.deliverables) && pkg.deliverables.length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">What's Included</p>
                      </div>
                      <div className="space-y-1.5">
                        {pkg.deliverables.slice(0, 3).map((item: any, idx: number) => (
                          <div key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">📋</span>
                            <span>{typeof item === 'string' ? item : item.title || item.name || 'Deliverable'}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Success Metrics & Timeline Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pkg.delivery_timeframe_days && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Clock className="h-3 w-3" />
                        {pkg.delivery_timeframe_days} days
                      </Badge>
                    )}
                    {pkg.success_metrics && pkg.success_metrics.roi_timeline && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {pkg.success_metrics.roi_timeline}
                      </Badge>
                    )}
                    {pkg.ai_leverage_level && (
                      <Badge variant="outline" className="text-xs gap-1">
                        <Zap className="h-3 w-3" />
                        {pkg.ai_leverage_level}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Target Audience & Outcome - More Compact */}
                  <div className="space-y-2 pt-2 border-t border-border/30">
                    {pkg.target_audience && (
                      <div className="flex items-start gap-2">
                        <Users className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground">For:</p>
                          <p className="text-xs text-muted-foreground">{pkg.target_audience}</p>
                        </div>
                      </div>
                    )}
                    
                    {pkg.customer_outcome && (
                      <div className="flex items-start gap-2">
                        <Target className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground">Outcome:</p>
                          <p className="text-xs text-muted-foreground line-clamp-2">{pkg.customer_outcome}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button - No Pricing */}
                  <div className="pt-3 mt-auto">
                    <Button 
                      size="sm" 
                      variant="default"
                      className="w-full text-sm hover-scale cursor-pointer"
                      onClick={() => handleLearnMoreClick(pkg)}
                    >
                      Request Quote
                    </Button>
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

      <WorkPackageDetailModal 
        workPackage={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />
    </div>
  );
};