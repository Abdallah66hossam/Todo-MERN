import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todosSlice";

const GetTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const user = localStorage.getItem("user");

  const token = JSON.parse(user).token;
  useEffect(() => {
    if(!user) return;
    const fetchTodos = async () => {
      await axios
        .get("https://todo-list-uzyg.onrender.com/api/todos", {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => {
          dispatch(getTodos(response.data));
        });
    };
    fetchTodos();
  }, [dispatch])
  return todos;
};

export default GetTodos;
