import React, { useCallback } from "react";
import { Stack, useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  BackHandler,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";

export default function Login() {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        // Optionally handle back press or disable it
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brew Kash</Text>

      <Pressable
        style={[styles.box, { backgroundColor: "#21B4A3" }]}
        onPress={() => router.push("/Sign-in")}
      >
        <Text style={styles.textFont}>Đăng nhập</Text>
      </Pressable>
      <Text
        style={{
          margin: 15,
          color: "#757575",
          fontSize: 16,
          fontFamily: "Poppins_400Regular",
        }}
      >
        hoặc
      </Text>

      <Pressable style={[styles.box, { backgroundColor: "#5384EE" }]}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/icon_google.png")}
        />
        <Text style={styles.textFont}>Đăng nhập với Google</Text>
      </Pressable>
      <Pressable style={[styles.box, { backgroundColor: "#415792" }]}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/icon_facebook.png")}
        />
        <Text style={styles.textFont}>Đăng nhập với Facebook</Text>
      </Pressable>
      <Pressable style={[styles.box, { backgroundColor: "#000000" }]}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/images/icon_apple.png")}
        />
        <Text style={styles.textFont}>Đăng nhập với Apple</Text>
      </Pressable>
      <Pressable onPress={() => router.push("/register")}>
        <Text style={styles.register}>Đăng ký tài khoản</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAF4F3",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    color: "#21B4A3",
    marginBottom: 120,
    fontFamily: "Poppins_600SemiBold",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    paddingTop: 12,
    paddingBottom: 12,
    margin: 10,
    borderRadius: 32,
    color: "red",
  },
  register: {
    marginTop: 70,
    color: "#FBC43A",
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
  },
  textFont: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  tinyLogo: {
    marginRight: 10,
    margin: 3,
    width: 20,
    height: 20,
  },
});
