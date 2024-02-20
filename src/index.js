import React from "react"; // Biblioteca de React
import ReactDOM from "react-dom/client"; // Biblioteca de React que manipula el DOM
import "./index.css"; // Estilos de tailwind
import NabVar from "./react/NavBar";
import Boton from "./react/Boton";
// import Ejemplo from "./react/Ejemplo"

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Boton/>
    <Boton/>
    <Boton usuario="Iván"/>
  </>
);
