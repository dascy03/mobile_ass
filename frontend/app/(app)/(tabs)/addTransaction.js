import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Add_Transaction = () => {
  const formatNumber = (num) => {
    if (num == undefined) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [SoDu, setSoDu] = useState();
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();
  const [total, setTotal] = useState();
  const [modalVisible, setModalVisible] = useState(false);
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
      <StyledView className="bg-[#21B4A3] w-full flex flex-row py-5 justify-center place-content-center">
        <TouchableOpacity
          className="basis-1/6 mt-2 px-4"
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/Delete.png")}
          />
        </TouchableOpacity>
        <StyledText className=" text-3xl text-white font-semibold ">
          Giao dịch mới
        </StyledText>
      </StyledView>
      <StyledView>
        <StyledView className="bg-[#D9D9D9] h-[20]"></StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../../assets/images/VND.png")}
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
            source={require("../../../assets/images/WalletVector.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TouchableOpacity
              onPress={() => {
                router.push("pick_wallet");
              }}
            >
              {" "}
              Chọn ví
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/Category.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <TouchableOpacity
              onPress={() => {
                router.push("pick_category_outcome");
              }}
            >
              {" "}
              Chọn danh mục
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../../assets/images/Calendar_month_vector.png")}
          />
          <StyledView className="justify-center border-b-2 border-[#D9D9D9]">
            <StyledText>Hôm nay</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../../assets/images/NoteVector.png")}
          />
          <StyledView>
            <StyledText>...</StyledText>
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

export default Add_Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
