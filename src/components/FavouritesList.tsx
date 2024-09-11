'use client';

import useGetCurrentUser from '@/hooks/useGetCurrentUser';
import { Favourite, Movie } from '@/lib/types';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import EmptyItems from './EmptyItems';
import Pagination from './Pagination';

export default function FavouritesList({ movies }: { movies: Movie[] }) {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentUser = useGetCurrentUser();
  const moviesPerPage = 12;
  const totalPages = Math.ceil(favourites.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies = favourites.slice(indexOfFirstMovie, indexOfLastMovie);

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

  const showMovies = currentMovies.map((movie: Movie) => (
    <MovieCard key={movie.slug} movie={movie} updateFavourites={updateFavourites} />
  ));

  return (
    <>
      {favourites.length === 0 ? (
        <EmptyItems isAuth={currentUser ? true : false} />
      ) : (
        <div className='h-full flex flex-col gap-[50px] justify-between'>
          <div>
            <h2 className='lg:hidden mb-[10px] font-semibold text-lg lg:text-xl'>Избранные:</h2>
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
