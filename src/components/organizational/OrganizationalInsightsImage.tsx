import React from 'react';
import { RobustImage } from '@/components/ui/robust-image';

export const OrganizationalInsightsImage = () => {
  const imageSources = [
    '/organizational-insights-dashboard.png',
    'https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Screenshot%202025-07-11%20at%209.07.28%20am.png'
  ];

  return (
    <div className="w-full mb-6 flex justify-center">
      <RobustImage
        src={imageSources}
        alt="Organizational Intelligence Dashboard Overview"
        className="w-1/4 h-auto rounded-lg border shadow-sm"
        fallback={
          <div className="w-full h-48 bg-muted rounded-lg border flex items-center justify-center">
            <span className="text-muted-foreground">Dashboard Preview</span>
          </div>
        }
      />
    </div>
  );
};