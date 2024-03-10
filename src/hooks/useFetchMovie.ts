import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

import { db } from "../lib/firebase";
import { Movie } from "../lib/definitions";

export function useFetchMovie() {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { movieId } = useParams();

    useEffect(() => {
        async function fetchMovie() {
            const docRef = doc(db, "movies", `${movieId}`);
            const docSnap = await getDoc(docRef);
            setMovie({ id: docSnap.id, ...docSnap.data() } as Movie);
        }
        fetchMovie();
    }, [movieId]);

    return movie;
};