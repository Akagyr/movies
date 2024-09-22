import Image from 'next/image';
import React from 'react';

export default function EmptyItems() {
  return (
    <div className='flex flex-col justify-center items-center gap-[5px] bg-[#141313] h-full rounded-2xl'>
      <Image src='/notFoundElements.svg' width={60} height={60} alt='Not found' />
      <p className='text-xl font-bold'>Записей не найдено</p>
    </div>
  );
}
