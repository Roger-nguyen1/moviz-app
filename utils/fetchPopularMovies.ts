import axios from "axios";
import { Movie } from "../types/MovieTypes";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export async function fetchPopularMovies() {
  try {
    const response1 = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1&api_key=${apikey}`
    );
    const response2 = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=2&api_key=${apikey}`
    );

    const ids = new Set(response1.data.results.map((movie: Movie) => movie.id));

    const filteredResults = response2.data.results.filter(
      (movie: Movie) => !ids.has(movie.id)
    );

    return response1.data.results.concat(filteredResults);
  } catch (error) {
    throw error;
  }
}
