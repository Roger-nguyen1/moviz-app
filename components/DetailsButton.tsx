import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { ListItem } from "@rneui/themed";
import navigateToDetails from "@/utils/navigateToDetails";
import { Movie } from "../types/MovieTypes";

interface Props {
  moviesprops: Movie;
  keyprop: number;
}

export default function DetailsButton({ moviesprops, keyprop }: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      key={keyprop}
      style={styles.detailsContainer}
      onPress={() => navigateToDetails(router, moviesprops)}
    >
      <Text style={styles.detailText}>details</Text>
      <ListItem.Chevron />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.7,
    borderRadius: 10,
    paddingTop: 4,
    paddingBottom: 3,
    paddingStart: 8,
    paddingEnd: 4,
    backgroundColor: "#0800cc",
  },
  detailText: {
    color: "#f3f6f4",
    paddingBottom: 3.5,
    fontFamily: "Montserrat_400Regular",
  },
});
