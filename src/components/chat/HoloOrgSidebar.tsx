
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Network } from 'lucide-react';

interface HoloOrgSidebarProps {
  showOrgPanel: boolean;
}

export const HoloOrgSidebar = ({ showOrgPanel }: HoloOrgSidebarProps) => {
  if (!showOrgPanel) return null;

  return (
    <>
      <Separator orientation="vertical" />
      <div className="w-80 p-4 bg-muted/30">
        <div className="space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Network className="w-4 h-4" />
            Holo-Org Intelligence
          </h3>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Active Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-xs text-muted-foreground">
                Organizational expertise being leveraged in this conversation
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Partnership Network</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-xs text-muted-foreground">
                Potential partners and advisors based on conversation context
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Business Value</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="text-xs text-muted-foreground">
                Key insights and value generated from this session
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
