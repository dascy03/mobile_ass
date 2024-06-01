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

const formatNumber = (num) => {
  if (num === undefined) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const Add_Transaction = () => {
  const [SoDu, setSoDu] = useState(9999999);
  const [income, setIncome] = useState(100000);
  const [outcome, setOutcome] = useState(22222222);
  const [total, setTotal] = useState(income - outcome);
  const [modalVisible, setModalVisible] = useState(false);

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
            <TextInput placeholder="Fill your money" style={styles.input} />
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
            <TouchableOpacity onPress={() => router.push("pick_wallet")}>
              <Text style={styles.selectText}>Chọn ví</Text>
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
            <TouchableOpacity
              onPress={() => router.push("pick_category_outcome")}
            >
              <Text style={styles.selectText}>Chọn danh mục</Text>
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
          <View style={styles.inputWrapper}>
            <Text style={styles.selectText}>Hôm nay</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/NoteVector.png")}
          />
          <View style={styles.inputWrapper}>
            <Text style={styles.selectText}>...</Text>
          </View>
        </View>
      </View>
      <View style={styles.saveButtonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
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
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
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
