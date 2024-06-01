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
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AntIcon from "react-native-vector-icons/AntDesign";
import React, { useState, useEffect } from "react";
import BASE_URL from "../../../env";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const onSearch = async () => {
    await axios
      .get(`${BASE_URL}/users/search/${search}`)
      .then((res) => {
        console.log("search", res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
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
              value={search}
              onChangeText={(text) => setSearch(text)}
              onSubmitEditing={onSearch}
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

      <ScrollView
        contentContainerStyle={{ padding: 24, backgroundColor: "white" }}
      >
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 20,
            marginBottom: 6,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 17,
              color: "#21B4A3",
            }}
          >
            Giao dịch gần đây
          </Text>
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 13,
              color: "#797979",
            }}
          >
            Xem tất cả
          </Text>
        </View>
        <View>
          <View style={styles.recentTransaction}>
            <Image
              source={require("../../../assets/images/bill.png")}
              style={{
                width: 34,
                height: 34,
                marginRight: 14,
                alignSelf: "center",
              }}
            />
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 19,
                  color: "black",
                  lineHeight: 28,
                }}
              >
                Hóa đơn tiền điện
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: "#797979",
                }}
              >
                23/04/2024
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                color: "black",
              }}
            >
              1,000,000
            </Text>
          </View>
          <View style={styles.recentTransaction}>
            <Image
              source={require("../../../assets/images/food-icon.png")}
              style={{
                width: 34,
                height: 34,
                marginRight: 14,
                alignSelf: "center",
              }}
            />
            <View style={{ flexDirection: "column", flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                  color: "black",
                  lineHeight: 28,
                }}
              >
                Ăn uống
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  color: "#797979",
                }}
              >
                23/04/2024
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 19,
                color: "black",
              }}
            >
              90,000
            </Text>
          </View>
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            fontFamily: "Poppins_600SemiBold",
            fontSize: 17,
            color: "#21B4A3",
            marginTop: 6,
          }}
        >
          Báo cáo chi tiêu
        </Text>
        <View
          style={{ justifyContent: "flex-start", width: "100", padding: 16 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#70D8CC",
              borderRadius: 6,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  paddingTop: 3,
                  fontFamily: "Poppins_500Medium",
                  fontSize: 17,
                  color: "white",
                }}
              >
                Tuần
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#21B4A3",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  paddingTop: 3,
                  fontFamily: "Poppins_500Medium",
                  fontSize: 17,
                  color: "white",
                  padding: 1,
                }}
              >
                Tháng
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 19,
                color: "#21B4A3",
              }}
            >
              1,200,000 VNĐ
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: "#484848",
              }}
            >
              Tổng chi tiêu tháng này +{" "}
              <Text style={{ color: "#FA416A" }}>10%</Text>
            </Text>
          </View>
          <Image
            source={require("../../../assets/images/home-dashboard.png")}
            style={{
              marginTop: 10,
              width: 230,
              height: 115,
              alignSelf: "center",
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 15,
            color: "#484848",
            marginTop: 10,
            marginBottom: 6,
          }}
        >
          Chi tiêu hàng đầu
        </Text>
        <View style={styles.recentTransaction}>
          <Image
            source={require("../../../assets/images/bill.png")}
            style={{
              width: 44,
              height: 44,
              marginRight: 34,
              alignSelf: "center",
            }}
          />
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
                color: "black",
              }}
            >
              Hoá đơn
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: "#797979",
              }}
            >
              900,000 VNĐ
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
            }}
          >
            75%
          </Text>
        </View>
        <View style={styles.recentTransaction}>
          <Image
            source={require("../../../assets/images/food-icon.png")}
            style={{
              width: 44,
              height: 44,
              marginRight: 34,
              alignSelf: "center",
            }}
          />
          <View style={{ flexDirection: "column", flex: 1 }}>
            <Text
              style={{
                fontFamily: "Poppins_600SemiBold",
                fontSize: 15,
                color: "black",
              }}
            >
              Ăn uống
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: "#797979",
              }}
            >
              300,000 VNĐ
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#FA416A",
            }}
          >
            25%
          </Text>
        </View>
      </ScrollView>
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
  recentTransaction: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
});
