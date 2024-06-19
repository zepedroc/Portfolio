import { Rubik } from 'next/font/google';

import './globals.css';
import App from './app';

import NavBar from '@/components/navbar';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

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
      <body className={rubik.className}>
        <div className="flex min-h-screen flex-col bg-gray-900 text-white">
          <NavBar />
          <App>{children}</App>
        </div>
      </body>
    </html>
  );
}
