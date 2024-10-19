import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FlatList, Image, Text, View } from "react-native";

export default function Screen3({ route, navigation }) {
  const products = route.params.cart;

  const handlePress = () => {
    navigation.navigate("Screen2", { cart: products });
  };

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.quantity;
      return acc;
    }, {})
  );
  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]:
        prevQuantities[id] > 1
          ? prevQuantities[id] - 1
          : products.pop(products[id]),
    }));
  };
  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };
  const totalPrice = () => {
    return products.reduce(
      (sum, product) => sum + quantities[product.id] * product.price,
      0
    );
  };
  const Item = ({ obj }) => {
    return (
      <View style={styles.item}>
        <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
          <Image source={obj.img} style={{ width: 100, height: 100 }}></Image>
          <View style={{ gap: 10 }}>
            <Text style={styles.text}>{obj.price}</Text>
            <Text>{obj.des}</Text>
          </View>
        </View>
        <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={styles.buttonQuantityDecrease}
            onPress={() => decreaseQuantity(obj.id)}
          >
            <Text style={{ color: "green", fontSize: 20 }}>-</Text>
          </TouchableOpacity>
          <Text>{quantities[obj.id]}</Text>
          <TouchableOpacity
            style={styles.buttonQuantity}
            onPress={() => increaseQuantity(obj.id)}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Screen2</Text>
      </TouchableOpacity>
      <Text style={styles.text}>My Basket</Text>
      <View
        style={{
          width: "100%",
          height: "700px",
          borderBottomWidth: 1,
          padding: 20,
        }}
      >
        <FlatList
          data={products}
          renderItem={({ item }) => <Item obj={item}></Item>}
          key={({ item }) => item.id}
        ></FlatList>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textFooter}>Total:</Text>
        <Text style={styles.textFooter}>${totalPrice()}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 30, color: "#fff" }}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    gap: 20,
  },
  item: {
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "green",
    fontSize: 18,
  },
  buttonQuantity: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "50%",
    width: 30,
    height: 30,
    backgroundColor: "green",
  },
  buttonQuantityDecrease: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: "50%",
    width: 30,
    height: 30,
    borderColor: "green",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  textFooter: {
    color: "purple",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
