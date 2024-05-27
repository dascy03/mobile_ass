import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Checkbox from "expo-checkbox";
import AntIcon from "react-native-vector-icons/AntDesign";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";
import { Stack } from "expo-router";

const Register = () => {
  const [isChecked, setChecked] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
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
          title: "Tạo một tài khoản",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.inputField}>
        <View
          style={{
            justifyContent: "space-between",
            rowGap: 5,
          }}
        >
          <Text style={styles.textLabel}>Họ và tên</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập họ và tên"
            textContentType="name"
            onSubmitEditing={() => {
              emailInput.focus();
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
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập email"
            textContentType="emailAddress"
            autoCapitalize="none"
            ref={(input) => {
              emailInput = input;
            }}
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
            secureTextEntry={true}
            ref={(input) => {
              passwordInput = input;
            }}
            onSubmitEditing={() => {
              confirmPasswordInput.focus();
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
          <Text style={styles.textLabel}>Xác nhận mật khẩu</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nhập lại mật khẩu"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry={true}
            ref={(input) => {
              confirmPasswordInput = input;
            }}
            returnKeyType="done"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          columnGap: 12,
        }}
      >
        <Checkbox
          style={{ width: 18, height: 18, borderRadius: 5 }}
          value={isChecked}
          onValueChange={setChecked}
          color={"black"}
        />
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Poppins_400Regular",
            color: "black",
          }}
        >
          Tôi đồng ý với các điều khoản và điều kiện
        </Text>
      </View>

      <Pressable style={styles.btn}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            marginRight: 10,
          }}
        >
          Đăng kí
        </Text>
        <AntIcon name="arrowright" size={20} color="white" />
      </Pressable>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 16,
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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: 24,
          columnGap: 10,
        }}
      >
        <Text style={styles.loginText}>Đã là thành viên?</Text>
        <Pressable onPress={() => router.push("/Login")}>
          <Text style={[styles.loginText, { color: "#FBC43A" }]}>
            Đăng nhập
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  inputField: {
    marginTop: 25,
    rowGap: 20,
    marginBottom: 20,
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
  loginText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Poppins_500Medium",
  },
});
