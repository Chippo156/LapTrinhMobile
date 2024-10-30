import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [], // Giá trị mặc định là một mảng rỗng
});