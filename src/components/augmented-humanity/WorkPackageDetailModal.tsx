import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Clock, 
  Users, 
  Target, 
  CheckCircle2, 
  Tag,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WorkPackage } from '@/hooks/useWorkPackages';
import { WorkPackageQuoteRequestForm } from '@/components/work-packages/WorkPackageQuoteRequestForm';

interface WorkPackageDetailModalProps {
  workPackage: WorkPackage | null;
  onClose: () => void;
}

export const WorkPackageDetailModal = ({ workPackage, onClose }: WorkPackageDetailModalProps) => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  if (!workPackage) return null;

  const handleQuoteSuccess = () => {
    setShowQuoteForm(false);
    onClose();
  };

  // Parse deliverables if it's JSON
  const deliverables = workPackage.deliverables 
    ? (typeof workPackage.deliverables === 'string' 
        ? JSON.parse(workPackage.deliverables) 
        : workPackage.deliverables)
    : null;

  return (
    <Dialog open={!!workPackage} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {!showQuoteForm ? (
          <>
            <DialogHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <DialogTitle className="text-2xl font-bold mb-2">
                    {workPackage.name}
                  </DialogTitle>
                  {workPackage.subcategory && (
                    <DialogDescription className="text-base">
                      {workPackage.subcategory}
                    </DialogDescription>
                  )}
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                  <Badge variant="secondary">
                    {workPackage.category}
                  </Badge>
                  {workPackage.tier && (
                    <Badge variant="outline">
                      {workPackage.tier}
                    </Badge>
                  )}
                </div>
              </div>
            </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          {workPackage.description && (
            <div>
              <p className="text-muted-foreground leading-relaxed">
                {workPackage.description}
              </p>
            </div>
          )}

          <Separator />

          {/* Key Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Target Audience */}
            {workPackage.target_audience && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Target Audience</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {workPackage.target_audience}
                </p>
              </div>
            )}

            {/* Customer Outcome */}
            {workPackage.customer_outcome && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Target className="h-4 w-4 text-primary" />
                  <span>Customer Outcome</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {workPackage.customer_outcome}
                </p>
              </div>
            )}

            {/* Delivery Timeframe */}
            {workPackage.delivery_timeframe_days && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Delivery Timeline</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  Delivered in {workPackage.delivery_timeframe_days} days
                </p>
              </div>
            )}

            {/* AI Leverage Level */}
            {workPackage.ai_leverage_level && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>AI Integration</span>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {workPackage.ai_leverage_level}
                </p>
              </div>
            )}
          </div>

          {/* Deliverables */}
          {deliverables && (
            <>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3>What You'll Receive</h3>
                </div>
                <ul className="space-y-2 pl-7">
                  {Array.isArray(deliverables) ? (
                    deliverables.map((item: string, index: number) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : typeof deliverables === 'object' ? (
                    Object.entries(deliverables).map(([key, value]) => (
                      <li key={key} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span><strong>{key}:</strong> {String(value)}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">{String(deliverables)}</li>
                  )}
                </ul>
              </div>
            </>
          )}

          {/* Tags */}
          {workPackage.tags && workPackage.tags.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Tag className="h-4 w-4 text-primary" />
                  <span>Related Topics</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {workPackage.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* CTA - No Pricing */}
          <Separator />
          <div className="flex items-center justify-center pt-4">
            <Button 
              size="lg" 
              onClick={() => setShowQuoteForm(true)}
              className="gap-2 px-8"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request Quote: {workPackage.name}</DialogTitle>
              <DialogDescription>
                Please provide the following information so we can prepare a detailed quote for you.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <WorkPackageQuoteRequestForm
                workPackage={workPackage}
                onSuccess={handleQuoteSuccess}
                onCancel={() => setShowQuoteForm(false)}
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
