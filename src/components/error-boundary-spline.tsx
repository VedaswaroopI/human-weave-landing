'use client'

import React, { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorCount: number;
}

export class SplineErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true, errorCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Spline loading error:', error, errorInfo);
    
    // Track error in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'spline_error', {
        event_category: 'error',
        event_label: error.message,
      });
    }
  }

  handleRetry = () => {
    this.setState((prevState) => ({
      hasError: false,
      errorCount: prevState.errorCount + 1
    }));
  };

  render() {
    if (this.state.hasError) {
      const maxRetries = 3;
      const canRetry = this.state.errorCount < maxRetries;

      return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-muted/30 dark:bg-muted/10 rounded-2xl p-8">
          <div className="relative">
            <AlertCircle className="w-12 h-12 text-muted-foreground animate-pulse" />
          </div>
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-foreground">
              Unable to load 3D experience
            </p>
            <p className="text-xs text-muted-foreground">
              {canRetry 
                ? `The 3D scene couldn't load. Please try again.`
                : 'Maximum retry attempts reached. Please refresh the page.'
              }
            </p>
          </div>
          {canRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={this.handleRetry}
              className="gap-2"
              aria-label="Retry loading 3D scene"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again ({maxRetries - this.state.errorCount} attempts left)
            </Button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
