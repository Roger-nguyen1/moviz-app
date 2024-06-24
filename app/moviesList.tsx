import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem, Image } from "@rneui/themed";
import { Shadow } from "react-native-shadow-2";
import LoadingAnimation from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";

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
    }, 1000);
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
            containerStyle={{
              backgroundColor: "#050251",
              flex: 1,
              flexDirection: "column",
            }}
            onPress={() =>
              router.push({
                pathname: "movieDetails",
                params: { movie: JSON.stringify(item) },
              })
            }
          >
            <Shadow startColor={"#3d85c6"}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                }}
                style={styles.image}
              />
            </Shadow>
            <ListItem.Content>
              <ListItem.Title
                style={{
                  color: "#f3f6f4",
                  fontWeight: "bold",
                  marginTop: 12,
                  fontSize: 22,
                  textAlign: "center",
                }}
              >
                {item.title}
              </ListItem.Title>
            </ListItem.Content>
            <View style={styles.detailsContainer}>
              <Text style={{ color: "#f3f6f4", paddingBottom: 4 }}>
                details
              </Text>
              <ListItem.Chevron />
            </View>
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
    marginTop: 5,
    marginBottom: 10,
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
  },
});
