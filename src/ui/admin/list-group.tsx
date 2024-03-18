import React from "react";

import { Movie } from "@/lib/definitions";

import MoviesListGroupItem from "./list-group-item";

export default function MoviesListGroup({
    movies,
}: {
    movies: Movie[]
}) {

    const showMoviesList = movies.map((movie, index) =>
        <MoviesListGroupItem key={movie.id} movie={movie} index={index} moviesLength={movies.length} />
    );

    return (
        <ul className="text-sm font-medium border rounded-lg bg-neutral-800 border-neutral-700 text-white">
            {showMoviesList}
        </ul>
    );
}
