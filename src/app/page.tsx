import { collection } from 'firebase/firestore';
import { db } from '@/database/firebase';
import { Category, Movie } from '@/lib/types';
import { getDBCollection } from '@/database/databaseServices';
import MobileCollapseSearchForm from '@/components/MobileCollapseSearchForm';
import MoviesList from '@/components/MoviesList';

export const revalidate = 0;

export default async function Home() {
  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];
  const categories = (await getDBCollection(collection(db, 'categories'))) as Category[];

  return (
    <>
      <MobileCollapseSearchForm categories={categories} />
      <MoviesList movies={movies} />
    </>
  );
}
