import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Screen4({ route, navigation }) {
  const drinks = route.params.drinks;

  const totalPrice = drinks.reduce((acc, item) => {
    return acc + item.price;
  });

  const [cart, setCart] = useState(drinks);

  const addToCart = (drink) => {
    setCart((prevCart) => [...prevCart, drink]);
  };

  const removeToCart = (drink) => {
    if (cart.length === 1) {
      setCart([]);
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== drink.id));
  };
  const handlePress = () => {
    navigation.navigate("Screen3", { drinks: cart });
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/Button 70.png")}
          style={{ width: 50, height: 30 }}
        />
        <Text style={styles.headerTitle}>Your orders</Text>
        <Image
          source={require("./assets/Image 177.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View style={styles.result}>
        <View style={styles.item}>
          <Text style={styles.text}>CAFE DELIVERY</Text>
          <Text style={styles.text}>Order #18</Text>
        </View>
        <Text style={styles.text}>$5</Text>
      </View>
      <View style={styles.result2}>
        <View style={styles.item}>
          <Text style={styles.text}>CAFE</Text>
          <Text style={styles.text}>Order #18</Text>
        </View>
        <Text style={styles.text}>{totalPrice}</Text>
      </View>
      <FlatList
        data={cart}
        renderItem={({ item }) => <Item obj={item}></Item>}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
      <TouchableOpacity style={styles.buttonToCart}>
        <Text>PAY NOW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    margin: 20,
    gap: 10,
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

  image: {
    width: 70,
    height: 70,
  },
  text: {
    color: "#fff",
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
  result: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#00BDD6",
    padding: 20,
    borderRadius: 10,
  },
  result2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#8353E2",
    padding: 20,
    borderRadius: 10,
  },
  item: {
    gap: 20,
  },
});
