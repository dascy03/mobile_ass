import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";
import AntIcon from "react-native-vector-icons/AntDesign";
import React, { useState, useEffect } from "react";
import BASE_URL from "../../../env";
import axios from "axios";

const Report = () => {
  let [fontsLoaded, fontError] = useFonts({
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
          headerShown: false,
        }}
      />
      <View style={styles.topContainer}>
        <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
          Tổng số dư
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            fontSize: 32,
            color: "#21B4A3",
          }}
        >
          1,200,000
          <Text style={{ fontSize: 16 }}>VND</Text>
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          style={{ height: 40, marginBottom: 10 }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 17,
              color: "black",
              width: 100,
              textAlign: "center",
            }}
          >
            11/2023
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 17,
              color: "black",
              width: 100,
              textAlign: "center",
            }}
          >
            12/2023
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 17,
              color: "black",
              width: 100,
              textAlign: "center",
            }}
          >
            01/2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 17,
              color: "black",
              width: 120,
              textAlign: "center",
            }}
          >
            THÁNG TRƯỚC
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 17,
              color: "black",
              width: 120,
              textAlign: "center",
            }}
          >
            THÁNG NÀY
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    backgroundColor: "white",
  },
});
