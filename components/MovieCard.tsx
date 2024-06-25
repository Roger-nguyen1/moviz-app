import { Text, StyleSheet, Dimensions, View } from "react-native";
import { Card, Image } from "@rneui/themed";
import formatDate from "@/utils/formatDate";

interface Props {
  title: string;
  poster: string;
  overview: string;
  releaseDate: string;
}

const { width, height } = Dimensions.get("window");
const imageWidth = width * 0.86;
const imageHeight = height * 0.7;

export default function MovieCard(props: Props) {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.title}>{props.title}</Card.Title>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={{
            uri: `https://image.tmdb.org/t/p/w500${props.poster}`,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>{props.overview}</Text>
      <Text style={styles.date}>
        Release Date: {formatDate(props.releaseDate)}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
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
    paddingHorizontal: 3,
    color: "#f3f6f4",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 14,
  },
  date: {
    color: "#f3f6f4",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 30,
    paddingHorizontal: 3,
  },
  image: {
    height: imageHeight,
    width: imageWidth,
    marginBottom: 14,
  },
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
