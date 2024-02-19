"use client";

import React, { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

import MoviesListGroup from "@/ui/admin/list-group";
import MoviesSearchForm from "@/ui/admin/search-form";

export default function Admin() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && sessionStorage.getItem("user") !== "3UOKToDSRMe15Lt9TEkoXTigWPF2") {
            redirect("auth");
        }
    }, []);

    return (
        <>
            <div className="max-w-[40%]">
                <MoviesSearchForm />
                <button
                    type="button"
                    onClick={() => router.replace("/admin/add-new-movie")}
                    className="flex text-white focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-5 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    <svg className="w-5 h-5 text-white mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                    </svg> Add new film
                </button>
                <MoviesListGroup />
            </div>
        </>
    );
}
