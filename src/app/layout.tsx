import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Travel Mentor — Explore with Expert Guides',
  description: 'Connect with local experts for personalized travel experiences, safety tools, and intelligent itineraries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <div className="mesh-bg" />
          <Navbar />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
