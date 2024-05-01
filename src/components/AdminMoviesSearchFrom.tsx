import Image from "next/image";

export default function AdminMoviesSearchForm() {
    return (
        <form className="mb-10">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Image src='/search.svg' width={15} height={15} alt="Search icon" />
                </div>
                <input
                    type="search"
                    id="search"
                    name="search"
                    className="block w-full p-4 ps-10 text-sm border-none rounded-lg bg-neutral-800 placeholder-gray-400 text-white"
                    placeholder="Поиск имени фильма"
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute end-2 bottom-2 font-medium rounded-lg text-sm px-4 py-2 bg-red-700 hover:bg-red-800"
                >
                    Найти
                </button>
            </div>
        </form>
    );
}
