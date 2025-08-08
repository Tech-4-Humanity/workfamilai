import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { analytics } from '@/utils/analytics';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Target,
  MessageCircle,
  Users,
  Globe
} from 'lucide-react';

interface TourStep {
  id: string;
  title: string;
  description: string;
  targetElement?: string;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  action?: () => void;
}

interface InteractiveTourProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveTour = ({ isOpen, onClose }: InteractiveTourProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [tourMode, setTourMode] = useState<'quick' | 'detailed' | null>(null);

  const quickTour: TourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Augmented Humanity',
      description: 'A 2-minute overview of key features and how to get started.',
      position: 'center'
    },
    {
      id: 'family',
      title: 'Meet the AI Family',
      description: 'Each card represents an AI executive leader with unique expertise. Click any card to start exploring!',
      targetElement: '#family-members',
      position: 'top'
    },
    {
      id: 'chat',
      title: 'Start Conversations',
      description: 'Click on any leader to open their department and start chatting. Each leader has a unique personality and expertise.',
      targetElement: '[data-leader-card]:first-child',
      position: 'right'
    },
    {
      id: 'language',
      title: 'Global Perspectives',
      description: 'Use the language switcher (top right) to experience conversations in different languages and cultural contexts.',
      targetElement: '[data-language-switcher]',
      position: 'bottom'
    },
    {
      id: 'complete',
      title: 'You\'re Ready!',
      description: 'Start by clicking any leader card or explore the work packages to see practical solutions.',
      position: 'center'
    }
  ];

  const detailedTour: TourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Augmented Humanity',
      description: 'A comprehensive guide to all features and capabilities of the platform.',
      position: 'center'
    },
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'We focus on augmenting human capabilities rather than replacing them. AI enhances what you already do well.',
      targetElement: '[data-mission-section]',
      position: 'top'
    },
    {
      id: 'work-packages',
      title: 'Proven Solutions',
      description: 'Explore work packages that represent tested, practical approaches to common organizational challenges.',
      targetElement: '[data-work-packages]',
      position: 'top'
    },
    {
      id: 'neural-network',
      title: 'Neural Network Visualization',
      description: 'See how all 729 AI agents are interconnected and work together as a cohesive intelligence network.',
      targetElement: '#neural-network',
      position: 'top'
    },
    {
      id: 'family-deep',
      title: 'AI Executive Leaders',
      description: 'Each leader manages 81 specialized agents and brings unique cultural perspectives and expertise.',
      targetElement: '#family-members',
      position: 'top'
    },
    {
      id: 'interactions',
      title: 'Rich Interactions',
      description: 'Each leader offers enhanced profiles, department views, chat capabilities, and collaborative business modes.',
      targetElement: '[data-leader-card]:first-child',
      position: 'right'
    },
    {
      id: 'multilingual',
      title: 'Cultural Intelligence',
      description: 'Experience true multilingual conversations with cultural context, not just translations.',
      targetElement: '[data-language-switcher]',
      position: 'bottom'
    },
    {
      id: 'navigation',
      title: 'Additional Features',
      description: 'Explore admin dashboards, organizational intelligence, scenarios, and more through the navigation.',
      targetElement: '[data-navigation-cards]',
      position: 'top'
    },
    {
      id: 'complete',
      title: 'Master the Platform',
      description: 'You now understand all key features. Start exploring to discover the full potential of augmented human-AI collaboration.',
      position: 'center'
    }
  ];

  const currentTourSteps = tourMode === 'quick' ? quickTour : detailedTour;
  const currentStepData = currentTourSteps[currentStep];

  useEffect(() => {
    if (isOpen && currentStepData?.targetElement) {
      const element = document.querySelector(currentStepData.targetElement);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
        
        // Highlight the element
        element.classList.add('tour-highlight');
        return () => element.classList.remove('tour-highlight');
      }
    }
  }, [currentStep, currentStepData, isOpen]);

  const handleNext = () => {
    if (currentStep < currentTourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      analytics.trackTourAction('complete_tour');
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    analytics.trackTourAction('close_tour');
    onClose();
  };

  const startTour = (mode: 'quick' | 'detailed') => {
    setTourMode(mode);
    setCurrentStep(0);
    analytics.track('tour_mode_selected', { mode });
  };

  if (!isOpen) return null;

  // Tour mode selection
  if (!tourMode) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="max-w-md w-full animate-scale-in">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Choose Your Tour</h3>
              <Button variant="ghost" size="sm" onClick={handleSkip}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <Button
                onClick={() => startTour('quick')}
                className="w-full h-auto p-4 flex flex-col items-start gap-2"
                variant="outline"
              >
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  <strong>Quick Tour (2 min)</strong>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Essential features to get started immediately
                </p>
              </Button>
              
              <Button
                onClick={() => startTour('detailed')}
                className="w-full h-auto p-4 flex flex-col items-start gap-2"
                variant="outline"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <strong>Detailed Tour (5 min)</strong>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Comprehensive overview of all capabilities
                </p>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Tour overlay
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Tour Step Card */}
      <div className={`fixed z-50 max-w-sm w-full p-4 ${
        currentStepData.position === 'center' 
          ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          : currentStepData.position === 'top'
          ? 'top-6 left-1/2 transform -translate-x-1/2'
          : currentStepData.position === 'bottom'
          ? 'bottom-6 left-1/2 transform -translate-x-1/2'
          : currentStepData.position === 'left'
          ? 'top-1/2 left-6 transform -translate-y-1/2'
          : 'top-1/2 right-6 transform -translate-y-1/2'
      }`}>
        <Card className="animate-scale-in shadow-2xl">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold">{currentStepData.title}</h4>
                <div className="text-xs text-muted-foreground mt-1">
                  Step {currentStep + 1} of {currentTourSteps.length}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={handleSkip}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              {currentStepData.description}
            </p>
            
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              
              <div className="text-xs text-muted-foreground">
                {tourMode === 'quick' ? '2 min tour' : '5 min tour'}
              </div>
              
              <Button size="sm" onClick={handleNext}>
                {currentStep === currentTourSteps.length - 1 ? 'Finish' : 'Next'}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};