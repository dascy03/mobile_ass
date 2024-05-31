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

const Pick_Category = () => {
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
          Chọn danh mục
        </StyledText>
      </StyledView>
      <StyledView className="w-full">
        <StyledView className="flex flex-row gap-x-4 justify-around py-2 px-2 border-b-2 border-[#D9D9D9]">
          <TouchableOpacity>
            <StyledText className="flex font-bold" style={{ fontSize: 15 }}>
              Khoản chi
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.replace("pick_category_income");
            }}
          >
            <StyledText style={{ fontSize: 15 }}>Khoản thu</StyledText>
          </TouchableOpacity>
        </StyledView>
      </StyledView>
      <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/confirmVector.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <TouchableOpacity
              onPress={() => {
                router.push("new_category");
              }}
            >
              Nhóm mới
            </TouchableOpacity>
          </StyledView>
        </StyledView>
        <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/food.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Ăn uống</Text>
          </StyledView>
        </StyledView>
        <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Motorcycle.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Di chuyển</Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Petrol.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Xăng</Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Wrench.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Bảo dưỡng xe</Text>
          </StyledView>
        </StyledView>
        <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/bill.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Hóa đơn</Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Invoice.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Hóa đơn điện</Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/InvoiceInternet.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Hóa đơn Internet</Text>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/InvoiceRent.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Thuê nhà</Text>
          </StyledView>
        </StyledView>
        <StyledView className="bg-[#D9D9D9] h-[10]"></StyledView>
        <StyledView className="flex-row gap-4 p-2">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/MoveMoney.png")}
          />
          <StyledView className="justify-center border-[#D9D9D9]">
            <Text>Hóa đơn Internet</Text>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Pick_Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
