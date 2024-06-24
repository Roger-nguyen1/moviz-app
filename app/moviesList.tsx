import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { ListItem, Image } from "@rneui/themed";
import { Shadow } from "react-native-shadow-2";
import LoadingAnimation from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import navigateToDetails from "@/utils/navigateToDetails";

const apikey = process.env.EXPO_PUBLIC_API_KEY;
type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
        .then((response) => {
          setMovies(response.data.results);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Most popular movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            containerStyle={styles.listItemContainer}
            onPress={() =>
              router.push({
                pathname: "movieDetails",
                params: { movie: JSON.stringify(item) },
              })
            }
          >
            <TouchableHighlight onPress={() => navigateToDetails(item)}>
              <Shadow startColor={"#3d85c6"}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                  }}
                  style={styles.image}
                />
              </Shadow>
            </TouchableHighlight>

            <ListItem.Content>
              <ListItem.Title style={styles.movieTitle}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>

            <TouchableOpacity
              style={styles.detailsContainer}
              onPress={() => navigateToDetails(item)}
            >
              <Text style={styles.detailText}>details</Text>
              <ListItem.Chevron />
            </TouchableOpacity>
          </ListItem>
        )}
      />
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
  headerTitle: {
    fontSize: 28,
    color: "#f3f6f4",
    marginTop: 22,
    marginBottom: 10,
    fontFamily: "Montserrat_600SemiBold",
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
  image: {
    width: 190,
    height: 270,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
    backgroundColor: "#3d85c6",
  },
  detailText: {
    color: "#f3f6f4",
    paddingBottom: 4,
    fontFamily: "Montserrat_400Regular",
  },
});
