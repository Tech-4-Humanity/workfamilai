
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Mic, MicOff, Send, Volume2 } from 'lucide-react';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  isLoading: boolean;
  isRecording: boolean;
  isPlayingAudio: boolean;
  agentName: string;
  onSendMessage: () => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export const ChatInput = ({
  inputMessage,
  setInputMessage,
  isLoading,
  isRecording,
  isPlayingAudio,
  agentName,
  onSendMessage,
  onStartRecording,
  onStopRecording
}: ChatInputProps) => {
  return (
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
                onSendMessage();
              }
            }}
          />
        </div>
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant={isRecording ? "destructive" : "outline"}
            onClick={isRecording ? onStopRecording : onStartRecording}
            disabled={isLoading}
            className="px-3"
          >
            {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button
            size="sm"
            onClick={onSendMessage}
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
  );
};
