import React from 'react' // Biblioteca de React
import ReactDOM from 'react-dom/client' // Biblioteca de React que manipula el DOM
import './index.css'; // Estilos de tailwind

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById('root'))

function Componente(){
    return <h1 className='text-blue-500'>Hola Mundo</h1>
}

root.render(
    <Componente/>
)