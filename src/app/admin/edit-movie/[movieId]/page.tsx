"use client";

import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { db } from "@/lib/firebase";
import { useFetchMovie } from "@/hooks/useFetchMovie";
import AdminForm from "@/ui/admin/form";

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
        } catch (error) {}

        router.push("/admin");
    };

    return (
        <AdminForm handleSubmit={handleSubmit} movie={movie!} />
    );
}
