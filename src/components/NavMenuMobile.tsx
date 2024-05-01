import Link from 'next/link';
import Image from 'next/image';

export default function NavMenuMobile() {
  return (
    <nav className='w-full py-2 grid grid-cols-3 lg:hidden sticky bottom-0 bg-[#141313]/80 backdrop-opacity-10 backdrop-invert rounded-t-full'>
      <Link
        href='/'
        className='flex flex-col justify-center items-center border-r-2 border-red-600'
      >
        <Image src='/home.svg' width={20} height={20} alt='Home icon' />
        <p className='text-xs'>Home</p>
      </Link>
      <Link href='/' className='flex flex-col justify-center items-center border-r-2'>
        <Image src='/seeLater.svg' width={20} height={20} alt='See later icon' />
        <p className='text-xs'>See later</p>
      </Link>
      <Link href='/' className='flex flex-col justify-center items-center'>
        <Image src='/favourites.svg' width={20} height={20} alt='Favourites icon' />
        <p className='text-xs'>Favourites</p>
      </Link>
    </nav>
  );
}
