import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Boarding1({ navigation }) {
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
      <Image style={{marginTop: 30}} source={require("../../assets/images/Page_control_1.png")} />
      <Pressable
        style={[styles.box, { backgroundColor: "#21B4A3", marginTop: 50 }]}
        // onPress={() => navigation.navigate("Sign-in")}
      >
        <Text style={styles.textFont}>Tiếp tục</Text>
      </Pressable>
      <Pressable
        style={[{marginTop:10}]}
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
      <StatusBar style="auto" />
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
  Logo: {
    width: 375,
    height: 392,
  },
  title: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 30,
    color: "#1E1E1E",
    fontFamily: "Poppins_600SemiBold",
    width: "60%",
  },
  content: {
    textAlign: "center",
    alignItems: "center",
    alignItems: "center",
    fontSize: 16,
    color: "#1E1E1E",
    fontFamily: "Poppins_400Regular",
    marginRight: 33,
    marginLeft: 33,
    marginTop: 20,
    marginBottom: 20,
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
  textFont: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    
  },
});
