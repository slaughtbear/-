import NavBar from "./NavBar";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="bg-black-900">
      <NavBar />
      <Banner />
      <div className="flex flex-row items-center justify-center py-10">
        <h1 className="bg-gradient-to-r from-teal-200 via-teal-400 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Discos
        </h1>
      </div>
      <div className="flex flex-wrap place-content-around text-white sm: gap-6">
        <Card id="1" artista="Metallica" disco="Ride The Lightning" genero="Metal" year="1984" estrellas="4"/>
        <Card id="2" artista="Nirvana" disco="Nevermind" genero="Rock" year="1991" estrellas="4"/>
        <Card id="3" artista="System Of A Down" disco="Toxicity" genero="Metal" year="2001" estrellas="4"/>
        <Card id="4" artista="Tool" disco="10,000 Days" genero="Metal" year="2005" estrellas="3"/>
      </div>
      <Footer/>
      <Outlet />
    </div>
  );
}

export default Home;
