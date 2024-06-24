import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Image } from "@rneui/themed";
import { useRouter, useLocalSearchParams } from "expo-router";
import formatDate from "@/utils/formatDate";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

const MovieDetails: React.FC = () => {
  const { movie } = useLocalSearchParams();
  const movieData: Movie = JSON.parse(movie as string);

  return (
    <ScrollView style={styles.mainContainer}>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.title}>{movieData.title}</Card.Title>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movieData.poster_path}`,
          }}
          style={styles.image}
        />
        <Text style={styles.text}>{movieData.overview}</Text>
        <Text style={styles.text}>
          Release Date: {formatDate(movieData.release_date)}
        </Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#050251",
    paddingTop: 22,
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
  image: {
    height: 460,
    width: "100%",
    marginBottom: 14,
  },
});

export default MovieDetails;
