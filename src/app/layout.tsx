import type { Metadata } from 'next';
import { Providers } from './providers';
import { Navbar } from '@/components/Navbar/Navbar';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gourav Chandra — Backend Developer',
  description:
    'Backend & Full Stack developer. Final year CS student passionate about scalable architectures, clean APIs, and challenging engineering problems.',
  keywords: ['backend developer', 'full stack', 'Node.js', 'TypeScript', 'portfolio'],
  authors: [{ name: 'Gourav Chandra' }],
  openGraph: {
    title: 'Gourav Chandra — Backend Developer',
    description:
      'Backend & Full Stack developer. Final year CS student. Building systems that scale.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gourav Chandra — Backend Developer',
    description: 'Backend & Full Stack developer. Building systems that scale.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <ScrollProgress />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
