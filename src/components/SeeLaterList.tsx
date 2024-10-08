'use client';

import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Movie, SeeLater } from '@/lib/types';
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import EmptyItems from './EmptyItems';
import Pagination from './Pagination';

export default function SeeLaterList({ movies }: { movies: Movie[] }) {
  const [seeLater, setSeeLater] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentUser = useGetCurrentUser();
  const moviesPerPage = 12;
  const totalPages = Math.ceil(seeLater.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = seeLater.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    if (currentUser && currentUser.seeLater) {
      const userSeeLater = currentUser.seeLater;
      const seeLaterMovies = movies.filter((mov) =>
        userSeeLater.some((sl: SeeLater) => sl.slug === mov.slug)
      );
      setSeeLater(seeLaterMovies);
    } else {
      setSeeLater([]);
    }
  }, [currentUser]);

  const updateSeeLater = (movieSlug: string) => {
    setSeeLater(seeLater.filter((sl: Movie) => sl.slug !== movieSlug));
  };

  const showMovies = currentMovies.map((movie: Movie) => (
    <MovieCard key={movie.slug} movie={movie} updateSeeLater={updateSeeLater} />
  ));

  return (
    <>
      {seeLater.length === 0 ? (
        <EmptyItems />
      ) : (
        <div className='h-full flex flex-col gap-[50px] justify-between'>
          <div>
            <h2 className='lg:hidden mb-[10px] font-semibold text-lg lg:text-xl'>
              Смотреть позже:
            </h2>
            <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] lg:gap-[40px] justify-items-center'>
              {showMovies}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </>
  );
}
