import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/ui/footer';
import { ArrowLeft, Users, FileText, TrendingUp, Clock, BarChart3 } from 'lucide-react';

const scenarios = [
  {
    id: 'data-analyst-hiring',
    title: 'Data Analyst Employment Process',
    description: 'Employing someone to be a data analyst to correlate real-time transactions for improving customer service and reducing costs',
    category: 'Human Resources',
    duration: '45 days',
    complexity: 'Medium',
    value: 8,
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    id: 'mainframe-rft',
    title: 'Complex Mainframe RFT Response',
    description: 'Completing an RFT for an IT project on customer enhanced actions on complex secure mainframe system',
    category: 'Procurement',
    duration: '30 days',
    complexity: 'High',
    value: 9,
    icon: FileText,
    color: 'bg-red-500'
  },
  {
    id: 'labour-hire-sales',
    title: 'Labour Hire & Consulting Sales',
    description: 'Sales person selling labour hire and consulting bodies for IT and government projects',
    category: 'Sales',
    duration: '60 days',
    complexity: 'Medium',
    value: 7,
    icon: TrendingUp,
    color: 'bg-green-500'
  }
];

const Scenarios = () => {
  const navigate = useNavigate();

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <div className="p-6 space-y-6 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Family</span>
            </Button>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <BarChart3 className="w-8 h-8 text-purple-600" />
                Business Activity Scenarios
              </h1>
              <p className="text-muted-foreground">
                Interactive visualizations of workfamilyai family involvement in key business processes
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => {
            const IconComponent = scenario.icon;
            return (
              <Card 
                key={scenario.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => navigate(`/scenarios/${scenario.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${scenario.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <Badge variant="outline">{scenario.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{scenario.duration}</span>
                      </div>
                      <Badge className={getComplexityColor(scenario.complexity)}>
                        {scenario.complexity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Business Value</span>
                      <div className="flex items-center space-x-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${
                              i < scenario.value ? 'bg-purple-500' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                        <span className="text-sm font-semibold ml-2">{scenario.value}/10</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>About These Scenarios</CardTitle>
              <CardDescription>
                These visualizations demonstrate how the workfamilyai family members collaborate across different business activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Involvement Levels</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-red-500"></div>
                      <span className="text-sm">Lead - Primary responsibility</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-orange-500"></div>
                      <span className="text-sm">Support - Active contribution</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-yellow-500"></div>
                      <span className="text-sm">Consult - Expert guidance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-purple-500"></div>
                      <span className="text-sm">Review - Feedback provider</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-gray-500"></div>
                      <span className="text-sm">Inform - Kept updated</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Visualization Features</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Interactive process flow charts</li>
                    <li>• Family member involvement mapping</li>
                    <li>• Decision point highlighting</li>
                    <li>• Timeline progression views</li>
                    <li>• Real-time collaboration insights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Scenarios;
