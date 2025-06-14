
import React, { useRef, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { ChatWelcomeMessage } from './ChatWelcomeMessage';

interface ChatContainerProps {
  messages: any[];
  supportedLanguages: string[];
  culturalProfile: any;
}

export const ChatContainer = ({
  messages,
  supportedLanguages,
  culturalProfile
}: ChatContainerProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
      <div className="space-y-4">
        <ChatWelcomeMessage
          supportedLanguages={supportedLanguages}
          culturalProfile={culturalProfile}
          hasMessages={messages.length > 0}
        />
        
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
};
