'use client';

import { Movie } from '@/lib/types';
import AdminMoviesListItem from './AdminMoviesListItem';
import { useState } from 'react';
import AdminMovieModal from './AdminMovieModal';

export default function AdminMoviesList({
  movies,
  setMovies,
}: {
  movies: Movie[];
  setMovies: (value: Movie[]) => void;
}) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [currrectMovie, setCurrentMovie] = useState<Movie>();

  const showMoviesList = movies.map((movie) => (
    <AdminMoviesListItem
      key={movie.slug}
      setIsOpenModal={setIsOpenModal}
      setCurrentMovie={setCurrentMovie}
      setMovies={setMovies}
      movie={movie}
      moviesLength={movies.length}
    />
  ));

  return (
    <>
      <AdminMovieModal
        movie={currrectMovie}
        setMovies={setMovies}
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
      <ul className='text-sm font-medium border rounded-lg bg-neutral-800 border-neutral-700 text-white'>
        {showMoviesList}
      </ul>
    </>
  );
}
