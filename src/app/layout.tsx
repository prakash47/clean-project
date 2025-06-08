import './globals.css';
import '../styles/prose.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Manrope } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
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