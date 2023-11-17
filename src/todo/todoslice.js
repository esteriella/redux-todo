import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
        state.todos[index].editing = false; // Set editing to false after update
      }
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].editing = true; // Set editing to true when starting to edit
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;


// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   todos: [],
// };

// export const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//       };
//       state.todos.push(todo);
//     },
//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//     updateTodo: (state, action) => {
//       const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
//       if (index !== -1) {
//         state.todos[index] = action.payload;
//       }
//     },
//   },
// });

// export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;
