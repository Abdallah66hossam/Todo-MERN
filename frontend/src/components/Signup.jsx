import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://todo-list-uzyg.onrender.com/api/auth/signup`,
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // checking if return value is error
        const error = localStorage.getItem("user");
        if (JSON.parse(error).error) {
          setError(JSON.parse(error).error);
          return;
        }

        setEmail("");
        setPassword("");
        // if there is no error got to home page
        navigate("/");
      }
    } catch (err) {
      setError("error while login in user! type a valid email & password");
    }
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="signin_image"
        />
      </div>
      <form onSubmit={handelSubmit} className="md:w-1/3 max-w-sm">
        <h1 className="mr-1 font-bold text-2xl">Sign up</h1>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm"></div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Register
          </button>
        </div>
        {error && (
          <div className="flex p-4 mb-4 text-red-500 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mt-4">
            <div className="ml-3 text-sm font-medium">{error}</div>
          </div>
        )}
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?
          <Link
            to={"/login"}
            className="text-red-600 ml-1 hover:underline hover:underline-offset-4"
          >
            Login
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
