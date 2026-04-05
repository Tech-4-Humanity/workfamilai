import React, { useState, useMemo } from 'react';
import { SimpleFooter } from '@/components/ui/simple-footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RobustImage } from '@/components/ui/robust-image';
import { useWorkPackages } from '@/hooks/useWorkPackages';
import { useWorkPackageQuote } from '@/hooks/useWorkPackageQuote';
import { getLeaderImageFallbacks } from '@/utils/supabase-images';
import { 
  Brain, Users, Lightbulb, Shield, Sparkles, Target, TrendingUp, Globe,
  Search, Clock, Zap, CheckCircle2, ExternalLink, ArrowUpDown, Briefcase,
  GraduationCap, Network, Lock, Rocket, Star, Check
} from 'lucide-react';
import { analytics } from '@/utils/analytics';
import { WorkPackageDetailModal } from '@/components/augmented-humanity/WorkPackageDetailModal';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { WFAIFrontDoor } from '@/components/wfai/FrontDoor';

const TopicBadge = ({ 
  icon: Icon, 
  text, 
  color 
}: { 
  icon: any; 
  text: string; 
  color: 'purple' | 'blue' | 'yellow' | 'cyan' | 'pink' | 'orange';
}) => {
  const colorClasses = {
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    pink: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
  };

  return (
    <div className={`
      ${colorClasses[color]}
      border rounded-lg px-3 py-2
      flex items-center gap-2
      transition-all duration-300
      hover:scale-105 hover:shadow-lg
      hover:bg-opacity-20
    `}>
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-xs md:text-sm font-medium">{text}</span>
    </div>
  );
};

const WorkPackages = () => {
  const { data: workPackages, isLoading } = useWorkPackages();
  const { submitQuote, isSubmitting } = useWorkPackageQuote();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  const sofiaSources = getLeaderImageFallbacks('Sofia Rodriguez');

  // Get unique categories
  const categories = useMemo(() => {
    if (!workPackages) return [];
    const uniqueCategories = [...new Set(workPackages.map(pkg => pkg.category))];
    return uniqueCategories;
  }, [workPackages]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    if (!workPackages) return [];
    let filtered = [...workPackages];
    
    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(pkg =>
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.customer_outcome?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(pkg => pkg.category === selectedCategory);
    }
    
    // Sort
    switch (sortBy) {
      case "duration":
        return filtered.sort((a, b) => 
          (a.delivery_timeframe_days || 999) - (b.delivery_timeframe_days || 999)
        );
      case "price":
        return filtered.sort((a, b) => 
          (a.base_price || 0) - (b.base_price || 0)
        );
      case "category":
      default:
        return filtered.sort((a, b) => 
          a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
        );
    }
  }, [workPackages, searchTerm, selectedCategory, sortBy]);

  // Group services by category for accordion
  const groupedServices = useMemo(() => {
    if (!filteredServices) return {};
    
    const grouped: Record<string, any[]> = {};
    filteredServices.forEach(service => {
      if (!grouped[service.category]) {
        grouped[service.category] = [];
      }
      grouped[service.category].push(service);
    });
    
    return grouped;
  }, [filteredServices]);

  // Featured/popular services (top 6 by tier or price)
  const featuredServices = useMemo(() => {
    if (!workPackages) return [];
    return [...workPackages]
      .filter(pkg => pkg.tier === 'Premium' || pkg.tier === 'Enterprise')
      .slice(0, 6);
  }, [workPackages]);

  const handleRequestQuote = (pkg: any) => {
    analytics.track('consultation_requested', {
      service_name: pkg.name,
      category: pkg.category,
      tier: pkg.tier,
    });
    
    // Open the modal with selected package
    setSelectedPackage(pkg);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading AI transformation services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <WFAIFrontDoor />
      
      {/* Dark Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900/40 to-slate-950 border-b border-slate-800">
        {/* Decorative glowing orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-sm px-4 py-2">
                ✨ {workPackages?.length || 25}+ PROFESSIONAL AI SERVICES
              </Badge>
              
              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-cyan-400">AI TRANSFORMATION</span>
                <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Professional AI implementation, training, and consulting services designed to amplify 
                your organization's capabilities while preserving cultural wisdom and authentic leadership.
              </p>
              
              {/* Checkmarks */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-base">Strategy to Execution Services</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-base">Expert-Led Implementation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-base">Industry-Recognized Expertise</span>
                </div>
              </div>
              
              {/* Topic badges grid */}
              <div className="grid grid-cols-2 gap-3">
                <TopicBadge icon={Brain} text="AI Strategy" color="purple" />
                <TopicBadge icon={Users} text="Training & Development" color="blue" />
                <TopicBadge icon={Lightbulb} text="Innovation Labs" color="yellow" />
                <TopicBadge icon={Shield} text="Security & Governance" color="cyan" />
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{workPackages?.length || 25}+ Service Packages</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-400" />
                  <span>{categories.length} Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>Proven ROI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>Global Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sofia's Image */}
            <div className="relative flex justify-center items-center lg:justify-end">
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px]">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-orange-500/30 blur-2xl"></div>
                
                {/* Image container - Fully circular */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-slate-700/50 shadow-2xl shadow-cyan-500/20">
                  <RobustImage
                    src={sofiaSources}
                    alt="Sofia Rodriguez - Chief Sales Officer"
                    className="w-full h-full object-cover"
                    fallback={
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <Briefcase className="w-24 h-24 text-slate-400" />
                      </div>
                    }
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute bottom-8 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-cyan-400 rounded-full px-5 py-3 shadow-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold text-base">{workPackages?.length || 25}+ Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sofia Introduction Section */}
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 border-b border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-400/30">
              <RobustImage 
                src={sofiaSources} 
                alt="Sofia Rodriguez"
                className="w-full h-full object-cover"
                fallback={
                  <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-slate-400" />
                  </div>
                }
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400">Meet Sofia Rodriguez</h3>
              <p className="text-slate-300">Chief Sales Officer</p>
              <p className="text-sm text-slate-400 italic mt-2">
                "Success comes from building genuine relationships and delivering real value"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12">
          
          {/* Featured Services Section */}
          {featuredServices.length > 0 && (
            <div className="mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 rounded-2xl border-2 border-cyan-500/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 font-bold text-sm">
                    ⭐ MOST POPULAR
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Top Requested Services
                  </h2>
                </div>
                
                <p className="text-slate-300 text-base md:text-lg mb-8">
                  Our most sought-after AI transformation services, proven across diverse organizations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredServices.map(service => (
                    <ServiceCard 
                      key={service.id} 
                      pkg={service} 
                      onRequestQuote={handleRequestQuote}
                      featured
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services by name, category, or outcome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-cyan-500"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px] bg-slate-800/50 border-slate-700 text-slate-200">
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                <SelectItem value="category">By Category</SelectItem>
                <SelectItem value="duration">By Duration</SelectItem>
                <SelectItem value="price">By Price</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Category Filter Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 bg-slate-800/50 border border-slate-700 p-1 mb-8">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white"
              >
                All ({workPackages?.length || 0})
              </TabsTrigger>
              {categories.slice(0, 7).map(category => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-xs md:text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Services Display */}
          <div className="space-y-4">
            {/* Results count bar */}
            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="text-sm">
                  {filteredServices.length} Service{filteredServices.length !== 1 ? 's' : ''} Found
                </Badge>
                {selectedCategory !== 'all' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategory('all')}
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                  >
                    Clear Filter
                  </Button>
                )}
              </div>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 max-w-md mx-auto">
                  <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">No services found</h3>
                  <p className="text-slate-500">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            ) : selectedCategory === 'all' ? (
              // Accordion view for all categories
              <Accordion type="multiple" defaultValue={categories.slice(0, 2)} className="space-y-4">
                {Object.entries(groupedServices).map(([category, services]) => (
                  <AccordionItem
                    key={category}
                    value={category}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:bg-slate-700/30 hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                            {category}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-slate-400 border-slate-600">
                          {services.length} service{services.length !== 1 ? 's' : ''}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((pkg: any) => (
                          <ServiceCard
                            key={pkg.id}
                            pkg={pkg}
                            onRequestQuote={handleRequestQuote}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              // Single category view
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{selectedCategory}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((pkg: any) => (
                    <ServiceCard
                      key={pkg.id}
                      pkg={pkg}
                      onRequestQuote={handleRequestQuote}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      <SimpleFooter />
      
      {/* Quote Request Modal */}
      <WorkPackageDetailModal
        workPackage={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ 
  pkg, 
  onRequestQuote, 
  featured = false 
}: { 
  pkg: any; 
  onRequestQuote: (pkg: any) => void;
  featured?: boolean;
}) => {
  const getTierColor = (tier: string | null) => {
    if (!tier) return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    switch (tier.toLowerCase()) {
      case 'starter': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'professional': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'premium': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'enterprise': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const benefits = pkg.stakeholder_benefits?.primary || [];
  const displayBenefits = Array.isArray(benefits) ? benefits.slice(0, 3) : [];

  return (
    <Card className={`
      group relative overflow-hidden h-full flex flex-col transition-all duration-300
      ${featured
        ? 'bg-gradient-to-br from-slate-800/80 via-slate-800/50 to-slate-900/80 border-2 border-cyan-500/40 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20'
        : 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10'
      }
      hover:-translate-y-1
    `}>
      {/* Colored left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500" />
      
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 text-white font-bold text-xs shadow-lg animate-pulse">
            ⭐ POPULAR
          </Badge>
        </div>
      )}
      
      <CardHeader>
        {/* Category & tier badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-semibold">
            {pkg.category}
          </Badge>
          {pkg.tier && (
            <Badge className={`${getTierColor(pkg.tier)} font-semibold border`}>
              {pkg.tier}
            </Badge>
          )}
        </div>
        
        {/* Title */}
        <CardTitle className="text-lg md:text-xl text-white group-hover:text-cyan-400 transition-colors line-clamp-2 mb-2">
          {pkg.name}
        </CardTitle>
        
        {/* Subcategory */}
        {pkg.subcategory && (
          <p className="text-xs text-slate-400 mb-2">{pkg.subcategory}</p>
        )}
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {pkg.description}
        </p>
        
        {/* Target Audience */}
        {pkg.target_audience && (
          <div className="flex items-start gap-2 mb-3 p-2 bg-slate-700/30 rounded-lg border border-slate-600/50">
            <Users className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-cyan-400 mb-1">Perfect For:</p>
              <p className="text-xs text-slate-300 line-clamp-2">{pkg.target_audience}</p>
            </div>
          </div>
        )}
        
        {/* Customer Outcome */}
        {pkg.customer_outcome && (
          <div className="flex items-start gap-2 mb-3 p-2 bg-slate-700/30 rounded-lg border border-slate-600/50">
            <Target className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-green-400 mb-1">You'll Achieve:</p>
              <p className="text-xs text-slate-300 line-clamp-2">{pkg.customer_outcome}</p>
            </div>
          </div>
        )}
        
        {/* Key benefits with checkmarks */}
        {displayBenefits.length > 0 && (
          <div className="space-y-2 mb-3">
            {displayBenefits.map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">{benefit}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Tags */}
        {pkg.tags && pkg.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {pkg.tags.slice(0, 3).map((tag: string, idx: number) => (
              <Badge key={idx} variant="outline" className="text-xs border-slate-600 bg-slate-900/50 text-slate-400">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {/* Timeline & AI level badges */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {pkg.delivery_timeframe_days && (
            <Badge variant="outline" className="text-xs border-slate-600 bg-slate-700/50 text-slate-300">
              <Clock className="h-3 w-3 mr-1" />
              {pkg.delivery_timeframe_days} days
            </Badge>
          )}
          {pkg.ai_leverage_level && (
            <Badge variant="outline" className="text-xs border-slate-600 bg-slate-700/50 text-slate-300">
              <Zap className="h-3 w-3 mr-1" />
              {pkg.ai_leverage_level}
            </Badge>
          )}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={() => onRequestQuote(pkg)}
            variant="outline"
            size="sm"
            className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            View Details
          </Button>
          <Button
            onClick={() => onRequestQuote(pkg)}
            size="sm"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold"
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkPackages;
