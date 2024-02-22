import React from "react"; // Biblioteca de React
import ReactDOM from "react-dom/client"; // Biblioteca de React que manipula el DOM
import "./index.css"; // Estilos de tailwind
import Boton from "./react/Boton";
import NavBar from "./react/NavBar";
import {Posts} from "./react/Posts"

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById("root"));

//Función de evento onChange
/* const handleChange = (e) => {
  console.log(e.target.value);
};
*/

root.render(
  <>
    <NavBar />
    <Posts/>
  </>
);
