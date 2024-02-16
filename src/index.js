import React from 'react' // Biblioteca de React
import ReactDOM from 'react-dom/client' // Biblioteca de React que manipula el DOM

// Elemento raíz para inicializar una app en React
const root = ReactDOM.createRoot(document.getElementById('root'))

function Componente(){
    return <h1>Hola Mundo</h1>
}

root.render(
    <Componente/>
)