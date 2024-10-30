import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoSilce';
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
