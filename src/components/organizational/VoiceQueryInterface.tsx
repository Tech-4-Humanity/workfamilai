
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Volume2 } from 'lucide-react';
import { useVoiceQuery } from '@/hooks/useVoiceQuery';
import { OrganizationalChart } from './OrganizationalChart';

export const VoiceQueryInterface = () => {
  const [query, setQuery] = useState('');
  const { isListening, lastQuery, lastResult, processQuery, startListening, speakResult } = useVoiceQuery();

  const handleVoiceInput = async () => {
    try {
      const transcript = await startListening();
      setQuery(transcript);
      const result = processQuery(transcript);
      speakResult(result.insights[0] || 'Query processed');
    } catch (error) {
      console.error('Voice input error:', error);
    }
  };

  const handleTextQuery = () => {
    if (query.trim()) {
      const result = processQuery(query);
      speakResult(result.insights[0] || 'Query processed');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTextQuery();
    }
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'destructive';
      case 'Medium': return 'default';
      case 'Low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mic className="h-5 w-5" />
            Voice Query Interface
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about agent involvement (e.g., 'List agents for cloud migration')"
              className="flex-1"
            />
            <Button
              onClick={handleVoiceInput}
              variant={isListening ? "destructive" : "outline"}
              size="icon"
              disabled={isListening}
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button onClick={handleTextQuery} disabled={!query.trim()}>
              Query
            </Button>
          </div>

          {isListening && (
            <div className="text-center text-sm text-muted-foreground">
              🎤 Listening... Speak your query now
            </div>
          )}

          {lastQuery && (
            <div className="text-sm text-muted-foreground">
              Last query: "{lastQuery}"
            </div>
          )}
        </CardContent>
      </Card>

      {lastResult && (
        <>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Query Results</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => speakResult(lastResult.insights.join('. '))}
                >
                  <Volume2 className="h-4 w-4 mr-2" />
                  Speak Results
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Agents Found</div>
                  <div className="text-2xl font-bold">{lastResult.agents.length}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Total Cost</div>
                  <div className="text-2xl font-bold">${lastResult.totalCost.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Risk Level</div>
                  <Badge variant={getRiskBadgeColor(lastResult.riskLevel)} className="text-sm">
                    {lastResult.riskLevel}
                  </Badge>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">Insights</div>
                <div className="space-y-1">
                  {lastResult.insights.map((insight, index) => (
                    <div key={index} className="text-sm bg-muted p-2 rounded">
                      {insight}
                    </div>
                  ))}
                </div>
              </div>

              {lastResult.agents.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-2">Involved Agents</div>
                  <div className="space-y-2">
                    {lastResult.agents.map((agent, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <div className="font-medium">{agent.persona}</div>
                          <div className="text-sm text-muted-foreground">{agent.division}</div>
                          <div className="text-xs text-muted-foreground">{agent.skills_required}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${agent.cost.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">{agent.fte_percent * 100}% FTE</div>
                          <Badge variant={getRiskBadgeColor(agent.risk_level)} className="text-xs">
                            {agent.risk_level}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {lastResult.agents.length > 0 && (
            <OrganizationalChart agents={lastResult.agents} />
          )}
        </>
      )}
    </div>
  );
};
