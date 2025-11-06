'use client'

import React, { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { SplineMobileFallback } from './ui/spline-mobile-fallback';

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
      return (
        <div className="w-full h-full relative">
          <SplineMobileFallback />
          <div className="absolute top-4 left-4 bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
            <p className="text-xs text-destructive">
              3D scene unavailable
            </p>
          </div>
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
