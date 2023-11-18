// todoslice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadTodosFromLocalStorage = () => {
  try {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  } catch (error) {
    console.error('Error loading todos from local storage:', error);
    return [];
  }
};

const saveTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to local storage:', error);
  }
};

const initialState = {
  todos: loadTodosFromLocalStorage(),
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
      saveTodosToLocalStorage(state.todos);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index].text = action.payload.text;
        state.todos[index].editing = false;
        saveTodosToLocalStorage(state.todos);
      }
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].editing = true;
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
//         state.todos[index].text = action.payload.text;
//         state.todos[index].editing = false; 
//       }
//     },
//     editTodo: (state, action) => {
//       const index = state.todos.findIndex((todo) => todo.id === action.payload);
//       if (index !== -1) {
//         state.todos[index].editing = true; 
//       }
//     },
//   },
// });

// export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;
// export default todoSlice.reducer;

