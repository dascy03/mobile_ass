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

import New_Category from "./new_category";

const Pick_Category_Income = ({
  setType,
  setCategoriesRef,
  setModalVisible,
  setGeneralVisible,
}) => {
  const [modalNewCategory, setModalNewCategory] = useState(false);

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
      {[{ icon: require("../../assets/images/Salary.png"), text: "Lương" }].map(
        (item, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              onPress={() => {
                setCategoriesRef(item.text);
                setType(true);
                setGeneralVisible(false);
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
          icon: require("../../assets/images/AnotherMoney.png"),
          text: "Thu nhập khác",
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.text);
              setType(true);
              setGeneralVisible(false);
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
          text: "Tiền chuyển đến",
        },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity
            onPress={() => {
              setCategoriesRef(item.text);
              setType(true);
              setGeneralVisible(false);
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
