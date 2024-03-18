"use client";

import MovieCard from "@/ui/movie-card";
import { useFetchMovies } from "@/hooks/useFetchMovies";

export default function Home() {
  const movies = useFetchMovies();

  const showMovieCards = movies?.map((movie) =>
    <MovieCard key={movie.id} movie={movie} />
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 justify-items-center">
      {showMovieCards}
    </div>
  );
}
