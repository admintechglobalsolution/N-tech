import type { Metadata } from 'next';
import { Roboto, Roboto_Mono } from 'next/font/google';
// src/app/fonts.ts
import localFont from 'next/font/local';
import { Toaster } from 'sonner';
import './globals.css';

import ContactButtons from '@/components/Footer/contact';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Nav/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const magneto = localFont({
  src: '../../public/fonts/Magneto.ttf',
  variable: '--font-magneto',
});
export const metadata: Metadata = {
  title: 'N-tech',
  description: 'N-tech - Gloabal Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${magneto.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-center" richColors />
          <Navigation />
          {children}
          {/* Footer */}
          <Footer />
          <div className="relative">
            <ContactButtons />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
