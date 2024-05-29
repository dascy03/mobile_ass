import React from "react";
import { Tabs, Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function TabLayout() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 72,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Image
                source={require("../../../assets/images/home.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: focused ? "#0A4E46" : "black",
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 72 },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Image
                source={require("../../../assets/images/transaction.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: focused ? "#0A4E46" : "black",
                }}
              >
                Giao dịch
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="addTransaction"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 72 },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Image
                source={require("../../../assets/images/addTransaction.png")}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 72,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Image
                source={require("../../../assets/images/report.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: focused ? "#0A4E46" : "black",
                }}
              >
                Báo cáo
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 72,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                rowGap: 2,
              }}
            >
              <Image
                source={require("../../../assets/images/account-profile.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: focused ? "#0A4E46" : "black",
                }}
              >
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
