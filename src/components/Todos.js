import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../todo/todoslice";

function Todos() {
  // Access the 'todos' array property from the 'todo' slice state
  const todos = useSelector(state => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const [ editText, setEditText ] = useState("")

  const handleUpdate = (todo) => {
    dispatch(updateTodo({id: todo.id, text: editText }));
    setEditText("")
  }

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            {/* Conditionally render input for editing */}
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo)}>Update</button>
              </>
            ) : (
              <>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
                <button
                  onClick={() => dispatch({ type: "editTodo", payload: todo.id })}
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Edit
                </button>
              </>
            )}
            {/* <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
            <button
              onClick={() => dispatch(updateTodo({ id: todo.id, text: "Updated Text" }))}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Update
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
