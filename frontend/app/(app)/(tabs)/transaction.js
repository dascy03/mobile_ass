import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";

import { withExpoSnack } from "nativewind";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

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
  return (
    <StyledView style={styles.container}>
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
      <StyledView className="bg-[#21B4A3] w-full flex flex-row justify-center py-5">
        <StyledView className="basis-1/3"> </StyledView>
        <StyledView className="basis-1/3 items-center">
          <StyledText className="font-bold text-white" style={{ fontSize: 15 }}>
            Số dư
          </StyledText>
          <StyledText
            className="font-bold text-white py-2"
            style={{ fontSize: 15 }}
          >
            {formatNumber(SoDu)}
            <StyledText className="font-semibold px-2" style={{ fontSize: 13 }}>
              VNĐ
            </StyledText>
          </StyledText>
          <StyledView className="flex-row justify-center items-center bg-[#D9D9D9] rounded-xl px-1">
            <Image
              className="h-5 mr-2"
              style={{ resizeMode: "contain" }}
              source={require("../../../assets/images/Wallet.png")}
            />
            <StyledText className="rounded-lg p-1 text-center">
              Tiền mặt
            </StyledText>
            <Image
              className="h-1 ml-1 mr-1"
              style={{ resizeMode: "contain" }}
              source={require("../../../assets/images/DotDown.png")}
            />
          </StyledView>
        </StyledView>
        <StyledView className="basis-1/3 flex-row gap-4 justify-center items-center">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/searching.png")}
          />
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/threeDot.png")}
          />
        </StyledView>
      </StyledView>
      <StyledView className="w-full">
        <StyledView className="flex flex-row gap-x-4 justify-between py-2 px-2 border-b-2 border-[#D9D9D9]">
          <StyledText style={{ fontSize: 15 }}>Tháng trước</StyledText>
          <StyledText style={{ fontSize: 15 }}>Tháng này</StyledText>
          <StyledText style={{ fontSize: 15 }}>Tương lai</StyledText>
        </StyledView>
        <StyledView className="flex flex-row justify-between py-3">
          <StyledView className="basis-1/3 items-start pl-10">
            <StyledText>Tiền vào</StyledText>
            <StyledText>Tiền ra</StyledText>
            <StyledText className="font-bold">Tổng tiền</StyledText>
          </StyledView>
          <StyledView className="basis-1/3 items-end pr-10">
            <StyledText>{formatNumber(income)}</StyledText>
            <StyledText>{formatNumber(outcome)}</StyledText>
            <StyledText className="font-bold">{formatNumber(total)}</StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="flex-none justify-center items-center py-3 ">
          <StyledText className="p-1 rounded-xl text-[#4CE57A] bg-[#EAF4F3] font-semibold">
            Xem báo cáo
          </StyledText>
        </StyledView>
        <StyledView className="bg-[#D9D9D9] h-[20]"></StyledView>
      </StyledView>
      <StyledView className="flex flex-row py-3 w-full border-b-2 border-[#D9D9D9]">
        <StyledView className="basis-1/6 items-center justify-center">
          25
        </StyledView>
        <StyledView className="basis-3/6 items-start">
          <StyledView>Hôm nay</StyledView>
          <StyledView>Tháng 3 2024</StyledView>
        </StyledView>
        <StyledView className="basis-1/6 items-start justify-center ">
          70,000
        </StyledView>
        <StyledView className="basis-1/6 items-start "></StyledView>
      </StyledView>
      <TouchableOpacity
        className="flex flex-row py-3 w-full border-b-2 border-[#D9D9D9]"
        onPress={() => {
          router.push("transaction_details");
        }}
      >
        <Image
          className="basis-1/6 items-center justify-center place-items-center"
          style={{ resizeMode: "contain" }}
          source={require("../../../assets/images/Petrol.png")}
        />
        <StyledView className="basis-3/6 items-start">
          <StyledView>Hôm nay</StyledView>
          <StyledView>Tháng 3 2024</StyledView>
        </StyledView>
        <StyledView className="basis-1/6 items-start justify-center ">
          70,000
        </StyledView>
        <StyledView className="basis-1/6 items-start "></StyledView>
      </TouchableOpacity>
    </StyledView>
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
  topContainer: {
    width: "100%",
    height: 150,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: "#21B4A3",
  },
  downContainer: {},
});
