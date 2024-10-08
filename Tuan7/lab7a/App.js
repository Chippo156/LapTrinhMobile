import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

import { useCallback, useEffect, useState } from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Screen2({ route, navigation }) {
  const [inputValue, setInputValue] = useState("");

  const { refresh } = route.params || {};
  const [course, setData] = useState([]);
  const getCourse = async () => {
    try {
      const response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/cource"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };
  const navigationScreen3 = () => {
    navigation.navigate("Screen3");
  };
  const backScreen1 = () => {
    navigation.navigate("Screen1");
  };

  useFocusEffect(
    useCallback(() => {
      getCourse();
    }, [])
  );
  useEffect(() => {
    getCourse();
  }, []);

  const filterData = course.filter((item) => {
    if (inputValue === "") {
      return item;
    } else {
      return item.name.toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  const Item = ({ obj }) => {
    return (
      <View style={styles.data}>
        <Image
          source={require("./assets/Frame (3).png")}
          style={{ width: 20, height: 20 }}
        />
        <Text>{obj.name}</Text>
        <TouchableOpacity>
          <Image
            source={require("./assets/Frame (4).png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.src1Main}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <TouchableOpacity onPress={backScreen1}>
          <Image
            source={require("./assets/Icon Button 11.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/Frame (1).png")}
            style={{ width: 50, height: 50 }}
          />
          <View>
            <Text>MANAGE YOUR TASK</Text>
            <Text style={{ color: "#8353E2" }}>Welcome to our app</Text>
          </View>
        </View>
      </View>
      <View style={styles.input}>
        <Image
          source={require("./assets/Frame (2).png")}
          style={{ width: 20, height: 30 }}
        />
        <TextInput
          style={{
            width: "100%",
            height: 40,
          }}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Search"
        />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={filterData}
        renderItem={({ item }) => <Item obj={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={styles.add} onPress={navigationScreen3}>
          <Text style={{ fontSize: 80, color: "#fff" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Screen1({ route, navigation }) {
  const navigationScreen2 = () => {
    navigation.navigate("Screen2");
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./assets/Image 95.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.text}>MANAGE YOUR TASK</Text>
      </View>
      <View style={styles.input}>
        <Image
          source={require("./assets/Frame.png")}
          style={{ width: 20, height: 30 }}
        />
        <TextInput
          style={{
            width: "80%",
            height: 40,
          }}
          placeholder="Enter your task"
        />
      </View>
      <TouchableOpacity style={styles.submit} onPress={navigationScreen2}>
        <Text style={{ color: "#fff" }}>GET STARTED </Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Screen3({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const addCourse = async (inputValue) => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputValue,
      }),
    };
    try {
      const response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/cource",
        option
      );
      const data = await response.json();
      backScreen2();
    } catch (error) {
      console.error(error);
    }
  };

  const backScreen2 = () => {
    navigation.navigate("Screen2", { refresh: true });
  };
  return (
    <View style={[styles.src1Main, { gap: 90 }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("./assets/Frame (1).png")}
            style={{ width: 50, height: 50 }}
          />
          <View>
            <Text>MANAGE YOUR TASK</Text>
            <Text style={{ color: "#8353E2" }}>Welcome to our app</Text>
          </View>
        </View>
        <TouchableOpacity onPress={backScreen2}>
          <Image
            source={require("./assets/Icon Button 11.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "700", fontSize: 20 }}>ADD YOUR JOB</Text>
      </View>
      <View style={styles.input}>
        <Image
          source={require("./assets/Frame (2).png")}
          style={{ width: 20, height: 30 }}
        />
        <TextInput
          style={{
            width: "100%",
            height: 40,
          }}
          placeholder="Input your job"
          value={inputValue}
          onChangeText={setInputValue}
        />
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => addCourse(inputValue)}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}>FINISH</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./assets/Image 95.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    gap: 100,
    justifyContent: "center",
    padding: 20,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#DEE1E678",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    height: 50,
    borderWidth: 1,
    gap: 10,
    borderRadius: 10,
  },
  text: {
    color: "#8353E2",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 100,
  },
  submit: {
    backgroundColor: "#00BDD6",
    width: "50%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  src1Main: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 30,

    flexDirection: "column",
    justifyContent: "center",
  },
  add: {
    borderRadius: 50,
    backgroundColor: "#8353E2",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
