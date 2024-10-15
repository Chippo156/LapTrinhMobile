import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Screen2({ navigation }) {
  const stores = [
    {
      id: 1,
      name: "Kitanda Espresso & Acai-U District",
      image: require("./assets/Image (2).png"),
      time: "5-10 minutes",
      address: "1121 NE 45 St",
      status: "Accepting Orders",
    },
    {
      id: 2,
      name: "Jewel Box Cafe",
      image: require("./assets/Image (1).png"),
      time: "10-15 minutes",
      address: "1145 GE 54 St",
      status: "Tempory Unavailable",
    },
    {
      id: 3,
      name: "Javasti Cafe",
      image: require("./assets/Image.png"),
      time: "15-20 minutes",
      address: "1167 GE 54 St",
      status: "Tempory Unavailable",
    },
  ];
  const handlePress = () => {
    navigation.navigate("Screen3");
  };
  const Item = ({ obj }) => {
    return (
      <TouchableOpacity style={styles.stores} onPress={handlePress}>
        <Image source={obj.image} style={{ width: "100%", height: 130 }} />
        <View style={styles.item}>
          <View style={styles.item}>
            <Image
              source={
                obj.status === "Tempory Unavailable"
                  ? require("./assets/Image 190.png")
                  : require("./assets/Image 178.png")
              }
              style={{ width: 20, height: 20 }}
            />

            <Text
              style={
                obj.status === "Tempory Unavailable"
                  ? styles.time
                  : styles.correct
              }
            >
              {obj.status}
            </Text>
          </View>
          <View style={styles.item}>
            <Image
              source={require("./assets/Image 184.png")}
              style={{ width: 20, height: 20 }}
            />

            <Text style={styles.time}>{obj.time}</Text>
            <Image
              source={require("./assets/Image 185.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </View>
        <Text style={styles.text}>{obj.name}</Text>
        <Text>{obj.address}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/Button 70.png")}
          style={{ width: 50, height: 30 }}
        />
        <Text style={styles.headerTitle}>Shops Near Me</Text>
        <Image
          source={require("./assets/Image 177.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <FlatList
        data={stores}
        renderItem={({ item }) => <Item obj={item}></Item>}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
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
  stores: {
    gap: 10,
    padding: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  time: {
    color: "red",
    fontSize: 15,
  },
  correct: {
    color: "green",
    fontSize: 15,
  },
});
