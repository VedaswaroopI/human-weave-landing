/**
 * Custom error classes for better error handling
 */

export class NetworkError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends Error {
  constructor(message: string, public field?: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export class RateLimitError extends Error {
  constructor(message: string, public retryAfter?: number) {
    super(message);
    this.name = 'RateLimitError';
  }
}

export class TimeoutError extends Error {
  constructor(message: string, public duration?: number) {
    super(message);
    this.name = 'TimeoutError';
  }
}

/**
 * Error handler with user-friendly messages
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ValidationError) {
    return error.message;
  }

  if (error instanceof RateLimitError) {
    const retryMessage = error.retryAfter 
      ? ` Please try again in ${error.retryAfter} seconds.`
      : ' Please try again later.';
    return error.message + retryMessage;
  }

  if (error instanceof NetworkError) {
    if (error.statusCode === 404) {
      return 'The requested resource was not found.';
    }
    if (error.statusCode === 500) {
      return 'Server error. Please try again later.';
    }
    if (error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
      return error.message || 'Request failed. Please check your input.';
    }
    return 'Network error. Please check your connection and try again.';
  }

  if (error instanceof TimeoutError) {
    return 'Request timed out. Please try again.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred. Please try again.';
};

/**
 * Log error with context for debugging (only in development)
 */
export const logError = (error: unknown, context?: string): void => {
  if (import.meta.env.DEV) {
    console.error(`[Error${context ? ` - ${context}` : ''}]:`, error);
  }
};

/**
 * Check if error is a specific type
 */
export const isNetworkError = (error: unknown): error is NetworkError => {
  return error instanceof NetworkError;
};

export const isValidationError = (error: unknown): error is ValidationError => {
  return error instanceof ValidationError;
};

export const isRateLimitError = (error: unknown): error is RateLimitError => {
  return error instanceof RateLimitError;
};

export const isTimeoutError = (error: unknown): error is TimeoutError => {
  return error instanceof TimeoutError;
};
