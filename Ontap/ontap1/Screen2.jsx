import { useState } from "react";
import { Alert } from "react-native";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native";
import { Text, TextInput } from "react-native-web";

export default function Screen2({ route, navigation }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/tao.jpg"),
    },
    {
      id: 2,
      name: "Pear",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/le.jpg"),
    },
    {
      id: 3,
      name: "Coconut",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/dua.jpg"),
    },
    {
      id: 4,
      name: "Orange",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/cam.jpg"),
    },
    {
      id: 5,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/tao.jpg"),
    },
    {
      id: 6,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/tao.jpg"),
    },
    {
      id: 7,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: require("./assets/tao.jpg"),
    },
  ];

  const [inputValue, setInputValue] = useState("");
  const [cate, setCate] = useState("");

  const filterProduct = () => {
    return products.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const matchesCategory = cate === "" || item.cate === cate;
      return matchesSearch && matchesCategory;
    });
  };

  const [cart, setCart] = useState(route.params?.cart || []);

  const handlePress = (product) => {
    const updatedCart = [...cart];
    const productInCart = updatedCart.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity += 1; // Tăng số lượng nếu sản phẩm đã có trong giỏ hàng
    } else {
      updatedCart.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào giỏ hàng
    }

    setCart(updatedCart); // Cập nhật trạng thái giỏ hàng
    navigation.navigate("Screen3", { cart: updatedCart }); // Điều hướng đến Screen3
  };
  const Item = ({ obj }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          handlePress(obj);
        }}
      >
        <Image source={obj.img} style={{ width: 100, height: 100 }} />
        <Text>{obj.name}</Text>
      </TouchableOpacity>
    );
  };
  const [showAll, setShowAll] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", padding: 10, width: "100%" }}>
        <TextInput placeholder="Search" onChangeText={setInputValue} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[
            styles.cate,
            { backgroundColor: cate === "Vegetable" ? "red" : "white" }, // Màu đỏ nếu "Vegetable" được chọn, màu trắng nếu không
          ]}
          onPress={() => {
            setCate("Vegetable");
          }}
        >
          <Text>Vegetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cate,
            { backgroundColor: cate === "Seafood" ? "red" : "white" }, // Màu đỏ nếu "Vegetable" được chọn, màu trắng nếu không
          ]}
          onPress={() => {
            setCate("Seafood");
          }}
        >
          <Text>Seafood</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.cate,
            { backgroundColor: cate === "Drinks" ? "red" : "white" }, // Màu đỏ nếu "Vegetable" được chọn, màu trắng nếu không
          ]}
          onPress={() => {
            setCate("Drinks");
          }}
        >
          <Text>Drinks</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Order your favorite!</Text>
        <TouchableOpacity
          onPress={() => {
            setShowAll(!showAll);
          }}
        >
          <Text>{showAll ? "See less" : "See all"}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: "700px",
          borderBottomWidth: 1,
          padding: 20,
        }}
      >
        <FlatList
          data={showAll ? filterProduct() : filterProduct().slice(0, 6)}
          renderItem={({ item }) => <Item obj={item}></Item>}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    gap: 20,
  },
  item: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 10,
    shadowOpacity: 0.25,
    flexGrow: 1,
  },
  cate: {
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    margin: 10,
  },
});
