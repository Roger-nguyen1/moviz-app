import { useCallback } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts as useMontserrat,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import {
  useFonts as usePacifico,
  Pacifico_400Regular,
} from "@expo-google-fonts/pacifico";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useMontserrat({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  const [pacificoLoaded] = usePacifico({
    Pacifico_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && pacificoLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, pacificoLoaded]);

  if (!fontsLoaded || !pacificoLoaded) {
    return null;
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: "#050251" }}
      onLayout={onLayoutRootView}
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="moviesList" options={{ headerShown: false }} />
        <Stack.Screen name="movieDetails" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
