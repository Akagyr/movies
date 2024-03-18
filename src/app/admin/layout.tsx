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
        <div className="max-w-[100%] mx-4 md:max-w-[80%] md:mx-auto xl:max-w-[70%] 2xl:max-w-[50%] 2xl:mx-20">
            {children}
        </div>
    );
}
