import React from "react"; // Biblioteca de React
import ReactDOM from "react-dom/client"; // Biblioteca de React que manipula el DOM
import { BrowserRouter } from "react-router-dom"; // Biblioteca de Rutas
import "./index.css"; // Estilos de tailwind
import App from "./App.js";

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
