import "./style.css";
import Home from "./pages/Home/home";
import Favoritos from "./pages/Favoritos/favoritos";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [showFavoritos, setShowFavoritos] = useState(false);

  return (
    <div>
      <div className="navbar">
        <Button variant="contained" onClick={()=> setShowFavoritos(true)}>Favoritos</Button>
        <Button variant="contained" onClick={()=> setShowFavoritos(false)}>Todos</Button>
      </div>
        {!showFavoritos && <Home />}
        {showFavoritos && <Favoritos />}

    </div>
  );
}

export default App;
