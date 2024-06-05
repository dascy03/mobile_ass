import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { router, useRoute } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import axios from "axios";
import BASE_URL from "../../env";

import New_wallet from "./new_wallet";

const formatNumber = (num) => {
  if (num === undefined) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Pick_Wallet = ({ setWalletRef, setModalVisible }) => {
  const [modalVisibleNewWallet, setModalVisibleNewWallet] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setModalVisible(false)}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chọn ví</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.optionContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/confirmVector.png")}
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisibleNewWallet(true);
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
            }}
          >
            VÍ MỚI
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={async () => {
          try {
            setWalletRef("Tiết kiệm");
          // setModalVisible(false);
            const response = await axios.get(`${BASE_URL}/wallets`);
            console.log(response);
          } catch (error) {
            console.log("error", error);
            return { error };
          }
        }}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/images/pigVector.png")}
        />
        <View>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 18,
            }}
          >
            Tiết kiệm
          </Text>
        </View>
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={modalVisibleNewWallet}
        onRequestClose={() => {
          setModalVisibleNewWallet(!modalVisibleNewWallet);
        }}
      >
        {modalVisibleNewWallet}
        <New_wallet setModalVisible={setModalVisibleNewWallet} />
      </Modal>
    </View>
  );
};

export default Pick_Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#21B4A3",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  backButton: {
    flexBasis: "16%",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    flexBasis: "68%",
    fontSize: 24,
    color: "white",
    fontFamily: "Poppins_400Regular",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#D9D9D9",
    height: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    gap: 10,
  },
  icon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  optionTextWrapper: {
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    flex: 1,
  },
  optionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
});
