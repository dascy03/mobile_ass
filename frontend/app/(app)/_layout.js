import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../components/AuthContext";

export default function Layout() {
  const { authState } = useAuth();
  if (!authState.authenticated) return <Redirect href="/boarding1" />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="transaction_details" />
      <Stack.Screen name="transaction_fix" options={{ headerShown: false }} />
      <Stack.Screen name="pick_wallet" options={{ headerShown: false }} />
      <Stack.Screen
        name="pick_category_outcome"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="pick_category_income"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="new_category" options={{ headerShown: false }} />
      <Stack.Screen name="new_wallet" options={{ headerShown: false }} />
    </Stack>
  );
}
