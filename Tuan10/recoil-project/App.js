import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './todoList';
export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
