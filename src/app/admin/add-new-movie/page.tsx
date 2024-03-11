"use client";

import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { db } from "@/lib/firebase";
import AdminForm from "@/ui/admin/form";

export default function AddNewMovie() {
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            await setDoc(doc(db, "movies", String(Date.now())), {
                image: e.target.image.value.trim(),
                name: e.target.name.value.trim(),
                rate: e.target.rate.value ? e.target.rate.value.trim() : 0,
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
        <AdminForm handleSubmit={handleSubmit} />
    );
}