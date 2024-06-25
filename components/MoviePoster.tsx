import { TouchableHighlight, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Image } from "@rneui/themed";
import { useRouter } from "expo-router";
import navigateToDetails from "@/utils/navigateToDetails";
import { Movie } from "../types/MovieTypes";

interface Props {
  moviesprops: Movie;
  keyprop: number;
}

export default function MoviePoster({ moviesprops, keyprop }: Props) {
  const router = useRouter();

  return (
    <TouchableHighlight
      key={keyprop}
      onPress={() => navigateToDetails(router, moviesprops)}
    >
      <Shadow startColor={"#080389"}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${moviesprops.poster_path}`,
          }}
          style={styles.image}
        />
      </Shadow>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 270,
  },
});
