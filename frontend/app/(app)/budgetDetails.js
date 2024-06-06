import React, { useState } from "react";
import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const BudgetDetail = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
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
          headerShown: true,
          headerShadowVisible: true,
          title: "Chi tiết ngân sách",
          headerTitleAlign: "left",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            color: "black",
            fontSize: 18,
          },
        }}
      />
      <View>
        <View style={styles.divider}></View>
        <View style={styles.goalContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/food.png")}
              style={{
                width: 55,
                height: 55,
                marginRight: 18,
              }}
            />
            <View>
              <Text style={styles.goalTitle}>Buffet trên máy bay</Text>
              <Text style={styles.goalTitle}>2,304,000 VNĐ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 6,
              marginLeft: 70,
              marginRight: 30,
            }}
          >
            <Text style={styles.progressAmount}>1,000,000 VND</Text>
            <Text style={styles.progressAmount}>2,304,000 VND</Text>
          </View>
          <View style={{ marginLeft: 70, marginRight: 30 }}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `40%` }]} />
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../../assets/images/super_calendar.png")}
              style={{
                width: 55,
                height: 55,
                marginRight: 18,
              }}
            />
            <View>
              <Text>01/03/2024 - 01/04/2024</Text>
              <Text>23 ngày nữa</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}></View>
        {[
          { date: "25/03 - 27/03", value: "100,000" },
          { date: "18/03 - 24/03", value: "300,000" },
          { date: "11/03 - 17/03", value: "200,000" },
          { date: "04/03 - 10/03", value: "200,000" },
          { date: "01/03 - 03/03", value: "2200,000" },
        ].map((value, index) => (
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                }}
              >
                {value.date}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 14,
                  color: "#21B4A3",
                }}
              >
                {value.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  goalsList: {
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 30,
  },
  goalContainer: {
    backgroundColor: "#fff",
    marginTop: 14,
    marginBottom: 10,
  },
  goalHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  goalTitle: {
    marginTop: 6,
    fontSize: 17,
    fontFamily: "Poppins_600SemiBold",
  },
  goalTime: {
    fontSize: 13,
    color: "#797979",
    fontFamily: "Poppins_300Light",
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#21B4A3",
  },
  progressFill: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FBC43A",
  },
  progressAmount: {
    fontSize: 14,
    color: "#797979",
    fontFamily: "Poppins_400Regular",
  },
  divider: {
    backgroundColor: "#D9D9D9",
    height: 15,
  },
});

export default BudgetDetail;
