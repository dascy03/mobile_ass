import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
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

import { Alert } from "react-native";

const Pick_Category = ({
  setType,
  setCategoriesRef,
  setModalVisible,
  setCategoriesID,
}) => {
  const [modalVisibleCategoriesIncome, setModalVisibleCategoriesIncome] =
    useState(false);
  const [modalNewCategory, setModalNewCategory] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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
        const filter_data = await response.data.filter(
          (item) => item.isIncome === false
        );
        setData(filter_data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [modalNewCategory, loading]);

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
      <ScrollView>
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
        {data &&
          [data[0]].map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  console.log(item);
                  setCategoriesRef(item.name);
                  setCategoriesID(item._id);
                  setType(false);
                  setModalVisible(false);
                }}
              >
                <View style={styles.optionContainer}>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/images/food.png")}
                  />
                  <View style={styles.optionTextWrapper}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}

        <View style={styles.divider}></View>
        {data &&
          [
            {
              icon: require("../../assets/images/Motorcycle.png"),
              name: data[1].name,
              _id: data[1]._id,
            },
            {
              icon: require("../../assets/images/Petrol.png"),
              name: data[2].name,
              _id: data[2]._id,
            },
            {
              icon: require("../../assets/images/Wrench.png"),
              name: data[3].name,
              _id: data[3]._id,
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  setCategoriesRef(item.name);
                  setCategoriesID(item._id);
                  setType(false);
                  setModalVisible(false);
                }}
              >
                <View style={styles.optionContainer}>
                  <Image style={styles.icon} source={item.icon} />
                  <View style={styles.optionTextWrapper}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        <View style={styles.divider}></View>
        {data &&
          [
            {
              icon: require("../../assets/images/bill.png"),
              name: data[4].name,
              _id: data[4]._id,
            },
            {
              icon: require("../../assets/images/Invoice.png"),
              name: data[5].name,
              _id: data[5]._id,
            },
            {
              icon: require("../../assets/images/InvoiceInternet.png"),
              name: data[6].name,
              _id: data[6]._id,
            },
            {
              icon: require("../../assets/images/rentHouse.png"),
              name: data[7].name,
              _id: data[7]._id,
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  setCategoriesRef(item.name);
                  setCategoriesID(item._id);
                  setType(false);
                  setModalVisible(false);
                }}
              >
                <View style={styles.optionContainer}>
                  <Image style={styles.icon} source={item.icon} />
                  <View style={styles.optionTextWrapper}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        <View style={styles.divider}></View>
        {data &&
          [
            {
              icon: require("../../assets/images/MoveMoney.png"),
              name: data[8].name,
              _id: data[8]._id,
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() => {
                  setCategoriesRef(item.name);
                  setCategoriesID(item._id);
                  setType(false);
                  setModalVisible(false);
                }}
              >
                <View style={styles.optionContainer}>
                  <Image style={styles.icon} source={item.icon} />
                  <View style={styles.optionTextWrapper}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        <View style={styles.divider}></View>
        {data &&
          data.map((item, index) => {
            if (index > 8 && !item.isDeleted && !item.isIncome)
              return (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    onLongPress={() => {
                      Alert.alert(
                        "Xác nhận",
                        "Bạn có muốn xóa nhóm này?",
                        [
                          {
                            text: "No",
                            onPress: () => {},
                            style: "cancel",
                          },
                          {
                            text: "Yes",
                            onPress: async () => {
                              const response = await axios.delete(
                                `${BASE_URL}/categories/${item._id}`
                              );
                              setLoading(!loading);
                            },
                          },
                        ],
                        { cancelable: false }
                      );
                    }}
                    onPress={() => {
                      setCategoriesRef(item.name);
                      setCategoriesID(item._id);
                      setType(false);
                      setModalVisible(false);
                    }}
                  >
                    <View style={styles.optionContainer}>
                      <Image
                        style={styles.icon}
                        source={require("../../assets/images/Category.png")}
                      />
                      <View style={styles.optionTextWrapper}>
                        <Text style={styles.optionText}>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </React.Fragment>
              );
          })}
      </ScrollView>
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
          setCategoriesID={setCategoriesID}
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
        <New_Category setModalVisible={setModalNewCategory} isIncome={false} />
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
