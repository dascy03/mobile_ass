import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
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

const Transaction_Fix = () => {
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
      <View
        style={{
          backgroundColor: "#21B4A3",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          paddingHorizontal: 10,
          gap: 20,
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={{ resizeMode: "contain", height: 40, width: 40 }}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>

        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins_700Bold",
            fontSize: 30,
          }}
        >
          Sửa giao dịch
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 10,
            alignItems: "flex-end",
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/VND.png")}
          />
          <View
            style={{
              width: "70%",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{
                textAlignVertical: "center",
                color: "#FF0000",
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                includeFontPadding: false,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 10,
            alignItems: "flex-end",
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/Wallet.png")}
          />
          <View
            style={{
              width: "70%",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{
                textAlignVertical: "center",
                color: "#FF0000",
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                includeFontPadding: false,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 10,
            alignItems: "flex-end",
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/Invoice.png")}
          />
          <View
            style={{
              width: "70%",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{
                textAlignVertical: "center",
                color: "#FF0000",
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                includeFontPadding: false,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 10,
            alignItems: "flex-end",
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/Calendar_month.png")}
          />
          <View
            style={{
              width: "70%",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              style={{
                textAlignVertical: "center",
                color: "#FF0000",
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                includeFontPadding: false,
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            gap: 10,
            alignItems: "flex-end",
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
            }}
            source={require("../../assets/images/Note.png")}
          />
          <View>
            <Text
              style={{
                textAlignVertical: "center",
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
                includeFontPadding: false,
              }}
            >
              ...
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transaction_Fix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
