import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Stack, router } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import Pick_Category_Income from "./pick_category_income";
import New_Category from "./new_category";

import axios from "axios";
import BASE_URL from "../../env";

const Pick_Category = ({ setType, setCategoriesRef, setModalVisible }) => {
  const [modalVisibleCategoriesIncome, setModalVisibleCategoriesIncome] =
    useState(false);
  const [modalNewCategory, setModalNewCategory] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data (replace this with your actual data fetching logic)
        const response = await axios.get(`${BASE_URL}/categories`);
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

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
        <Text style={styles.headerText}>Chọn danh mục</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.activeTabText}>Khoản chi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setModalVisibleCategoriesIncome(true)}
        >
          <Text style={styles.tabText}>Khoản thu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.optionContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/confirmVector.png")}
        />
        <TouchableOpacity
          style={styles.optionTextWrapper}
          onPress={() => setModalNewCategory(true)}
        >
          <Text style={styles.optionText}>Nhóm mới</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>
      {[{ icon: require("../../assets/images/food.png"), text: "Ăn uống" }].map(
        (item, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              onPress={() => {
                setCategoriesRef(item.text);
                setType(false);
                setModalVisible(false);
              }}
            >
              <View style={styles.optionContainer}>
                <Image style={styles.icon} source={item.icon} />
                <View style={styles.optionTextWrapper}>
                  <Text style={styles.optionText}>{item.text}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </React.Fragment>
        )
      )}

      <View style={styles.divider}></View>
      {[
        {
          icon: require("../../assets/images/Motorcycle.png"),
          text: "Di chuyển",
        },
        { icon: require("../../assets/images/Petrol.png"), text: "Xăng" },
        {
          icon: require("../../assets/images/Wrench.png"),
          text: "Bảo dưỡng xe",
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.text);
              setType(false);
              setModalVisible(false);
            }}
          >
            <View style={styles.optionContainer}>
              <Image style={styles.icon} source={item.icon} />
              <View style={styles.optionTextWrapper}>
                <Text style={styles.optionText}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </React.Fragment>
      ))}
      <View style={styles.divider}></View>
      {[
        {
          icon: require("../../assets/images/bill.png"),
          text: "Hóa đơn và Tiện ích",
        },
        {
          icon: require("../../assets/images/Invoice.png"),
          text: "Hóa đơn điện",
        },
        {
          icon: require("../../assets/images/InvoiceInternet.png"),
          text: "Hóa đơn Internet",
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.text);
              setType(false);
              setModalVisible(false);
            }}
          >
            <View style={styles.optionContainer}>
              <Image style={styles.icon} source={item.icon} />
              <View style={styles.optionTextWrapper}>
                <Text style={styles.optionText}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </React.Fragment>
      ))}
      <View style={styles.divider}></View>
      {[
        {
          icon: require("../../assets/images/MoveMoney.png"),
          text: "Tiền chuyển đi",
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.text);
              setType(false);
              setModalVisible(false);
            }}
          >
            <View style={styles.optionContainer}>
              <Image style={styles.icon} source={item.icon} />
              <View style={styles.optionTextWrapper}>
                <Text style={styles.optionText}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </React.Fragment>
      ))}
      <Modal
        transparent={true}
        visible={modalVisibleCategoriesIncome}
        onRequestClose={() => {
          setModalVisibleCategoriesIncome(!modalVisibleCategoriesIncome);
        }}
      >
        {modalVisibleCategoriesIncome}
        <Pick_Category_Income
          setType={setType}
          setCategoriesRef={setCategoriesRef}
          setModalVisible={setModalVisibleCategoriesIncome}
          setGeneralVisible={setModalVisible}
        />
      </Modal>
      <Modal
        transparent={true}
        visible={modalNewCategory}
        onRequestClose={() => {
          setModalNewCategory(!modalNewCategory);
        }}
      >
        {modalNewCategory}
        <New_Category setModalVisible={setModalNewCategory} />
      </Modal>
    </View>
  );
};

export default Pick_Category;

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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  activeTabText: {
    fontSize: 15,
    fontFamily: "Poppins_600SemiBold",
  },
  tabText: {
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  divider: {
    backgroundColor: "#D9D9D9",
    height: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  icon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
  },
  optionTextWrapper: {
    justifyContent: "center",
    borderBottomColor: "#D9D9D9",
    flex: 1,
  },
  optionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
  },
});
