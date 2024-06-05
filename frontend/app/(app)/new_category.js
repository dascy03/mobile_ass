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

import axios from "axios";
import BASE_URL from "../../env";

const New_Category = ({ setModalVisible, isIncome }) => {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setModalVisible(false)}
        >
          <Image
            style={{ resizeMode: "contain", height: 30, width: 30 }}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Danh mục mới</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.inputIcon}
            source={require("../../assets/images/Question.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Tên nhóm"
            onChangeText={(name) => {
              setName(name);
            }}
          />
        </View>
        {/* <View style={styles.inputWrapper}>
          <Image
            style={styles.inputIcon}
            source={require("../../assets/images/plusminus.png")}
          />
          <TextInput style={styles.input} placeholder="Khoản chi" />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            style={styles.inputIcon}
            source={require("../../assets/images/split.png")}
          />
          <TextInput style={styles.input} placeholder="Nhóm chia" />
        </View> */}
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onLongPress={() => {
          console.log(123);
        }}
        onPress={async () => {
          try {
            if (!name) {
              alert("Thiếu tên nhóm kìa!");
              return;
            }
            const response = await axios.post(`${BASE_URL}/categories`, {
              name: name,
              isIncome: isIncome,
            });
            console.log(response.data);
          } catch (error) {
            console.log("error: ", error);
          }
        }}
      >
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default New_Category;

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
    marginTop: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    flexBasis: "68%",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#D9D9D9",
    marginBottom: 20,
  },
  inputIcon: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginRight: 10,
  },
  input: {
    borderBottomWidth: 2,
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
  },
  saveButton: {
    backgroundColor: "#21B4A3",
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
