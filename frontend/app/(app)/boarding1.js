import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";

export default function Boarding1() {
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
        source={require("../../assets/images/boarding1.png")}
      />
      <Text style={styles.title}>Dễ dàng tự chủ tài chính</Text>
      <Text style={styles.content}>
        Chỉ với điện thoại, bạn có thể quản lý toàn bộ dòng tiền của mình một
        cách dễ dàng và chi tiết hơn
      </Text>
      <Image
        style={styles.dot}
        source={require("../../assets/images/Page_control_1.png")}
      />
      <Pressable style={styles.box} onPress={() => router.push("/boarding2")}>
        <Text style={styles.textFont}>Tiếp tục</Text>
      </Pressable>
      <Pressable
        style={{ position: "absolute", marginTop: 753 }}
        onPress={() => router.push("/Login")}
      >
        <Text
          style={{
            margin: 15,
            color: "#B09B9B",
            fontSize: 16,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Skip
        </Text>
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
    height: 392,
    marginTop: 66,
  },
  title: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
    color: "#1E1E1E",
    fontFamily: "Poppins_600SemiBold",
    width: "60%",
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
    marginRight: 33,
    marginLeft: 33,
    marginTop: 514,
    width: 310,
  },
  dot: {
    position: "absolute",
    alignItems: "center",
    marginTop: 615,
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
