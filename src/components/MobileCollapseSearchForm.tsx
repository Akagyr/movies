'use client';

import { Category } from '@/lib/types';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm';

export default function MobileCollapseSearchForm({ categories }: { categories: Category[] }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className='flex justify-between w-full text-white font-medium rounded-lg text-sm px-[15px] py-[10px] text-center bg-red-800 relative'
      >
        <p className='text-xs'>Випадающий поиск</p>
        <span
          className={`${
            isActive ? 'rotate-180' : 'rotate-0'
          } absolute right-[3%] top-[50%] translate-y-[-50%] font-bold duration-500`}
        >
          ↓
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isActive ? 'max-h-screen mt-[15px]' : 'max-h-0'
        }`}
      >
        <SearchForm categories={categories} />
      </div>
    </>
  );
}
