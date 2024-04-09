import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Boarding1 from "./src/screens/boarding1";
import Boarding2 from "./src/screens/boarding2";
import Boarding3 from "./src/screens/boarding3";
import Login from "./src/screens/Login";
import SignIn from "./src/screens/Sign-in";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // do it if needed
        }}
      >
        <Stack.Screen
          name="boarding1"
          component={Boarding1}
          options={{ title: "boarding1" }}
        />
        <Stack.Screen
          name="boarding2"
          component={Boarding2}
          options={{ title: "boarding2" }}
        />
        <Stack.Screen
          name="boarding3"
          component={Boarding3}
          options={{ title: "boarding3" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen name="Sign-in" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
