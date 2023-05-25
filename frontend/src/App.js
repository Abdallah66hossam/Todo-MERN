import { useEffect } from "react";
import NavBar from "./components/NavBar";
import TodoPage from "./pages/TodoPage.js";
import { useNavigate } from "react-router";
import LoginPage from "./pages/LoginPage";

function App() {
  const user = localStorage.getItem("user");
  const email = JSON.parse(user).email;
  const navigate = useNavigate();
  useEffect(() => {
    if (email === null) {
      navigate("/login");
    }
  }, [email, navigate]);
  return (
    <main className="bg-gray-600 w-full h-full absolute">
      {email ? (
        <>
          <NavBar />
          <TodoPage />
        </>
      ) : (
        <LoginPage />
      )}
    </main>
  );
}

export default App;