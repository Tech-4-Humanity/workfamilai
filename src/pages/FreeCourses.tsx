import { SimpleFooter } from '@/components/ui/simple-footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github, GraduationCap, Brain, Code, Zap, Award, Cloud, Users, Clock, Star, CheckCircle } from 'lucide-react';
import { useExternalLearningResources, getCoursesByCategory, type LearningResource } from '@/hooks/useExternalLearningResources';

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'intermediate': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
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
  const ProviderIcon = getIconForProvider(course.author_name);
  
  return (
    <Card className="group bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col">
      {/* Colored left border accent */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        course.difficulty_level?.toLowerCase() === 'beginner' ? 'bg-green-500' :
        course.difficulty_level?.toLowerCase() === 'intermediate' ? 'bg-orange-500' :
        'bg-red-500'
      }`} />
      
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <Badge 
            variant="secondary" 
            className={`${getDifficultyColor(course.difficulty_level || 'beginner')} font-semibold border`}
          >
            {course.difficulty_level || 'Beginner'}
          </Badge>
          <div className="flex items-center gap-2">
            {course.github_stars && (
              <Badge variant="outline" className="border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                <Star className="h-3 w-3 mr-1 fill-yellow-400" />
                {course.github_stars}
              </Badge>
            )}
            <Badge variant="outline" className="border-green-500/30 bg-green-500/10 text-green-400">
              <CheckCircle className="h-3 w-3 mr-1" />
              Free
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-xl mb-3 text-white group-hover:text-cyan-400 transition-colors">
          {course.title}
        </CardTitle>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <ProviderIcon className="h-4 w-4 text-cyan-400" />
          <span>{course.author_name}</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-gray-300 mb-4 line-clamp-3 flex-1">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-cyan-400" />
            <span>{course.estimated_hours} hours</span>
          </div>
        </div>
        
        {course.tags && course.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {course.tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs border-slate-600 bg-slate-700/50 text-gray-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 font-semibold h-11 mt-auto"
        >
          <a 
            href={course.resource_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Start Learning
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm font-medium mb-6">
                <span className="text-cyan-400">🎓 20+ FREE AI COURSES</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  FREE
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  AI LEARNING
                </span>
              </h1>
              
              <p className="text-2xl text-cyan-400/80 font-light mb-8 tracking-wide">
                AUGMENTEDHUMANITY.COACH
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">No Signup Required</h3>
                    <p className="text-gray-400">Start learning immediately with zero barriers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Curated by Experts</h3>
                    <p className="text-gray-400">Hand-picked resources from top AI institutions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">All Skill Levels</h3>
                    <p className="text-gray-400">From beginner to advanced topics covered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-4">20+</div>
                    <div className="text-xl text-cyan-400">Free Courses</div>
                    <div className="text-sm text-gray-400 mt-2">Zero Cost Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="h-4 bg-slate-700 rounded mb-4" />
                  <div className="h-3 bg-slate-700 rounded mb-2" />
                  <div className="h-3 bg-slate-700 rounded w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">Failed to load courses. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && (
          <Tabs defaultValue="foundational" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-slate-800/50 border border-slate-700">
              <TabsTrigger 
                value="foundational" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
              >
                Getting Started
              </TabsTrigger>
              <TabsTrigger 
                value="intermediate" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white"
              >
                Build & Deploy
              </TabsTrigger>
              <TabsTrigger 
                value="advanced" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Advanced Topics
              </TabsTrigger>
              <TabsTrigger 
                value="collections" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
              >
                Collections
              </TabsTrigger>
            </TabsList>

            <TabsContent value="foundational" className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-300">
                  Perfect for beginners and business leaders looking to understand AI fundamentals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorizedCourses.foundational.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-300">
                  For developers ready to build and deploy AI-powered applications
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorizedCourses.intermediate.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-300">
                  Deep dives into specialized AI topics and cutting-edge research
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorizedCourses.advanced.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collections" className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-300">
                  Curated collections and resource directories from trusted sources
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorizedCourses.collections.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        )}

        {/* Info Card */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6">
              <p className="text-gray-300">
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
