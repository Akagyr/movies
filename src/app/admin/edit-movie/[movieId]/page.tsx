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
                image: e.target.image.value.trim(),
                name: e.target.name.value.trim(),
                rate: e.target.rate.value.trim(),
                category: e.target.category.value.trim(),
                duration: e.target.duration.value.trim(),
                age: e.target.age.value.trim(),
                release_date: e.target.release_date.value.trim(),
                country: e.target.country.value.trim(),
                trailer: e.target.trailer.value.trim(),
            });
        } catch (error) {}

        router.push("/admin");
    };

    return (
        <AdminForm handleSubmit={handleSubmit} movie={movie!} />
    );
}
