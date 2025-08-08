import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { analytics } from '@/utils/analytics';
import { 
  HelpCircle, 
  Search, 
  Map, 
  MessageCircle, 
  X,
  ChevronUp,
  ChevronDown,
  Lightbulb,
  Navigation
} from 'lucide-react';

interface QuickActionToolbarProps {
  onShowTour?: () => void;
  onShowHelp?: () => void;
  onShowMap?: () => void;
}

export const QuickActionToolbar = ({ onShowTour, onShowHelp, onShowMap }: QuickActionToolbarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showQuickHelp, setShowQuickHelp] = useState(false);

  const quickActions = [
    {
      icon: HelpCircle,
      label: 'Take Tour',
      description: 'Interactive guided tour',
      action: () => {
        analytics.trackTourAction('start_tour');
        onShowTour?.();
      }
    },
    {
      icon: Map,
      label: 'Site Map',
      description: 'Navigate anywhere',
      action: () => {
        analytics.track('site_map_opened');
        onShowMap?.();
      }
    },
    {
      icon: MessageCircle,
      label: 'Quick Chat',
      description: 'Start conversation',
      action: () => {
        const element = document.getElementById('family-members');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      icon: Lightbulb,
      label: 'Quick Help',
      description: 'Context hints',
      action: () => setShowQuickHelp(true)
    }
  ];

  return (
    <>
      {/* Fixed Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="flex flex-col items-end gap-2">
          {/* Expanded Actions */}
          {isExpanded && (
            <div className="flex flex-col gap-2 animate-fade-in">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Button
                    key={action.label}
                    onClick={action.action}
                    variant="outline"
                    size="sm"
                    className="w-auto px-3 py-2 bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    <span className="text-sm">{action.label}</span>
                  </Button>
                );
              })}
            </div>
          )}

          {/* Main Toggle Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            size="lg"
            className="rounded-full w-14 h-14 bg-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            {isExpanded ? (
              <X className="h-6 w-6" />
            ) : (
              <Navigation className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Quick Help Modal */}
      {showQuickHelp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full animate-scale-in">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-500" />
                  Quick Help
                </h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowQuickHelp(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                  <strong className="text-blue-800">💡 Where am I?</strong>
                  <p className="text-blue-700 mt-1">
                    You're exploring the Augmented Humanity platform - a network of 9 AI executive leaders and 729 specialized agents designed to enhance human capabilities.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <strong className="text-green-800">🎯 What can I do?</strong>
                  <p className="text-green-700 mt-1">
                    Click any leader card to explore their department, start conversations, view work packages, or take the guided tour for a complete overview.
                  </p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <strong className="text-purple-800">🌐 Pro tip</strong>
                  <p className="text-purple-700 mt-1">
                    Each leader has unique cultural perspectives and speaks multiple languages. Try switching languages to experience different conversational styles!
                  </p>
                </div>
              </div>

              <Button 
                onClick={() => setShowQuickHelp(false)}
                className="w-full mt-6"
              >
                Got it!
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};