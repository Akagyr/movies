import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { doc, deleteDoc } from "firebase/firestore";

import { Movie } from "@/lib/definitions";
import { db } from "@/lib/firebase";

export default function MoviesListGroupItem({
    movie,
    index,
    moviesLength,
}: {
    movie: Movie,
    index: number,
    moviesLength: number
}) {
    const router = useRouter();

    const deleteMovie = async ({ id }: { id: string }) => {
        await deleteDoc(doc(db, "movies", id));
    };

    return (
        <li
            className={`w-full p-2 lg:px-4 ${moviesLength > 1 && index < moviesLength - 1 && "border-b border-neutral-700"} grid grid-cols-4 sm:grid-cols-6 gap-1 items-center`}
        >
            <Image className="w-[60px] h-[90px]" width="60" height="90" src={movie.image} alt="" />
            <p className="col-span-2 sm:col-span-4 text-sm lg:text-base">{movie.name}</p>
            <div className="grid grid-rows-2 gap-2 place-content-end">
                <button
                    type="button"
                    onClick={() => router.push(`/admin/edit-movie/${movie.id}`)}
                    className="w-fit text-white font-medium rounded-full text-sm px-5 py-2 text-center bg-blue-600 hover:bg-blue-700"
                >
                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z" />
                    </svg>
                </button>
                <button
                    type="button"
                    onClick={() => deleteMovie({ id: movie.id })}
                    className="w-fit text-white font-medium rounded-full text-sm px-5 py-2 text-center bg-red-600 hover:bg-red-700"
                >
                    <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                    </svg>
                </button>
            </div>
        </li>
    );
}
