"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

export default function Auth() {
    const [test, setTest] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, e.target.email.value, e.target.password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                sessionStorage.setItem("user", user.uid);
                router.push("/admin");
            })
            .catch(() => {
                setTest(true);
            });
    };

    return (
        <form className="max-w-[90%] mx-auto md:max-w-[60%] xl:max-w-[50%] 2xl:max-w-[30%] md:mx-0" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Электронная почта:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-none text-sm rounded-lg block w-full p-2.5 bg-neutral-800 placeholder-gray-400 text-white"
                    placeholder="movie.trailers@gmail.com"
                    required
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                >
                    Пароль:
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="border-none text-sm rounded-lg block w-full p-2.5 bg-neutral-800 placeholder-gray-400 text-white"
                    required
                />
            </div>
            {test && <p className="mb-5 text-sm text-red-500 "><span className="font-medium">Уппс!</span> Неправильная почта или пароль!</p>}
            <button
                type="submit"
                className="text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-red-700 hover:bg-red-800"
            >
                Submit
            </button>
        </form>
    );
}
