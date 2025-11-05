// app/lib/fonts.ts
import { Sora } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // Variable CSS para los títulos
  display: 'swap',
});

export const fontGeist = localFont({
  src: '../../public/fonts/Geist[wght].ttf',
  variable: '--font-geist', // Variable CSS para el cuerpo
  display: 'swap',
});