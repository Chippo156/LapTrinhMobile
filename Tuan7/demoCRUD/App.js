import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";

const Item = ({ obj }) => {
  return (
    <View>
      <Text>{obj.id}</Text>
      <Text>{obj.name}</Text>
      <Text>{obj.avatar}</Text>
    </View>
  );
};
export default function App() {
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John",
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
      }),
    };

    try {
      const response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/users",
        option
      );
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error(error);
    }
    getUsers();
  };

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://66fc8f39c3a184a84d174f4d.mockapi.io/users"
      );
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const updateUser = async (id) => {
    const option = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "John",
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
      }),
    };

    try {
      const response = await fetch(
        `https://66fc8f39c3a184a84d174f4d.mockapi.io/users/${id}`,
        option
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
    getUsers();
  };
  const deleteUser = async (id) => {
    const option = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `https://66fc8f39c3a184a84d174f4d.mockapi.io/users/${id}`,
        option
      );
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
    getUsers;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.input} onPress={addUser}>
          <Text style={{ color: "#fff" }}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={() => updateUser(23)}>
          <Text style={{ color: "#fff" }}>UPDATE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={() => deleteUser(22)}>
          <Text style={{ color: "#fff" }}>DELETE</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Item obj={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "blue",
    padding: 10,
  },
  text: {
    color: "red",
  },
});
