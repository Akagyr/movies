import React from "react";

import { useFetchMovies } from "@/hooks/useFetchMovies";

import MoviesListGroupItem from "./list-group-item";

export default function MoviesListGroup() {
    const movies = useFetchMovies();

    const showMoviesList = movies.map((movie, index) =>
        <MoviesListGroupItem key={movie.id} movie={movie} index={index} moviesLength={movies.length} />
    );

    return (
        <ul className="text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white">
            {showMoviesList}
        </ul>
    );
}
