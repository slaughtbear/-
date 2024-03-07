import "./index.css"; // Estilos de tailwind
import { Routes, Route } from "react-router-dom";


import Home from "./Home.jsx";
import Post from "./interface/Post.jsx"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Post/:artista/:disco/:genero/:year/:estrellas" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
