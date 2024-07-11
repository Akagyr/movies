import FavouritesList from "@/components/FavouritesList";
import SeeLaterList from "@/components/SeeLaterList";
import { getDBCollection } from "@/database/databaseServices";
import { db } from "@/database/firebase";
import { Movie } from "@/lib/types";
import { collection } from "firebase/firestore";

export default async function SeeLater() {
  const movies = (await getDBCollection(collection(db, 'movies'))) as Movie[];

  return <SeeLaterList movies={movies} />;
}
