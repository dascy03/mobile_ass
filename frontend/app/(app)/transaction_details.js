import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";

import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const Transaction_Details = () => {
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
      <StyledView className="bg-[#21B4A3] w-full flex flex-row py-3 justify-center place-content-center">
        <TouchableOpacity
          className="basis-1/6 mt-2 px-4"
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/Delete.png")}
          />
        </TouchableOpacity>
        <StyledText className="basis-2/6 text-3xl text-white font-semibold ">
          Chi tiết
        </StyledText>
        <StyledText className="basis-1/6"></StyledText>
        <TouchableOpacity
          className="basis-1/6 mt-2"
          onPress={() => {
            router.push("transaction_fix");
          }}
        >
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/pencil.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="basis-1/6 mt-2"
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/bin.png")}
          />
        </TouchableOpacity>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/Invoice.png")}
          />
          <StyledView>
            <StyledText>Hóa đơn điện</StyledText>
            <StyledText className="text-xl text-red-500">1,000,000</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain" }}
            source={require("../../assets/images/Calendar_month.png")}
          />
          <StyledView>
            <StyledText>Hôm nay</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      <StyledView>
        <StyledView className="flex-row gap-4 p-3">
          <Image
            style={{ resizeMode: "contain", width: 30, height: 30 }}
            source={require("../../assets/images/Wallet.png")}
          />
          <StyledView>
            <StyledText>Tiền mặt</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
      {/* Modal Popup */}
      <StyledView className="flex-1 justify-center items-center">
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {modalVisible && (
            <StyledView className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />
          )}
          <StyledView className="fixed flex-1 justify-center items-center ">
            <StyledView className="w-72 p-5 bg-white rounded-lg items-center ">
              <StyledText>Xóa giao dịch này?</StyledText>
              <StyledView className="flex-row gap-5 pt-4">
                <TouchableOpacity className="bg-[#21B4A3] text-white rounded-md py-1 px-3">
                  Đồng ý
                </TouchableOpacity>
                <TouchableOpacity
                  className="bg-[#21B4A3] text-white rounded-md py-1 px-3"
                  onPress={() => setModalVisible(false)}
                >
                  Không
                </TouchableOpacity>
              </StyledView>
            </StyledView>
          </StyledView>
        </Modal>
      </StyledView>
    </StyledView>
  );
};

export default Transaction_Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
