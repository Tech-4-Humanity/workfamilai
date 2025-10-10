import { useState } from "react";
import { SimpleFooter } from '@/components/ui/simple-footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RobustImage } from "@/components/ui/robust-image";
import { NewsletterSignupModal } from "@/components/courses/NewsletterSignupModal";
import { ResourceTypeBadge } from "@/components/courses/ResourceTypeBadge";
import { ExternalLink, Github, GraduationCap, Brain, Code, Zap, Award, Cloud, Users, Clock, Star, CheckCircle, User, Briefcase } from 'lucide-react';
import { useExternalLearningResources, getCoursesByCategory, useTrackCourseClick, type LearningResource } from '@/hooks/useExternalLearningResources';
import { analytics } from "@/utils/analytics";
import { Link } from "react-router-dom";

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

const CourseCard = ({ course, onStartLearning }: { course: LearningResource; onStartLearning: (course: LearningResource) => void }) => {
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
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant="secondary" 
              className={`${getDifficultyColor(course.difficulty_level || 'beginner')} font-semibold border`}
            >
              {course.difficulty_level || 'Beginner'}
            </Badge>
            <ResourceTypeBadge 
              resourceType={course.resource_type} 
              isInteractive={course.is_interactive}
            />
          </div>
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
          {course.view_count > 0 && (
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <span className="text-cyan-400">👁</span>
                {course.view_count.toLocaleString()} views
              </span>
              {course.click_count > 0 && (
                <span className="flex items-center gap-1">
                  <span className="text-green-400">✓</span>
                  {course.click_count.toLocaleString()} enrolled
                </span>
              )}
            </div>
          )}
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
          onClick={() => onStartLearning(course)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-cyan-500/20 transition-all"
        >
          {course.resource_type === 'tool' ? 'Try Now' : course.resource_type === 'template' ? 'Get Template' : 'Start Learning'}
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

const FreeCourses = () => {
  const { data: courses, isLoading, error } = useExternalLearningResources();
  const categorizedCourses = getCoursesByCategory(courses);
  const [selectedCourse, setSelectedCourse] = useState<LearningResource | null>(null);
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const { mutate: trackClick } = useTrackCourseClick();

  // Check if user already subscribed recently
  const hasRecentSubscription = () => {
    const subscribedAt = localStorage.getItem("newsletter_subscribed_at");
    if (!subscribedAt) return false;
    
    const daysSinceSubscription = (Date.now() - new Date(subscribedAt).getTime()) / (1000 * 60 * 60 * 24);
    return daysSinceSubscription < 30; // Don't ask again for 30 days
  };

  const handleStartLearning = (course: LearningResource) => {
    setSelectedCourse(course);
    
    // If user subscribed recently, skip modal and go directly to course
    if (hasRecentSubscription()) {
      handleNavigateToCourse(course);
    } else {
      setShowNewsletterModal(true);
    }
  };

  const handleNavigateToCourse = (course: LearningResource) => {
    // Track click in database
    trackClick(course.id);
    
    // Track analytics
    analytics.track("course_started", {
      course_name: course.title,
      category: course.category,
      difficulty: course.difficulty_level,
      provider: course.author_name,
    });

    // Open course in new tab
    if (course.source_url) {
      window.open(course.source_url, "_blank", "noopener,noreferrer");
    }
  };

  const handleNewsletterSuccess = () => {
    if (selectedCourse) {
      handleNavigateToCourse(selectedCourse);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Priya Sharma - Matching Free Agents Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900/40 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left: Content */}
            <div className="space-y-8">
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2 text-sm font-bold tracking-wide">
                ✨ 50+ FREE AI & PM COURSES
              </Badge>
              
              <div className="space-y-2">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                  <span className="block text-cyan-400">
                    FREE AI
                  </span>
                  <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                    FREE LEARNING
                  </span>
                </h1>
                
                <p className="text-lg text-slate-400 font-medium tracking-wider uppercase pt-2">
                  WORKFAMILY.AI
                </p>
              </div>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-lg text-slate-200 font-medium">Beginner to Advanced Courses</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-lg text-slate-200 font-medium">Hands-On AI Projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-lg text-slate-200 font-medium">Industry Expert Instructors</span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-cyan-400 font-semibold text-lg">
                  Unlock Your AI Potential
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Start your AI transformation journey with our expert assessments. Discover opportunities, calculate benefits, and build your strategic roadmap.
                </p>
              </div>
            </div>

            {/* Right: Priya's Circular Image */}
            <div className="relative lg:flex hidden justify-center items-center">
              <div className="relative w-[500px] h-[500px]">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-2xl"></div>
                
                {/* Image container - Fully circular */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-slate-700/50 shadow-2xl shadow-cyan-500/20">
                  <RobustImage
                    src={[
                      '/leaders/priya-sharma.png',
                      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'
                    ]}
                    alt="Priya Sharma - Chief People & Learning Officer"
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <GraduationCap className="w-32 h-32 text-white/50" />
                      </div>
                    }
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute bottom-8 right-8 bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-cyan-400 rounded-full px-6 py-3 shadow-xl shadow-cyan-500/30">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-lg">50+ Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-slate-800/50 border border-slate-700">
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
                value="aiPm" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white flex items-center gap-1"
              >
                <Briefcase className="w-4 h-4" />
                AI PM
                <Badge variant="secondary" className="ml-1 text-xs bg-white/20">30+</Badge>
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
                    <CourseCard key={course.id} course={course} onStartLearning={handleStartLearning} />
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
                    <CourseCard key={course.id} course={course} onStartLearning={handleStartLearning} />
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
                    <CourseCard key={course.id} course={course} onStartLearning={handleStartLearning} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="aiPm" className="space-y-6">
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Master AI Product Management
                    </h3>
                    <p className="text-gray-300 mb-4">
                      30+ curated resources covering the full spectrum of AI PM skills: prompt engineering, 
                      AI agents, evaluation strategies, prototyping, PRDs, and career development. Progress 
                      from fundamentals to advanced topics with interactive tools and production-ready templates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/30">
                        Prompt Engineering
                      </Badge>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                        AI Agents & Workflows
                      </Badge>
                      <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                        Evaluation & Testing
                      </Badge>
                      <Badge variant="outline" className="bg-orange-500/10 text-orange-400 border-orange-500/30">
                        Prototyping Tools
                      </Badge>
                      <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/30">
                        Career Resources
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorizedCourses.aiPm?.map((course) => (
                    <CourseCard key={course.id} course={course} onStartLearning={handleStartLearning} />
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
                    <CourseCard key={course.id} course={course} onStartLearning={handleStartLearning} />
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

      {/* Newsletter Signup Modal */}
      <NewsletterSignupModal
        open={showNewsletterModal}
        onOpenChange={setShowNewsletterModal}
        courseName={selectedCourse?.title}
        courseCategory={selectedCourse?.category}
        onSuccess={handleNewsletterSuccess}
      />
    </div>
  );
};

export default FreeCourses;
