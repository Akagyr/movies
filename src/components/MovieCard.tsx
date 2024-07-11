'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';
import RateStars from './RateStars';
import FavouriteIcon from './FavouriteIcon';
import SeeLaterIcon from './SeeLaterIcon';
import { usePathname } from 'next/navigation';

export default function MovieCard({
  movie,
  updateFavourites,
  updateSeeLater,
}: {
  movie: Movie;
  updateFavourites?: (movieSlug: string) => void;
  updateSeeLater?: (movieSlug: string) => void;
}) {
  const pathname = usePathname();
  const isOnFavouritesPage = pathname === '/favourites';
  const isOnSeeLaterPage = pathname === '/seeLater';

  return (
    <div className='w-[250px] lg:w-[270px] h-full bg-[#141313] lg:hover:scale-[1.01] lg:hover:transition lg:hover:duration-500 lg:hover:ease-out rounded-lg shadow relative'>
      <div className='absolute top-0 right-0 flex gap-[7px] bg-[#141313]/85 px-[7px] py-[5px] rounded-bl-lg z-1'>
        {!isOnSeeLaterPage && (
          <FavouriteIcon movieSlug={movie.slug} updateFavourites={updateFavourites} />
        )}
        {!isOnFavouritesPage && (
          <SeeLaterIcon movieSlug={movie.slug} updateSeeLater={updateSeeLater} />
        )}
      </div>
      <Link href={`${movie.slug}`}>
        <Image
          className='rounded-t-lg w-full h-[350px] lg:h-[380px]'
          width='270'
          height='380'
          src={movie.image}
          alt=''
          priority
        />
        <div className='p-3 lg:p-5'>
          <h2 className='mb-4 text-xl lg:text-2xl font-bold tracking-tight text-white'>
            {movie.name}
          </h2>
          <RateStars rate={movie.rate} />
          <p className='text-sm lg:text-base mb-4 text-gray-400'>{movie.release_date}</p>
          <p className='text-sm lg:text-base mb-4 text-gray-400'>{movie.category}</p>
          <p className='text-sm lg:text-base text-gray-400'>{movie.duration}</p>
        </div>
      </Link>
    </div>
  );
}
