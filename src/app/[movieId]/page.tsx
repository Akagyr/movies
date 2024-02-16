"use client";

import React from "react";

import { useFetchMovie } from "@/hooks/useFetchMovie";
import RateStars from "@/ui/rate-stars";

export default function Movie() {
    const movie = useFetchMovie();

    if (movie === null) {
        return null;
    }

    return (
        <div className="mx-40">
            <div className="flex">
                <div className="mr-20">
                    <img className="rounded-xl max-w-[250px] max-h-[380px]" src={movie.image} alt="" />
                </div>
                <div className="mt-5">
                    <h2 className="text-2xl font-bold mb-5">{movie.name}</h2>
                    <div className="mb-5">
                        <RateStars rate={movie.rate} />
                    </div>
                    <div className="flex mb-5">
                        <p className="font-bold mr-2">Дата выхода:</p>
                        <p>{movie.release_date}</p>
                    </div>
                    <div className="flex mb-5">
                        <p className="font-bold mr-2">Категории:</p>
                        <p>{movie.category}</p>
                    </div>
                    <div className="flex mb-5">
                        <p className="font-bold mr-2">Страна:</p>
                        <p>{movie.country}</p>
                    </div>
                    <div className="flex mb-5">
                        <p className="font-bold mr-2">Длитеность:</p>
                        <p>{movie.duration}</p>
                    </div>
                    <div className="flex mb-5">
                        <p className="font-bold mr-2">Возраст:</p>
                        <p>{movie.age}</p>
                    </div>
                </div>
            </div>
            <div className="p-20">
                <iframe className="rounded-xl"
                    width="800"
                    height="450"
                    src={movie.trailer}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen >
                </iframe>
            </div>
        </div>
    );
}
