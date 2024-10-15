import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

export default function Srceen1({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Screen2");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Cafe world</Text>
      <View style={{ gap: 40 }}>
        <Image
          source={require("../lab7c/assets/Image.png")}
          style={{ width: 300, height: 100 }}
        />
        <Image
          source={require("../lab7c/assets/Image (1).png")}
          style={{ width: 300, height: 100 }}
        />
        <Image
          source={require("../lab7c/assets/Image (2).png")}
          style={{ width: 300, height: 100 }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    gap: 100,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#00BDD6",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
