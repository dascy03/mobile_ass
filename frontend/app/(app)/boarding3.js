import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";

export default function Boarding3() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require("../../assets/images/boarding3.png")}
      />
      <Text style={styles.title}>Chia sẻ và học hỏi Bắt đầu thôi</Text>
      <Text style={styles.content}>
        Chi tiêu hợp lý và bạn sẽ tiến gần hơn đến tự do tài chính
      </Text>
      <Image
        style={styles.dot}
        source={require("../../assets/images/Page_control_3.png")}
      />
      <Pressable style={styles.box} onPress={() => router.replace("/Login")}>
        <Text style={styles.textFont}>Tiếp tục</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    backgroundColor: "#EAF4F3",
  },
  Logo: {
    position: "absolute",
    width: 375,
    height: 369,
    marginTop: 44,
  },
  title: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
    color: "#1E1E1E",
    fontFamily: "Poppins_600SemiBold",
    width: 323,
    position: "absolute",
    marginTop: 406,
  },
  content: {
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
    color: "#1E1E1E",
    fontFamily: "Poppins_400Regular",
    marginRight: 51,
    marginLeft: 51,
    marginTop: 517,
    width: 272,
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    marginTop: 600,
  },
  box: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 655,
    width: 201,
    height: 59,
    borderRadius: 20,
    backgroundColor: "#21B4A3",
  },
  textFont: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
