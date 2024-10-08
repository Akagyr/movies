import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/lib/fonts';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import MobileNavMenu from '@/components/MobileNavMenu';
import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'swiper/swiper-bundle.css';

export const metadata: Metadata = {
  title: 'Movie.Trailers',
  description: 'Movie trailers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header />
        <ToastContainer
          position='top-center'
          autoClose={2000}
          theme='light'
        />
        <div className='lg:grid lg:grid-cols-[20%_1fr] xl:grid-cols-[18%_1fr] 2xl:grid-cols-[16%_1fr] lg:overflow-hidden h-full'>
          <Sidebar />
          <main className='px-[30px] lg:px-[130px] pt-[20px] pb-[70px] lg:py-[50px] overflow-y-auto'>
            {children}
          </main>
        </div>
        <MobileNavMenu />
      </body>
    </html>
  );
}
