import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  honeypot: string; // For spam protection
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    { value: 'enterprise', label: 'Enterprise Solutions' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'demo', label: 'Live Demo Access' },
    { value: 'integration', label: 'AI Agent Integration' },
    { value: 'consultation', label: 'Strategic Consultation' },
    { value: 'other', label: 'Other Inquiry' }
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check honeypot field - if filled, it's likely spam
      if (formData.honeypot.trim() !== '') {
        toast({
          title: "Submission Failed",
          description: "Please complete the form properly.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Submit to our edge function
      const { error } = await supabase.functions.invoke('submit-contact-form', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          interest: formData.interest,
          message: formData.message,
          honeypot: formData.honeypot
        }
      });

      if (error) {
        throw error;
      }
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! A workfamilyai family member will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        interest: '',
        message: '',
        honeypot: ''
      });
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = "There was an error sending your message. Please try again.";
      
      if (error.message?.includes('Too many requests')) {
        errorMessage = "Too many submissions. Please wait an hour before trying again.";
      } else if (error.message?.includes('Missing required fields')) {
        errorMessage = "Please fill in all required fields.";
      } else if (error.message?.includes('Invalid email')) {
        errorMessage = "Please enter a valid email address.";
      }
      
      toast({
        title: "Send Failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Thank You for Connecting!
          </h3>
          <p className="text-green-700 mb-4">
            Your message has been received by the workfamilyai family. 
            We'll respond within 24 hours with personalized insights.
          </p>
          <Button 
            variant="outline" 
            onClick={() => setIsSubmitted(false)}
            className="border-green-300 text-green-700 hover:bg-green-100"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-blue-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl text-gray-800">
          <Mail className="h-6 w-6 text-blue-600" />
          Connect with workfamilyai
        </CardTitle>
        <p className="text-gray-600">
          Get personalized insights from our AI family leaders
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4 text-blue-600" />
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center gap-2">
                <Building className="h-4 w-4 text-blue-600" />
                Company/Organization
              </Label>
              <Input
                id="company"
                type="text"
                placeholder="Your organization name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="border-gray-300 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interest" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                Area of Interest *
              </Label>
              <Select 
                value={formData.interest} 
                onValueChange={(value) => handleInputChange('interest', value)}
                required
              >
                <SelectTrigger className="border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="Select your primary interest" />
                </SelectTrigger>
                <SelectContent>
                  {interestOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us about your organization's challenges and how the workfamilyai family might help..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
              rows={4}
              className="border-gray-300 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Honeypot field - hidden from users but visible to bots */}
          <Input
            type="text"
            value={formData.honeypot}
            onChange={(e) => handleInputChange('honeypot', e.target.value)}
            className="absolute left-[-9999px] opacity-0"
            tabIndex={-1}
            autoComplete="off"
          />

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message to workfamilyai
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted by our AI family members 
            regarding your inquiry. Response time: typically within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};