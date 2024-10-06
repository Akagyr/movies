import { Movie } from '@/lib/types';

export function getLatestMovies(movies: Movie[], count: number): Movie[] {
  return [...movies]
    .sort((a, b) => new Date(b.added_date).getTime() - new Date(a.added_date).getTime())
    .slice(0, count);
}

export function getMostPopularMovies(movies: Movie[], count: number): Movie[] {
  return [...movies]
    .filter((movie) => movie.rates && movie.rates.length > 0)
    .sort((a, b) => b.rates.length - a.rates.length)
    .slice(0, count);
}
