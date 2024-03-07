import "./index.css"; // Estilos de tailwind
import { Routes, Route } from "react-router-dom";


import Home from "./Home.jsx";
import Post from "./interface/Post.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:artista/:disco/:genero/:year/:estrellas/:imagenURL/:description" element={<Post/>} />
      </Routes>
    </div>
  );
}

export default App;
