import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Travel Mentor | Awwwards-Level Travel Platform',
  description: 'Experience travel differently with intelligent itineraries and immersive vibe previews.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="mesh-bg" />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
