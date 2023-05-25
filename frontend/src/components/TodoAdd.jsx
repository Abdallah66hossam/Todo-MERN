import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/todosSlice";

const TodoAdd = () => {
  const dispatch = useDispatch();
  const [title, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const user = localStorage.getItem("user");
  const token = JSON.parse(user).token;
  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = await axios.post(
      "http://localhost:8080/api/todos",
      {
        title,
        description,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }
    );
    dispatch(addTodos(newTodo.data));
    setTodo("");
    setDescription("");
  };
  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest font-bold text-xl">Todo List</h1>
      <form className="flex mt-4" onSubmit={addTodo}>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add todo title"
          value={title}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="flex-no-shrink p-2 px-6 border-2 rounded border-blue-500 text-white bg-blue-500 duration-100">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
