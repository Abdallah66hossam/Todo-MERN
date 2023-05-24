import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TodoUpdateForm = () => {
  const { TodoId } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (event) => {
    event.preventDefault();
    await axios.patch(`http://localhost:8080/api/todos/${TodoId}`, {
      title,
      description,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col bg-slate-300 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
          Edit Your Task!
        </div>

        <div className="mt-10">
          <form onSubmit={handelSubmit}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="task"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Task Title:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"></div>

                <input
                  id="task"
                  type="text"
                  name="task"
                  className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Task Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="description"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Task description:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"></div>

                <input
                  id="description"
                  type="text"
                  name="description"
                  className="text-sm sm:text-base placeholder-gray-500 px-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <button className="py-3 w-full font-semibold text-lg bg-blue-800 text-white rounded-md border-2 border-blue-800 duration-300 hover:bg-transparent hover:text-blue-800">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoUpdateForm;
