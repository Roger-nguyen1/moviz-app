import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace({ pathname: "moviesList" });
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/newlogo2.png")}
      />
      <Text style={styles.title}>Find a Movie!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#050251",
  },
  logo: {
    width: 380,
    height: 380,
  },
  title: { color: "#f3f6f4", fontSize: 30, fontFamily: "Pacifico_400Regular" },
});
