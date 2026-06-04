import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import AuroraBackground from '@/components/AuroraBackground';

export const metadata: Metadata = {
  title: 'Travel Mentor | Next-Gen Travel',
  description: 'Connect with experienced travelers and locals for personalized guidance and safety support.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuroraBackground />
        <Navbar />
        <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
