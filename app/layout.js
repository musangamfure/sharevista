import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'ShareVista',
  description: 'Upload, save and share your file with ease.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
