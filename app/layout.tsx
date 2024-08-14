import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import ClientWrapper from './components/clientwrapper'; // Import the ClientWrapper component

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
      <body className={inter.className}>
        <ClientWrapper>
          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
            {children}
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
