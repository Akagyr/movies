import React from "react";
import Link from "next/link";

export default function NavMenuMobile() {
    return (
        <nav className="w-full py-2 grid grid-cols-3 lg:hidden sticky bottom-0 bg-[#141313]/80 backdrop-opacity-10 backdrop-invert rounded-t-full">
            <Link href="/" className="flex flex-col justify-center items-center border-r-2 border-red-600">
                <svg className="w-[20px] h-[20px] fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
                </svg>
                <p className="text-xs">Home</p>
            </Link>
            <Link href="/" className="flex flex-col justify-center items-center border-r-2">
                <svg className="w-[20px] h-[20px] fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M25,28c-0.462,0-0.895-0.113-1.286-0.3 l-6.007,6.007C17.512,33.902,17.256,34,17,34s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6.007-6.007 C22.113,25.895,22,25.462,22,25c0-1.304,0.837-2.403,2-2.816V8c0-0.553,0.447-1,1-1s1,0.447,1,1v14.184c1.163,0.413,2,1.512,2,2.816 C28,26.657,26.657,28,25,28z"></path>
                </svg>
                <p className="text-xs">See later</p>
            </Link>
            <Link href="/" className="flex flex-col justify-center items-center">
                <svg className="w-[20px] h-[20px] fill-red-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
                </svg>
                <p className="text-xs">Favourites</p>
            </Link>
        </nav>
    );
}
