
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  audio?: string;
}

interface ChatInterfaceProps {
  agentName: string;
  agentPersonality: string;
  agentBackground: string;
  agentColor?: string;
  agentImageUrl?: string;
  agentLanguages?: string[];
  primaryLanguage?: string;
  onClose?: () => void;
}

export const ChatInterface = ({ 
  agentName, 
  agentPersonality, 
  agentBackground, 
  agentColor = 'blue',
  agentImageUrl,
  agentLanguages = [],
  primaryLanguage = 'en',
  onClose 
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  
  const { isRecording, startRecording, stopRecording } = useVoiceRecording();

  useEffect(() => {
    // Add welcome message when chat starts
    const welcomeMessage: Message = {
      id: 'welcome',
      type: 'agent',
      content: `Hello! I'm ${agentName}. ${agentBackground.substring(0, 150)}... How can I assist you today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [agentName, agentBackground]);

  const sendTextMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-agent', {
        body: {
          message: inputMessage,
          agentName,
          agentPersonality,
          agentBackground,
          conversationHistory: messages.slice(-10)
        }
      });

      if (error) throw error;

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: data.response,
        timestamp: new Date(),
        audio: data.audioContent
      };

      setMessages(prev => [...prev, agentMessage]);

      if (data.audioContent) {
        playAudioResponse(data.audioContent);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: 'I apologize, but I\'m experiencing some technical difficulties. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartRecording = async () => {
    try {
      const audioBlob = await startRecording();
      processVoiceMessage(audioBlob);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const handleStopRecording = () => {
    stopRecording();
  };

  const processVoiceMessage = async (audioBlob: Blob) => {
    setIsLoading(true);

    try {
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      const { data: transcribeData, error: transcribeError } = await supabase.functions.invoke('voice-to-text', {
        body: { audio: base64Audio }
      });

      if (transcribeError) throw transcribeError;

      const transcribedText = transcribeData.text;

      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: transcribedText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      const { data: chatData, error: chatError } = await supabase.functions.invoke('chat-with-agent', {
        body: {
          message: transcribedText,
          agentName,
          agentPersonality,
          agentBackground,
          conversationHistory: messages.slice(-10),
          includeAudio: true
        }
      });

      if (chatError) throw chatError;

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'agent',
        content: chatData.response,
        timestamp: new Date(),
        audio: chatData.audioContent
      };

      setMessages(prev => [...prev, agentMessage]);

      if (chatData.audioContent) {
        playAudioResponse(chatData.audioContent);
      }
    } catch (error) {
      console.error('Error processing voice message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const playAudioResponse = (base64Audio: string) => {
    try {
      const binaryString = atob(base64Audio);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      
      const audioBlob = new Blob([bytes], { type: 'audio/mp3' });
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      setIsPlayingAudio(true);
      audio.play();
      
      audio.onended = () => {
        setIsPlayingAudio(false);
        URL.revokeObjectURL(audioUrl);
      };
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlayingAudio(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[80vh] bg-white rounded-lg shadow-lg">
      <ChatHeader
        agentName={agentName}
        agentPersonality={agentPersonality}
        agentColor={agentColor}
        agentImageUrl={agentImageUrl}
        agentLanguages={agentLanguages}
        primaryLanguage={primaryLanguage}
        onClose={onClose}
      />

      <MessageList
        messages={messages}
        isLoading={isLoading}
        agentName={agentName}
        agentColor={agentColor}
        onPlayAudio={playAudioResponse}
      />

      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        isLoading={isLoading}
        isRecording={isRecording}
        isPlayingAudio={isPlayingAudio}
        agentName={agentName}
        onSendMessage={sendTextMessage}
        onStartRecording={handleStartRecording}
        onStopRecording={handleStopRecording}
      />
    </div>
  );
};
