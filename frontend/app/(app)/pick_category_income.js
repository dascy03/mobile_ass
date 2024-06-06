import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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

import { Alert } from "react-native";

import New_Category from "./new_category";

import axios from "axios";
import BASE_URL from "../../env";

const Pick_Category_Income = ({
  setType,
  setCategoriesRef,
  setModalVisible,
  setCategoriesID,
  setGeneralVisible,
}) => {
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
          (item) => item.isIncome === true
        );
        setData(filter_data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [modalNewCategory, loading]);

  if (!fontsLoaded && !fontError) return null;

  return (data && 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chọn danh mục</Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.tabText}>Khoản chi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.activeTabText}>Khoản thu</Text>
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
      {[
        {
          icon: require("../../assets/images/Salary.png"),
          name: data[0].name,
          _id: data[0]._id,
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.name);
              setCategoriesID(item._id);
              setType(true);
              setGeneralVisible(false);
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
      {[
        {
          icon: require("../../assets/images/AnotherMoney.png"),
          name: data[1].name,
          _id: data[1]._id,
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.name);
              setCategoriesID(item._id);
              setType(true);
              setGeneralVisible(false);
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
      {[
        {
          icon: require("../../assets/images/MoveMoney.png"),
          name: data[2].name,
          _id: data[2]._id,
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.name);
              setCategoriesID(item._id);
              setType(true);
              setGeneralVisible(false);
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
          if (index > 2 && !item.isDeleted && item.isIncome)
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
                    setCategoriesID(item._id.toString());
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
      <Modal
        transparent={true}
        visible={modalNewCategory}
        onRequestClose={() => {
          setModalNewCategory(!modalNewCategory);
        }}
      >
        {modalNewCategory}
        <New_Category setModalVisible={setModalNewCategory} isIncome={true} />
      </Modal>
    </View>
  );
};

export default Pick_Category_Income;

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
    paddingHorizontal: 30,
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
