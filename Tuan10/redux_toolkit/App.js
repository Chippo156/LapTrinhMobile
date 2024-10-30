import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList'; // Chúng ta sẽ tạo file này ở bước tiếp theo

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
