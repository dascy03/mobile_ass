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

const New_Category = () => {
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
          Danh mục mới
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledView>
          <StyledView className="flex-row gap-4 p-3">
            <Image
              style={{ resizeMode: "contain", width: 30, height: 30 }}
              source={require("../../assets/images/Question.png")}
            />
            <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
              <TextInput placeholder="Tên nhóm"></TextInput>
            </StyledView>
          </StyledView>
        </StyledView>
        <StyledView>
          <StyledView className="flex-row gap-4 p-3">
            <Image
              style={{ resizeMode: "contain", width: 30, height: 30 }}
              source={require("../../assets/images/plusminus.png")}
            />
            <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
              <TextInput placeholder="Khoản chi"></TextInput>
            </StyledView>
          </StyledView>
        </StyledView>
        <StyledView>
          <StyledView className="flex-row gap-4 p-3">
            <Image
              style={{ resizeMode: "contain", width: 30, height: 30 }}
              source={require("../../assets/images/split.png")}
            />
            <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
              <TextInput placeholder="Nhóm chia"></TextInput>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView className="flex-row justify-center mt-[20]">
        <TouchableOpacity className="bg-[#21B4A3] text-white rounded-xl py-1 px-20 text-xl">
          Lưu
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default New_Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
