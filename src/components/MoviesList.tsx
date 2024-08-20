'use client';

import { Movie } from '@/lib/types';
import MovieCard from '@/components/MovieCard';
import { useState } from 'react';
import Pagination from './Pagination';

export default function MoviesList({ movies }: { movies: Movie[] }) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const moviesPerPage = 12;
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const showMovieCards = currentMovies.map((movie: Movie) => (
    <MovieCard key={movie.slug} movie={movie} />
  ));

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[30px] xl:gap-[40px] justify-items-center'>
        {showMovieCards}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
