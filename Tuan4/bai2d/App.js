import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  CheckBox,
} from "react-native";

export default function App() {
  const [password, generatePassword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const generandom = () => {
    let length = inputValue;
    if (length === "") {
      Alert.alert("Please enter the length of the password");
    }
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%?";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  const createPassword = () => {
    const password = generandom();
    generatePassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            padding: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.textHeader}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.inputGenerate}>
          <Text style={styles.text}>{password}</Text>
        </View>
        <View style={styles.passwordLength}>
          <Text style={styles.text}>Password Length</Text>
          <TextInput
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            style={{ padding: 10, backgroundColor: "white", flexGrow: 1 }}
          ></TextInput>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Include lower case letters</Text>
          <TextInput style={styles.textInput}> </TextInput>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Include upcase letters</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Include number</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>Include special symbol</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>

        <TouchableOpacity style={styles.button} onPress={createPassword}>
          <Text style={styles.text}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B98",
  },
  content: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#23235B",
  },
  textHeader: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 30,
  },
  inputGenerate: {
    backgroundColor: "#151537",
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  passwordLength: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width: 40,
  },
  button: {
    backgroundColor: "#3B3B98",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
