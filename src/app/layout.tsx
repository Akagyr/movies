import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/lib/fonts';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MobileNavMenu from '@/components/MobileNavMenu';
import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: 'Movie trailers',
  description: 'Movie trailers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header />
        <ToastContainer
          position='top-center'
          autoClose={2000}
          theme='colored'
        />
        <div className='min-h-[91vh] lg:grid lg:grid-cols-6'>
          <Sidebar />
          <main className='mx-10 lg:mx-20 my-5 lg:my-10 mb-10 relative col-span-6 lg:col-span-5'>
            {children}
          </main>
        </div>
        <MobileNavMenu />
      </body>
    </html>
  );
}
