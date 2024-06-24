import { View, Text, StyleSheet } from "react-native";

type ErrorProps = {
  message: string;
};

export default function ErrorMessage(props: ErrorProps) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>Oups!</Text>
      <Text style={styles.errorMessage}>Error: {props.message}</Text>
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
  errorMessage: {
    color: "#f3f6f4",
    fontSize: 35,
  },
});
