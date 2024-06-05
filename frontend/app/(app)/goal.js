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
    <View style={styles.goalContainer}>
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
          <Text style={styles.goalTime}>Còn {timeRemaining}</Text>
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
    </View>
  );
};

const FinishGoal = ({ title, amount, time }) => {
  return (
    <View style={styles.goalContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/images/plane.png")}
          style={{
            width: 50,
            height: 50,
            marginRight: 18,
          }}
        />
        <View>
          <Text style={styles.goalTitle}>{title}</Text>
          <Text
            style={{
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
              color: "#21B4A3",
            }}
          >
            {amount.toLocaleString()} VND
          </Text>
          <Text style={styles.goalTime}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const GoalsScreen = () => {
  const [goals, setGoals] = useState([
    {
      title: "Buffet trên máy bay",
      amount: 2304000,
      progress: 80,
      timeRemaining: "23 ngày",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Mua tủ lạnh",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tháng",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Mua tủ lạnh",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Mua tủ lạnh",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Mua tủ lạnh",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Mua tủ lạnh",
      amount: 50000000,
      progress: 46,
      timeRemaining: "2 tuần",
      icon: "../../assets/images/food.png",
    },
  ]);

  const [finishGoal, setFinishGoal] = useState([
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
    {
      title: "Du lịch Hawaii",
      amount: 50000000,
      time: "Hoàn tất vào 23/04/2024",
      icon: "../../assets/images/food.png",
    },
  ]);

  const [finished, setFinished] = useState(false);
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
          title: "Mục tiêu",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#21B4A3",
          },
          headerShadowVisible: true,
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            color: "white",
            fontSize: 18,
          },
        }}
      />
      <View style={styles.topContainer}>
        <Text
          style={{
            fontFamily: "Poppins_400Regular",
            fontSize: 17,
            color: "#fff",
          }}
        >
          Bạn đã tiết kiệm được
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_500Medium",
            fontSize: 14,
            color: "#fff",
          }}
        >
          VNĐ{"    "}
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 45,
              color: "#fff",
            }}
          >
            1,305,000
          </Text>
        </Text>
        <TouchableOpacity style={styles.addGoalBtn}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              includeFontPadding: true,
              textAlignVertical: "center",
            }}
          >
            Tạo mục tiêu
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              flex: 1,
              color: "#fff",
              fontFamily: "Poppins_400Regular",
              fontSize: 15,
            }}
          >
            Mục tiêu của bạn
          </Text>
          <TouchableOpacity onPress={() => setFinished(false)}>
            <Text
              style={{
                color: "#fff",
                fontFamily: finished
                  ? "Poppins_300Light"
                  : "Poppins_600SemiBold",
                fontSize: 14,
              }}
            >
              Đang thực hiện
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFinished(true)}>
            <Text
              style={{
                color: "#fff",
                fontFamily: finished
                  ? "Poppins_600SemiBold"
                  : "Poppins_300Light",
                fontSize: 14,
                marginLeft: 8,
              }}
            >
              Hoàn tất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.goalsList}>
        {finished
          ? finishGoal.map((goal, index) => (
              <FinishGoal key={index} {...goal} />
            ))
          : goals.map((goal, index) => <Goal key={index} {...goal} />)}
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
    paddingTop: 24,
    paddingHorizontal: 30,
    backgroundColor: "#21B4A3",
  },
  addGoalBtn: {
    height: 36,
    width: 156,
    backgroundColor: "#FBC43A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 24,
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

export default GoalsScreen;
