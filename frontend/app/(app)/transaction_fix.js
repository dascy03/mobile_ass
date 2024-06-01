import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";

const Transaction_Fix = () => {
  const formatNumber = (num) => {
    if (num == undefined) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [SoDu, setSoDu] = useState();
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setSoDu(9999999);
    setIncome(100000);
    setOutcome(22222222);
    setTotal(income - outcome);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={styles.headerIcon}
            source={require("../../assets/images/back-button.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sửa giao dịch</Text>
      </View>
      <View>
        <View style={styles.spacer}></View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/VND.png")}
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Fill your money" />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Wallet.png")}
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Chọn ví" />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Invoice.png")}
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Hóa đơn điện" />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Calendar_month.png")}
          />
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Hôm nay" />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Note.png")}
          />
          <View>
            <Text>...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transaction_Fix;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
  },
});
