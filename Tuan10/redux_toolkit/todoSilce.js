import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66fc8f39c3a184a84d174f4d.mockapi.io/Item';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10);
});
export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
});
export const removeTodo = createAsyncThunk('todos/removeTodo', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, {
    ...todo,
    completed: !todo.completed,
  });
  return response.data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        return state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(todo => todo.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const selectTodos = (state) => state.todos.items;
export const selectTodosStatus = (state) => state.todos.status;

export default todoSlice.reducer;
