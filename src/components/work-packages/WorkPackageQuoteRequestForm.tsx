import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WorkPackage } from "@/hooks/useWorkPackages";
import { Loader2, Building2, Users, Target, Settings, TrendingUp } from "lucide-react";

const quoteRequestSchema = z.object({
  // Contact Info
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(10, "Invalid phone number").max(20).optional().or(z.literal("")),
  jobTitle: z.string().trim().max(100).optional(),
  companyName: z.string().trim().min(1, "Company name is required").max(200),
  
  // Organization Profile
  companySize: z.string().optional(),
  industry: z.string().optional(),
  primaryLocation: z.string().optional(),
  hasMultipleLocations: z.boolean().optional(),
  orgMaturityLevel: z.string().optional(),
  
  // Work Package Context
  pricingTierInterest: z.string().optional(),
  preferredTimeline: z.string().optional(),
  budgetRange: z.string().optional(),
  
  // Situation Assessment
  challengeDescription: z.string().max(1000).optional(),
  currentStateDescription: z.string().max(1000).optional(),
  successCriteria: z.string().max(1000).optional(),
  complianceRequirements: z.string().max(500).optional(),
  
  // Technical Context
  existingSystems: z.array(z.string()).optional(),
  cloudEnvironment: z.string().optional(),
  dataClassification: z.string().optional(),
  integrationRequirements: z.string().max(500).optional(),
  authMethod: z.string().optional(),
  
  // Team & Stakeholders
  numberOfUsers: z.coerce.number().positive().optional().or(z.literal("")),
  departmentsInvolved: z.array(z.string()).optional(),
  decisionMakers: z.string().max(300).optional(),
  internalChampion: z.string().max(100).optional(),
  implementationTeamSize: z.coerce.number().positive().optional().or(z.literal("")),
  
  // Success Metrics
  primaryKpis: z.array(z.string()).optional(),
  expectedRoiTimeline: z.string().optional(),
  knownConstraints: z.string().max(500).optional(),
  previousExperience: z.boolean().optional(),
  previousExperienceDetails: z.string().max(500).optional(),
  
  // Additional
  referralSource: z.string().optional(),
  preferredContactMethod: z.string().optional(),
  bestTimeToContact: z.string().max(100).optional(),
  additionalInfo: z.string().max(1000).optional(),
});

type QuoteRequestFormData = z.infer<typeof quoteRequestSchema>;

interface WorkPackageQuoteRequestFormProps {
  workPackage: WorkPackage;
  onSuccess: () => void;
  onCancel: () => void;
}

export const WorkPackageQuoteRequestForm = ({
  workPackage,
  onSuccess,
  onCancel,
}: WorkPackageQuoteRequestFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<QuoteRequestFormData>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      hasMultipleLocations: false,
      previousExperience: false,
      existingSystems: [],
      departmentsInvolved: [],
      primaryKpis: [],
    },
  });

  const onSubmit = async (data: QuoteRequestFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        "https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/submit-work-package-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            workPackageId: workPackage.id,
            workPackageName: workPackage.name,
            ...data,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Contact Information
          </CardTitle>
          <CardDescription>How should we reach you?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...form.register("name")}
                placeholder="John Smith"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="john@company.com"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-destructive mt-1">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                {...form.register("phone")}
                placeholder="+61 400 000 000"
              />
            </div>
            <div>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                id="jobTitle"
                {...form.register("jobTitle")}
                placeholder="Head of Operations"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Organization Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Organization Profile
          </CardTitle>
          <CardDescription>Tell us about your organization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              {...form.register("companyName")}
              placeholder="Acme Corporation"
            />
            {form.formState.errors.companyName && (
              <p className="text-sm text-destructive mt-1">
                {form.formState.errors.companyName.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="companySize">Company Size</Label>
              <Select onValueChange={(value) => form.setValue("companySize", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                {...form.register("industry")}
                placeholder="e.g., Healthcare"
              />
            </div>

            <div>
              <Label htmlFor="primaryLocation">Primary Location</Label>
              <Input
                id="primaryLocation"
                {...form.register("primaryLocation")}
                placeholder="e.g., Sydney, Australia"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="orgMaturityLevel">Organizational Maturity Level</Label>
            <Select onValueChange={(value) => form.setValue("orgMaturityLevel", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select maturity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Initial">Initial</SelectItem>
                <SelectItem value="Developing">Developing</SelectItem>
                <SelectItem value="Defined">Defined</SelectItem>
                <SelectItem value="Managed">Managed</SelectItem>
                <SelectItem value="Optimizing">Optimizing</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Work Package Context */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Work Package Context
          </CardTitle>
          <CardDescription>Selected: {workPackage.name}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="pricingTierInterest">Pricing Tier Interest</Label>
              <Select onValueChange={(value) => form.setValue("pricingTierInterest", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Essential">Essential</SelectItem>
                  <SelectItem value="Professional">Professional</SelectItem>
                  <SelectItem value="Premium">Premium</SelectItem>
                  <SelectItem value="Enterprise">Enterprise</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="preferredTimeline">Preferred Timeline</Label>
              <Select onValueChange={(value) => form.setValue("preferredTimeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30 days">30 days</SelectItem>
                  <SelectItem value="60 days">60 days</SelectItem>
                  <SelectItem value="90 days">90 days</SelectItem>
                  <SelectItem value="Custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="budgetRange">Budget Range</Label>
              <Select onValueChange={(value) => form.setValue("budgetRange", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<$50k">Less than $50k</SelectItem>
                  <SelectItem value="$50k-$100k">$50k - $100k</SelectItem>
                  <SelectItem value="$100k-$250k">$100k - $250k</SelectItem>
                  <SelectItem value="$250k+">$250k+</SelectItem>
                  <SelectItem value="TBD">To be determined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Situation Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Situation Assessment
          </CardTitle>
          <CardDescription>Help us understand your needs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="challengeDescription">What challenge or opportunity prompted this inquiry?</Label>
            <Textarea
              id="challengeDescription"
              {...form.register("challengeDescription")}
              placeholder="Describe the challenge you're facing..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="currentStateDescription">Describe your current state</Label>
            <Textarea
              id="currentStateDescription"
              {...form.register("currentStateDescription")}
              placeholder="Tell us about your current processes and systems..."
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="successCriteria">What does success look like?</Label>
            <Textarea
              id="successCriteria"
              {...form.register("successCriteria")}
              placeholder="Define what success means for your organization..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Success Metrics
          </CardTitle>
          <CardDescription>How will you measure success?</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="expectedRoiTimeline">Expected ROI Timeline</Label>
            <Select onValueChange={(value) => form.setValue("expectedRoiTimeline", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3 months">3 months</SelectItem>
                <SelectItem value="6 months">6 months</SelectItem>
                <SelectItem value="12 months">12 months</SelectItem>
                <SelectItem value="24 months+">24 months+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              {...form.register("additionalInfo")}
              placeholder="Any other details you'd like to share..."
              rows={4}
            />
          </div>
        </CardContent>
      </Card>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Quote Request
        </Button>
      </div>
    </form>
  );
};
