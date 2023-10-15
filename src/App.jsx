import NavbarApp from "./components/NavbarApp";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Characters from "./views/Characters";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Pokemones/:name" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
