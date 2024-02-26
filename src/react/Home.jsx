import NavBar from "./NavBar";
import Banner from "./Banner";
import Card from "./Card";
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
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
