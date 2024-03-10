import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../lib/firebase";
import { Movie } from "../lib/definitions";

export function useFetchMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchMovies() {
            const queryCollection = await getDocs(collection(db, "movies"));
            const itemsArr: Movie[] = [];
            queryCollection.forEach((doc) => {
                itemsArr.push({ id: doc.id, ...doc.data() } as Movie);
            });
            setMovies(itemsArr);
        }
        fetchMovies();
    }, []);

    return movies;
};