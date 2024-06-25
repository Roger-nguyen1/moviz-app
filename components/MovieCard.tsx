import { Text, StyleSheet } from "react-native";
import { Card, Image } from "@rneui/themed";
import formatDate from "@/utils/formatDate";

interface Props {
  title: string;
  poster: string;
  overview: string;
  releaseDate: string;
}

export default function MovieCard(props: Props) {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.title}>{props.title}</Card.Title>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${props.poster}`,
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{props.overview}</Text>
      <Text style={styles.date}>
        Release Date: {formatDate(props.releaseDate)}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
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
