import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactForm } from '@/components/ui/contact-form';
import { SimpleFooter } from '@/components/ui/simple-footer';
import { Mail, MessageSquare, Clock } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const workPackage = location.state?.workPackage;

  useEffect(() => {
    if (workPackage) {
      // Pre-fill form with work package context
      const messageField = document.getElementById('message') as HTMLTextAreaElement;
      if (messageField && messageField.value === '') {
        messageField.value = `I'm interested in learning more about: ${workPackage}`;
      }
    }
  }, [workPackage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Get in Touch
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Connect with Us
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how our AI agents can transform your organization
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-blue-200">
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground">info@workfamilyai.org</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-purple-200">
                <Clock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-200">
                <MessageSquare className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Personalized</h3>
                <p className="text-sm text-muted-foreground">AI-powered insights</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
}
