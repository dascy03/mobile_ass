import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Transaction = () => {
  const formatNumber = (num) => {
    if (num == undefined) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [SoDu, setSoDu] = useState();
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setSoDu(9999999);
    setIncome(100000);
    setOutcome(22222222);
    setTotal(income - outcome);
  }, []);

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

          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
        }}
      />
      <View
        style={{
          backgroundColor: "#21B4A3",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          paddingTop: 44,
          paddingBottom: 30,
        }}
      >
        <View style={{ flexBasis: "33%" }}></View>
        <View
          style={{
            flexBasis: "33%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: "white",
              fontSize: 20,
            }}
          >
            Số dư
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              color: "white",
              fontSize: 20,
            }}
          >
            {formatNumber(SoDu)}
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                color: "white",
                fontSize: 13,
              }}
            >
              {" "}
              VNĐ
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexBasis: 33,
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              paddingHorizontal: 10,
              paddingVertical: 5
            }}
          >
            <Image
              style={{ resizeMode: "contain", width: 30, height: 30 }}
              source={require("../../../assets/images/Wallet.png")}
            />
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 11,
              }}
            >
              Tiền mặt
            </Text>
            <Image
              style={{ resizeMode: "contain" }}
              source={require("../../../assets/images/DotDown.png")}
            />
          </View>
        </View>
        <View
          style={{
            flexBasis: "33%",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 20,
            paddingRight: 20,
          }}
        >
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/searching.png")}
          />
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/threeDot.png")}
          />
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBlockEndColor: "#D9D9D9",
            borderBottomWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
            Tháng trước
          </Text>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
            Tháng này
          </Text>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
            Tương lai
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            marginVertical: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Tiền vào
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Tiền ra
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                borderTopWidth: 1,
              }}
            >
              Tổng tiền
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              {formatNumber(income)}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              {formatNumber(outcome)}
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                borderTopWidth: 1,
              }}
            >
              {formatNumber(total)}
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#EAF4F3",
            paddingHorizontal: 15,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
              color: "#4CE57A",
            }}
          >
            Xem báo cáo
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#D9D9D9", height: 22, marginVertical: 20 }}
        ></View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                fontSize: 18,
              }}
            >
              25
            </Text>
          </View>
          <View>
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 11,
                }}
              >
                {" "}
                Hôm nay
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: "#A9A9A9",
                  fontSize: 11,
                  fontFamily: "Poppins_400Regular",
                }}
              >
                Tháng 3 2024
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
            }}
          >
            70,000
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          gap: 10,
          borderTopWidth: 1,
          borderBlockColor: "#D9D9D9",
        }}
        onPress={() => {
          router.push("transaction_details");
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            paddingVertical: 10,
          }}
        >
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../../assets/images/Petrol.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Xăng
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins_400Regular",
          }}
        >
          70,000
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
