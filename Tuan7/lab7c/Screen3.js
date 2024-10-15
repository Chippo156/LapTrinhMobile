import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Image, SafeAreaView } from "react-native";
import { Text, View } from "react-native";

export default function Screen3({ navigation }) {
  const drinks = [
    {
      id: 1,
      name: "Cappuccino",
      image: require("./assets/Image (1).png"),
      price: "4.99",
    },
    {
      id: 2,
      name: "Espresso",
      image: require("./assets/Image (1).png"),
      price: "3.99",
    },
    {
      id: 3,
      name: "Latte",
      image: require("./assets/Image (1).png"),
      price: "5.99",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (drink) => {
    setCart((prevCart) => [...prevCart, drink]);
  };

  const removeToCart = (drink) => {
    if (cart.length === 1) {
      setCart([]);
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== drink.id));
  };

  const Item = ({ obj }) => {
    return (
      <View style={styles.drink}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={obj.image} style={styles.image} />
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text>{obj.name}</Text>
            <Text>{obj.price}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => removeToCart(obj)}
          >
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>
          <Text>1</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addToCart(obj)}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const handlePress = () => {
    navigation.navigate("Screen4", { drinks: cart });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/Button 70.png")}
          style={{ width: 50, height: 30 }}
        />
        <Text style={styles.headerTitle}>Drinks</Text>
        <Image
          source={require("./assets/Image 177.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <FlatList
        data={drinks}
        renderItem={({ item }) => <Item obj={item}></Item>}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
      <TouchableOpacity style={styles.buttonToCart} onPress={handlePress}>
        <Text>GO TO CART</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 20,
    gap: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  drink: {
    flexDirection: "row",

    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonToCart: {
    width: "100%",
    height: 50,
    backgroundColor: "#EFB034",
    justifyContent: "center",
    alignItems: "center",
  },
});
