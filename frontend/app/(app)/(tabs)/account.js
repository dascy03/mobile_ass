import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import React from "react";
import axios from "axios";
import BASE_URL from "../../../env";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
const Account = () => {
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View style={{ width: 30, height: 30 }} />
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 23,
            flex: 1,
            textAlign: "center",
          }}
        >
          Lê Quốc An
        </Text>
        <TouchableOpacity onPress={() => router.push("setting")}>
          <Image
            source={require("../../../assets/images/setting.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../../../assets/images/avatar.png")}
        style={{ width: 110, height: 110 }}
      />
      <Text
        style={{
          fontFamily: "Poppins_400Regular",
          fontSize: 14,
          marginVertical: 18,
        }}
      >
        Lập trình viên
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 10,
        }}
      >
        <Image
          source={require("../../../assets/images/location.png")}
          style={{ width: 16, height: 23 }}
        />
        <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 14 }}>
          Hồ chí Minh, Việt Nam
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          height: 45,
          marginVertical: 20,
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../../assets/images/share.png")}
            style={{ width: 23, height: 22 }}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={require("../../../assets/images/save.png")}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, alignItems: "center" }}
      >
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 1 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            1,200,000 VNĐ
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 2 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            1,600,000 VNĐ
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 3 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            100,000 VNĐ
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 4 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            700,000 VNĐ
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 5 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            1,200,000 VNĐ
          </Text>
        </View>
        <View style={styles.box}>
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            Tháng 6 năm 2024
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            1,000,000 VNĐ
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 65,
    borderRadius: 10,
    backgroundColor: "#DDF4F1",
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
  },
});
