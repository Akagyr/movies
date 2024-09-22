import { collection } from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Movie } from '@/lib/types';
import MovieCard from '@/components/MovieCard';
import { getDBCollection } from '@/database/databaseServices';
import { redirect } from 'next/navigation';
import convertDate from '@/helpers/convertDateHelper';

export const revalidate = 0;

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (Object.keys(searchParams).length === 0) {
    return redirect('/');
  }

  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];

  const name = searchParams.name as string;
  const category = searchParams.category as string;
  const year = searchParams.year as string;

  let filteredMovies = movies;

  if (name) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (category) {
    filteredMovies = filteredMovies.filter((movie) =>
      movie.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (year) {
    filteredMovies = filteredMovies.filter((movie) => {
      const convertedDate = convertDate(movie.release_date);
      return convertedDate.includes(year);
    });
  }

  if (filteredMovies.length === 0) {
    return <div>По вашему поиску фильмов нету!</div>
  }

  const showMovieCards = filteredMovies.map((movie: Movie) => (
    <MovieCard key={movie.slug} movie={movie} />
  ));

  return (
    <div className='grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] lg:gap-[40px] justify-items-center'>
      {showMovieCards}
    </div>
  );
}
