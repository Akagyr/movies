import { useRouter } from "next/navigation";
import React from "react";

import { Movie } from "@/lib/definitions";

export default function AdminForm({
    handleSubmit,
    movie,
}: {
    handleSubmit: (e: any) => void
    movie?: Movie
}
) {
    const router = useRouter();

    return (
        <form className="pb-10 max-w-[40%]" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Ccылка картинки
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={movie ? movie.image : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Имя
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={movie ? movie.name : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="rate"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Рейтинг (не обязательно)
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    defaultValue={movie ? movie.rate : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="release_date"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Дата выхода
                </label>
                <input
                    type="text"
                    id="release_date"
                    name="release_date"
                    defaultValue={movie ? movie.release_date : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Категория
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={movie ? movie.category : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Страна
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    defaultValue={movie ? movie.country : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="duration"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Длительность
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    defaultValue={movie ? movie.duration : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Возраст
                </label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    defaultValue={movie ? movie.age : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-7">
                <label
                    htmlFor="trailer"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Ссылка трейлера
                </label>
                <input
                    type="text"
                    id="trailer"
                    name="trailer"
                    defaultValue={movie ? movie.trailer : ""}
                    className="border text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="mr-3 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-green-600 hover:bg-green-700 focus:ring-green-800"
            >
                {movie ? "Обновить" : "Добавить"}
            </button>
            <button
                type="button"
                onClick={() => router.replace("/admin")}
                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-red-600 hover:bg-red-700 focus:ring-red-800"
            >
                Отмена
            </button>
        </form>
    );
}
