export interface Movie {
    id: string,
    image: string,
    name: string,
    rate: number,
    category: string,
    duration: string,
    age: string,
    release_date: string,
    country: string,
    trailer: string
}

export interface Category {
    id: string,
    name: string
}