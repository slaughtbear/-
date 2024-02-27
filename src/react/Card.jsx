import { Link } from "react-router-dom"; // Biblioteca para las rutas

import { FaCompactDisc } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Fav from "./Fav";

Card.defaultProps = {
  artista: "Artista",
  disco: "Disco",
  genero: "Null",
  year: "Null",
  estrellas: "0/5",
};

function Card({ artista, disco, genero, year, estrellas, imagenURL }) {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
      <div>
        <div>
          <Fav />
        </div>
        <Link to={`/Post/${artista}/${disco}/${genero}/${year}/${estrellas}`}>
          <img
            alt=""
            src={imagenURL}
            className="h-56 w-full rounded-md object-cover"
          />
        </Link>
      </div>

      <div className="mt-2">
        <dl>
          <div>
            <dd className="text-sm text-gray-500">{artista}</dd>
          </div>

          <div>
            <dd className="font-medium">{disco}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaCompactDisc className="text-teal-300" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Género</p>
              <p className="font-medium">{genero}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaRegCalendarDays className="text-teal-300" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Año</p>
              <p className="font-medium">{year}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaRegStar className="text-teal-300" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Estrellas</p>
              <p className="font-medium">{estrellas}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
