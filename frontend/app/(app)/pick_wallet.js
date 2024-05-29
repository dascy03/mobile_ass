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

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Pick_Wallet = () => {
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
  return (
    <StyledView style={styles.container}>
      <StyledView className="bg-[#21B4A3] w-full flex flex-row py-3 justify-center place-content-center">
        <TouchableOpacity
          className="basis-1/6 mt-2 px-4"
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <StyledText className="basis-3/6 text-xl text-white font-semibold items-center flex ">
          Chọn ví
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/confirmVector.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <TouchableOpacity
              onPress={() => {
                router.push("new_wallet");
              }}
            >
              Ví mới
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/pigVector.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Tiết kiệm</Text>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Pick_Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
