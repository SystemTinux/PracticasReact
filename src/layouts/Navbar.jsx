import { useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/images/logo'; // Asegúrate de que el path del Logo sea correcto
import HeartIcon from '../assets/images/heartIcon'; // Asegúrate de que el path de HeartIcon sea correcto
import CartIcon from '../assets/images/cartIcon'; // Asegúrate de que el path de CartIcon sea correcto
import NavItems from './NavItems'; // Asegúrate de que el path de NavItems sea correcto
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; // Dependencias de los iconos de redes sociales

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <header className="flex flex-row items-center justify-between w-full p-2 lg:flex-col lg:items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Contenedor para el logo */}
          <div className="w-12 h-12 lg:w-24 lg:h-24">
            <Logo width="100%" height="100%" />
          </div>
        </div>

        {/* Menú */}
        <div className="block space-x-2 lg:hidden">
          <button
            className="items-center flex justify-center p-2 text-slate-700 border-slate-500"
            onClick={handleClick}
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6666 3.33331L3.33325 12.6666M3.33325 3.33331L12.6666 12.6666"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Carro y favoritos */}
        <div className="flex justify-between space-x-2 lg:w-full">
          <HeartIcon width={"24"} height={"24"} className="lg:justify-center" />
          <CartIcon width={"24"} height={"24"} className="lg:justify-center" />
        </div>

        {/* Navigation Items */}
        {isOpen ? (
          <div className="z-[1] bg-gray-200 fixed top-[54px] left-0 w-full items-start overflow-auto gap-1 rounded-md lg:hidden">
            <NavItems />
          </div>
        ) : null}
      </header>

      {/* Contenido Principal */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          {/* Logo en el Footer */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 lg:w-24 lg:h-24">
              <Logo width="100%" height="100%" />
            </div>
            <span className="text-gray-500 font-mono font-bold">Clothing</span>
          </div>

          <hr className="my-6 border-gray-400" />
          
          {/* Redes Sociales */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://es-es.facebook.com/login/?next=https%3A%2F%2Fes-es.facebook.com%2F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Clothing. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
