import { Movie } from '@/lib/types';
import RatingWithText from '@/components/RatingWithText';
import Image from 'next/image';

export default function MovieInfo({ movie }: { movie: Movie }) {
  const ratingSum = movie.rates.reduce((sum, rate) => sum + rate.rate, 0);

  return (
    <div className='lg:flex lg:gap-[80px] lg:items-center w-fit'>
      <Image
        className='rounded-xl mx-auto'
        width='250'
        height='380'
        src={movie.image}
        alt={`Image of ${movie.name}`}
      />
      <div className='flex flex-col gap-[20px]'>
        <h2 className='text-xl lg:text-2xl font-bold mt-[10px] md:mt-0'>{movie.name}</h2>
        <RatingWithText rating={ratingSum / movie.rates.length} />
        <div className='flex'>
          <p className='font-bold mr-[10px]'>Дата выхода:</p>
          <p>{movie.release_date}</p>
        </div>
        <div className='flex'>
          <p className='font-bold mr-[10px]'>Категории:</p>
          <p>{movie.category}</p>
        </div>
        <div className='flex'>
          <p className='font-bold mr-[10px]'>Страна:</p>
          <p>{movie.country}</p>
        </div>
        <div className='flex'>
          <p className='font-bold mr-[10px]'>Длитеность:</p>
          <p>{movie.duration}</p>
        </div>
        <div className='flex'>
          <p className='font-bold mr-[10px]'>Возраст:</p>
          <p>{movie.age}</p>
        </div>
      </div>
    </div>
  );
}
