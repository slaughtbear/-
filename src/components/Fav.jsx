import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

function Fav() {
  const [fav, setFav] = useState(false);

  return (
    <button onClick={() => setFav(!fav)}>
      {fav ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </button>
  );
}

export default Fav;
