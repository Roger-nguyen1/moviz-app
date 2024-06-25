import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  refreshScreen: () => void;
}

export default function RefreshButton({ refreshScreen }: Props) {
  return (
    <TouchableOpacity style={styles.detailsContainer} onPress={refreshScreen}>
      <Text style={styles.buttonText}>Rafraîchir</Text>
      <FontAwesome name="refresh" size={24} color="#f3f6f4" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    paddingLeft: 5,
    height: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#080389",
  },
  buttonText: {
    fontSize: 25,
    color: "#f3f6f4",
    paddingBottom: 3.5,
    fontFamily: "Montserrat_400Regular",
    marginEnd: 5,
  },
});
