import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../lib/firebase";
import { Category } from "../lib/definitions";

export function useFetchCategories() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const queryCollection = await getDocs(collection(db, "categories"));
            const itemsArr: Category[] = [];
            queryCollection.forEach((doc) => {
                itemsArr.push({ id: doc.id, ...doc.data() } as Category);
            });
            setCategories(itemsArr);
        }
        fetchCategories();
    }, []);

    return categories;
};