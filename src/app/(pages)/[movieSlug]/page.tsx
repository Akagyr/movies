import { notFound } from 'next/navigation';
import { getDBMovie } from '@/database/databaseServices';
import YoutubeTrailer from '@/components/YoutubeTrailer';
import MovieInfo from '@/components/MovieInfo';
import RatingPicker from '@/components/RatingPicker';

export const dynamicParams = false;

export default async function Movie(params: { params: { movieSlug: string } }) {
  const movie = await getDBMovie(params.params.movieSlug);

  if (!movie) {
    notFound();
  }

  return (
    <>
      <MovieInfo movie={movie} />
      <div className='mt-[50px]'>
        <h2 className='text-lg font-bold mb-[10px]'>Трейлер к фильму</h2>
        <YoutubeTrailer trailer={movie.trailer} name={movie.name} />
      </div>
      <div className='mt-[30px]'>
        <RatingPicker movieSlug={movie.slug} movieRates={movie.rates} />
      </div>
    </>
  );
}
