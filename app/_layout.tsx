import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import HeaderLeft from "@/components/HeaderLeft";
import HeaderRight from "@/components/HeaderRight";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: "CASRSTORE",
            headerShown: true,
            headerLeft: () => <HeaderLeft />,
            // headerRight: () => <HeaderRight />,
            headerStyle: {
              backgroundColor: "#555555",
            },
          }}
        />
        <Stack.Screen
          name="Notifications"
          options={{
            headerStyle: {
              backgroundColor: "#555",
            },
          }}
        />
        <Stack.Screen name="LogInSignUp" />
        <Stack.Screen
          name="Products"
          options={{
            headerStyle: {
              backgroundColor: "#555",
            },
          }}
        />
        <Stack.Screen name="AddProductScreen" />
        <Stack.Screen name="ProductDetailsScreen" />
        <Stack.Screen name="SuccessScreen" />
        <Stack.Screen name="ProfilePage" />
        <Stack.Screen name="NeedToReturn" />
        <Stack.Screen name="RemoveOrUpdate" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
