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
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label
                    htmlFor="image"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Ccылка картинки
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    defaultValue={movie ? movie.image : ""}
                    placeholder="Ccылка картинки"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Имя
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={movie ? movie.name : ""}
                    placeholder="Имя"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="rate"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Рейтинг (не обязательно)
                </label>
                <input
                    type="text"
                    id="rate"
                    name="rate"
                    defaultValue={movie ? movie.rate : ""}
                    placeholder="Рейтинг"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="release_date"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Дата выхода
                </label>
                <input
                    type="text"
                    id="release_date"
                    name="release_date"
                    defaultValue={movie ? movie.release_date : ""}
                    placeholder="Дата выхода"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="category"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Категория
                </label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    defaultValue={movie ? movie.category : ""}
                    placeholder="Категория"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="country"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Страна
                </label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    defaultValue={movie ? movie.country : ""}
                    placeholder="Страна"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="duration"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Длительность
                </label>
                <input
                    type="text"
                    id="duration"
                    name="duration"
                    defaultValue={movie ? movie.duration : ""}
                    placeholder="Длительность"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    htmlFor="age"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Возраст
                </label>
                <input
                    type="text"
                    id="age"
                    name="age"
                    defaultValue={movie ? movie.age : ""}
                    placeholder=" Возраст"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <div className="mb-7">
                <label
                    htmlFor="trailer"
                    className="block mb-1 ml-1 text-xs font-medium text-white"
                >
                    Ссылка трейлера
                </label>
                <input
                    type="text"
                    id="trailer"
                    name="trailer"
                    defaultValue={movie ? movie.trailer : ""}
                    placeholder="Ссылка трейлера"
                    className="border-none text-xs rounded-lg block w-full p-3 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            <button
                type="submit"
                className="mr-3 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-600 hover:bg-green-700"
            >
                {movie ? "Обновить" : "Добавить"}
            </button>
            <button
                type="button"
                onClick={() => router.push("/admin")}
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-700"
            >
                Отмена
            </button>
        </form>
    );
}
