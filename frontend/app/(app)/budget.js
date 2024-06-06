import React, { useState } from "react";
import { router } from "expo-router";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Goal = ({ title, amount, progress, timeRemaining, icon }) => {
  return (
    <TouchableOpacity
      style={styles.goalContainer}
      onPress={() => {
        router.push("budgetDetails");
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/food.png")}
          style={{
            width: 55,
            height: 55,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.goalTitle}>{title}</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 6,
        }}
      >
        <Text style={styles.progressAmount}>
          {((amount * progress) / 100).toLocaleString()} VND
        </Text>
        <Text style={styles.progressAmount}>{amount.toLocaleString()} VND</Text>
      </View>
    </TouchableOpacity>
  );
};

const Budget = () => {
  const [goals, setGoals] = useState([
    {
      title: "Ăn sáng",
      amount: 300000,
      progress: 80,
      timeRemaining: "23 ngày",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Ăn trưa",
      amount: 1000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Ăn chiều",
      amount: 980000,
      progress: 46,
      timeRemaining: "2 tháng",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Ăn tối",
      amount: 630000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Ăn vặt",
      amount: 434234,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
  ]);

  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
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
          headerShown: true,
          headerShadowVisible: true,
          title: "Ngân sách",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#21B4A3",
          },
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            fontSize: 18,
          },
        }}
      />
      <View style={styles.topContainer}>
        <Image
          source={require("../../assets/images/sorry-for-this-budget.png")}
          style={{ width: 311, height: 172 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 15,
                color: "white",
              }}
            >
              1 M
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: "#D9D9D9",
              }}
            >
              Tổng ngân sách
            </Text>
          </View>
          <View
            style={{
              width: 1,
              height: 46,
              backgroundColor: "#D9D9D9",
            }}
          />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 15,
                color: "white",
              }}
            >
              200,000
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: "#D9D9D9",
              }}
            >
              Tổng chi tiêu
            </Text>
          </View>
          <View style={{ width: 1, height: 46, backgroundColor: "#D9D9D9" }} />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 15,
                color: "white",
              }}
            >
              6 ngày
            </Text>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 12,
                color: "#D9D9D9",
              }}
            >
              Thời gian còn lại
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.addGoalBtn}
          onPress={() => {
            router.push("addBudget");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: true,
              textAlignVertical: "center",
            }}
          >
            Tạo ngân sách
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.goalsList}>
        {goals.map((goal, index) => (
          <Goal key={index} {...goal} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#21B4A3",
  },
  topContainer: {
    width: "100%",
    backgroundColor: "#21B4A3",
    justifyContent: "center",
    alignItems: "center",
  },
  addGoalBtn: {
    height: 36,
    width: 156,
    backgroundColor: "#FBC43A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 16,
  },
  goalsList: {
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 30,
  },
  goalContainer: {
    backgroundColor: "#fff",
    marginTop: 14,
    marginBottom: 10,
  },
  goalHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  goalTitle: {
    marginTop: 6,
    fontSize: 17,
    fontFamily: "Poppins_600SemiBold",
  },
  goalTime: {
    fontSize: 13,
    color: "#797979",
    fontFamily: "Poppins_300Light",
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#21B4A3",
  },
  progressFill: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FBC43A",
  },
  progressAmount: {
    fontSize: 14,
    color: "#797979",
    fontFamily: "Poppins_400Regular",
  },
});

export default Budget;
