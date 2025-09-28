import React, { useState } from 'react';
import { ContactForm } from '@/components/ui/contact-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TestTube, Database, Mail, Activity, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ContactTest = () => {
  const { toast } = useToast();
  const [testResults, setTestResults] = useState<Array<{
    test: string;
    status: 'pass' | 'fail' | 'pending';
    message: string;
    timestamp: string;
  }>>([]);

  const runConnectivityTest = async () => {
    const testStart = new Date().toLocaleTimeString();
    
    try {
      // Test database connection
      const { error } = await supabase.from('contact_submissions').select('count', { count: 'exact', head: true });
      
      if (error) {
        setTestResults(prev => [...prev, {
          test: 'Database Connectivity',
          status: 'fail',
          message: `Database connection failed: ${error.message}`,
          timestamp: testStart
        }]);
      } else {
        setTestResults(prev => [...prev, {
          test: 'Database Connectivity',
          status: 'pass',
          message: 'Successfully connected to contact_submissions table',
          timestamp: testStart
        }]);
      }
    } catch (error: any) {
      setTestResults(prev => [...prev, {
        test: 'Database Connectivity',
        status: 'fail',
        message: `Connection error: ${error.message}`,
        timestamp: testStart
      }]);
    }
  };

  const runEdgeFunctionTest = async () => {
    const testStart = new Date().toLocaleTimeString();
    
    try {
      const { error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: 'Test User',
          email: 'test@example.com',
          company: 'Test Company',
          interest: 'demo',
          message: 'This is a test submission - please ignore',
          honeypot: ''
        }
      });

      if (error) {
        setTestResults(prev => [...prev, {
          test: 'Edge Function',
          status: 'fail',
          message: `Edge function error: ${error.message}`,
          timestamp: testStart
        }]);
      } else {
        setTestResults(prev => [...prev, {
          test: 'Edge Function',
          status: 'pass',
          message: 'Edge function executed successfully',
          timestamp: testStart
        }]);
      }
    } catch (error: any) {
      setTestResults(prev => [...prev, {
        test: 'Edge Function',
        status: 'fail',
        message: `Function call failed: ${error.message}`,
        timestamp: testStart
      }]);
    }
  };

  const runSpamProtectionTest = async () => {
    const testStart = new Date().toLocaleTimeString();
    
    try {
      // Test honeypot protection
      const { error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: 'Spam Bot',
          email: 'spam@bot.com',
          company: 'Spam Inc',
          interest: 'demo',
          message: 'This is spam',
          honeypot: 'I am a bot' // This should trigger spam protection
        }
      });

      if (error && error.message.includes('Invalid submission')) {
        setTestResults(prev => [...prev, {
          test: 'Spam Protection',
          status: 'pass',
          message: 'Honeypot protection working correctly',
          timestamp: testStart
        }]);
      } else {
        setTestResults(prev => [...prev, {
          test: 'Spam Protection',
          status: 'fail',
          message: 'Spam protection not working - honeypot bypassed',
          timestamp: testStart
        }]);
      }
    } catch (error: any) {
      setTestResults(prev => [...prev, {
        test: 'Spam Protection',
        status: 'fail',
        message: `Test error: ${error.message}`,
        timestamp: testStart
      }]);
    }
  };

  const runAllTests = async () => {
    setTestResults([]);
    toast({
      title: "Running Tests",
      description: "Testing contact form functionality...",
    });
    
    await runConnectivityTest();
    await runEdgeFunctionTest();
    await runSpamProtectionTest();
    
    toast({
      title: "Tests Complete",
      description: "Check results below for details",
    });
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact System Testing
          </h1>
          <p className="text-gray-600">
            Comprehensive testing suite for contact form functionality and email delivery
          </p>
        </div>

        <Tabs defaultValue="tests" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tests" className="flex items-center gap-2">
              <TestTube className="h-4 w-4" />
              System Tests
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Live Form Test
            </TabsTrigger>
            <TabsTrigger value="scenarios" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Test Scenarios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    System Tests
                  </span>
                  <div className="space-x-2">
                    <Button onClick={runAllTests} variant="outline">
                      Run All Tests
                    </Button>
                    <Button onClick={clearResults} variant="ghost" size="sm">
                      Clear Results
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Button onClick={runConnectivityTest} variant="outline" className="flex flex-col items-center p-4 h-auto">
                    <Database className="h-6 w-6 mb-2" />
                    Test Database
                    <span className="text-xs text-gray-500">Connectivity & Schema</span>
                  </Button>
                  
                  <Button onClick={runEdgeFunctionTest} variant="outline" className="flex flex-col items-center p-4 h-auto">
                    <Activity className="h-6 w-6 mb-2" />
                    Test Edge Function
                    <span className="text-xs text-gray-500">Form Processing</span>
                  </Button>
                  
                  <Button onClick={runSpamProtectionTest} variant="outline" className="flex flex-col items-center p-4 h-auto">
                    <TestTube className="h-6 w-6 mb-2" />
                    Test Spam Protection
                    <span className="text-xs text-gray-500">Security Features</span>
                  </Button>
                </div>

                {testResults.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg">Test Results</h3>
                    {testResults.map((result, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          {result.status === 'pass' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : result.status === 'fail' ? (
                            <XCircle className="h-5 w-5 text-red-500" />
                          ) : (
                            <Activity className="h-5 w-5 text-yellow-500 animate-spin" />
                          )}
                          <div>
                            <p className="font-medium">{result.test}</p>
                            <p className="text-sm text-gray-600">{result.message}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={result.status === 'pass' ? 'default' : result.status === 'fail' ? 'destructive' : 'secondary'}>
                            {result.status.toUpperCase()}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{result.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ContactForm />
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Test Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">✅ Valid Test</h4>
                    <p className="text-blue-700 text-sm">
                      Fill out all required fields with valid information to test successful submission flow.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Rate Limit Test</h4>
                    <p className="text-yellow-700 text-sm">
                      Submit multiple forms quickly to test rate limiting (max 3 per hour).
                    </p>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">❌ Validation Test</h4>
                    <p className="text-red-700 text-sm">
                      Leave required fields empty or enter invalid email to test validation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scenarios">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Enterprise Inquiry",
                  description: "Large organization seeking AI transformation",
                  data: {
                    name: "Sarah Johnson",
                    email: "sarah.j@enterprise.com",
                    company: "Global Corp",
                    interest: "enterprise",
                    message: "We're a 10,000+ employee organization looking to implement AI across multiple departments."
                  }
                },
                {
                  title: "Partnership Interest",
                  description: "Tech company seeking collaboration",
                  data: {
                    name: "David Chen",
                    email: "partnerships@techco.com", 
                    company: "TechCo Solutions",
                    interest: "partnership",
                    message: "We specialize in cloud infrastructure and would like to explore partnership opportunities."
                  }
                },
                {
                  title: "Demo Request",
                  description: "SME wanting to see capabilities",
                  data: {
                    name: "Maria Rodriguez",
                    email: "maria@smallbiz.com",
                    company: "Small Business Inc",
                    interest: "demo",
                    message: "Small manufacturing company interested in seeing how AI can help our operations."
                  }
                }
              ].map((scenario, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{scenario.title}</CardTitle>
                    <p className="text-sm text-gray-600">{scenario.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        // Auto-fill form with scenario data
                        const event = new CustomEvent('fillTestScenario', { 
                          detail: scenario.data 
                        });
                        window.dispatchEvent(event);
                        toast({
                          title: "Scenario Loaded",
                          description: `${scenario.title} data loaded into form`,
                        });
                      }}
                    >
                      Load Scenario Data
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactTest;