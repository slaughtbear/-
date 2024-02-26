import { Link } from "react-router-dom"; // Biblioteca para las rutas

import { FaCompactDisc } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Card() {
  return (
      <Link to="/Disco">
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt=""
            src="https://m.media-amazon.com/images/I/6113DHPqk7L._UF1000,1000_QL80_.jpg"
            className="h-56 w-full rounded-md object-cover"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dd className="text-sm text-gray-500">Artista</dd>
              </div>

              <div>
                <dd className="font-medium">Album</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <FaCompactDisc className="text-teal-300" />
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Género</p>
                  <p className="font-medium">Metal</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <FaRegCalendarDays className="text-teal-300" />
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Año</p>
                  <p className="font-medium">1984</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <FaRegStar className="text-teal-300" />
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Estrellas</p>
                  <p className="font-medium">4/5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
}

export default Card;
