import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

//Components :
import HeaderTitle from "@/components/HeaderTitle";
import LoadingAnimation from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import MoviesFlatList from "@/components/MoviesFlatList";

//Types
import { Movie } from "../types/MovieTypes";

//utils
import { fetchPopularMovies } from "@/utils/fetchPopularMovies";

export default function MoviesListScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const refreshScreen = () => {
    setError(null);
    setMovies([]);
    setRefreshing(true);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(true);

      fetchPopularMovies()
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    }, 100);
  }, [refreshing]);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return (
      <ErrorMessage refreshScreen={refreshScreen} message={error.message} />
    );
  }

  return (
    <View style={styles.container}>
      <HeaderTitle />
      <MoviesFlatList moviesprops={movies} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050251",
  },
  listItemContainer: {
    backgroundColor: "#050251",
    flex: 1,
    flexDirection: "column",
  },
  movieTitle: {
    color: "#f3f6f4",
    marginTop: 12,
    fontSize: 22,
    textAlign: "center",
    fontFamily: "Montserrat_600SemiBold",
  },
});
