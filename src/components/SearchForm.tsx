'use client';

import { Category } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchForm({ categories }: { categories: Category[] }) {
  const [selectedName, setSelectedName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const router = useRouter();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 35 }, (_, index) => currentYear - index);

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
      className='flex flex-col lg:flex-row gap-[15px] lg:gap-[20px] lg:items-center'
    >
      <div className='lg:w-[220px]'>
        <input
          type='text'
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          placeholder='Название'
          className='text-xs lg:text-sm rounded-lg block w-full py-[10px] px-[15px] bg-neutral placeholder-gray-ligther'
        />
      </div>
      <div className='lg:w-[180px]'>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className={`cursor-pointer text-xs lg:text-sm rounded-lg block w-full py-[10px] px-[10px] bg-neutral ${
            selectedCategory === '' && 'text-gray-ligther'
          }`}
        >
          <option value=''>Жанр</option>
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className='lg:w-[100px]'>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className={`cursor-pointer text-xs lg:text-sm rounded-lg block w-full py-[10px] px-[10px] bg-neutral ${
            selectedYear === '' && 'text-gray-ligther'
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
        className='font-medium rounded-lg text-xs lg:text-sm w-auto px-[15px] py-[8px] text-center bg-red hover:bg-red-hover'
      >
        Поиск
      </button>
    </form>
  );
}
