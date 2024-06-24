import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";

export default function LoadingAnimation() {
  return (
    <View style={styles.loading}>
      <Image
        style={styles.logo}
        source={require("../assets/images/newlogo2.png")}
      />
      <Text style={styles.loadingText}>Loading</Text>
      <ActivityIndicator size="large" color="#f3f6f4" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050251",
  },
  loadingText: {
    fontSize: 30,
    color: "#f3f6f4",
    marginBottom: 35,
    fontFamily: "Pacifico_400Regular",
  },
  logo: {
    width: 300,
    height: 300,
  },
});
