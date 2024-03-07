import NavBar from "./interface/NavBar";
import Banner from "./interface/Banner";
import Card from "./interface/Card";
import Footer from "./interface/Footer"
import { Outlet } from "react-router-dom";
import AlbumList from "./components/AlbumList";

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
        <AlbumList/>
      <Footer/>
      <Outlet />
    </div>
  );
}

export default Home;
