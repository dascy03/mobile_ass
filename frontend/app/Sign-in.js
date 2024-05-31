import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Stack } from "expo-router";
import AntIcon from "react-native-vector-icons/AntDesign";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";
import { useAuth } from "../components/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();

  const login = async () => {
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    const result = await onLogin(email, password);
    console.log(result);
    router.replace("/home");
  };
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Stack.Screen
        options={{
          statusBarTranslucent: false,
          headerShown: true,
          title: "",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        }}
      />

      <Text style={styles.welcomeText}>Chào mừng bạn trở lại</Text>
      <View style={{ rowGap: 30, marginBottom: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            rowGap: 5,
          }}
        >
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập email"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onSubmitEditing={() => {
              passwordInput.focus();
            }}
            returnKeyType="next"
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            rowGap: 5,
          }}
        >
          <Text style={styles.textLabel}>Mật khẩu</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập mật khẩu"
            textContentType="password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            value={password}
            returnKeyType="done"
            ref={(input) => {
              passwordInput = input;
            }}
            secureTextEntry={true}
          />
        </View>
      </View>

      <Text
        style={{
          color: "#FBC43A",
          fontFamily: "Poppins_400Regular",
          fontSize: 14,
        }}
      >
        Quên mật khẩu
      </Text>

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            marginRight: 10,
          }}
        >
          Đăng nhập
        </Text>
        <AntIcon name="arrowright" size={20} color="white" />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 16,
          marginBottom: 14,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            color: "#D9D9D9",
          }}
        >
          Hoặc đăng nhập với
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <TouchableOpacity style={[styles.otherOptionsBtn, { marginRight: 10 }]}>
          <Image
            style={styles.logo}
            source={require("../assets/images/icon_google_2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherOptionsBtn, { marginLeft: 10 }]}>
          <Image
            style={styles.logo}
            source={require("../assets/images/icon_facebook_2.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.registerText}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  btn: {
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21B4A3",
    borderRadius: 10,
    marginTop: 25,
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
    fontSize: 32,
    color: "black",
    width: "75%",
    textAlignVertical: "center",
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 36,
  },
  textLabel: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "black",
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    borderColor: "#D9D9D9",
  },
  registerText: {
    fontSize: 22,
    color: "#FBC43A",
    fontFamily: "Poppins_600SemiBold",
  },
});
