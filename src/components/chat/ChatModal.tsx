
import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ChatInterface } from './ChatInterface';
import { analytics } from '@/utils/analytics';

interface ChatModalProps {
  agentName: string;
  agentPersonality: string;
  agentBackground: string;
  agentColor?: string;
  agentImageUrl?: string;
  agentLanguages?: string[];
  primaryLanguage?: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost';
  buttonSize?: 'sm' | 'default' | 'lg';
  triggerClassName?: string;
}

export const ChatModal = ({
  agentName,
  agentPersonality,
  agentBackground,
  agentColor = 'blue',
  agentImageUrl,
  agentLanguages = [],
  primaryLanguage = 'en',
  buttonText = 'Chat',
  buttonVariant = 'outline',
  buttonSize = 'default',
  triggerClassName = ''
}: ChatModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (isOpen) {
        analytics.trackChatStart(agentName, 'basic');
        // Dispatch custom event for progress tracking
        window.dispatchEvent(new CustomEvent('chat-started'));
      }
      setOpen(isOpen);
    }}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize}
          className={`flex items-center gap-2 ${triggerClassName}`}
          aria-label={`Start chat with ${agentName}`}
        >
          <MessageCircle className="h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0" aria-describedby="chat-description">
        <DialogHeader className="sr-only">
          <DialogTitle>Chat with {agentName}</DialogTitle>
          <DialogDescription id="chat-description">
            Start a conversation with {agentName}, {agentPersonality.toLowerCase()}. 
            This chat interface supports text messaging and voice interactions.
          </DialogDescription>
        </DialogHeader>
        <ChatInterface
          agentName={agentName}
          agentPersonality={agentPersonality}
          agentBackground={agentBackground}
          agentColor={agentColor}
          agentImageUrl={agentImageUrl}
          agentLanguages={agentLanguages}
          primaryLanguage={primaryLanguage}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
