export type Movie = {
    slug: string,
    image: string,
    name: string,
    rate: string,
    category: string,
    duration: string,
    age: string,
    release_date: string,
    country: string,
    trailer: string,
    added_date: string
}

export type Category = {
    slug: string,
    name: string
}

export type User = {
    uid: string,
    displayName: string,
    email: string,
    photoURL?: string,
    role?: "user" | "admin"
}