import { Movie } from "../types/MovieTypes";

export default function navigateToDetails(router: any, movieDetails: Movie) {
  router.push({
    pathname: "movieDetails",
    params: { movie: JSON.stringify(movieDetails) },
  });
}
