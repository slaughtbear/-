import { FaToriiGate } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 mt-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <FaToriiGate className="w-6 h-6 text-teal-300"/>
          </div>

          <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
