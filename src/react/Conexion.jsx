import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArtistInfo = () => {
  const [artistData, setArtistData] = useState(null);
  const artistId = 'ARTIST_ID'; // Aquí reemplazaría el ID del artista al que deseo acceder
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Aquí reemplazaría mi Token de acceso que Spotify brinda

  useEffect(() => {
    const apiUrl = `https://api.spotify.com/v1/artists/${artistId}`; // Ejemplo de cómo usaría la ruta

    axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        setArtistData(response.data);
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
      });
  }, []); // La dependencia vacía asegura que este efecto solo se ejecute una vez al montar el componente

  // Consideraré reestructurar mis componentes y reemplazar aquí el renderizado de la card
  // Al igual que añadir más propiedades que no sean sólo nombre y generos, si no año de publicación, nombre del disco, etc
  // Esto lo haré cuando obtenga el Token de acceso de la API y realice algunas configuraciones al código en general
  return (
    <div>
      {artistData && (
        <div>
          <h1>{artistData.name}</h1>
          <p>{artistData.genres.join(', ')}</p>
          {/* Otros detalles del artista */}
        </div>
      )}
    </div>
  );
};

export default ArtistInfo;
