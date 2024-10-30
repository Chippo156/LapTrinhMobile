import axios from 'axios';

const API_URL = 'https://66fc8f39c3a184a84d174f4d.mockapi.io/Item';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
};

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const removeTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

export const toggleTodo = async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return response.data;
};
