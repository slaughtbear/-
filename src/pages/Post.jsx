import { useParams } from "react-router-dom";

function Post() {
  // Llama a useParams como una función para obtener los parámetros
  const { id, artista, disco, genero, year, estrellas } = useParams();

  return (
    <div>
      <p>Artista: {artista}</p>
      <p>Disco: {disco}</p>
      <p>Género: {genero}</p>
      <p>Año: {year}</p>
      <p>Estrellas: {estrellas}</p>
    </div>
  );
}

export default Post;
