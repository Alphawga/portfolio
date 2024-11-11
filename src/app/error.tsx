'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Custom error logging function
    const logError = (err: Error) => {
      // In production, you might want to send this to an error tracking service
      if (process.env.NODE_ENV === 'development') {
        // Only log in development
        console.log('Development Error:', {
          message: err.message,
          stack: err.stack,
          digest: (err as ErrorProps['error']).digest
        });
      }
    };

    if (error instanceof Error) {
      logError(error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {error instanceof Error ? error.message : 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => {
            // Attempt to recover by trying to re-render the segment
            reset();
          }}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 