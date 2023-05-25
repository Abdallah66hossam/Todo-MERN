import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  // getting the user from local storage
  const user = localStorage.getItem("user");
  const email = JSON.parse(user).email;
  const navigate = useNavigate();
  // logout the user
  const handelLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TodoList
          </span>
        </a>

        <div className="=w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4rounded-lg md:flex-row md:space-x-8 md:mt-0">
            <li className="text-white font-semibold text-lg">{email}</li>
            <li>
              <Link
                to={"/login"}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 bg-blue-600 border-2 border-blue-600 duration-300"
                onClick={email ? handelLogout : null}
              >
                {email ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
