'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/lib/types';
import { usePathname } from 'next/navigation';
import RatingWithText from './RatingWithText';
import FavouriteButton from './FavouriteButton';
import SeeLaterButton from './SeeLaterButton';

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
    <div className='max-w-[250px] bg-gray lg:hover:scale-[1.01] lg:hover:transition lg:hover:duration-500 lg:hover:ease-out rounded-lg shadow relative'>
      <div className='absolute top-0 right-0 flex gap-[7px] bg-gray/85 px-[7px] py-[5px] rounded-bl-lg z-1'>
        {pathname !== '/seeLater' && (
          <FavouriteButton type={'icon'} movieSlug={movie.slug} updateFavourites={updateFavourites} />
        )}
        {pathname !== '/favourites' && (
          <SeeLaterButton type={'icon'} movieSlug={movie.slug} updateSeeLater={updateSeeLater} />
        )}
      </div>
      <Link href={`${movie.slug}`}>
        <Image
          className='rounded-t-lg w-full aspect-[3/4]'
          width='354'
          height='470'
          src={movie.image}
          alt={movie.name}
          priority
        />
        <div className='p-[15px] flex flex-col gap-[15px]'>
          <h2 className='text-md lg:text-xl font-medium tracking-tight'>{movie.name}</h2>
          <RatingWithText rating={ratingAvg ? ratingAvg : 0} />
          <p className='text-xs lg:text-base text-gray-ligther'>{movie.release_date}</p>
          <p className='text-xs lg:text-base text-gray-ligther'>{movie.category}</p>
          <p className='text-xs lg:text-base text-gray-ligther'>{movie.duration}</p>
        </div>
      </Link>
    </div>
  );
}
