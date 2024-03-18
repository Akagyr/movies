import Link from "next/link";
import React from "react";

export default function HeaderAccount() {
    return (
        <>
            <div className="hidden lg:flex w-fit justify-self-end px-10">
                <Link href="/auth" className="text-red-600 border border-red-600 font-semibold text-sm rounded-lg px-4 py-2 text-center hover:bg-red-700 hover:border-red-700 hover:text-white hidden lg:block transition duration-300 ease-in-out">
                    Войти
                </Link>
            </div>
            <div className="lg:hidden justify-self-end w-[30px] h-[30px]">
                <svg className="fill-red-600" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z"></path>
                        <path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z"></path>
                        <path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z"></path>
                    </g>
                </svg>
            </div>
        </>
    );
}
