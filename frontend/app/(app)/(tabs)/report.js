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
          <Text style={{ fontSize: 16 }}> VND</Text>
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
      <ScrollView contentContainerStyle={styles.bottomContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "black",
            }}
          >
            Số dư ban đầu
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 17 }}>
            700,000
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "black",
            }}
          >
            Số dư kết thúc
          </Text>
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 17 }}>
            1,200,000
          </Text>
        </View>
        <View style={styles.reportSection}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 17,
                color: "black",
              }}
            >
              Số dư
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 13,
                  color: "#7C8474",
                }}
              >
                Xem chi tiết
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 19,
              marginVertical: 5,
            }}
          >
            1,200,000 VNĐ
          </Text>
          <Image
            source={require("../../../assets/images/report-chart-1.png")}
            style={{
              width: 295,
              height: 155,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>

        <View style={styles.reportSection}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 17,
                color: "black",
              }}
            >
              Chi tiêu
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 13,
                  color: "#7C8474",
                }}
              >
                Xem chi tiết
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 19,
              marginVertical: 5,
              color: "#FA416A",
            }}
          >
            1,000,000 VNĐ
          </Text>
          <Image
            source={require("../../../assets/images/report-chart-2.png")}
            style={{
              width: 212,
              height: 183,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>

        <View style={styles.reportSection}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 17,
                color: "black",
              }}
            >
              Thu nhập
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: "Poppins_500Medium",
                  fontSize: 13,
                  color: "#7C8474",
                }}
              >
                Xem chi tiết
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_500Medium",
              fontSize: 19,
              marginVertical: 5,
              color: "#21B4A3",
            }}
          >
            1,000,000 VNĐ
          </Text>
          <Image
            source={require("../../../assets/images/report-chart-2.png")}
            style={{
              width: 212,
              height: 183,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </View>
      </ScrollView>
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
  bottomContainer: {
    backgroundColor: "#D9D9D9",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    rowGap: 10,
  },
  reportSection: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
