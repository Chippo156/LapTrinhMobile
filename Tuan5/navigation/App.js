import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
function SelectColorScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  const [selectedColor, setSelectedColor] = useState("");
  const images = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
    // Add other colors as needed
  };
  const infProduct = {
    blue: {
      color: "Xanh dương",
      provider: "Tiki trading",
      price: "1.790.000 đ",
    },
    red: {
      color: "Đỏ",
      provider: "Tiki trading",
      price: "1.790.000 đ",
    },
    black: {
      color: "Đen",
      provider: "Tiki trading",
      price: "1.790.000 đ",
    },
    silver: {
      color: "Bạc",
      provider: "Tiki trading",
      price: "1.790.000 đ",
    },
  };
  let productInf = {};
  if (selectedColor === "") {
    productInf = otherParam;
  } else {
    productInf = infProduct[selectedColor];
    productInf.pathImage = images[selectedColor];
  }
  const pathImage = images[selectedColor];
  const handleColorPress = (color) => {
    setSelectedColor(color);
  };

  const product = {
    pathImage: pathImage,
    color: productInf.color,
    provider: productInf.provider,
    price: productInf.price,
  };

  const backDetail = () => {
    navigation.navigate("ProductDetails", {
      itemId: 1,
      otherParam: product,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.detailsImage}>
        <Image source={productInf.pathImage} style={styles.image} />
        <View style={{ gap: 10 }}>
          <Text> Điện Thoại Vsmart Joy 3 Hàng chính hãng </Text>
          <Text style={styles.productDetailsInf}>
            {" "}
            Màu :{" "}
            <Text style={{ fontWeight: "bold" }}>{productInf.color} </Text>{" "}
          </Text>
          <Text>
            {" "}
            Cung cấp bỏi{" "}
            <Text style={{ fontWeight: "bold" }}>
              {productInf.provider}{" "}
            </Text>{" "}
          </Text>
          <Text style={{ fontWeight: "bold" }}> {productInf.price}</Text>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          gap: 10,
          backgroundColor: "#C4C4C4",
          height: "100%",
        }}
      >
        <Text> Chọn một màu bên dưới </Text>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 35,
            marginBottom: 10,
          }}
        >
          <Pressable
            style={[
              styles.color,
              selectedColor === "silver" && styles.selected,
            ]}
            onPress={() => handleColorPress("silver")}
          ></Pressable>
          <Pressable
            style={[styles.color1, selectedColor === "red" && styles.selected]}
            onPress={() => handleColorPress("red")}
          ></Pressable>

          <Pressable
            style={[
              styles.color2,
              selectedColor === "black" && styles.selected,
            ]}
            onPress={() => handleColorPress("black")}
          ></Pressable>
          <Pressable
            style={[styles.color3, selectedColor === "blue" && styles.selected]}
            onPress={() => handleColorPress("blue")}
          ></Pressable>
        </View>
        <TouchableOpacity style={styles.buttonSuccess} onPress={backDetail}>
          <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function ProductDetailScreen({ route, navigation }) {
  const [product, setProduct] = useState({
    color: "Xanh dương",
    provider: "Tiki trading",
    price: "1.790.000 đ",
    pathImage: require("./assets/vs_blue.png"),
  });
  const otherParam = route.params || {};
  useEffect(() => {
    if (Object.keys(otherParam).length !== 0) {
      setProduct(otherParam.otherParam);
    }
  }, [otherParam]);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image style={{ width: 250, height: 350 }} source={product.pathImage} />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.product}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("./assets/star.png")} />
          <Image source={require("./assets/star.png")} />
          <Image source={require("./assets/star.png")} />
          <Image source={require("./assets/star.png")} />
          <Image source={require("./assets/star.png")} />
        </View>
        <View
          style={{
            color: "gray",
            fontWeight: 400,
          }}
        >
          <Text> (Xem 828 đánh giá)</Text>
        </View>
      </View>

      <View style={styles.product}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {product.price}
        </Text>
        <Text
          style={{
            color: "gray",
            fontWeight: 400,
            textDecorationLine: "line-through",
          }}
        >
          1.790 .000 đ
        </Text>
      </View>
      <View style={styles.product}>
        <Text style={{ color: "red" }}> Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
        <Image source={require("./assets/Group 1.png")} />
      </View>
      <TouchableOpacity
        style={styles.buttonChooseColor}
        onPress={() =>
          navigation.navigate("SelectColor", {
            itemId: 1,
            otherParam: {
              color: product.color,
              provider: product.provider,
              price: product.price,
              pathImage: product.pathImage,
            },
          })
        }
      >
        <Text> 4 MÀU - CHỌN MÀU </Text>
        <Image source={require("./assets/Vector.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOrdered}>
        <Text style={{ color: "white", fontWeight: 700, fontSize: 16 }}>
          CHỌN MUA
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductDetails">
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
        <Stack.Screen name="SelectColor" component={SelectColorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 20,
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
    padding: 20,
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 120,
    height: 150,
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
  productDetailsInf: {
    color: "#000",
    fontSize: 16,
    fontWeight: 700,
  },
  selected: {
    borderWidth: 2,
    borderColor: "black",
  },
  buttonSuccess: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1952E294",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
});
