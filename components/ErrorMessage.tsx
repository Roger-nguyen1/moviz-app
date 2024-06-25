import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import RefreshButton from "./RefreshButton";

type Props = {
  message: string;
  refreshScreen: () => void;
};

export default function ErrorMessage({ message, refreshScreen }: Props) {
  return (
    <View style={styles.errorContainer}>
      <View style={styles.message}>
        <Text style={styles.errorMessage}>Oups! {""}</Text>
        <FontAwesome name="frown-o" size={40} color="#f3f6f4" />
      </View>
      <Text style={styles.errorMessage}>Error : {message}</Text>
      <RefreshButton refreshScreen={refreshScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050251",
  },
  message: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    color: "#f3f6f4",
    fontSize: 35,
  },
});
