import './globals.css';
import '../styles/prose.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Manrope } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'; // New client-side wrapper

// Load Manrope font using next/font/google
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap', // Ensure text is visible during font loading
});

export const metadata = {
  title: 'Intention Infoservice',
  description: 'Transforming ideas into stunning digital realities with cutting-edge technologies.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className={`${manrope.className} flex min-h-screen flex-col bg-dark-950`}>
        <ClientLayout>
          <Header />
          <ClientLayoutWrapper>
            <main className="flex-grow">{children}</main>
          </ClientLayoutWrapper>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}