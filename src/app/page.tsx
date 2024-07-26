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
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center'>
      <div className='w-full lg:hidden'>
        <MobileCollapseSearchForm categories={categories} />
      </div>
      {showMovieCards}
    </div>
  );
}
