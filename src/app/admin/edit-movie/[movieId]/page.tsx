"use client";

import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { db } from "@/lib/firebase";
import { useFetchMovie } from "@/hooks/useFetchMovie";

export default function EditMovie() {
    const movie = useFetchMovie();
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await updateDoc(doc(db, "movies", movie!.id), {
                image: e.target.image.value,
                name: e.target.name.value,
                rate: e.target.rate.value,
                category: e.target.category.value,
                duration: e.target.duration.value,
                age: e.target.age.value,
                release_date: e.target.release_date.value,
                country: e.target.country.value,
                trailer: e.target.trailer.value,
            });
        } catch (error) {
            console.log(error);
        }

        router.replace("/admin");
    };

    return (
        <form className="pb-10 max-w-[40%]" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Image URL
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={movie?.image}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={movie?.name}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="rate"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Rate (not required)
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    defaultValue={movie?.rate}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="release_date"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Release date
                </label>
                <input
                    type="text"
                    id="release_date"
                    name="release_date"
                    defaultValue={movie?.release_date}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Category
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={movie?.category}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Country
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    defaultValue={movie?.country}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="duration"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Duration
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    defaultValue={movie?.duration}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Age
                </label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    defaultValue={movie?.age}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-7">
                <label
                    htmlFor="trailer"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Trailer URL
                </label>
                <input
                    type="text"
                    id="trailer"
                    name="trailer"
                    defaultValue={movie?.trailer}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="mr-3 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800"
            >
                Update
            </button>
            <button
                type="reset"
                onClick={() => router.replace("/admin")}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
            >
                Cancel
            </button>
        </form>
    );
}
