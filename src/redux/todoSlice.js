import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../components/Todo";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItem: getLocalStorage(),
  },
  reducers: {
    setAddTodo: (state, action) => {
      state.todoItem.push(action.payload);
    },
    setDoneTrue: (state, action) => {
      state.todoItem.map((item) => {
        if (item.id === action.payload.id) {
          item.done = true;
        }
        return null;
      });
    },
    setDoneFalse: (state, action) => {
      state.todoItem.map((item) => {
        if (item.id === action.payload.id) {
          item.done = false;
        }
        return null;
      });
    },
    setClearAll: (state) => {
      state.todoItem = [];
    },
    deleteItem: (state, action) => {
      state.todoItem = state.todoItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  setAddTodo,
  setDoneTrue,
  setDoneFalse,
  setClearAll,
  deleteItem,
} = todoSlice.actions;

export default todoSlice.reducer;
