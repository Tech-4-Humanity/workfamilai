import { SimpleFooter } from '@/components/ui/simple-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink, Github, BookOpen, GraduationCap, Brain, Code, Zap, Award, Cloud, Users, Clock, Star, CheckCircle2, AlertCircle } from 'lucide-react';
import { useExternalLearningResources, getCoursesByCategory, type LearningResource } from '@/hooks/useExternalLearningResources';

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
    case 'intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const getIconForProvider = (authorName: string): any => {
  const lowerAuthor = authorName.toLowerCase();
  if (lowerAuthor.includes('microsoft') || lowerAuthor.includes('github')) return Github;
  if (lowerAuthor.includes('anthropic')) return GraduationCap;
  if (lowerAuthor.includes('hugging')) return Brain;
  if (lowerAuthor.includes('deeplearning')) return Code;
  if (lowerAuthor.includes('fast.ai')) return Zap;
  if (lowerAuthor.includes('google')) return Award;
  if (lowerAuthor.includes('aws')) return Cloud;
  return Users;
};

const CourseCard = ({ course }: { course: LearningResource }) => {
  const IconComponent = getIconForProvider(course.author_name);
  
  return (
    <Card className="hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={getDifficultyColor(course.difficulty_level)}>
                {course.difficulty_level}
              </Badge>
              {!course.requires_signup && (
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  No Signup
                </Badge>
              )}
            </div>
            <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
            <CardDescription className="text-sm">
              by {course.author_name}
            </CardDescription>
          </div>
          <IconComponent className="h-8 w-8 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 flex-1 flex flex-col">
        <p className="text-gray-700 flex-1">{course.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.estimated_hours}h</span>
          </div>
          {course.github_stars && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{course.github_stars.toLocaleString()}</span>
            </div>
          )}
        </div>

        {course.tags && course.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {course.prerequisites && (
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
            <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-800">
              <span className="font-semibold">Prerequisites:</span> {course.prerequisites}
            </p>
          </div>
        )}

        <Button asChild className="w-full mt-auto">
          <a 
            href={course.resource_url || '#'} 
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
};

const FreeCourses = () => {
  const { data: courses, isLoading, error } = useExternalLearningResources();
  const categorizedCourses = getCoursesByCategory(courses);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
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

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <Card className="max-w-2xl mx-auto bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <p className="text-red-700">
                Failed to load courses. Please try again later.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Tabbed Content */}
        {!isLoading && !error && courses && (
          <Tabs defaultValue="foundational" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 max-w-4xl mx-auto mb-8">
              <TabsTrigger value="foundational">
                🎯 Getting Started
              </TabsTrigger>
              <TabsTrigger value="intermediate">
                ⚙️ Build & Deploy
              </TabsTrigger>
              <TabsTrigger value="advanced">
                🧠 Advanced Topics
              </TabsTrigger>
              <TabsTrigger value="collections">
                📚 Collections
              </TabsTrigger>
            </TabsList>

            <TabsContent value="foundational" className="space-y-8">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Perfect for beginners and business leaders looking to understand AI fundamentals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedCourses.foundational.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-8">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  For developers ready to build and deploy AI-powered applications
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedCourses.intermediate.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-8">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Deep dives into specialized AI topics and cutting-edge research
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorizedCourses.advanced.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collections" className="space-y-8">
              <div className="text-center mb-6">
                <p className="text-gray-600">
                  Curated collections and resource directories from trusted sources
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categorizedCourses.collections.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Info Card */}
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

      <SimpleFooter />
    </div>
  );
};

export default FreeCourses;