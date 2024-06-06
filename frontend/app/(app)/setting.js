import React, { useState } from "react";
import { router } from "expo-router";
import { useAuth } from "../../components/AuthContext";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Setting = () => {
  const { onLogout } = useAuth();
  const logout = async () => {
    // Show confirmation modal before logging out
    Alert.alert(
      "Confirm logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await onLogout();
          },
        },
      ],
      { cancelable: false }
    );
  };
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          statusBarTranslucent: false,
          headerShown: true,
          title: "Cài đặt",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerShadowVisible: true,
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            color: "black",
            fontSize: 18,
          },
        }}
      />
      <Image
        source={require("../../assets/images/avatar.png")}
        style={{ width: 110, height: 110 }}
      />
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 17,
          marginVertical: 18,
        }}
      >
        Lê Quốc An
      </Text>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Cài đặt thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>About Brew Cash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.text}>Điều khoản và chính sách</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={logout}>
        <Text style={[styles.text, { color: "#FD3654" }]}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
    alignItems: "center",
  },
  box: {
    backgroundColor: "#A9DFD9",
    borderRadius: 15,
    width: "100%",
    height: 42,
    padding: 10,
    marginBottom: 25,
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    color: "black",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});

export default Setting;
