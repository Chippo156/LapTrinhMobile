import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

function productDetails({ route, navigation }) {
  const product = route.params.productDetails;
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const descreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={`../assets/${product.img}`}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Text style={styles.text}>{product.title}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>{product.desc}</Text>
          <Text style={styles.text}> {product.price}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            source={require("./assets/Vector.png")}
            style={{ width: 20, height: 20 }}
          />
          <View>
            <Text style={styles.text}>Delivery on 30 min</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => descreaseQuantity()}>
            <Image
              source={require("./assets/Group 15.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{quantity}</Text>

          <TouchableOpacity onPress={() => increaseQuantity()}>
            <Image
              source={require("./assets/Group 15.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Restaurants info</Text>
        <Text>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>
      <TouchableOpacity style={styles.addToCart}>
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen1({ navigation }) {
  const getProducts = async () => {
    try {
      let response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/bake"
      );
      let json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error(error);
    }
  };
  const createProduct = async () => {
    try {
      let response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/bake",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(i),
        }
      );
      let json = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigationScreen2 = (product) => {
    navigation.navigate("Screen2", { productDetails: product });
  };
  const [products, setProducts] = useState([]);
  const [valueFilter, setValueFilter] = useState("Donut");

  const filterProduct = async () => {
    try {
      let response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/bake"
      );
      let json = await response.json();
      const filter = json.filter((item) => item.title.includes(valueFilter));
      setProducts(filter);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    filterProduct();
  }, [valueFilter]);
  const [inputValue, setInputValue] = useState("");
  const filterData = products.filter((item) => {
    if (inputValue === "" && valueFilter === "Donut") {
      return item;
    } else {
      return item.title.toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  const Item = ({ obj }) => {
    return (
      <View style={styles.product}>
        <Image
          source={`../assets/${obj.img}`}
          style={{ width: 100, height: 100 }}
        />
        <View style={{ flexDirection: "column", gap: 10 }}>
          <Text style={styles.text}>{obj.title}</Text>
          <Text>{obj.desc}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>{obj.price}</Text>
            <TouchableOpacity onPress={() => navigationScreen2(obj)}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./assets/plus_button.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const [selectedFilter, setSelectedFilter] = useState("Donut");
  const menuItems = [
    { label: "Donut", value: "Donut" },
    { label: "Pink Donut", value: "Pink Donut" },
    { label: "Floating", value: "Floating" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome,Jata</Text>
        <Text style={styles.text}>Choice you Best food</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          borderColor: "#000",
          padding: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={{ border: "none" }}
          placeholder="Search food"
          value={inputValue}
          onChangeText={setInputValue}
        ></TextInput>
        <Image
          style={{ width: 20, height: 20 }}
          source={require("./assets/Group 18.png")}
        />
      </View>
      <View style={styles.nav}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[
              styles.menuItem,
              selectedFilter === item.value && styles.selectedMenuItem,
            ]}
            onPress={() => {
              setSelectedFilter(item.value);
              setValueFilter(item.value);
            }}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filterData}
        renderItem={({ item }) => <Item obj={item}></Item>}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen2" component={productDetails} />
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    padding: 20,
    marginVertical: 50,
    marginTop: 20,
    flexDirection: "column",

    gap: 30,
  },
  nav: {
    flexDirection: "row",
    padding: 10,
  },

  menuItem: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  selectedMenuItem: {
    backgroundColor: "#F1B000",
  },
  product: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,

    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    backgroundColor: "#F4DDDD",
  },
  addToCart: {
    backgroundColor: "#F1B000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
