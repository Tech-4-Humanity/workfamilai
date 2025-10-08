import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ContactForm } from './contact-form';
import { 
  Home, 
  Users, 
  FileText, 
  BarChart3, 
  Settings,
  MessageSquare
} from 'lucide-react';

export const SimpleFooter = () => {
  const navigate = useNavigate();

  const userActions = [
    {
      title: 'Start Here',
      description: 'Explore the neural network visualization on the homepage',
      icon: Home,
      priority: 'high'
    },
    {
      title: 'Click Family Members',
      description: 'Navigate to individual departments to see specialized teams',
      icon: Users,
      priority: 'high'
    },
    {
      title: 'View Scenarios',
      description: 'Understand how the family collaborates on business processes',
      icon: FileText,
      priority: 'medium'
    },
    {
      title: 'Access Dashboards',
      description: 'Monitor organizational performance and partnerships',
      icon: BarChart3,
      priority: 'medium'
    },
    {
      title: 'Use Admin Tools',
      description: 'Manage the 729-agent database and system configuration',
      icon: Settings,
      priority: 'low'
    },
    {
      title: 'Voice Queries',
      description: 'Interact with the family through natural language interface',
      icon: MessageSquare,
      priority: 'medium'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* Platform Overview */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              workfamilyai
            </h2>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Nine specialized AI leaders managing 729 intelligent agents, working together as a unified neural network 
            to transform how organizations operate. Each family member brings unique expertise and personality, 
            creating a comprehensive system for business intelligence and process optimization.
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Unified Neural Intelligence • Specialized Domains • 24/7 Collaboration
          </Badge>
        </div>

        <Separator />

        {/* User Actions Guide */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            What You Should Do - Getting Started Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border hover:border-blue-300 transition-colors">
                  <IconComponent className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-grow">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-800">{action.title}</h4>
                      <Badge className={`text-xs ${getPriorityColor(action.priority)}`}>
                        {action.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Mission Statement & Contact */}
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-200">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Like any family, we have our specialized roles, but our strength comes from how we complement 
              each other's abilities and compensate for each other's blind spots."
            </blockquote>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Nine distinct personalities</strong> • <strong>Complementary skills</strong> • <strong>Unified mission</strong></p>
              <p><strong>Shared neural infrastructure</strong> • <strong>Real-time collaboration</strong> • <strong>Continuous learning</strong></p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">New Users</h4>
              <p className="text-sm text-gray-600">Start with the family overview and neural network visualization</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/')} className="mt-2">
                Family Overview
              </Button>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Business Users</h4>
              <p className="text-sm text-gray-600">Explore scenarios and holo-org dashboards</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/scenarios')} className="mt-2">
                View Scenarios
              </Button>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Administrators</h4>
              <p className="text-sm text-gray-600">Access admin dashboard for system and agent management</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/admin')} className="mt-2">
                Admin Dashboard
              </Button>
            </div>
          </div>

          {/* Contact Form Section */}
          <Separator />
          <div className="mt-8">
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>

          <div className="text-xs text-gray-500 pt-4 border-t">
            <p>workfamilyai • Tech 4 Humanity • © 2025</p>
            <p className="mt-1">
              <span className="inline-flex items-center space-x-1">
                <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full"></div>
                <span>Always Learning • Always Evolving • Always Collaborating</span>
                <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full"></div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
