import React from "react"; // Biblioteca de React
import ReactDOM from "react-dom/client"; // Biblioteca de React que manipula el DOM
import "./index.css"; // Estilos de tailwind

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById("root"));

function Componente() {
  function add(x, y) {
    return x + y;
  }

  return <h1>{add(660, 6)}</h1>;
}

root.render(
  <>
    <Componente />
    <Componente />
    <Componente />
    <Componente />
  </>
);
