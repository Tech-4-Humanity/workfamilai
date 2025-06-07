
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  Users, 
  Brain, 
  Lightbulb,
  Network
} from 'lucide-react';
import { useEnhancedChat } from '@/hooks/useEnhancedChat';

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
  const [showCollaborationPanel, setShowCollaborationPanel] = useState(false);
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

  const handleCollaboration = async () => {
    if (!isCollaborativeMode) {
      const sessionName = `Collaborative Session with ${agentName}`;
      const participatingAgents = [agentName];
      
      // Add suggested collaborators based on recent messages
      const lastMessage = messages[messages.length - 1];
      if (lastMessage?.collaboration_suggestions) {
        lastMessage.collaboration_suggestions.forEach(suggestion => {
          if (!participatingAgents.includes(suggestion.agent)) {
            participatingAgents.push(suggestion.agent);
          }
        });
      }

      await startCollaborativeSession(sessionName, participatingAgents);
      setShowCollaborationPanel(true);
    } else {
      setIsCollaborativeMode(false);
      setShowCollaborationPanel(false);
    }
  };

  return (
    <div className="flex h-full">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-${agentColor}-500`} />
              <CardTitle className="text-lg">
                {agentName}
                {isCollaborativeMode && (
                  <Badge variant="secondary" className="ml-2">
                    <Network className="w-3 h-3 mr-1" />
                    Collaborative Mode
                  </Badge>
                )}
              </CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={isCollaborativeMode ? "default" : "outline"}
                size="sm"
                onClick={handleCollaboration}
              >
                <Users className="w-4 h-4 mr-1" />
                {isCollaborativeMode ? 'Active' : 'Collaborate'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCollaborationPanel(!showCollaborationPanel)}
              >
                <Brain className="w-4 h-4" />
              </Button>
              {onClose && (
                <Button variant="ghost" size="sm" onClick={onClose}>
                  ×
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.type === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
                  <div className="text-sm mb-1">
                    {message.type === 'agent' && message.agent_name && (
                      <div className="font-medium text-xs opacity-70 mb-1">
                        {message.agent_name}
                      </div>
                    )}
                    {message.content}
                  </div>
                  
                  {/* Knowledge References */}
                  {message.knowledge_references && message.knowledge_references.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {message.knowledge_references.slice(0, 3).map((ref, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Brain className="w-2 h-2 mr-1" />
                          Knowledge
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Collaboration Suggestions */}
                  {message.collaboration_suggestions && message.collaboration_suggestions.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <div className="text-xs opacity-70">Collaboration suggestions:</div>
                      {message.collaboration_suggestions.map((suggestion, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs mr-1">
                          <Users className="w-2 h-2 mr-1" />
                          {suggestion.agent}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Insights Generated */}
                  {message.insights_generated && message.insights_generated.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <div className="text-xs opacity-70">Insights:</div>
                      {message.insights_generated.map((insight, idx) => (
                        <div key={idx} className="text-xs bg-yellow-100 dark:bg-yellow-900/20 rounded p-1 flex items-start gap-1">
                          <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-600" />
                          {insight}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-xs opacity-50 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsRecording(!isRecording)}
              disabled={isLoading}
            >
              {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </Button>
            <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Knowledge & Collaboration Sidebar */}
      {showCollaborationPanel && (
        <>
          <Separator orientation="vertical" />
          <div className="w-80 p-4 bg-muted/30">
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Thinkscape
              </h3>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Active Knowledge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    Knowledge references from this conversation will appear here
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Collaboration Network</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    Suggested collaborators based on conversation context
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Insights Generated</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-xs text-muted-foreground">
                    Key insights and learnings from this session
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
