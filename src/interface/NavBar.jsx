import { FaToriiGate } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-black-800 text-teal-300">
      <div className="max-w-6x1 mx-auto px-4 py-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center py-2 px-2">
            <Link to="/"><FaToriiGate className="w-6 h-6" /></Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <div className="py-5 px-3 hover:text-teal-100">
              
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-menu hidden">
        <a href="x" className="block py-2 text-sm hover:text-teal-100">
          Reseñas
        </a>
        <a href="x" className="block py-2 text-sm hover:text-teal-100">
          Lanzamientos
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
