import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoListState } from './todoAtom';
import { fetchTodos, addTodo, removeTodo, toggleTodo } from './todoAPI';
const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    };

    getTodos();
  }, [setTodos]);

  const handleAddTodo = async () => {
    if (inputValue.trim()) {
      const newTodo = { name: inputValue, completed: false };
      const addedTodo = await addTodo(newTodo);
      setTodos([...todos, addedTodo]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = async (id) => {
    await removeTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = async (todo) => {
    const updatedTodo = await toggleTodo(todo);
    setTodos(todos.map(t => (t.id === updatedTodo.id ? updatedTodo : t)));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Add a new todo"
      />
      <Button title="Create" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => handleToggleTodo(item)}>
              <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                {item.title}
              </Text>
            </TouchableOpacity>
            <Button title="Edit" onPress={() => handleRemoveTodo(item.id)} />
            <Button title="Delete" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default TodoList;
