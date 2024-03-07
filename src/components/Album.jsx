import { Link } from "react-router-dom"; // Biblioteca para las rutas
import { FaCompactDisc } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Fav from "../components/Fav";

function Album({album}){
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
            <div>
              <div>
                <Fav />
              </div>
              <Link to={`/Post`}>
                <img
                  alt=""
                  src={album.imageUrl}
                  className="h-56 w-full rounded-md object-cover"
                />
              </Link>
            </div>

            <div className="mt-2">
              <dl>
                <div>
                  <dd className="text-sm text-gray-500">{album.artist}</dd>
                </div>

                <div>
                  <dd className="font-medium">{album.name}</dd>
                </div>
              </dl>

              <div className="mt-6 flex items-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaCompactDisc className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Género</p>
                    <p className="font-medium">{album.genre}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaRegCalendarDays className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Año</p>
                    <p className="font-medium">{album.year}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaRegStar className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Estrellas</p>
                    <p className="font-medium">{album.stars}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Album