import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todo/todoslice';

function AddTodo() {
 const [input, setInput] = useState('');
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
   e.preventDefault();

   dispatch(addTodo( input ));
   setInput('');
 };

 return (
   <form onSubmit={handleSubmit} className="mt-10 p-4">
    <h2 className='text-center text-lg mb-4 font-extrabold'>Redux TodoList</h2>
     <input
       type="text"
       value={input}
       onChange={(e) => setInput(e.target.value)}
       className="border rounded p-2 w-[30rem]"
       placeholder="Add todo"
     />
     <button type="submit" className="bg-blue-500 text-white p-2 ml-2 w-[5rem] rounded">
       Add
     </button>
   </form>
 );
}

export default AddTodo;
