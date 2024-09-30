import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
const data = [
  {
    id: 1,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/dauchuyendoi 1.png"),
  },
  {
    id: 2,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/dauchuyendoipsps2 1.png"),
  },
  {
    id: 3,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/giacchuyen 1.png"),
  },
  {
    id: 4,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/daynguon 1.png"),
  },
  {
    id: 5,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/carbusbtops2 1.png"),
  },
  {
    id: 6,
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: 69900,
    discount: 39,
    image: require("./assets/daucam 1.png"),
  },
];

const Item = ({ obj, image }) => (
  <View style={styles.item}>
    <Image source={image} style={{ width: "100%", height: 120 }} />
    <Text style={styles.title}>{obj.name}</Text>
    <View>
      <Image
        source={require("./assets/Group 5.png")}
        style={{ width: 156, height: 20 }}
      />
    </View>
    <View style={{ justifyContent: "flex-start", flexDirection: "row" }}>
      <Text style={{ fontWeight: "700" }}>
        {" "}
        {new Intl.NumberFormat("vn-VN").format(obj.price)}đ
      </Text>
      <Text> -{obj.discount}%</Text>
    </View>
  </View>
);

function Screen4a() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View>
          <Image
            source={require("./assets/ant-design_arrow-left-outlined.png")}
            style={styles.image}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            backgroundColor: "#fff",
            borderRadius: 5,
            width: 200,
            paddingHorizontal: 5,
          }}
        >
          <Image
            source={require("./assets/whh_magnifier.png")}
            style={styles.image}
          />
          <TextInput style={styles.input} placeholder="Dây cáp usb"></TextInput>
        </View>
        <View>
          <Image
            source={require("./assets/bi_cart-check.png")}
            style={styles.image}
          />
        </View>
        <Image source={require("./assets/Group 2.png")} />
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item obj={item} image={item.image} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2} // Ensure numColumns is set and does not change dynamically
          key={2} // Ensure key is set and does not change dynamically
        />
      </SafeAreaView>
      <SafeAreaView style={[styles.header, styles.footer]}>
        <View>
          <Image
            source={require("./assets/Group 10.png")}
            style={styles.image}
          />
        </View>
        <Image
          source={require("./assets/Vector (Stroke).png")}
          style={styles.image}
        />

        <View>
          <Image
            source={require("./assets/Vector 1 (Stroke).png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
export default Screen4a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "40%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  item: {
    width: "45%",
    marginVertical: 8,
    gap: 10,
    borderWidth: 1,

    margin: 10,
    borderRadius: 5,
    borderColor: "#000",
    padding: 5,
  },
  title: {
    fontSize: 12,
  },
  chat: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
  },
  image: {
    width: 25,
    height: 25,
  },
  header: {
    padding: 10,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
    height: 100,
    width: "100%",
  },
  footer: {
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
    height: 100,
    width: "100%",
  },
  provider: {
    color: "red",
  },
});
