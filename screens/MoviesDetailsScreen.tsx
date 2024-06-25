import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Movie } from "../types/MovieTypes";
import MovieCard from "@/components/MovieCard";

export default function MoviesDetailsScreen() {
  const { movie } = useLocalSearchParams();
  const movieData: Movie = JSON.parse(movie as string);

  return (
    <ScrollView style={styles.mainContainer}>
      <MovieCard
        title={movieData.title}
        poster={movieData.poster_path}
        overview={movieData.overview}
        releaseDate={movieData.release_date}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#050251",
  },
  cardContainer: {
    backgroundColor: "#050251",
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 0,
  },
  title: {
    color: "#f3f6f4",
    fontSize: 36,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
  text: {
    color: "#f3f6f4",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 14,
  },
  date: {
    color: "#f3f6f4",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 30,
  },
  image: {
    height: 460,
    width: "100%",
    marginBottom: 14,
  },
});
