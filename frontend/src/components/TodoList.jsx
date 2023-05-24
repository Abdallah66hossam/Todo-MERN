import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { CgRemoveR } from "react-icons/cg";
import GetTodos from "../hooks/getTodos";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../redux/todosSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = GetTodos();
  return (
    <>
      {todos?.map((todo) => {
        return (
          <div key={todo._id}>
            <div className="flex mb-4 items-center justify-between">
              <div>
                <p className="w-full text-grey-darkest text-lg font-semibold">
                  {todo.title}
                </p>
                <p className="w-full text-gray-500 text-sm">
                  {todo.description}
                </p>
              </div>
              <div>
                <Link to={`/editTodo/${todo._id}`}>
                  <button className="flex-no-shrink p-2 ml-6 border-2 rounded bg-green-500 border-green-500 duration-100 text-white">
                    <FaRegEdit />
                  </button>
                </Link>
                <button
                  className="flex-no-shrink p-2 ml-6 border-2 rounded bg-red-500 border-red-500 duration-100 text-white"
                  onClick={async () => {
                    await axios.delete(
                      `http://localhost:8080/api/todos/${todo._id}`
                    );
                    dispatch(deleteTodos(todo._id));
                  }}
                >
                  <CgRemoveR />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
