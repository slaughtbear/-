import "./index.css"; // Estilos de tailwind
import { Routes, Route } from "react-router-dom";


import Home from "./react/Home.jsx";
import Disco from "./pages/Disco.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Disco" element={<Disco/>}/>
      </Routes>
    </div>
  );
}

export default App;
