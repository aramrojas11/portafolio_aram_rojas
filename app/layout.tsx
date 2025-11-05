// app/layout.tsx
import type { Metadata } from 'next';
import { cn } from '@/app/lib/utils';
import { ThemeProvider } from '@/components/ThemeProvider'; // <--- IMPORTANTE
import { fontSora, fontGeist } from '@/app/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aram Rojas | Software Engineer',
  description: 'Portafolio de desarrollo de software.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSora.variable,
          fontGeist.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}