"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { useFetchMovie } from "@/hooks/useFetchMovie";
import RateStars from "@/ui/rate-stars";

export default function Movie() {
    const movie = useFetchMovie();

    if (movie === null) {
        return null;
    } else {
        if (Object.keys(movie).length === 1) {
            notFound();
        }
    }

    return (
        <>
            <div className="mx-10 lg:mx-0 lg:flex">
                <div className="lg:mr-20">
                    <Image className="rounded-xl mx-auto" width="250" height="380" src={movie.image} alt="" />
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
            <div className="mx-10 my-20 lg:mx-0 xl:m-20">
                <iframe className="rounded-xl w-full xl:max-w-[750px] aspect-video"
                    src={movie.trailer}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen >
                </iframe>
            </div>
        </>
    );
}
