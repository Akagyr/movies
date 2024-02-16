import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../lib/firebase";
import { Movie } from "../lib/definitions";

export function useFetchMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        try {
            const queryCollection = collection(db, "movies");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                const tempArr: any[] = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ id: doc.id, ...doc.data() });
                });
                setMovies(tempArr);
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return movies;
};