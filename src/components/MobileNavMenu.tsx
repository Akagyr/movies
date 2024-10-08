import Link from 'next/link';
import Image from 'next/image';

export default function MobileNavMenu() {
  return (
    <nav className='w-full py-2 grid grid-cols-3 lg:hidden fixed bottom-0 bg-gray/80 backdrop-opacity-10 backdrop-invert rounded-t-full'>
      <Link
        href='/'
        className='flex flex-col justify-center items-center border-r-2 border-red'
      >
        <Image src='/home.svg' width={20} height={20} alt='Home icon' />
        <p className='text-xs'>Домой</p>
      </Link>
      <Link href='seeLater' className='flex flex-col justify-center items-center border-r-2'>
        <Image src='/seeLater.svg' width={20} height={20} alt='See later icon' />
        <p className='text-xs'>Смотреть позже</p>
      </Link>
      <Link href='favourites' className='flex flex-col justify-center items-center'>
        <Image src='/favourites.svg' width={20} height={20} alt='Favourites icon' />
        <p className='text-xs'>Избранные</p>
      </Link>
    </nav>
  );
}
