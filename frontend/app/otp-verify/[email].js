import React, { useState } from "react";
import { OtpInput } from "react-native-otp-entry";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";
import axios from "axios";
import BASE_URL from "../../env";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const OtpVerify = () => {
  const { email } = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const handleSubmit = async () => {
    if (!otp) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    await axios
      .post(`${BASE_URL}/users/otp`, {
        email: email,
        otp: otp,
      })
      .then((res) => {
        if (res.data.error) {
          alert(res.data.error);
        } else {
          console.log(res.data);
          router.push("/Sign-in");
        }
      });
  };
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
          title: "Nhập mã xác nhận",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        }}
      />
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 12,
          color: "black",
        }}
      >
        Mã xác nhận đã được gửi đến email của bạn
      </Text>
      <View style={{ marginVertical: 36 }}>
        <OtpInput
          numberOfDigits={6}
          focusColor={"#21B4A3"}
          focusStickBlinkingDuration={500}
          onTextChange={(text) => setOtp(text)}
        />
      </View>
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 15,
          color: "black",
        }}
      >
        Chưa nhận được mã xác nhận?
      </Text>
      <Text
        style={{
          fontFamily: "Poppins_600SemiBold",
          fontSize: 17,
          color: "#FF0000",
        }}
      >
        Gửi lại
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 17,
            color: "white",
          }}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#21B4A3",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 16,
  },
});
