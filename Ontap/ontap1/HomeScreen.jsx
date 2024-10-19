import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Screen2");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order your favorite!</Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dyoavvrjm/image/upload/v1729321045/uva04kv4gcmvbgd2ud9m.jpg",
        }}
        style={{ width: 300, height: 300 }}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={{ color: "#fff" }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 50,
  },
  text: {
    fontSize: 30,
    color: "green",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    width: 200,
    height: 50,
    alignItems: "center",
  },
});
