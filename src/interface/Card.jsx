import Album from "../components/Album";

function Card({albums}) {
  return (
    albums.length > 0 &&
      albums.map((album) => {
        return (
          <Album key={album.id} album={album}/>
        );
      })
  );
}

export default Card;
