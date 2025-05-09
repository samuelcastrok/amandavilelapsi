'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.svg';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and hide splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-primary">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={logo}
          alt="Logo"
          className="w-48 h-auto animate-pulse"
          priority
        />
        <div className="w-16 h-1 bg-secondary-color rounded-full animate-[loading_1s_ease-in-out_infinite]"></div>
      </div>
    </div>
  );
} 