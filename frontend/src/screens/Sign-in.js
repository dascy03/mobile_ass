import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const Signin = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Pressable
        style={{
          alignItems: "flex-start",
          flex: 0.06,
          justifyContent: "flex-end",
        }}
      >
        <AntIcon name="arrowleft" size={20} color="black" />
      </Pressable>

      <Text style={styles.welcomeText}>Chào mừng bạn trở lại</Text>

      <View style={{ flex: 0.24, justifyContent: "space-between" }}>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
            marginBottom: 30,
          }}
        >
          <Text style={styles.textLabel}>Email</Text>
          <TextInput style={styles.textInput} placeholder="Nhập email" />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <Text style={styles.textLabel}>Mật khẩu</Text>
          <TextInput style={styles.textInput} placeholder="Nhập mật khẩu" />
        </View>
      </View>

      <Text
        style={{
          flex: 0.08,
          textAlignVertical: "center",
          color: "#FBC43A",
          fontFamily: "Poppins_400Regular",
        }}
      >
        Quên mật khẩu
      </Text>

      <Pressable style={styles.btn}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            marginRight: 10,
          }}
        >
          Đăng nhập
        </Text>
        <AntIcon name="arrowright" size={20} color="white" />
      </Pressable>

      <View
        style={{
          flex: 0.07,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 11,
            fontFamily: "Poppins_400Regular",
            color: "#D9D9D9",
          }}
        >
          Hoặc đăng nhập với
        </Text>
      </View>

      <View
        style={{
          flex: 0.06,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Pressable style={[styles.otherOptionsBtn, { marginRight: 10 }]}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/icon_google_2.png")}
          />
        </Pressable>
        <Pressable style={[styles.otherOptionsBtn, { marginLeft: 10 }]}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/icon_facebook_2.png")}
          />
        </Pressable>
      </View>

      <Text style={styles.registerText}>Đăng kí tài khoản</Text>
    </KeyboardAvoidingView>
  );
};
export default Signin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    padding: 30,
  },
  btn: {
    flex: 0.07,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21B4A3",
    borderRadius: 10,
  },
  otherOptionsBtn: {
    height: 44,
    width: 44,
    borderRadius: 10,
    shadowColor: "#696969",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    height: 24,
    width: 24,
  },
  welcomeText: {
    flex: 0.2,
    fontSize: 30,
    color: "black",
    width: "50%",
    lineHeight: 40,
    textAlignVertical: "center",
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "100",
  },
  textLabel: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "black",
  },
  textInput: {
    flex: 0.8,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    borderColor: "#D9D9D9",
  },
  registerText: {
    flex: 0.2,
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#FBC43A",
    fontFamily: "Poppins_600SemiBold",
  },
});
