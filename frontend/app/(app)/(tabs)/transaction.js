import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Stack, router, useFocusEffect } from "expo-router";
import { useState, useEffect, useCallback } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import axios from "axios";
import BASE_URL from "../../../env";

const my_dict = {
  "Ăn uống": require("../../../assets/images/food.png"),
  "Di chuyển": require("../../../assets/images/Motorcycle.png"),
  Xăng: require("../../../assets/images/Petrol.png"),
  "Bảo dưỡng xe": require("../../../assets/images/Wrench.png"),
  "Hóa đơn và tiện ích": require("../../../assets/images/bill.png"),
  "Hóa đơn điện": require("../../../assets/images/Invoice.png"),
  "Hóa đơn internet": require("../../../assets/images/InvoiceInternet.png"),
  "Thuê nhà": require("../../../assets/images/rentHouse.png"),
  "Tiền chuyển đi": require("../../../assets/images/MoveMoney.png"),
  Lương: require("../../../assets/images/Salary.png"),
  "Thu nhập khác": require("../../../assets/images/AnotherMoney.png"),
  "Tiền chuyển đến": require("../../../assets/images/MoveMoney.png"),
};
function formatDate(dateString) {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  const dateObj = new Date(dateString);
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const monthDate = `${date}/${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
  const detail = `${month} ${year}`;
  const time = `${dateObj.getHours()}:${dateObj
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${dateObj.getSeconds().toString().padStart(2, "0")}`;

  const date_month_year = `${date}-${(dateObj.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${year}`;

  return { date, month_date: monthDate, detail, time, date_month_year };
}

function groupDataByDate(dataList) {
  const groupedData = {};

  dataList.forEach((item) => {
    const { date_month_year } = formatDate(item.dateCreated);
    if (!groupedData[date_month_year]) {
      groupedData[date_month_year] = [];
    }
    groupedData[date_month_year].push(item);
  });

  return groupedData;
}

const Transaction = () => {
  const formatNumber = (num) => {
    if (num == undefined) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [SoDu, setSoDu] = useState();
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [transactionData, setTransactionData] = useState();
  const fetchData = useCallback(async () => {
    setIncome(0);
    setOutcome(0);
    setTotal(0);
    try {
      const [responseWallets, responseTransactions] = await Promise.all([
        axios.get(`${BASE_URL}/wallets`),
        axios.get(`${BASE_URL}/transactions`),
      ]);

      const walletData = responseWallets.data[0];
      setSoDu(walletData.Balance);
      setName(walletData.Name);
      setData(responseWallets.data);

      let income = 0;
      let outcome = 0;
      let total = 0;

      responseTransactions.data.forEach((item) => {
        if (!item.isDeleted) {
          if (item.type) {
            income += item.money;
            total += item.money;
          } else {
            outcome += item.money;
            total -= item.money;
          }
        }
      });

      setIncome(income);
      setOutcome(outcome);
      setTotal(total);
      setTransactionData(responseTransactions.data);
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [fetchData])
  );

  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    data && (
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
        <View
          style={{
            backgroundColor: "#21B4A3",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            paddingTop: 44,
            paddingBottom: 30,
          }}
        >
          <View style={{ flexBasis: "33%" }}></View>
          <View
            style={{
              flexBasis: "33%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Số dư
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: "white",
                fontSize: 20,
              }}
            >
              {data && formatNumber(SoDu)}
            </Text>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                flexBasis: 33,
                backgroundColor: "#D9D9D9",
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Image
                style={{ resizeMode: "contain", width: 30, height: 30 }}
                source={require("../../../assets/images/Wallet.png")}
              />
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 11,
                }}
              >
                {data && name}
              </Text>
              <Image
                style={{ resizeMode: "contain" }}
                source={require("../../../assets/images/DotDown.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexBasis: "33%",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 20,
              paddingRight: 20,
            }}
          >
            <Image
              style={{ resizeMode: "contain" }}
              source={require("../../../assets/images/searching.png")}
            />
            <Image
              style={{ resizeMode: "contain" }}
              source={require("../../../assets/images/threeDot.png")}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <View
            style={{
              flexDirection: "row",
              borderBlockEndColor: "#D9D9D9",
              borderBottomWidth: 1,
              paddingHorizontal: 20,
              paddingVertical: 5,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {/* <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
              Tháng trước
            </Text> */}
            <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
              Chi tiết
            </Text>
            {/* <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}>
              Tương lai
            </Text> */}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              marginVertical: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Tiền vào
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                }}
              >
                Tiền ra
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                  borderTopWidth: 1,
                }}
              >
                Tổng tiền
              </Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                  color: "#4CE57A",
                }}
              >
                {data && formatNumber(income)}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                  fontSize: 18,
                  color: "#FF0D42",
                }}
              >
                {data && formatNumber(outcome)}
              </Text>
              {total && total > 0 ? (
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins_400Regular",
                    color: "#4CE57A",
                    borderTopWidth: 1,
                  }}
                >
                  {formatNumber(total)}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Poppins_400Regular",
                    color: "#FF0D42",
                    borderTopWidth: 1,
                  }}
                >
                  {formatNumber(total)}
                </Text>
              )}
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#EAF4F3",
              paddingHorizontal: 15,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
                color: "#4CE57A",
              }}
            >
              Xem báo cáo
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#D9D9D9",
              height: 22,
              marginTop: 20,
            }}
          ></View>
        </View>
        <ScrollView>
          {transactionData &&
            transactionData.map((item, index) => {
              if (!item.isDeleted)
                return (
                  <React.Fragment key={index}>
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingHorizontal: 20,
                        gap: 10,
                        borderBottomWidth: 1,
                        borderBlockColor: "#D9D9D9",
                      }}
                      onPress={() => {
                        router.push({
                          pathname: "transaction_details",
                          params: {
                            money: item.money,
                            date: formatDate(item.dateCreated).date_month_year,
                            name: item.nameCategory,
                            walletRef: item.walletRef,
                            transRef: item._id,
                          },
                        });
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                          paddingVertical: 10,
                        }}
                      >
                        <Image
                          style={{
                            resizeMode: "contain",
                            width: 30,
                            height: 30,
                          }}
                          source={my_dict[item.nameCategory]}
                        />
                        <View>
                          <Text
                            style={{
                              fontFamily: "Poppins_400Regular",
                              fontSize: 18,
                            }}
                          >
                            {item.nameCategory}
                          </Text>
                          <Text>
                            {formatDate(item.dateCreated).date_month_year}
                          </Text>
                        </View>
                      </View>
                      {!item.type ? (
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: "Poppins_400Regular",
                            color: "#FF0D42",
                          }}
                        >
                          - {formatNumber(item.money)}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: "Poppins_400Regular",
                            color: "#4CE57A",
                          }}
                        >
                          + {formatNumber(item.money)}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </React.Fragment>
                );
            })}
        </ScrollView>
      </View>
    )
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
});
