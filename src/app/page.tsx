import { collection } from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Category, Movie } from '@/lib/types';
import MovieCard from '@/components/MovieCard';
import { getDBCollection } from '@/database/databaseServices';
import MobileCollapseSearchForm from '@/components/MobileCollapseSearchForm';

export const revalidate = 0;

export default async function Home() {
  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];
  const categories = (await getDBCollection(collection(db, 'categories'))) as Category[];

  const showMovieCards = movies.map((movie: Movie) => <MovieCard key={movie.slug} movie={movie} />);

  return (
    <>
      <div className='w-full mb-[20px] lg:hidden'>
        <MobileCollapseSearchForm categories={categories} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-[30px] xl:gap-[40px] justify-items-center'>
        {showMovieCards}
      </div>
    </>
  );
}
