
import React from 'react';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Network, Building } from 'lucide-react';

interface ChatHeaderProps {
  agentName: string;
  agentColor: string;
  isCollaborativeMode: boolean;
  showOrgPanel: boolean;
  onOrgModeToggle: () => void;
  onOrgPanelToggle: () => void;
  onClose?: () => void;
}

export const ChatHeader = ({
  agentName,
  agentColor,
  isCollaborativeMode,
  showOrgPanel,
  onOrgModeToggle,
  onOrgPanelToggle,
  onClose
}: ChatHeaderProps) => {
  return (
    <CardHeader className="border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full bg-${agentColor}-500`} />
          <CardTitle className="text-lg">
            {agentName}
            {isCollaborativeMode && (
              <Badge variant="secondary" className="ml-2">
                <Building className="w-3 h-3 mr-1" />
                Holo-Org Mode
              </Badge>
            )}
          </CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isCollaborativeMode ? "default" : "outline"}
            size="sm"
            onClick={onOrgModeToggle}
          >
            <Users className="w-4 h-4 mr-1" />
            {isCollaborativeMode ? 'Active' : 'Holo-Org'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onOrgPanelToggle}
          >
            <Network className="w-4 h-4" />
          </Button>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          )}
        </div>
      </div>
    </CardHeader>
  );
};
