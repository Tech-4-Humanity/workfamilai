
import React from 'react';

interface ChatWelcomeMessageProps {
  supportedLanguages: string[];
  culturalProfile: any;
  hasMessages: boolean;
}

export const ChatWelcomeMessage = ({
  supportedLanguages,
  culturalProfile,
  hasMessages
}: ChatWelcomeMessageProps) => {
  if (hasMessages) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <p className="text-sm text-blue-800">
        <strong>Welcome!</strong> I can communicate with you in{' '}
        {supportedLanguages.length > 1 
          ? `${supportedLanguages.length} languages` 
          : 'English'
        }. My primary language is{' '}
        <strong>{culturalProfile ? culturalProfile.primaryLanguage.toUpperCase() : 'EN'}</strong>.
        {culturalProfile && (
          <span className="block mt-2 text-xs">
            Cultural Context: {culturalProfile.culturalBackground}
          </span>
        )}
      </p>
    </div>
  );
};
