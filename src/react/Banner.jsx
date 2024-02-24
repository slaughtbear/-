function Banner() {
  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            H I K A R I 光
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Explorando el arte de la música, un disco a la vez.
            <br></br>Lee nuestras reseñas para desentrañar las historias detrás
            de tú música favorita y descubrir nuevos sonidos que transformarán
            tu experiencia auditiva.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="y"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="y"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
