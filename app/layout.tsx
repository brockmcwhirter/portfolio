import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import ClientWrapper from './components/clientwrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brock McWhirter Portfolio",
  description: "Brock McWhirter's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add a viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-primary dark:bg-dark-background text-text dark:text-light-text`}>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
