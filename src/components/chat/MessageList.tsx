
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'agent';
  content: string;
  timestamp: Date;
  audio?: string;
}

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
  agentName: string;
  agentColor: string;
  onPlayAudio: (audio: string) => void;
}

export const MessageList = ({
  messages,
  isLoading,
  agentName,
  agentColor,
  onPlayAudio
}: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <Card className={`${
            message.type === 'user' 
              ? `max-w-[80%] bg-${agentColor}-100 border-${agentColor}-200` 
              : 'w-full bg-gray-100 border-gray-200'
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
                    onClick={() => onPlayAudio(message.audio!)}
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
          <Card className="w-full bg-gray-100 border-gray-200">
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
  );
};
