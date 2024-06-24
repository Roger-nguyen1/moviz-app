import { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace({ pathname: "moviesList" });
    }, 2900);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#050251",
      }}
    >
      <Image
        style={styles.logo}
        source={require("../assets/images/newlogo2.png")}
      />
      <Text style={styles.title}>Find a Movie!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 380,
    height: 380,
  },
  title: { color: "#f3f6f4", fontSize: 28 },
});
