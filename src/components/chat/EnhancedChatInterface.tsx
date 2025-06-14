import React, { useState } from 'react';
import { useEnhancedChat } from '@/hooks/useEnhancedChat';
import { ChatHeader } from './ChatHeader';
import { ChatLanguageBar } from './ChatLanguageBar';
import { ChatContainer } from './ChatContainer';
import { ChatInput } from './ChatInput';
import { HoloOrgSidebar } from './HoloOrgSidebar';
import { getAgentCulturalProfile, getAgentSupportedLanguages, getAgentPrimaryLanguage } from '@/utils/agent-cultural-mapping';
import { getAgentImageUrl } from '@/utils/agent-images';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  
  const {
    messages,
    isCollaborativeMode,
    enhancedSendMessage,
    startCollaborativeSession,
    setIsCollaborativeMode
  } = useEnhancedChat();

  // Get language capabilities for agent using the new mapping functions
  console.log('EnhancedChatInterface Debug - Agent setup:', {
    agentName,
    agentColor,
    agentPersonality: agentPersonality.substring(0, 50) + '...'
  });
  
  const supportedLanguages = getAgentSupportedLanguages(agentName);
  const culturalProfile = getAgentCulturalProfile(agentName);  
  const primaryLanguage = getAgentPrimaryLanguage(agentName);
  const agentImageUrl = getAgentImageUrl(agentName, 'General');
  
  console.log('Final language and image data:', { 
    agentName,
    supportedLanguages, 
    primaryLanguage, 
    culturalProfile: !!culturalProfile,
    agentImageUrl 
  });

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartRecording = async () => {
    setIsRecording(true);
    // Voice recording logic would go here
  };

  const handleStopRecording = () => {
    setIsRecording(false);
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
            agentPersonality={agentPersonality}
            agentColor={agentColor}
            agentImageUrl={agentImageUrl}
            agentLanguages={supportedLanguages}
            primaryLanguage={primaryLanguage}
            onClose={onClose}
          />
          
          <ChatLanguageBar
            supportedLanguages={supportedLanguages}
            primaryLanguage={primaryLanguage}
            culturalProfile={culturalProfile}
          />
        </div>

        <ChatContainer
          messages={messages}
          supportedLanguages={supportedLanguages}
          culturalProfile={culturalProfile}
        />

        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          isLoading={isLoading}
          isRecording={isRecording}
          isPlayingAudio={isPlayingAudio}
          agentName={agentName}
          onSendMessage={handleSendMessage}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
      </div>

      <HoloOrgSidebar showOrgPanel={showOrgPanel} />
    </div>
  );
};
