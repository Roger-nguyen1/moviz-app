import { StyleSheet, FlatList, View } from "react-native";
import { useRouter } from "expo-router";
import { ListItem } from "@rneui/themed";
//Components
import MoviePoster from "./MoviePoster";
import DetailsButton from "./DetailsButton";
import navigateToDetails from "@/utils/navigateToDetails";
//Types
import { Movie } from "../types/MovieTypes";

interface Props {
  moviesprops: Movie[];
}

export default function MoviesFlatList({ moviesprops }: Props) {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={moviesprops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            containerStyle={styles.listItemContainer}
            onPress={() => navigateToDetails(router, item)}
          >
            <MoviePoster keyprop={item.id} moviesprops={item} />

            <ListItem.Content>
              <ListItem.Title style={styles.movieTitle}>
                {item.title}
              </ListItem.Title>
            </ListItem.Content>

            <DetailsButton keyprop={item.id} moviesprops={item} />
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
