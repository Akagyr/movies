'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';

export default function SlideCard({ movie }: { movie: Movie }) {
  return (
    <div className='max-w-[200px] rounded-lg shadow relative'>
      <Link href={`${movie.slug}`}>
        <Image
          className='rounded-lg w-full aspect-[3/4]'
          width='354'
          height='470'
          src={movie.image}
          alt={movie.name}
          priority
        />
        <h2 className='text-base font-medium tracking-tight mt-[10px] text-center'>{movie.name}</h2>
      </Link>
    </div>
  );
}
