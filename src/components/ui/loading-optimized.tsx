import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Optimized loading components for better UX

export const AgentCardSkeleton = () => (
  <Card>
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
    </CardContent>
  </Card>
);

export const AgentGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <AgentCardSkeleton key={i} />
    ))}
  </div>
);

export const ChatMessageSkeleton = () => (
  <div className="space-y-3">
    <div className="flex items-start space-x-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
    </div>
  </div>
);

export const DashboardSkeleton = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="space-y-2">
      <Skeleton className="h-8 w-[300px]" />
      <Skeleton className="h-4 w-[500px]" />
    </div>
    
    {/* Stats cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-8 w-[60px]" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
    
    {/* Main content */}
    <AgentGridSkeleton count={9} />
  </div>
);

export const TableSkeleton = ({ rows = 5, cols = 4 }: { rows?: number; cols?: number }) => (
  <div className="space-y-3">
    {/* Header */}
    <div className="flex space-x-4">
      {Array.from({ length: cols }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </div>
    
    {/* Rows */}
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="flex space-x-4">
        {Array.from({ length: cols }).map((_, colIndex) => (
          <Skeleton key={colIndex} className="h-4 w-full" />
        ))}
      </div>
    ))}
  </div>
);