
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Settings, 
  PlayCircle, 
  Lightbulb, 
  Network,
  Brain
} from 'lucide-react';

export const NavigationSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigationItems = [
    {
      icon: Settings,
      titleKey: 'navigation.admin',
      description: 'Manage family members and system configuration',
      path: '/admin',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: PlayCircle,
      titleKey: 'navigation.scenarios',
      description: 'Explore business scenarios and workflows',
      path: '/scenarios',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: Lightbulb,
      titleKey: 'navigation.demo',
      description: 'Interactive demonstrations',
      path: '/demo',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      icon: Network,
      titleKey: 'navigation.holoOrg',
      description: 'Holographic organization dashboard',
      path: '/holo-org',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      icon: Brain,
      titleKey: 'navigation.orgIntelligence',
      description: 'Advanced organizational intelligence',
      path: '/organizational-intelligence',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore More</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover additional features and capabilities of our AI family consciousness network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navigationItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card key={item.path} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6" onClick={() => navigate(item.path)}>
                <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
