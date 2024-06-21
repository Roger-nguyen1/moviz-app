import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push({ pathname: "moviesList" });
    }, 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.logo}
        source={require("../assets/images/newlogo.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 370,
    height: 370,
  },
});
