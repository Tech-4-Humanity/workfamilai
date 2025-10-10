import React from 'react';
import { ContactForm } from './contact-form';

export const SimpleFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        
        {/* Simple Branding */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            workfamilyai
          </h2>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 pt-4 border-t text-center">
          <p>workfamilyai • Tech 4 Humanity • © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
