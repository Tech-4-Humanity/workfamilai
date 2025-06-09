
import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEnhancedChat } from '@/hooks/useEnhancedChat';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { HoloOrgSidebar } from './HoloOrgSidebar';
import { LanguageIndicator } from '@/components/ui/language-indicator';
import { getCulturalProfile, getSupportedLanguagesForMember } from '@/data/culturalProfiles';

interface EnhancedChatInterfaceProps {
  agentName: string;
  agentPersonality: string;
  agentBackground: string;
  agentColor?: string;
  onClose?: () => void;
}

export const EnhancedChatInterface = ({
  agentName,
  agentPersonality,
  agentBackground,
  agentColor = 'blue',
  onClose
}: EnhancedChatInterfaceProps) => {
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showOrgPanel, setShowOrgPanel] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  const {
    messages,
    isLoading,
    isCollaborativeMode,
    enhancedSendMessage,
    startCollaborativeSession,
    setIsCollaborativeMode
  } = useEnhancedChat();

  // Get language capabilities for agent
  const agentId = agentName.toLowerCase().replace(/\s+/g, '-');
  const supportedLanguages = getSupportedLanguagesForMember(agentId) || ['en'];
  const culturalProfile = getCulturalProfile(agentId);
  const primaryLanguage = culturalProfile?.primaryLanguage || 'en';

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    try {
      await enhancedSendMessage(
        inputMessage,
        agentName,
        agentPersonality,
        agentBackground,
        false
      );
      setInputMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleOrgMode = async () => {
    if (!isCollaborativeMode) {
      const sessionName = `Business Session with ${agentName}`;
      const participatingAgents = [agentName];
      
      // Add business collaborators based on recent messages
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.collaboration_suggestions) {
        lastMessage.collaboration_suggestions.forEach(suggestion => {
          if (!participatingAgents.includes(suggestion.agent)) {
            participatingAgents.push(suggestion.agent);
          }
        });
      }

      await startCollaborativeSession(sessionName, participatingAgents);
      setShowOrgPanel(true);
    } else {
      setIsCollaborativeMode(false);
      setShowOrgPanel(false);
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="relative">
          <ChatHeader
            agentName={agentName}
            agentColor={agentColor}
            isCollaborativeMode={isCollaborativeMode}
            showOrgPanel={showOrgPanel}
            onOrgModeToggle={handleOrgMode}
            onOrgPanelToggle={() => setShowOrgPanel(!showOrgPanel)}
            onClose={onClose}
          />
          
          {/* Language Capabilities Bar */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600">Language Capabilities:</span>
                <LanguageIndicator 
                  languages={supportedLanguages}
                  primaryLanguage={primaryLanguage}
                  variant="compact"
                  showPopover={true}
                />
              </div>
              {culturalProfile && (
                <div className="text-xs text-gray-500">
                  {culturalProfile.timeZone} • {culturalProfile.workingHours}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {/* Welcome message with language context */}
            {messages.length === 0 && (
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
            )}
            
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
        </ScrollArea>

        <ChatInput
          inputMessage={inputMessage}
          isRecording={isRecording}
          isLoading={isLoading}
          onInputChange={setInputMessage}
          onSendMessage={handleSendMessage}
          onRecordingToggle={() => setIsRecording(!isRecording)}
          onKeyPress={handleKeyPress}
        />
      </div>

      <HoloOrgSidebar showOrgPanel={showOrgPanel} />
    </div>
  );
};
