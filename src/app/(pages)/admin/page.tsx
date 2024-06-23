'use client';

import { collection } from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Movie } from '@/lib/types';
import AdminMoviesList from '@/components/AdminMoviesList';
import AdminMoviesSearchFrom from '@/components/AdminMoviesSearchFrom';
import { getDBCollection } from '@/database/databaseServices';
import AdminModalMovie from '@/components/AdminMovieModal';
import { useEffect, useState } from 'react';
import Loading from '@/app/loading';

export default function Admin() {
  const [movies, setMovies] = useState<Movie[]>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesDB = await getDBCollection(collection(db, 'movies')) as Movie[];
      setMovies(moviesDB);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <AdminModalMovie setMovies={setMovies} isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
      <AdminMoviesSearchFrom />
      <button
        type='button'
        onClick={() => setIsOpenModal(true)}
        className='text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 bg-blue-600 hover:bg-blue-700'
      >
        + Добавить новый фильм
      </button>
      {movies ? <AdminMoviesList movies={movies} setMovies={setMovies} /> : <Loading />}
    </>
  );
}
