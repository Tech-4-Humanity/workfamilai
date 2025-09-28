import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';

interface Agent {
  agentCode: string;
  agentName: string;
  specialization: string;
  divisionName: string;
  culturalExpertise: string;
}

interface VoiceQueryInterfaceProps {
  agents: Agent[];
  onAgentSelect: (agent: Agent) => void;
  onSearchResults: (results: Agent[]) => void;
}

export const VoiceQueryInterface: React.FC<VoiceQueryInterfaceProps> = ({
  agents,
  onAgentSelect,
  onSearchResults
}) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [searchResults, setSearchResults] = useState<Agent[]>([]);
  const [lastQuery, setLastQuery] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const { startRecording, stopRecording, isRecording } = useVoiceRecording();

  // Voice synthesis for responses
  const speak = (text: string) => {
    if (!voiceEnabled) return;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any current speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      
      utterance.onstart = () => setCurrentlyPlaying(text);
      utterance.onend = () => setCurrentlyPlaying(null);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setCurrentlyPlaying(null);
    }
  };

  // Process voice commands and search
  const processVoiceQuery = async (query: string) => {
    setIsProcessing(true);
    setLastQuery(query);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simple keyword-based search
    const keywords = query.toLowerCase().split(' ');
    const results = agents.filter(agent => {
      const searchText = `${agent.agentName} ${agent.specialization} ${agent.divisionName} ${agent.culturalExpertise}`.toLowerCase();
      return keywords.some(keyword => 
        keyword.length > 2 && searchText.includes(keyword)
      );
    });

    setSearchResults(results.slice(0, 10)); // Limit to top 10 results
    onSearchResults(results.slice(0, 10));
    
    // Generate voice response
    let response = '';
    if (results.length === 0) {
      response = "I couldn't find any agents matching your query. Try searching for a different specialization or division.";
    } else if (results.length === 1) {
      response = `I found one agent: ${results[0].agentName}, who specializes in ${results[0].specialization}.`;
    } else {
      response = `I found ${results.length} agents matching your query. The top results include ${results[0].agentName} and ${results[1].agentName}.`;
    }
    
    speak(response);
    setIsProcessing(false);
  };

  const handleVoiceSearch = async () => {
    if (isRecording) {
      const result = await stopRecording();
      setIsListening(false);
      
      if (result?.transcript) {
        setTranscript(result.transcript);
        await processVoiceQuery(result.transcript);
      }
    } else {
      setTranscript('');
      setIsListening(true);
      startRecording();
    }
  };

  const handleTextSearch = async () => {
    if (transcript.trim()) {
      await processVoiceQuery(transcript);
    }
  };

  const clearSearch = () => {
    setTranscript('');
    setSearchResults([]);
    setLastQuery('');
    stopSpeaking();
    onSearchResults([]);
  };

  // Example voice commands
  const exampleCommands = [
    "Find agents in marketing",
    "Show me data scientists",
    "Who works in product development?",
    "Find someone who speaks Spanish",
    "Show agents with leadership experience"
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5 text-purple-500" />
            Voice Search
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setVoiceEnabled(!voiceEnabled)}
            >
              {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            {currentlyPlaying && (
              <Button variant="ghost" size="sm" onClick={stopSpeaking}>
                <Pause className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Voice Interface */}
        <div className="text-center">
          <Button
            size="lg"
            variant={isListening ? "destructive" : "default"}
            className={`w-24 h-24 rounded-full ${isListening ? 'animate-pulse' : ''}`}
            onClick={handleVoiceSearch}
            disabled={isProcessing}
          >
            {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
          </Button>
          
          <div className="mt-4">
            {isListening && (
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                <span className="text-sm text-muted-foreground">Listening...</span>
              </div>
            )}
            
            {isProcessing && (
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 animate-spin" />
                <span className="text-sm text-muted-foreground">Processing your request...</span>
              </div>
            )}
          </div>
        </div>

        {/* Transcript Display */}
        {transcript && (
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">You said:</span>
            </div>
            <p className="text-sm italic">"{transcript}"</p>
            
            {!isProcessing && (
              <div className="flex gap-2 mt-3">
                <Button size="sm" onClick={handleTextSearch}>
                  Search
                </Button>
                <Button size="sm" variant="outline" onClick={clearSearch}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Search Results</h4>
              <Badge variant="secondary">{searchResults.length} found</Badge>
            </div>
            
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {searchResults.map((agent) => (
                <div
                  key={agent.agentCode}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onAgentSelect(agent)}
                >
                  <div>
                    <h5 className="font-medium text-sm">{agent.agentName}</h5>
                    <p className="text-xs text-muted-foreground">{agent.specialization}</p>
                    <p className="text-xs text-muted-foreground">{agent.divisionName}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Example Commands */}
        {!transcript && !searchResults.length && (
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Try saying:</h4>
            <div className="grid grid-cols-1 gap-2">
              {exampleCommands.map((command, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="justify-start text-left h-auto p-2"
                  onClick={() => {
                    setTranscript(command);
                    processVoiceQuery(command);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Play className="h-3 w-3 text-muted-foreground" />
                    <span className="text-sm">"{command}"</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Voice Features Info */}
        <div className="text-xs text-muted-foreground bg-muted/30 rounded-lg p-3">
          <p className="flex items-center gap-2 mb-1">
            <Mic className="h-3 w-3" />
            Click the microphone to start voice search
          </p>
          <p className="flex items-center gap-2">
            <Volume2 className="h-3 w-3" />
            Enable voice responses to hear search results
          </p>
        </div>
      </CardContent>
    </Card>
  );
};