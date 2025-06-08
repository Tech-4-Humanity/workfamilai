
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff } from 'lucide-react';
import { useVoiceQuery } from '@/hooks/useVoiceQuery';
import FamilyNeuralNetwork from './FamilyNeuralNetwork';

export const VoiceEnhancedFamilyNetwork = () => {
  const { isListening, lastQuery, lastResult, startListening, speakResult } = useVoiceQuery();
  const [showResults, setShowResults] = useState(false);

  const handleVoiceQuery = async () => {
    try {
      const transcript = await startListening();
      if (transcript) {
        setShowResults(true);
        speakResult(`Found ${lastResult?.agents.length || 0} relevant family members`);
      }
    } catch (error) {
      console.error('Voice query error:', error);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Voice-Enhanced Family Network</span>
            <Button
              onClick={handleVoiceQuery}
              variant={isListening ? "destructive" : "outline"}
              size="sm"
              disabled={isListening}
            >
              {isListening ? <MicOff className="h-4 w-4 mr-2" /> : <Mic className="h-4 w-4 mr-2" />}
              {isListening ? 'Listening...' : 'Ask About Family'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {lastQuery && (
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">
                Last Query: "{lastQuery}"
              </Badge>
              {lastResult && lastResult.agents.length > 0 && showResults && (
                <div className="text-sm text-muted-foreground">
                  Found {lastResult.agents.length} family members with relevant capabilities
                </div>
              )}
            </div>
          )}
          <FamilyNeuralNetwork />
        </CardContent>
      </Card>
    </div>
  );
};
