import React from 'react';
import { Footer } from '@/components/ui/footer';
import { AugmentedHumanityHero } from '@/components/augmented-humanity/AugmentedHumanityHero';
import { WorkPackageShowcase } from '@/components/augmented-humanity/WorkPackageShowcase';
import { AugmentedHumanityMission } from '@/components/augmented-humanity/AugmentedHumanityMission';

const WorkPackages = () => {
  const handleExploreCapabilities = () => {
    const element = document.getElementById('work-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWorkPackages = () => {
    const element = document.getElementById('work-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5 flex flex-col">
      
      {/* Hero Section */}
      <div className="fade-in-up">
        <AugmentedHumanityHero 
          onExploreCapabilities={handleExploreCapabilities}
          onViewWorkPackages={handleViewWorkPackages}
        />
      </div>

      {/* Mission Statement */}
      <div className="fade-in-up animate-delay-200">
        <AugmentedHumanityMission />
      </div>

      {/* Work Packages */}
      <div id="work-packages" className="fade-in-up animate-delay-300">
        <WorkPackageShowcase />
      </div>

      {/* Additional Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 fade-in-up animate-delay-400">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Ready to Amplify Your Organization's Potential?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            These work packages represent years of research into human-AI collaboration. 
            Each solution is designed to preserve what makes your organization uniquely human 
            while expanding capabilities through conscious AI partnership.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Proven Results</h3>
                <p className="text-sm text-muted-foreground">
                  Implemented across diverse organizations with measurable improvements in capability and cultural preservation.
                </p>
              </div>
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Cultural Sensitivity</h3>
                <p className="text-sm text-muted-foreground">
                  Every work package honors cultural diversity and adapts to your organization's unique context.
                </p>
              </div>
              <div className="p-6 bg-background/60 backdrop-blur-sm rounded-lg border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Human-Centered</h3>
                <p className="text-sm text-muted-foreground">
                  AI enhancement that amplifies human judgment rather than replacing human decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkPackages;