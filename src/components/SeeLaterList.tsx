'use client';

import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Movie, SeeLater } from '@/lib/types';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import EmptyItems from './EmptyItems';

export default function SeeLaterList({ movies }: { movies: Movie[] }) {
  const currentUser = useGetCurrentUser();
  const [seeLater, setSeeLater] = useState<Movie[]>([]);

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

  const showMovies = seeLater.map((movie: Movie) => <MovieCard key={movie.slug} movie={movie} updateSeeLater={updateSeeLater} />);

  return (
    <>
      {seeLater.length === 0 ? (
        <EmptyItems isAuth={currentUser ? true : false} />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center'>
          {showMovies}
        </div>
      )}
    </>
  );
}
