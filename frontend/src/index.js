import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import TodoUpdatePage from "./pages/TodoUpdatePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/editTodo/:TodoId",
    element: <TodoUpdatePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
