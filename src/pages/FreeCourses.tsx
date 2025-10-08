import { Footer } from '@/components/ui/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, BookOpen, GraduationCap } from 'lucide-react';

const FreeCourses = () => {
  const courses = [
    {
      title: "AI Agents for Beginners",
      provider: "Microsoft",
      description: "A comprehensive 8-lesson course teaching the fundamentals of AI agents, from basic concepts to building sophisticated multi-agent systems. Perfect for developers looking to understand and implement AI agents in their applications.",
      link: "https://github.com/microsoft/ai-agents-for-beginners",
      icon: Github,
      topics: ["AI Agent Fundamentals", "Multi-Agent Systems", "Agent Communication", "Practical Implementation"]
    },
    {
      title: "Anthropic AI Academy",
      provider: "Anthropic",
      description: "Enterprise-level AI education at zero cost. Master AI fundamentals, Claude for business work, building AI agents, and advanced integration skills. This comprehensive academy transforms executives and consultants from AI-curious to AI-fluent.",
      link: "https://lnkd.in/e_m2u-ju",
      icon: GraduationCap,
      topics: [
        "AI Fundamentals for Business Leaders",
        "Claude for Business Work",
        "Building AI Agents",
        "Model Context Protocol (MCP)",
        "Claude Code Automation",
        "Claude + Amazon Bedrock",
        "Anthropic API Development",
        "Advanced MCP Topics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free AI Learning Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore curated free courses and resources to deepen your understanding of AI agents, 
            multi-agent systems, and augmented humanity concepts.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card key={course.title} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <CardDescription className="text-base">
                        by {course.provider}
                      </CardDescription>
                    </div>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{course.description}</p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-900">Topics Covered:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {course.topics.map((topic) => (
                        <li key={topic} className="text-sm text-gray-600">{topic}</li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <a 
                      href={course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Start Learning
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <p className="text-gray-700">
                More free courses and resources are being curated. Check back regularly for updates 
                on AI agents, augmented humanity, and organizational intelligence topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreeCourses;