"use client";

import { ThemeProvider } from 'next-themes';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ReactLenis root>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
