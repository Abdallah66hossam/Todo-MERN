import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/todosSlice";

const GetTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTodos = async () => {
      await axios.get("http://localhost:8080/api/todos").then((response) => {
        dispatch(getTodos(response.data));
        console.log(response.data);
      });
    };
    fetchTodos();
  }, [dispatch]);
  return todos;
};

export default GetTodos;
