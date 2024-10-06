import React from 'react';
import { collection } from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Category, Movie } from '@/lib/types';
import { getDBCollection } from '@/database/databaseServices';
import MobileCollapseSearchForm from '@/components/MobileCollapseSearchForm';
import MoviesList from '@/components/MoviesList';
import Slider from '@/components/Slider';
import { getLatestMovies, getMostPopularMovies } from '@/helpers/moviesSliderHelper';

export const revalidate = 0;

export default async function Home() {
  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];
  const categories = (await getDBCollection(collection(db, 'categories'))) as Category[];

  const latestMovies = getLatestMovies(movies, 5);
  const popularMovies = getMostPopularMovies(movies, 5);

  return (
    <>
      {latestMovies && popularMovies && (
        <Slider latestMovies={latestMovies} popularMovies={popularMovies} />
      )}
      <MobileCollapseSearchForm categories={categories} />
      <MoviesList movies={movies} />
    </>
  );
}
