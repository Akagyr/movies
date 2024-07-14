'use client';

import { Category } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HeaderSearchForm({ categories }: { categories: Category[] }) {
  const [selectedName, setSelectedName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 45 }, (_, index) => currentYear - index);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (selectedName) searchParams.append('name', selectedName);
    if (selectedCategory) searchParams.append('category', selectedCategory);
    if (selectedYear) searchParams.append('year', selectedYear);

    router.push(`/search?${searchParams.toString()}`);

    setSelectedName('');
    setSelectedCategory('');
    setSelectedYear('');
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='hidden lg:flex px-10 col-span-4 items-center'
    >
      <div className='mr-5 w-[220px]'>
        <input
          type='text'
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          placeholder='Название'
          className='text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 placeholder-gray-400 text-white'
        />
      </div>
      <div className='mr-5 w-[180px]'>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`cursor-pointer text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 ${
            selectedCategory !== '' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <option value=''>Категория</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className='mr-5 w-[100px]'>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className={`cursor-pointer text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 ${
            selectedYear !== '' ? 'text-white' : 'text-gray-400'
          }`}
        >
          <option value=''>Год</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => handleSearch()}
        className='text-white font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center bg-red-700 hover:bg-red-800'
      >
        Поиск
      </button>
    </form>
  );
}
