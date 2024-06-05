import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Stack, router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { err } from "react-native-svg";

import axios from "axios";
import BASE_URL from "../../env";

const formatNumber = (num) => {
  if (num === undefined) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const New_Wallet = ({ setModalVisible }) => {
  const [newWallet, setNewWallet] = useState("");
  const [money, setMoney] = useState();
  const [image, setImage] = useState("");

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
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ví mới</Text>
      </View>
      <View>
        <View style={styles.divider}></View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/Question.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Tên ví"
              style={styles.input}
              onChangeText={(wallet) => setNewWallet(wallet)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/initMoney.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Số dư ban đầu"
              style={styles.input}
              keyboardType="numeric"
              onChangeText={(num) => {
                setMoney(+num);
              }}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/yellowCircle.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Biểu tượng"
              style={styles.input}
              onChangeText={(image) => {
                setImage(image);
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={async () => {
            try {
              if (!money || !newWallet) {
                alert("Nhập đầy đủ đi nào!");
                return;
              }
              const response = await axios.post(`${BASE_URL}/wallets`, {
                Name: newWallet.toString(),
                Balance: money,
                Icon: image.toString(),
              });
              setModalVisible(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default New_Wallet;

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
    height: 30,
  },
  inputContainer: {
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
  inputWrapper: {
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    flex: 1,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
  saveButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#21B4A3",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
  },
});
