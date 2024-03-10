"use client";

import MovieCard from "@/ui/movie-card";
import { useFetchMovies } from "@/hooks/useFetchMovies";

export default function Home() {
  const movies = useFetchMovies();
  
  const showMovieCards = movies?.map((movie) =>
    <MovieCard key={movie.id} movie={movie} />
  );

  return (
    <main className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 gap-10 p-10 justify-items-center">
      {showMovieCards}
    </main>
  );
}
