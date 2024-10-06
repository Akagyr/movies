import React from 'react';
import { notFound } from 'next/navigation';
import { getDBMovie } from '@/database/databaseServices';
import YoutubeTrailer from '@/components/YoutubeTrailer';
import MovieInfo from '@/components/MovieInfo';
import RatingPicker from '@/components/RatingPicker';
import Comments from '@/components/Comments';

export const dynamicParams = false;

export default async function Movie(params: { params: { movieSlug: string } }) {
  const movie = await getDBMovie(params.params.movieSlug);

  if (!movie) {
    notFound();
  }

  return (
    <div className='w-full lg:max-w-[1000px] lg:mx-[100px]'>
      <MovieInfo movie={movie} />
      <div className='mt-[50px]'>
        <h2 className='text-lg font-bold mb-[10px]'>Краткий сюжет</h2>
        <p>{movie.brief_plot}</p>
      </div>
      <div className='mt-[50px]'>
        <h2 className='text-lg font-bold mb-[10px]'>Трейлер к фильму</h2>
        <YoutubeTrailer trailer={movie.trailer} name={movie.name} />
      </div>
      <div className='mt-[30px]'>
        <RatingPicker movieSlug={movie.slug} movieRates={movie.rates} />
      </div>
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        <Comments comments={movie.comments} movieSlug={movie.slug} />
      </div>
    </div>
  );
}
