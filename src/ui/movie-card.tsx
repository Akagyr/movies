import React from "react";

import { Movie } from "@/app/lib/definitions";

import RateStars from "./rate-stars";

export default function MovieCard({
    movie,
}: {
    movie: Movie;
}) {
    return (
        <div className="max-w-[250px] bg-[#141313] rounded-lg shadow">
            <img className="rounded-t-lg h-[340px] w-[100%]" src={movie.image} alt="" />
            <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.name}</h5>
                <RateStars rate={movie.rate} />
                <p className="mb-4 font-normal text-gray-400">{movie.category}</p>
                <p className="font-normal text-gray-400">{movie.duration}</p>
            </div>
        </div>
    );
}