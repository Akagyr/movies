import FavouritesList from "@/components/FavouritesList";
import { getDBCollection } from "@/database/databaseServices";
import { db } from "@/database/firebase";
import { Movie } from "@/lib/types";
import { collection } from "firebase/firestore";

export default async function Favourites() {
  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];

  return <FavouritesList movies={movies} />;
}
