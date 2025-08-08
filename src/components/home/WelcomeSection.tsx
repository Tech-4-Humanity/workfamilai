
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { analytics } from '@/utils/analytics';
import { 
  Sparkles, 
  MessageCircle, 
  Users, 
  Globe, 
  ChevronRight,
  X,
  HelpCircle
} from 'lucide-react';

interface WelcomeSectionProps {
  onGetStarted: () => void;
  onShowTour?: () => void;
}

export const WelcomeSection = ({ onGetStarted, onShowTour }: WelcomeSectionProps) => {
  const { t } = useTranslation();
  const [showTour, setShowTour] = useState(false);

  const features = [
    {
      icon: MessageCircle,
      title: "Human-AI Partnerships",
      description: "Collaborate with AI leaders that enhance your capabilities"
    },
    {
      icon: Globe,
      title: "Cultural Intelligence",
      description: "AI that honors diverse perspectives and cultural wisdom"
    },
    {
      icon: Users,
      title: "Capability Enhancement",
      description: "729 AI agents designed to amplify human potential"
    },
    {
      icon: Sparkles,
      title: "Conscious Collaboration",
      description: "Work packages that preserve authentic leadership"
    }
  ];

  return (
    <div className="relative mb-16">
      {/* Welcome Message */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
          <Sparkles className="h-4 w-4" />
          Welcome to Augmented Humanity
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Amplify Human Potential Through AI Partnership
        </h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Discover how conscious AI collaboration enhances rather than replaces human capabilities. 
          Explore proven work packages and meet 9 AI executive leaders designed to preserve cultural 
          wisdom while expanding organizational intelligence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onGetStarted}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Exploring
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => {
              analytics.trackTourAction('start_tour');
              if (onShowTour) {
                onShowTour();
              } else {
                setShowTour(true);
              }
            }}
            className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Take a Quick Tour
          </Button>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Tour Modal */}
      {showTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full animate-scale-in">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Quick Tour Guide</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowTour(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <strong>🎯 Click any leader card</strong> to explore their department and chat with them directly
                </div>
                <div>
                  <strong>🌐 Use the language switcher</strong> (top right) to experience multilingual conversations
                </div>
                <div>
                  <strong>🔍 Explore the neural network</strong> to see how all 729 agents are interconnected
                </div>
                <div>
                  <strong>💬 Start conversations</strong> to discover each leader's unique personality and expertise
                </div>
                <div>
                  <strong>📊 Check out additional dashboards</strong> via the navigation cards below
                </div>
              </div>

              <Button 
                onClick={() => {
                  analytics.trackTourAction('complete_tour');
                  setShowTour(false);
                }}
                className="w-full mt-6"
              >
                Got it, let's explore!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
