import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ProductionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);
    
    // Log error for monitoring in production
    console.error('Production Error Boundary:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Card className="m-4 border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Something went wrong
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
            <div className="flex gap-2">
              <Button onClick={this.handleRetry} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button 
                onClick={() => window.location.reload()} 
                variant="secondary" 
                size="sm"
              >
                Refresh Page
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}