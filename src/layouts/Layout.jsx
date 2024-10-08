import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Íconos de corazón y carrito

const Layout = ({ children, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full p-4 flex items-center justify-between lg:justify-between lg:flex-row bg-gray-200">
        {/* Menú hamburguesa solo visible en móviles */}
        <div className="lg:hidden">
          <button
            className="p-2 border rounded text-slate-700 border-slate-500"
            onClick={handleClick}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Logo centrado */}
        <div className="flex items-center justify-center space-x-2">
          <img
            src="/path/to/logo.svg" // Cambia a la ruta correcta de tu logo
            alt="Ecommerce Logo"
            className="w-16 h-16 lg:w-24 lg:h-24" // Tamaño ajustado del logo
          />
          <span className="text-black font-mono font-bold text-2xl lg:text-3xl">Ecommerce</span> {/* Texto del logo */}
        </div>

        {/* Corazón y carrito */}
        <div className="flex items-center space-x-4">
          <FaHeart className="text-gray-700 text-2xl lg:text-3xl" />
          <FaShoppingCart className="text-gray-700 text-2xl lg:text-3xl" />
        </div>

        {/* Menú horizontal visible en pantallas grandes */}
        <nav className="hidden lg:flex space-x-8 text-xl mt-4 lg:mt-0">
          <a href="/home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/products" className="text-gray-700 hover:text-blue-500">Products</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </nav>

        {/* Menú desplegable visible solo en móviles */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="/home" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="/products" className="text-gray-700 hover:text-blue-500">Products</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className={`flex-grow ${isHome ? 'p-8' : 'p-4'}`}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <img
              src="/path/to/logo.svg"
              alt="Ecommerce Logo"
              className="w-10 h-10 lg:w-16 lg:h-16 text-white"
            />
            <span className="text-white font-mono font-bold text-lg lg:text-xl">Ecommerce</span>

            {/* Menú del footer */}
            <div className="grid grid-cols-1 p-4 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold">Products</h2>
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold">Services</h2>
              </div>
              <div className="flex flex-col space-y-1">
                <h2 className="font-bold">Contact Information</h2>
              </div>
            </div>

            <hr className="my-6 border-gray-400" />

            {/* Redes sociales */}
            <div className="flex justify-center space-x-6 mb-4">
              {/* Redes sociales */}
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400">
              &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool.isRequired,
};

export default Layout;
