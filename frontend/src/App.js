import NavBar from "./components/NavBar";
import TodoPage from "./pages/TodoPage.js";

function App() {
  return (
    <main className="bg-gray-600 w-full h-full absolute">
      <NavBar />
      <TodoPage />
    </main>
  );
}

export default App;
