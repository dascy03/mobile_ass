import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import { Stack, router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import axios from "axios";
import BASE_URL from "../../../env";

import DateTimePicker from "@react-native-community/datetimepicker";
import Pick_Wallet from "../pick_wallet";
import Pick_Category from "../pick_category_outcome";
import Pick_Category_Income from "../pick_category_income";

const formatNumber = (num) => {
  if (num === undefined) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Add_Transaction = () => {
  const [money, setMoney] = useState("");
  const [categoriesRef, setCategoriesRef] = useState("");
  const [walletRef, setWalletRef] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [modalVisibleWallet, setModalVisibleWallet] = useState(false);
  const [modalVisibleCategories, setModalVisibleCategories] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) return null;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          statusBarTranslucent: false,
          headerShown: false,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
        }}
      />
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/images/Delete.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Giao dịch mới</Text>
      </View>
      <View>
        <View style={styles.divider}></View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/VND.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              keyboardType="numeric"
              placeholder="Fill your money"
              style={styles.input}
              onChangeText={(num) => {
                setMoney(+num);
              }}
              value={money.toString()}
            />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/WalletVector.png")}
          />
          <View style={styles.inputWrapper}>
            <TouchableOpacity onPress={() => setModalVisibleWallet(true)}>
              {walletRef ? (
                <Text style={styles.selectText}>{walletRef}</Text>
              ) : (
                <Text style={styles.selectText}>Chọn ví</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/Category.png")}
          />
          <View style={styles.inputWrapper}>
            <TouchableOpacity onPress={() => setModalVisibleCategories(true)}>
              {categoriesRef ? (
                <Text style={styles.selectText}>{categoriesRef}</Text>
              ) : (
                <Text style={styles.selectText}>Chọn danh mục</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/Calendar_month_vector.png")}
          />
          <TouchableOpacity
            style={styles.inputWrapper}
            onPress={showDatepicker}
          >
            <Text style={styles.selectText}>{date.toDateString()}</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/NoteVector.png")}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="..."
              onChangeText={(note) => {
                setNote(note.toString());
              }}
              value={note}
              style={styles.selectText}
            />
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={async () => {
            try {
              console.log(money);
              console.log(categoriesRef);
              console.log(walletRef);
              console.log(date);
              if (!money || !categoriesRef || !walletRef || !date) {
                alert("Hãy điền đầy đủ thông tin");
                return;
              }
              const response = await axios.post(`${BASE_URL}/transactions`, {
                money: money,
                categoriesRef: categoriesRef.toString(),
                walletRef: walletRef.toString(),
                note: note.toString(),
                type: type,
                dateCreated: date.toString(),
              });
              console.log(response.data);
            } catch (error) {
              console.log("error", error.response.data);
              return { error };
              //console.error("Failed to login:", error);
            }
          }}
        >
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={modalVisibleWallet}
        onRequestClose={() => {
          setModalVisibleWallet(!modalVisibleWallet);
        }}
      >
        {modalVisibleWallet}
        <Pick_Wallet
          setWalletRef={setWalletRef}
          setModalVisible={setModalVisibleWallet}
        />
      </Modal>
      <Modal
        transparent={true}
        visible={modalVisibleCategories}
        onRequestClose={() => {
          setModalVisibleCategories(!modalVisibleCategories);
        }}
      >
        {modalVisibleCategories}
        <Pick_Category
          setType={setType}
          setCategoriesRef={setCategoriesRef}
          setModalVisible={setModalVisibleCategories}
        />
      </Modal>
    </View>
  );
};

export default Add_Transaction;

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
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  backButton: {
    flexBasis: "16%",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    flexBasis: "68%",
    fontSize: 24,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    textAlignVertical: "center", // Center text vertically
  },
  divider: {
    backgroundColor: "#D9D9D9",
    height: 20,
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
  selectText: {
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
