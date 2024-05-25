import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
const CustomTextInput = ({ label, placeholder, isPassword }) => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View
      style={{
        justifyContent: "space-between",
        rowGap: 5,
      }}
    >
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        returnKeyType="next"
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textLabel: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "black",
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    borderColor: "#D9D9D9",
  },
});
