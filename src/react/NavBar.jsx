function NavBar() {
  return (
    <nav className="bg-slate-950 text-purple-300">
      <div className="max-w-6x1 mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="youtube.com" className="flex items-center py-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 mr-2 hover:text-white hover:cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hover:text-white">MusicBox</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="x" className="py-5 px-3 hover:text-white">
              Reseñas
            </a>
            <a href="x" className="py-5 px-3 hover:text-white">
              Lanzamientos
            </a>
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
        <a href="x" className="block py-2 text-sm hover:text-white">
          Reseñas
        </a>
        <a href="x" className="block py-2 text-sm hover:text-white">
          Lanzamientos
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
