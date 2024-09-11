import Link from 'next/link';
import SearchForm from './SearchForm';
import HeaderAccount from './HeaderAccount';
import { getDBCollection } from '@/database/databaseServices';
import { db } from '@/database/firebase';
import { collection } from 'firebase/firestore';
import { Category } from '@/lib/types';

export default async function Header() {
  const categories = (await getDBCollection(collection(db, 'categories'))) as Category[];

  return (
    <header className='flex justify-between lg:grid lg:grid-cols-[20%_1fr] xl:grid-cols-[18%_1fr] 2xl:grid-cols-[16%_1fr] items-center py-[15px] px-[20px] lg:px-0 bg-gray'>
      <Link className='lg:text-center font-bold text-2xl' href='/'>
        Movie.<span className='text-red-ligther'>Trailers</span>
      </Link>
      <nav className='flex justify-between lg:px-[20px] xl:px-[40px]'>
        <div className='hidden lg:flex lg:items-center'>
          <SearchForm categories={categories} />
        </div>
        <HeaderAccount />
      </nav>
    </header>
  );
}
