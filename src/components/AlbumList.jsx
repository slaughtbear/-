import React, { useEffect, useState } from "react";
import Card from "../interface/Card";

function AlbumList() {
  const [albums, setAlbum] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data);
      });
  }, []);

  return (
    <div className="flex flex-wrap place-content-around text-white sm: gap-6">
      <Card albums={albums} />
    </div>
  );
}

export default AlbumList;
