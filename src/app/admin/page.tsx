"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function Admin() {

    useEffect(() => {
        if (typeof window !== "undefined" && sessionStorage.getItem("user") !== "3UOKToDSRMe15Lt9TEkoXTigWPF2") {
            redirect("auth");
        }
    }, []);

    return (
        <div>Admin page</div>
    );
}
