import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { router } from "expo-router";
import AntIcon from "react-native-vector-icons/AntDesign";
import React from "react";

const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.topContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={[styles.basicText, { fontSize: 14 }]}>
              Chào mừng bạn trở lại
            </Text>
            <Text
              style={[
                styles.basicText,
                { fontSize: 24, fontFamily: "Poppins_600SemiBold" },
              ]}
            >
              Trương Đức Dũng
            </Text>
          </View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../../assets/images/avatar-icon.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            columnGap: 14,
            marginTop: 14,
          }}
        >
          <View style={styles.searchBar}>
            <AntIcon name="search1" size={24} color="#D9D9D9" />
            <TextInput
              style={{
                paddingTop: 3,
                width: "90%",
                fontFamily: "Poppins_400Regular",
                fontSize: 15,
              }}
              placeholder="Tìm kiếm mức chi tiêu"
            />
          </View>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../../assets/images/yellow-filter.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            columnGap: 24,
            marginTop: 16,
          }}
        >
          <Text
            style={[
              styles.basicText,
              {
                fontSize: 36,
                fontFamily: "Poppins_600SemiBold",
                lineHeight: 50,
              },
            ]}
          >
            1,305,000{" "}
            <Text
              style={[
                styles.basicText,
                { fontSize: 20, fontFamily: "Poppins_600SemiBold" },
              ]}
            >
              VNĐ
            </Text>
          </Text>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/images/eye.png")}
          />
        </View>
        <View
          style={{ justifyContent: "flex-start", width: "100%", marginTop: 1 }}
        >
          <Text
            style={[
              styles.basicText,
              { fontSize: 14, fontFamily: "Poppins_600SemiBold" },
            ]}
          >
            Tổng số dư
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.featureContainer}>
          <TouchableOpacity
            style={{ flexDirection: "column", alignItems: "center", rowGap: 8 }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../../assets/images/goal-feature.png")}
            />
            <Text style={styles.blackText}>Mục tiêu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "column", alignItems: "center", rowGap: 8 }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../../assets/images/budget-feature.png")}
            />
            <Text style={styles.blackText}>Ngân sách</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "column", alignItems: "center", rowGap: 8 }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../../assets/images/share-feature.png")}
            />
            <Text style={styles.blackText}>Chia sẻ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    height: 240,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 20,
    backgroundColor: "#21B4A3",
  },
  basicText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: "white",
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 8,
    columnGap: 6,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
    width: "100%",
  },
  featureContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blackText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "black",
  },
});
