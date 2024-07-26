import Link from 'next/link';
import SearchForm from './SearchForm';
import HeaderAccount from './HeaderAccount';
import { getDBCollection } from '@/database/databaseServices';
import { db } from '@/database/firebase';
import { collection } from 'firebase/firestore';
import { Category, Movie } from '@/lib/types';

export default async function Header() {
  const categories = (await getDBCollection(collection(db, 'categories'))) as Category[];

  return (
    <header className='h-[9vh] px-5 lg:px-0 sticky top-0 z-10 bg-[#141313] flex justify-between lg:grid lg:grid-cols-6 items-center'>
      <Link className='lg:text-center font-bold text-2xl' href='/'>
        Movie.<span className='text-red-600'>Trailers</span>
      </Link>
      <div className='hidden lg:block col-span-4'>
        <SearchForm categories={categories} />
      </div>
      <HeaderAccount />
    </header>
  );
}
