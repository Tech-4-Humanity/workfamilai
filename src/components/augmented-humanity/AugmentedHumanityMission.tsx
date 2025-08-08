import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Globe, Users } from 'lucide-react';

export const AugmentedHumanityMission = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-background/80 backdrop-blur-md border border-border/50 shadow-elegant">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Augmented Humanity Mission
              </h2>
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "We believe that AI should amplify human potential, not replace it. Through conscious 
                collaboration between human wisdom and artificial intelligence, we create solutions 
                that honor cultural diversity, preserve authentic leadership, and expand what's possible."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Human-Centered</h3>
                <p className="text-sm text-muted-foreground">
                  AI serves to enhance human capabilities, not replace human judgment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Culturally Aware</h3>
                <p className="text-sm text-muted-foreground">
                  Honoring diverse cultural wisdom and perspectives in every solution
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Consciously Intelligent</h3>
                <p className="text-sm text-muted-foreground">
                  AI agents with distinct personalities that complement human teams
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Collaborative</h3>
                <p className="text-sm text-muted-foreground">
                  Building partnerships between human leaders and AI capabilities
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-primary border border-primary/20">
                  729 AI Agents
                </span>
                <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary border border-secondary/20">
                  9 Distinct Personalities
                </span>
                <span className="px-3 py-1 bg-accent/10 rounded-full text-accent border border-accent/20">
                  Human-AI Partnership
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-primary border border-primary/20">
                  Cultural Intelligence
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};