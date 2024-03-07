import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { FaCompactDisc } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function Post() {

  const { artista, disco, genero, year, estrellas, imagenURL, description } = useParams();

  return (
    <div className="bg-black-900">
      <NavBar />
      <section className="text-teal-300">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={decodeURIComponent(imagenURL)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h1 className="font-bold">{decodeURIComponent(artista)}</h1>
              <h2 className="text-3xl font-bold mb-2 sm:text-4xl">{decodeURIComponent(disco)}</h2>

              <p className="text-gray-600 mb-1">
              {decodeURIComponent(description)}
              </p>

              <div>
                <div className="mr-5 sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaCompactDisc className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Género</p>
                    <p className="font-medium">{decodeURIComponent(genero)}</p>
                  </div>
                </div>

                <div className="mr-5 sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaRegCalendarDays className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Año</p>
                    <p className="font-medium">{decodeURIComponent(year)}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <FaRegStar className="text-teal-300" />
                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Estrellas</p>
                    <p className="font-medium">{decodeURIComponent(estrellas)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Post;
