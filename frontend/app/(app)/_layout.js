import { Stack, Redirect } from "expo-router";
//import { useAuth } from "../../components/AuthContext";

export default function Layout() {
  //const { authState } = useAuth();
  //if (!authState.authenticated) return <Redirect href="/login" />;
  return (
    <Stack>
      <Stack.Screen name="boarding1" options={{ headerShown: false }} />
      <Stack.Screen name="boarding2" options={{ headerShown: false }} />
      <Stack.Screen name="boarding3" options={{ headerShown: false }} />
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
    </Stack>
  );
}
