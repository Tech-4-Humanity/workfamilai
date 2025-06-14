
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ChatInterface } from './ChatInterface';

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize}
          className={`flex items-center gap-2 ${triggerClassName}`}
        >
          <MessageCircle className="h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh] p-0">
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
