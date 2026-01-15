import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/signup/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(assistance)/profile/page"
          options={{ headerShown: false }}
        />
      </Stack>
      <Toast />
    </>
  );
}
