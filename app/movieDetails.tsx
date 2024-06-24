import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Image } from "@rneui/themed";
import { useRouter, useLocalSearchParams } from "expo-router";
import formatDate from "@/utils/formatDate";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

const MovieDetails: React.FC = () => {
  const { movie } = useLocalSearchParams();
  const movieData: Movie = JSON.parse(movie as string);

  return (
    <Card>
      <Card.Title>{movieData.title}</Card.Title>
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
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 14,
  },
  image: {
    height: 440,
    width: "100%",
    marginBottom: 14,
  },
});

export default MovieDetails;
