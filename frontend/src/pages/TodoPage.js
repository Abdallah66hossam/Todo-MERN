import React from "react";
import TodoList from "../components/TodoList";
import TodoAdd from "../components/TodoAdd";

const TodoPage = () => {
  return (
    <div className="h-100 w-full flex items-center justify-center mt-32">
      <div className="bg-white rounded shadow p-6 m-4 lg:w-[60%] w-full">
        <TodoAdd />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
