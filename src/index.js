import React from "react"; // Biblioteca de React
import ReactDOM from "react-dom/client"; // Biblioteca de React que manipula el DOM
import "./index.css"; // Estilos de tailwind
import NavBar from "./react/NavBar";
import Banner from "./react/Banner";
import Card from "./react/Card";
//import {Posts} from "./react/Posts"

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById("root"));

//Función de evento onChange
/* const handleChange = (e) => {
  console.log(e.target.value);
};
*/

root.render(
  <div className="bg-black-900">
    <NavBar />
    <Banner />
    <div className="flex flex-row items-center justify-center py-10">
      <h1 className="bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Discos
      </h1>
    </div>
    <div className="flex flex-wrap place-content-around text-white sm: gap-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
