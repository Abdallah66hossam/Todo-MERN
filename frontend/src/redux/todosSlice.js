import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getTodos: (state, { payload }) => {
      state.todos = payload;
    },
    addTodos: (state, { payload }) => {
      state.todos.unshift(payload);
    },
    deleteTodos: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo._id !== payload);
    },
  },
});

export const { getTodos, addTodos, deleteTodos } = todosSlice.actions;

export default todosSlice.reducer;
