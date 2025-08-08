import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Circle, 
  Users, 
  MessageCircle, 
  Globe,
  Star
} from 'lucide-react';

interface ProgressItem {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
  points: number;
}

export const ProgressIndicator = () => {
  const [explorationData, setExplorationData] = useState<ProgressItem[]>([
    {
      id: 'visited_home',
      label: 'Platform Overview',
      description: 'Viewed main dashboard',
      icon: Circle,
      completed: true,
      points: 10
    },
    {
      id: 'met_family',
      label: 'Meet the Family',
      description: 'Explored family members section',
      icon: Users,
      completed: false,
      points: 20
    },
    {
      id: 'started_chat',
      label: 'First Conversation',
      description: 'Started chat with any leader',
      icon: MessageCircle,
      completed: false,
      points: 30
    },
    {
      id: 'language_switch',
      label: 'Cultural Explorer',
      description: 'Tried different languages',
      icon: Globe,
      completed: false,
      points: 25
    },
    {
      id: 'work_packages',
      label: 'Solution Explorer',
      description: 'Viewed work packages',
      icon: Star,
      completed: false,
      points: 15
    }
  ]);

  const [showProgress, setShowProgress] = useState(false);

  // Calculate progress
  const completedItems = explorationData.filter(item => item.completed);
  const totalPoints = explorationData.reduce((sum, item) => sum + item.points, 0);
  const earnedPoints = completedItems.reduce((sum, item) => sum + item.points, 0);
  const progressPercentage = (earnedPoints / totalPoints) * 100;

  // Auto-detect user actions and update progress
  useEffect(() => {
    const updateProgress = (itemId: string) => {
      setExplorationData(prev => 
        prev.map(item => 
          item.id === itemId ? { ...item, completed: true } : item
        )
      );
    };

    // Listen for scroll to family section
    const checkFamilySection = () => {
      const familySection = document.getElementById('family-members');
      if (familySection) {
        const rect = familySection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          updateProgress('met_family');
        }
      }
    };

    // Check for chat interactions
    const checkChatStarted = () => {
      const chatElements = document.querySelectorAll('[data-chat-started]');
      if (chatElements.length > 0) {
        updateProgress('started_chat');
      }
    };

    // Listen for language changes
    const checkLanguageSwitch = () => {
      const currentLang = localStorage.getItem('i18nextLng');
      const hasChangedLang = localStorage.getItem('language_changed');
      if (hasChangedLang || (currentLang && currentLang !== 'en')) {
        updateProgress('language_switch');
      }
    };

    // Event listeners
    window.addEventListener('scroll', checkFamilySection);
    window.addEventListener('storage', checkLanguageSwitch);
    
    // Check initial state
    checkFamilySection();
    checkChatStarted();
    checkLanguageSwitch();

    // Show progress indicator after 5 seconds
    const timer = setTimeout(() => setShowProgress(true), 5000);

    return () => {
      window.removeEventListener('scroll', checkFamilySection);
      window.removeEventListener('storage', checkLanguageSwitch);
      clearTimeout(timer);
    };
  }, []);

  if (!showProgress) return null;

  return (
    <div className="fixed top-6 left-6 z-30 max-w-sm">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-sm">Exploration Progress</h4>
            <Badge variant="outline" className="text-xs">
              {earnedPoints}/{totalPoints} pts
            </Badge>
          </div>
          
          <Progress value={progressPercentage} className="mb-3" />
          
          <div className="space-y-2">
            {explorationData.map((item) => {
              const IconComponent = item.completed ? CheckCircle : item.icon;
              return (
                <div 
                  key={item.id}
                  className={`flex items-center gap-2 text-xs ${
                    item.completed ? 'text-green-600' : 'text-muted-foreground'
                  }`}
                >
                  <IconComponent className={`h-3 w-3 ${
                    item.completed ? 'text-green-500' : 'text-muted-foreground'
                  }`} />
                  <span className="flex-1">{item.label}</span>
                  <span className="text-xs text-muted-foreground">+{item.points}</span>
                </div>
              );
            })}
          </div>

          {progressPercentage === 100 && (
            <div className="mt-3 p-2 bg-green-50 rounded-lg border border-green-200">
              <p className="text-xs text-green-700 font-medium">
                🎉 Exploration complete! You're ready to dive deeper.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};