'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Log when GA is initialized (only in development)
    if (process.env.NODE_ENV === 'development' && GA_ID) {
      console.log('Google Analytics initialized with ID:', GA_ID);
    }
  }, [GA_ID]);

  // Only render if GA_ID is provided
  if (!GA_ID) {
    return null;
  }

  return <GA gaId={GA_ID} />;
}
