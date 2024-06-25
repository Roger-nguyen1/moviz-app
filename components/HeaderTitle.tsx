import { Text, StyleSheet, Image, View } from "react-native";

export default function HeaderTitle() {
  return (
    <View style={styles.titleContainer}>
      <Image
        style={styles.logo}
        source={require("../assets/images/newlogo2.png")}
      />
      <Text style={styles.headerTitle}>Popular movies</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 28,
    color: "#f3f6f4",
    marginTop: 22,
    fontFamily: "Montserrat_600SemiBold",
    paddingBottom: 20,
  },
  logo: { width: 40, height: 40, marginEnd: 5 },
});
