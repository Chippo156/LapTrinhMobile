import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";

function selectColorScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.detailsImage}>
        <Image source={require("./assets/vs_blue.png")} style={styles.image} />{" "}
        <Text> Điện Thoại Vsmart Joy 3 Hàng chính hãng </Text>{" "}
      </View>{" "}
      <View style={{ gap: 10, backgroundColor: "#C4C4C4", height: "100%" }}>
        <Text> Chọn một màu bên dưới </Text>{" "}
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 45,
          }}
        >
          <Pressable style={styles.color}> </Pressable>{" "}
          <Pressable style={styles.color1}> </Pressable>{" "}
          <Pressable style={styles.color2}> </Pressable>{" "}
          <Pressable style={styles.color3}> </Pressable>{" "}
        </View>{" "}
      </View>{" "}
    </View>
  );
}

function productDetailScreen() {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("./assets/vs_blue.png")} />{" "}
      </View>{" "}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {" "}
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng{" "}
        </Text>{" "}
      </View>{" "}
      <View style={styles.product}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("./assets/star.png")} />{" "}
          <Image source={require("./assets/star.png")} />{" "}
          <Image source={require("./assets/star.png")} />{" "}
          <Image source={require("./assets/star.png")} />{" "}
          <Image source={require("./assets/star.png")} />{" "}
        </View>{" "}
        <View
          style={{
            color: "gray",
            fontWeight: 400,
          }}
        >
          {" "}
          (Xem 828 đánh giá){" "}
        </View>{" "}
      </View>{" "}
      <View style={styles.product}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}> 1.790 .000 đ </Text>{" "}
        <Text
          style={{
            color: "gray",
            fontWeight: 400,
            textDecorationLine: "line-through",
          }}
        >
          {" "}
          1.790 .000 đ{" "}
        </Text>{" "}
      </View>{" "}
      <View style={styles.product}>
        <Text style={{ color: "red" }}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>{" "}
        <Image source={require("./assets/Group 1.png")} />{" "}
      </View>{" "}
      <TouchableOpacity style={styles.buttonChooseColor}>
        <Text> 4 MÀU - CHỌN MÀU </Text>{" "}
        <Image source={require("./assets/Vector.png")} />{" "}
      </TouchableOpacity>{" "}
      <TouchableOpacity style={styles.buttonOrdered}>
        <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
          {" "}
          CHỌN MUA{" "}
        </Text>{" "}
      </TouchableOpacity>{" "}
    </View>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteHome="Details">
        <Stack.Screen name="Details" component={productDetailScreen} />{" "}
      </Stack.Navigator>{" "}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 30,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",

    gap: 20,
  },
  buttonChooseColor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 40,
  },
  buttonOrdered: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  detailsImage: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 150,
    height: 200,
  },
  color: {
    backgroundColor: "#C5F1FB",
    width: 100,
    height: 100,
  },
  color1: {
    backgroundColor: "#F30D0D",
    width: 100,
    height: 100,
  },
  color2: {
    backgroundColor: "#000",
    width: 100,
    height: 100,
  },
  color3: {
    backgroundColor: "#234896",
    width: 100,
    height: 100,
  },
});
