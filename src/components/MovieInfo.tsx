import { Movie } from '@/lib/types';
import RatingWithText from '@/components/RatingWithText';
import Image from 'next/image';
import AddToListMovieBtns from './AddToListMovieBtns';

export default function MovieInfo({ movie }: { movie: Movie }) {
  const ratingSum = movie.rates.reduce((sum, rate) => sum + rate.rate, 0);
  const ratingAvg = ratingSum / movie.rates.length;

  return (
    <div className='lg:flex lg:gap-[50px] w-full'>
      <div className='w-full lg:max-w-[250px] mx-auto'>
        <Image
          className='rounded-xl w-[180px] lg:w-full aspect-[3/4] mb-[20px] mx-auto'
          width='354'
          height='470'
          src={movie.image}
          alt={`Image of ${movie.name}`}
        />
        <AddToListMovieBtns movieSlug={movie.slug} />
      </div>
      <div className='flex flex-col gap-[20px] mx-auto lg:max-w-[750px] mt-[20px] md:mt-0'>
        <h2 className='text-xl lg:text-2xl font-bold'>{movie.name}</h2>
        <RatingWithText rating={ratingAvg ? ratingAvg : 0} />
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Дата выхода:</p>
          <p className='text-sm lg:text-base'>{movie.release_date}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Страна:</p>
          <p className='text-sm lg:text-base'>{movie.country}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Режиссер:</p>
          <p className='text-sm lg:text-base'>{movie.director}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Жанр:</p>
          <p className='text-sm lg:text-base'>{movie.category}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Возраст:</p>
          <p className='text-sm lg:text-base'>{movie.age}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Длитеность:</p>
          <p className='text-sm lg:text-base'>{movie.duration}</p>
        </div>
        <div className='flex'>
          <p className='text-sm lg:text-base font-bold mr-[10px]'>Актёры:</p>
          <p className='text-sm lg:text-base'>{movie.actors}</p>
        </div>
      </div>
    </div>
  );
}
