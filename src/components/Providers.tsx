"use client";

import { ThemeProvider } from 'next-themes';
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ReactLenis root>
        {children as any}
      </ReactLenis>
    </ThemeProvider>
  );
}
