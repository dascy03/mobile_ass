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
        <StyledText className="basis-3/6 text-3xl text-white font-semibold ">
          Sửa giao dịch
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledView className="bg-[#D9D9D9] h-[20]"></StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/VND.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TextInput placeholder="Fill your money"></TextInput>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Wallet.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TextInput placeholder="Chọn ví"></TextInput>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/Invoice.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TextInput placeholder="Hóa đơn điện"></TextInput>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/Calendar_month.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TextInput placeholder="Hôm nay"></TextInput>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Note.png")}
          />
          <StyledView>
            <StyledText>...</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
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
