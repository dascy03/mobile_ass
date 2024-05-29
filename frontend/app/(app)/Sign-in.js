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
import { Stack } from "expo-router";
import CustomTextInput from "../../components/CustomTextInput";
import AntIcon from "react-native-vector-icons/AntDesign";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";

const SignIn = () => {
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

      <Pressable style={styles.btn} onPress={() => router.push("home")}>
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
      </Pressable>

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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.registerText}>Đăng ký tài khoản</Text>
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
