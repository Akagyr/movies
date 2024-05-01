import Image from 'next/image';
import { notFound } from 'next/navigation';
import RateStars from '@/components/RateStars';
import { getDBMovie } from '@/database/databaseServices';
import YoutubeTrailer from '@/components/YoutubeTrailer';

export const dynamicParams = false;

export default async function Movie(params: { params: { movieSlug: string } }) { 
  const movie = await getDBMovie({ movieSlug: params.params.movieSlug });

  if (!movie) {
    notFound();
  }

  return (
    <div className='mx-10 lg:mx-0'>
      <div className='lg:flex lg:gap-20'>
        <div>
          <Image className='rounded-xl mx-auto' width='250' height='380' src={movie.image} alt={`Image of ${movie.name}`} />
        </div>
        <div className='mt-5'>
          <h2 className='text-2xl font-bold mb-5'>{movie.name}</h2>
          <div className='mb-5'>
            <RateStars rate={movie.rate} />
          </div>
          <div className='flex mb-5'>
            <p className='font-bold mr-2'>Дата выхода:</p>
            <p>{movie.release_date}</p>
          </div>
          <div className='flex mb-5'>
            <p className='font-bold mr-2'>Категории:</p>
            <p>{movie.category}</p>
          </div>
          <div className='flex mb-5'>
            <p className='font-bold mr-2'>Страна:</p>
            <p>{movie.country}</p>
          </div>
          <div className='flex mb-5'>
            <p className='font-bold mr-2'>Длитеность:</p>
            <p>{movie.duration}</p>
          </div>
          <div className='flex mb-5'>
            <p className='font-bold mr-2'>Возраст:</p>
            <p>{movie.age}</p>
          </div>
        </div>
      </div>
      <YoutubeTrailer trailer={movie.trailer} name={movie.name} />
    </div>
  );
}
