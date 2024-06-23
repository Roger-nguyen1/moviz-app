import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { ListItem, Image } from "@rneui/themed";

const apikey = process.env.EXPO_PUBLIC_API_KEY;
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function MoviesList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />;
  }

  if (error) {
    return (
      <View
        style={{
          marginTop: 25,
        }}
      >
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            bottomDivider
            onPress={() =>
              router.push({
                pathname: "details",
                params: { movie: JSON.stringify(item) },
              })
            }
          >
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
              }}
              style={styles.image}
            />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
      {loading && <ActivityIndicator size="large" style={styles.loading} />}
      <Text>moviesList screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 75,
  },
});
