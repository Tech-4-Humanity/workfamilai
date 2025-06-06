
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, MicOff, Send, Volume2, VolumeX } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

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
  onClose?: () => void;
}

export const ChatInterface = ({ 
  agentName, 
  agentPersonality, 
  agentBackground, 
  agentColor = 'blue',
  onClose 
}: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
          conversationHistory: messages.slice(-10) // Last 10 messages for context
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

      // Auto-play audio response if available
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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processVoiceMessage(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processVoiceMessage = async (audioBlob: Blob) => {
    setIsLoading(true);

    try {
      // Convert audio to base64
      const arrayBuffer = await audioBlob.arrayBuffer();
      const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      // First, transcribe the audio
      const { data: transcribeData, error: transcribeError } = await supabase.functions.invoke('voice-to-text', {
        body: { audio: base64Audio }
      });

      if (transcribeError) throw transcribeError;

      const transcribedText = transcribeData.text;

      // Add user message with transcribed text
      const userMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: transcribedText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      // Get AI response
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

      // Auto-play audio response
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
      {/* Chat Header */}
      <div className={`bg-${agentColor}-600 text-white p-4 rounded-t-lg flex justify-between items-center`}>
        <div>
          <h3 className="text-lg font-semibold">{agentName}</h3>
          <p className="text-sm opacity-90">{agentPersonality}</p>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
            ×
          </Button>
        )}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <Card className={`max-w-[80%] ${
              message.type === 'user' 
                ? `bg-${agentColor}-100 border-${agentColor}-200` 
                : 'bg-gray-100 border-gray-200'
            }`}>
              <CardContent className="p-3">
                <p className="text-sm">{message.content}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                  {message.audio && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => playAudioResponse(message.audio!)}
                      className="p-1 h-6"
                    >
                      <Volume2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Card className="bg-gray-100 border-gray-200">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                  </div>
                  <span className="text-sm text-gray-600">
                    {agentName} is thinking...
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={`Type a message to ${agentName}...`}
              className="min-h-[40px] max-h-[120px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  sendTextMessage();
                }
              }}
            />
          </div>
          <div className="flex space-x-2">
            <Button
              size="sm"
              variant={isRecording ? "destructive" : "outline"}
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isLoading}
              className="px-3"
            >
              {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button
              size="sm"
              onClick={sendTextMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="px-3"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {isPlayingAudio && (
          <div className="flex items-center justify-center mt-2 text-sm text-gray-600">
            <Volume2 className="h-4 w-4 mr-2 animate-pulse" />
            Playing audio response...
          </div>
        )}
        
        {isRecording && (
          <div className="flex items-center justify-center mt-2 text-sm text-red-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2" />
            Recording... Tap the mic to stop
          </div>
        )}
      </div>
    </div>
  );
};
