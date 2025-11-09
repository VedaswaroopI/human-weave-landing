import React, { Component, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { ParticleButton } from './ui/particle-button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Application error:', error, errorInfo);
    
    // Track error in analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
      });
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  handleResetStorage = async () => {
    // Clear all storage
    try {
      localStorage.clear();
      sessionStorage.clear();
      
      // Clear IndexedDB
      if (window.indexedDB) {
        const databases = await window.indexedDB.databases();
        await Promise.all(
          databases.map((db) => {
            if (db.name) {
              return new Promise<void>((resolve) => {
                const request = window.indexedDB.deleteDatabase(db.name!);
                request.onsuccess = () => resolve();
                request.onerror = () => resolve();
              });
            }
            return Promise.resolve();
          })
        );
      }
    } catch (error) {
      console.error('Failed to clear storage:', error);
    }
    
    // Reload after clearing
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const isDev = import.meta.env.DEV;
      
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
          <div className="max-w-2xl w-full text-center space-y-6">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
              <p className="text-muted-foreground">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
            </div>
            
            {isDev && this.state.error && (
              <div className="text-left bg-destructive/10 border border-destructive/20 rounded-lg p-4 max-w-full overflow-auto">
                <p className="text-xs font-mono text-destructive mb-2 font-semibold">
                  DEV MODE - Error Details:
                </p>
                <p className="text-xs font-mono text-foreground break-all">
                  {this.state.error.message}
                </p>
                {this.state.error.stack && (
                  <pre className="text-xs font-mono text-muted-foreground mt-2 overflow-x-auto whitespace-pre-wrap break-all">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <ParticleButton 
                onClick={this.handleReset}
                className="gap-2"
                variant="outline"
              >
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </ParticleButton>
              
              {isDev && (
                <ParticleButton 
                  onClick={this.handleResetStorage}
                  className="gap-2"
                  variant="destructive"
                >
                  <AlertCircle className="w-4 h-4" />
                  Reset App Storage
                </ParticleButton>
              )}
            </div>
            
            {isDev && (
              <p className="text-xs text-muted-foreground">
                "Reset App Storage" clears localStorage, sessionStorage, and IndexedDB
              </p>
            )}
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
