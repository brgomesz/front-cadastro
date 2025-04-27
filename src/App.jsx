import "./style.css";
import Home from "./pages/Home/home";

function App() {
  return (
    <div>
      <div className="navbar">
        <button>Favoritos</button>
        <button>Todos</button>
      </div>
      <Home />
    </div>
  );
}

export default App;
