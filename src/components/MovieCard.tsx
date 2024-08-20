'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';
import FavouriteIcon from './FavouriteIcon';
import SeeLaterIcon from './SeeLaterIcon';
import { usePathname } from 'next/navigation';
import RatingWithText from './RatingWithText';

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
  const ratingSum = movie.rates.reduce((sum, rate) => sum + rate.rate, 0);
  const ratingAvg = ratingSum / movie.rates.length;

  return (
    <div className='max-w-[270px] bg-[#141313] lg:hover:scale-[1.01] lg:hover:transition lg:hover:duration-500 lg:hover:ease-out rounded-lg shadow relative'>
      <div className='absolute top-0 right-0 flex gap-[7px] bg-[#141313]/85 px-[7px] py-[5px] rounded-bl-lg z-1'>
        {pathname !== '/seeLater' && (
          <FavouriteIcon movieSlug={movie.slug} updateFavourites={updateFavourites} />
        )}
        {pathname !== '/favourites' && (
          <SeeLaterIcon movieSlug={movie.slug} updateSeeLater={updateSeeLater} />
        )}
      </div>
      <Link href={`${movie.slug}`}>
        <Image
          className='rounded-t-lg w-full aspect-[3/4]'
          width='270'
          height='380'
          src={movie.image}
          alt={movie.name}
          priority
        />
        <div className='p-[15px] lg:p-[20px] flex flex-col gap-[15px]'>
          <h2 className='text-lg lg:text-2xl font-bold tracking-tight text-white'>{movie.name}</h2>
          <RatingWithText rating={ratingAvg ? ratingAvg : 0} />
          <p className='text-xs lg:text-base text-gray-400'>{movie.release_date}</p>
          <p className='text-xs lg:text-base text-gray-400'>{movie.category}</p>
          <p className='text-xs lg:text-base text-gray-400'>{movie.duration}</p>
        </div>
      </Link>
    </div>
  );
}
