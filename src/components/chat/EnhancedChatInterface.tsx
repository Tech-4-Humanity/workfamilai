
import React, { useState, useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEnhancedChat } from '@/hooks/useEnhancedChat';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { HoloOrgSidebar } from './HoloOrgSidebar';

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
        <ChatHeader
          agentName={agentName}
          agentColor={agentColor}
          isCollaborativeMode={isCollaborativeMode}
          showOrgPanel={showOrgPanel}
          onOrgModeToggle={handleOrgMode}
          onOrgPanelToggle={() => setShowOrgPanel(!showOrgPanel)}
          onClose={onClose}
        />

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
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
