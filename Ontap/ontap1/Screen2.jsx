import { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);
  const product = [
    {
      id: 1,
      name: "Apple",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/nrwnw1ihywhswnoesaov.jpg",
    },
    {
      id: 2,
      name: "Pear",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/kguwpzui1arfv35bjgqz.jpg",
    },
    {
      id: 3,
      name: "Coconut",
      cate: "Vegetable",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/g5l2sluauwu3arzxllb9.jpg",
    },
    {
      id: 4,
      name: "Orange",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321044/afimx6f1cc16promtc8p.jpg",
    },
    {
      id: 5,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/nrwnw1ihywhswnoesaov.jpg",
    },
    {
      id: 6,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/nrwnw1ihywhswnoesaov.jpg",
    },
    {
      id: 7,
      name: "Milk",
      cate: "Drinks",
      price: 28.0,
      des: "aaaa",
      img: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/nrwnw1ihywhswnoesaov.jpg",
    },
  ];

  const getProducts = async () => {
    const api = "https://66fc8f39c3a184a84d174f4d.mockapi.io/drinks";

    try {
      let response = await fetch(api, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  };
  const createProducts = async (product) => {
    const api = "https://66fc8f39c3a184a84d174f4d.mockapi.io/drinks";
    try {
      let response = await fetch(api, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      let json = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

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
        <Image source={{ uri: obj.img }} style={{ width: 100, height: 100 }} />
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
