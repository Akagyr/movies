import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Movie } from "@/lib/definitions";

import RateStars from "./rate-stars";

export default function MovieCard({
    movie,
}: {
    movie: Movie;
}) {
    return (
        <Link href={`/${movie.id}`}>
            <div className="w-[250px] lg:w-[270px] h-full bg-[#141313] rounded-lg shadow">
                <Image className="rounded-t-lg w-full h-[350px] lg:h-[380px]" width="270" height="380" src={movie.image} alt="" />
                <div className="p-3 lg:p-5">
                    <h2 className="mb-4 text-xl lg:text-2xl font-bold tracking-tight text-white">{movie.name}</h2>
                    <RateStars rate={movie.rate} />
                    <p className="text-sm lg:text-base mb-4 text-gray-400">{movie.release_date}</p>
                    <p className="text-sm lg:text-base mb-4 text-gray-400">{movie.category}</p>
                    <p className="text-sm lg:text-base text-gray-400">{movie.duration}</p>
                </div>
            </div>
        </Link>
    );
}