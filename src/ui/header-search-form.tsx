import React from "react";

export default function HeaderSearchForm() {
    return (
        <form className="hidden lg:flex px-10 col-span-4 items-center">
            <div className="mr-5 w-[200px]">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    className="text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 border-none placeholder-gray-400 text-white"
                />
            </div>
            <div className="mr-5 w-[200px]">
                <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Жанр"
                    className="text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 border-none placeholder-gray-400 text-white"
                />
            </div>
            <div className="mr-5 w-[100px]">
                <input
                    type="text"
                    id="year"
                    name="year"
                    placeholder="Год"
                    className="text-sm rounded-lg block w-full py-2 px-3 bg-neutral-800 border-none placeholder-gray-400 text-white"
                />
            </div>
            <button
                type="submit"
                className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center bg-red-700 hover:bg-red-800"
            >
                Поиск
            </button>
        </form>
    );
}
