import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { 
  CheckCircle, 
  Circle, 
  Users, 
  MessageCircle, 
  Globe,
  Star,
  HelpCircle,
  Minimize2,
  Maximize2,
  X,
  Move
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
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('progress_position');
    return saved ? JSON.parse(saved) : { x: 24, y: 24 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    const saved = localStorage.getItem('progress_minimized');
    return saved === 'true';
  });
  const [isHidden, setIsHidden] = useState(() => {
    const saved = localStorage.getItem('progress_hidden');
    return saved === 'true';
  });

  // Load progress from localStorage or use defaults
  const [explorationData, setExplorationData] = useState<ProgressItem[]>(() => {
    const saved = localStorage.getItem('exploration_progress');
    const defaultData = [
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
    ];
    
    if (saved) {
      try {
        const savedData = JSON.parse(saved);
        // Merge saved progress with default structure
        return defaultData.map(item => ({
          ...item,
          completed: savedData.find((s: any) => s.id === item.id)?.completed || false
        }));
      } catch {
        return defaultData;
      }
    }
    return defaultData;
  });

  const [showProgress, setShowProgress] = useState(false);

  // Persist UI state to localStorage
  useEffect(() => {
    localStorage.setItem('progress_position', JSON.stringify(position));
  }, [position]);

  useEffect(() => {
    localStorage.setItem('progress_minimized', isMinimized.toString());
  }, [isMinimized]);

  useEffect(() => {
    localStorage.setItem('progress_hidden', isHidden.toString());
  }, [isHidden]);

  // Drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === dragRef.current || (e.target as HTMLElement).classList.contains('drag-handle')) {
      setIsDragging(true);
      const rect = dragRef.current?.getBoundingClientRect();
      if (rect) {
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        
        const handleMouseMove = (e: MouseEvent) => {
          setPosition({
            x: Math.max(0, Math.min(window.innerWidth - 320, e.clientX - offsetX)),
            y: Math.max(0, Math.min(window.innerHeight - 200, e.clientY - offsetY))
          });
        };

        const handleMouseUp = () => {
          setIsDragging(false);
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    }
  };

  // Calculate progress
  const completedItems = explorationData.filter(item => item.completed);
  const totalPoints = explorationData.reduce((sum, item) => sum + item.points, 0);
  const earnedPoints = completedItems.reduce((sum, item) => sum + item.points, 0);
  const progressPercentage = (earnedPoints / totalPoints) * 100;

  // Persist progress to localStorage
  useEffect(() => {
    localStorage.setItem('exploration_progress', JSON.stringify(explorationData));
  }, [explorationData]);

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

    // Check for work packages section using IntersectionObserver
    const checkWorkPackages = () => {
      const workPackagesSection = document.querySelector('[data-work-packages]');
      if (workPackagesSection) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              updateProgress('work_packages');
              observer.disconnect();
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(workPackagesSection);
        return () => observer.disconnect();
      }
    };

    // Listen for custom events
    const handleChatStarted = () => {
      updateProgress('started_chat');
    };

    const handleLanguageChanged = () => {
      updateProgress('language_switch');
    };

    // Listen for language changes from localStorage
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
    window.addEventListener('chat-started', handleChatStarted);
    window.addEventListener('language-changed', handleLanguageChanged);
    
    // Setup observers
    const workPackagesCleanup = checkWorkPackages();
    
    // Check initial state
    checkFamilySection();
    checkLanguageSwitch();

    // Show progress indicator after 5 seconds (unless hidden)
    const timer = setTimeout(() => {
      if (!isHidden) setShowProgress(true);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', checkFamilySection);
      window.removeEventListener('storage', checkLanguageSwitch);
      window.removeEventListener('chat-started', handleChatStarted);
      window.removeEventListener('language-changed', handleLanguageChanged);
      if (workPackagesCleanup) workPackagesCleanup();
      clearTimeout(timer);
    };
  }, []);

  if (!showProgress || isHidden) return null;

  return (
    <TooltipProvider>
      <div
        ref={dragRef}
        className={`fixed z-30 max-w-sm transition-transform duration-200 ${
          isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        onMouseDown={handleMouseDown}
      >
        <Card className="bg-background/95 backdrop-blur-sm border shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="drag-handle cursor-move">
                  <Move className="h-3 w-3 text-muted-foreground" />
                </div>
                <h4 className="font-semibold text-sm">Exploration Progress</h4>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-3 w-3 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs">
                      Track your journey through the platform. Complete activities to earn points and unlock achievements!
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-xs">
                  {earnedPoints}/{totalPoints} pts
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsHidden(true)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            {!isMinimized && (
              <>
                <Progress value={progressPercentage} className="mb-3" />
                
                <div className="space-y-2">
                  {explorationData.map((item) => {
                    const IconComponent = item.completed ? CheckCircle : item.icon;
                    return (
                      <Tooltip key={item.id}>
                        <TooltipTrigger asChild>
                          <div 
                            className={`flex items-center gap-2 text-xs cursor-help ${
                              item.completed ? 'text-green-600' : 'text-muted-foreground'
                            }`}
                          >
                            <IconComponent className={`h-3 w-3 ${
                              item.completed ? 'text-green-500' : 'text-muted-foreground'
                            }`} />
                            <span className="flex-1">{item.label}</span>
                            <span className="text-xs text-muted-foreground">+{item.points}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{item.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                {progressPercentage === 100 && (
                  <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                      🎉 Exploration complete! You're ready to dive deeper.
                    </p>
                  </div>
                )}

                <div className="mt-3 pt-2 border-t">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs h-6"
                    onClick={() => setIsHidden(true)}
                  >
                    Don't show this again
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};