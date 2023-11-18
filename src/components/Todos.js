import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, editTodo } from "../todo/todoslice";

function Todos() {
  // Access the 'todos' array property from the 'todo' slice state
  const todos = useSelector(state => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const [editText, setEditText] = useState(""); // State to handle edited text

  const handleEdit = (todo) => {
    //set the initial text of the todo to the editText state
    setEditText(todo.text);
    //Dispatch editTodo action to set editing to true for the todo
    dispatch(editTodo(todo.id));
  };

  const handleUpdate = (todo) => {
    // Dispatch updateTodo with the edited text
    dispatch(updateTodo({ id: todo.id, text: editText }));
    // Clear the editText state after updating
    setEditText("");
  };

  return (
    <>
      <h4 className="text-base font-bold mb-4">Todos</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex flex-row gap-4 items-center justify-center mb-5">
            <span className="">{todo.text}</span>
            {/* Conditionally render input for editing */}
            {todo.editing ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border rounded p-2"
                  placeholder="Edit Text"
                />
                <button onClick={() => handleUpdate(todo)} className="bg-red-500 text-white p-2 rounded">Update</button>
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
                  onClick={() => handleEdit(todo)}
                  className="bg-blue-500 text-white p-2 w-[5rem] rounded"
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

