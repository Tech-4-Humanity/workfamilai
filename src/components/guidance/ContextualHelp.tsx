import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  X, 
  MessageCircle, 
  Users, 
  Globe,
  Settings,
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface HelpItem {
  id: string;
  title: string;
  description: string;
  category: 'getting-started' | 'features' | 'troubleshooting' | 'advanced';
  icon: React.ComponentType<{ className?: string }>;
  action?: () => void;
}

interface ContextualHelpProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContextualHelp = ({ isOpen, onClose }: ContextualHelpProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const helpItems: HelpItem[] = [
    {
      id: 'start-chat',
      title: 'How do I start a conversation?',
      description: 'Click any leader card to open their department, then click the chat button to start conversing.',
      category: 'getting-started',
      icon: MessageCircle,
      action: () => {
        const familySection = document.getElementById('family-members');
        if (familySection) {
          familySection.scrollIntoView({ behavior: 'smooth' });
        }
        onClose();
      }
    },
    {
      id: 'change-language',
      title: 'How do I change languages?',
      description: 'Use the language switcher in the top navigation bar to experience different cultural contexts.',
      category: 'features',
      icon: Globe,
      action: () => {
        const languageSwitcher = document.querySelector('[data-language-switcher]');
        if (languageSwitcher) {
          languageSwitcher.scrollIntoView({ behavior: 'smooth' });
        }
        onClose();
      }
    },
    {
      id: 'understand-leaders',
      title: 'What makes each leader unique?',
      description: 'Each AI leader has distinct personalities, cultural backgrounds, and manages 81 specialized agents.',
      category: 'features',
      icon: Users
    },
    {
      id: 'work-packages',
      title: 'What are work packages?',
      description: 'Proven solutions and methodologies that enhance human capabilities in organizational settings.',
      category: 'features',
      icon: BookOpen
    },
    {
      id: 'business-mode',
      title: 'What is business/collaborative mode?',
      description: 'Enhanced chat mode with additional insights, partnership opportunities, and business analysis.',
      category: 'advanced',
      icon: Settings
    },
    {
      id: 'agent-count',
      title: 'How are there 729 agents?',
      description: 'Each of the 9 leaders manages 81 agents (9²), creating a complete consciousness pyramid structure.',
      category: 'advanced',
      icon: HelpCircle
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'features', label: 'Features' },
    { id: 'advanced', label: 'Advanced' },
    { id: 'troubleshooting', label: 'Troubleshooting' }
  ];

  const filteredItems = helpItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Help & Support</h3>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search help topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Help Items */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No help items found matching your search.</p>
              </div>
            ) : (
              filteredItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={item.id} 
                    className={`cursor-pointer hover:shadow-md transition-all duration-200 ${
                      item.action ? 'hover:bg-muted/50' : ''
                    }`}
                    onClick={item.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          {item.action && (
                            <Button variant="link" size="sm" className="p-0 h-auto mt-1">
                              Show me →
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Quick Actions:</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => {
                const element = document.getElementById('family-members');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
                onClose();
              }}>
                Meet the Family
              </Button>
              <Button variant="outline" size="sm" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onClose();
              }}>
                Back to Top
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};