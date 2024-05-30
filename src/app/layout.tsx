import { Inter, Rubik } from 'next/font/google';

import './globals.css';

import NavBar from '@/components/navbar';

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

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
      <div className="bg-black text-white min-h-screen flex flex-col">
      <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
