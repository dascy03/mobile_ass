import { StyleSheet, View, SafeAreaView, Text, Pressable } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: 333, justifyContent: "center" }}>
        <Text
          style={{
            color: "#21B4A3",
            fontSize: 50,
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Brew Kash
        </Text>
      </View>

      <View style={{ height: 41 }}>
        <Pressable style={[styles.btnContainer]}>
          <Text style={styles.textInButton}>Đăng nhập</Text>
        </Pressable>
      </View>

      <View
        style={{ height: 70, justifyContent: "center", alignItems: "center" }}
      >
        <Text style={{ fontSize: 16, fontWeight: "normal", color: "#757575" }}>
          hoặc
        </Text>
      </View>

      <View style={{ height: 147, justifyContent: "space-between" }}>
        <View style={{ height: 41 }}>
          <Pressable
            style={[
              styles.btnContainer,
              { height: 41, backgroundColor: "#5384EE" },
            ]}
          >
            <Text style={styles.textInButton}>Đăng nhập với Google</Text>
          </Pressable>
        </View>
        <View style={{ height: 41 }}>
          <Pressable
            style={[styles.btnContainer, { backgroundColor: "#415792" }]}
          >
            <Text style={styles.textInButton}>Đăng nhập với FaceBook</Text>
          </Pressable>
        </View>
        <View style={{ height: 41 }}>
          <Pressable
            style={[styles.btnContainer, { backgroundColor: "#000000" }]}
          >
            <Text style={styles.textInButton}>Đăng nhập với Apple</Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          height: 217,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "#FBC43A", fontWeight: "600" }}>
          Đăng kí tài khoản
        </Text>
      </View>
    </View>
  );
};
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 44,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  textInButton: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: 32,
    backgroundColor: "#21B4A3",
  },
});
