"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if (typeof window !== "undefined" && sessionStorage.getItem("user") !== "3UOKToDSRMe15Lt9TEkoXTigWPF2") {
            redirect("/auth");
        }
    }, []);

    return (
        <main className="max-w-[40%] mx-20">
            {children}
        </main>
    );
}
