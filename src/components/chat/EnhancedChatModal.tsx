
import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users } from 'lucide-react';
import { EnhancedChatInterface } from './EnhancedChatInterface';

interface EnhancedChatModalProps {
  agentName: string;
  agentPersonality: string;
  agentBackground: string;
  agentColor?: string;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost';
  buttonSize?: 'sm' | 'default' | 'lg';
  triggerClassName?: string;
}

export const EnhancedChatModal = ({
  agentName,
  agentPersonality,
  agentBackground,
  agentColor = 'blue',
  buttonText = 'Holo-Org',
  buttonVariant = 'outline',
  buttonSize = 'default',
  triggerClassName = ''
}: EnhancedChatModalProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize}
          className={`flex items-center gap-2 ${triggerClassName}`}
        >
          <Users className="h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl h-[85vh] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Enhanced Chat with {agentName}</DialogTitle>
          <DialogDescription>
            Engage in an enhanced conversation with {agentName}, featuring organizational intelligence and collaborative capabilities.
          </DialogDescription>
        </DialogHeader>
        <EnhancedChatInterface
          agentName={agentName}
          agentPersonality={agentPersonality}
          agentBackground={agentBackground}
          agentColor={agentColor}
          onClose={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
