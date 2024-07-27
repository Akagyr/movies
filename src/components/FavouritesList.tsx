'use client';

import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Favourite, Movie } from '@/lib/types';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import EmptyItems from './EmptyItems';

export default function FavouritesList({ movies }: { movies: Movie[] }) {
  const currentUser = useGetCurrentUser();
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    if (currentUser && currentUser.favourites) {
      const userFavourites = currentUser.favourites;
      const favouriteMovies = movies.filter((mov) =>
        userFavourites.some((fav: Favourite) => fav.slug === mov.slug)
      );
      setFavourites(favouriteMovies);
    } else {
      setFavourites([]);
    }
  }, [currentUser]);

  const updateFavourites = (movieSlug: string) => {
    setFavourites(favourites.filter((fav: Movie) => fav.slug !== movieSlug));
  };

  const showMovies = favourites.map((movie: Movie) => (
    <MovieCard key={movie.slug} movie={movie} updateFavourites={updateFavourites} />
  ));

  return (
    <>
      {favourites.length === 0 ? (
        <EmptyItems isAuth={currentUser ? true : false} />
      ) : (
        <>
          <h2 className='lg:hidden text-white mb-[10px] font-semibold text-lg lg:text-xl'>Избранные:</h2>
          <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] lg:gap-[40px] justify-items-center'>
            {showMovies}
          </div>
        </>
      )}
    </>
  );
}
