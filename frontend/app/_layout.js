import { Slot, Stack } from "expo-router";
import { AuthProvider } from "../components/AuthContext";

export default function Root() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(app)" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Sign-in" />
        <Stack.Screen name="boarding1" options={{ headerShown: false }} />
        <Stack.Screen name="boarding2" options={{ headerShown: false }} />
        <Stack.Screen name="boarding3" options={{ headerShown: false }} />
        <Stack.Screen name="register" />
        <Stack.Screen name="otp-verify/[email]" />
      </Stack>
    </AuthProvider>
  );
}
