import { Inter } from 'next/font/google';

import './globals.css';

import NavBar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'José Mota',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="bg-black text-white min-h-screen flex flex-col">
      <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
