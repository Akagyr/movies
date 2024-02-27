import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../lib/firebase";
import { Category } from "../lib/definitions";

export function useFetchCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        try {
            const queryCollection = collection(db, "categories");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                const tempArr: any[] = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ id: doc.id, ...doc.data() });
                });
                setCategories(tempArr);
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            console.error(error);
        }
    }, []);

    return categories;
};