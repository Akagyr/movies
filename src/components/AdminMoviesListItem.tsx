'use client';

import Image from 'next/image';
import { Movie } from '@/lib/types';
import { deleteDBMovie, getDBCollection } from '@/database/databaseServices';
import { collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function AdminMoviesListItem({
  movie,
  moviesLength,
  setIsOpenModal,
  setCurrentMovie,
  setMovies,
}: {
  movie: Movie;
  moviesLength: number;
  setIsOpenModal: (value: boolean) => void;
  setCurrentMovie: (value: Movie) => void;
  setMovies: (value: Movie[]) => void;
}) {
  const handleEditMovie = () => {
    setCurrentMovie(movie);
    setIsOpenModal(true);
  };

  const handleDeleteMovie = async ({ slug }: { slug: string }) => {
    await deleteDBMovie({ slug });
    setMovies(await getDBCollection(collection(db, 'movies')) as Movie[]);
  };

  return (
    <li
      className={`w-full p-2 lg:px-4 ${
        moviesLength > 1 && 'border-b last:border-none border-neutral-700'
      } grid grid-cols-4 sm:grid-cols-6 gap-1 items-center`}
    >
      <Image className='w-[60px] h-[90px]' width='60' height='90' src={movie.image} alt='' />
      <p className='col-span-2 sm:col-span-4 text-sm lg:text-base'>{movie.name}</p>
      <div className='grid grid-rows-2 gap-2 place-content-end'>
        <button
          type='button'
          onClick={() => handleEditMovie()}
          className='w-fit text-white font-medium rounded-full text-sm px-5 py-2 text-center bg-blue-600 hover:bg-blue-700'
        >
          <Image src='/edit.svg' width={20} height={20} alt='Edit icon' />
        </button>
        <button
          type='button'
          onClick={() => handleDeleteMovie({ slug: movie.slug })}
          className='w-fit text-white font-medium rounded-full text-sm px-5 py-2 text-center bg-red-600 hover:bg-red-700'
        >
          <Image src='/trash.svg' width={20} height={20} alt='Trash icon' />
        </button>
      </div>
    </li>
  );
}
