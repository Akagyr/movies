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
            <div className="max-w-[270px] h-full bg-[#141313] rounded-lg shadow">
                <Image className="rounded-t-lg w-[270px] h-[380px]" width="250" height="350" src={movie.image} alt="" />
                <div className="p-5">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-white">{movie.name}</h2>
                    <RateStars rate={movie.rate} />
                    <p className="mb-4 font-normal text-gray-400">{movie.release_date}</p>
                    <p className="mb-4 font-normal text-gray-400">{movie.category}</p>
                    <p className="font-normal text-gray-400">{movie.duration}</p>
                </div>
            </div>
        </Link>
    );
}