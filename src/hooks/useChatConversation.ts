
import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  audio?: string;
}

export const useChatConversation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const sendMessage = useCallback(async (
    message: string,
    agentName: string,
    agentPersonality: string,
    agentBackground: string,
    conversationHistory: Message[] = [],
    includeAudio: boolean = false
  ) => {
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('chat-with-agent', {
        body: {
          message,
          agentName,
          agentPersonality,
          agentBackground,
          conversationHistory: conversationHistory.slice(-10),
          includeAudio
        }
      });

      if (error) throw error;

      return {
        response: data.response,
        audioContent: data.audioContent
      };
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const transcribeAudio = useCallback(async (audioBlob: Blob) => {
    try {
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      const { data, error } = await supabase.functions.invoke('voice-to-text', {
        body: { audio: base64Audio }
      });

      if (error) throw error;

      return data.text;
    } catch (error) {
      console.error('Error transcribing audio:', error);
      throw error;
    }
  }, []);

  const playAudio = useCallback((base64Audio: string) => {
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

      return audio;
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlayingAudio(false);
      return null;
    }
  }, []);

  return {
    isLoading,
    isRecording,
    isPlayingAudio,
    setIsRecording,
    sendMessage,
    transcribeAudio,
    playAudio
  };
};
