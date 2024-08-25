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
        {/* Script to set theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let theme = localStorage.getItem('theme') || 'system';
                if (theme === 'system') {
                  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  theme = darkModeMediaQuery.matches ? 'dark' : 'light';
                }
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-primary dark:bg-dark-background text-text dark:text-light-text`}>
        <ClientWrapper>
          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
            {children}
          </ThemeProvider>
        </ClientWrapper>
      </body>
    </html>
  );
}
