import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { useState, useEffect } from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Transaction_Details = () => {
  const formatNumber = (num) => {
    if (num == undefined) return;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [SoDu, setSoDu] = useState();
  const [income, setIncome] = useState();
  const [outcome, setOutcome] = useState();
  const [total, setTotal] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setSoDu(9999999);
    setIncome(100000);
    setOutcome(22222222);
    setTotal(income - outcome);
  }, []);
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
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            router.back();
          }}
        >
          <Image
            style={styles.headerIcon}
            source={require("../../assets/images/Delete.png")}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết</Text>
        <View style={styles.headerSpacer}></View>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            router.push("transaction_fix");
          }}
        >
          <Image
            style={styles.headerIcon}
            source={require("../../assets/images/pencil.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Image
            style={styles.headerIcon}
            source={require("../../assets/images/bin.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Invoice.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Hóa đơn điện
            </Text>
            <Text style={styles.detailAmount}>1,000,000</Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <Image
            style={styles.detailIcon}
            source={require("../../assets/images/Calendar_month.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Hôm nay
            </Text>
          </View>
        </View>
        <View style={styles.detailRow}>
          <Image
            style={[styles.detailIcon, { width: 30, height: 30 }]}
            source={require("../../assets/images/Wallet.png")}
          />
          <View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 18,
              }}
            >
              Tiền mặt
            </Text>
          </View>
        </View>
      </View>
      {/* Modal Popup */}
      <View style={styles.modalContainer}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          {modalVisible && <View style={styles.modalBackground} />}
          <View style={styles.modalContentContainer}>
            <View style={styles.modalContent}>
              <Text>Xóa giao dịch này?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Đồng ý</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.modalButtonText}>Không</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Transaction_Details;

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
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  headerButton: {
    flexBasis: "16%",
    marginTop: 8,
    paddingHorizontal: 16,
  },
  headerIcon: {
    resizeMode: "contain",
  },
  headerTitle: {
    flexBasis: "33%",
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
  },
  headerSpacer: {
    flexBasis: "16%",
  },
  detailsContainer: {
    padding: 12,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  detailIcon: {
    resizeMode: "contain",
  },
  detailAmount: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#FF0000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.5,
  },
  modalContentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 288,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 16,
  },
  modalButton: {
    backgroundColor: "#21B4A3",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  modalButtonText: {
    color: "#FFFFFF",
  },
});
