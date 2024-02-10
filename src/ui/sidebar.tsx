import React from "react";

const arr = ["Комедии", "Мультфильмы", "Фантастика", "Мелодрамы"];

const showArr = arr.map((el, index) => <div key={index} className="w-[70%] mx-auto px-1 py-2.5 mb-3 rounded-lg hover:bg-red-800 font-medium text-sm cursor-pointer">{el}</div>);

export default function Sidebar() {
    return (
        <aside className="w-[13%] text-center">
            <div className="h-[80px] flex items-center justify-center">
                <p className="font-bold text-2xl">Movie.<span className="text-red-600">Trailers</span></p>
            </div>
            {showArr}
        </aside>
    );
}