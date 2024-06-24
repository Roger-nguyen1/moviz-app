import { useRouter } from "expo-router";

const router = useRouter();

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export default function navigateToDetails(movieDetails: Movie) {
  router.push({
    pathname: "movieDetails",
    params: { movie: JSON.stringify(movieDetails) },
  });
}
