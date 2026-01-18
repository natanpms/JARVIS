import { router, Stack } from "expo-router";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { supabase } from "../lib/supabase";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

function Layout() {
  const { setAuth } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        //caso tenha sessao, usuario esta logado
        setAuth(session.user);
        router.replace("/(assistance)/home/page");
        return;
      }

      setAuth(null);
      router.replace("/");
    });
  }, []);

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

        <Stack.Screen
          name="(assistance)/home/page"
          options={{ headerShown: false }}
        />
      </Stack>
      <Toast />
    </>
  );
}
