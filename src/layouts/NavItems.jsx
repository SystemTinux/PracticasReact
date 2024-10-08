import { Link } from 'react-router-dom';

const NavItems = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between">
      <Link to="/" className="text-gray-600 hover:bg-gray-200 text-3xl font-bold w-full text-left px-2 rounded min-h-16 lg:cursor-pointer">Home</Link>
      <Link to="/products" className="text-gray-600 hover:bg-gray-200 text-3xl font-bold w-full text-left px-2 rounded min-h-16 lg:cursor-pointer">Products</Link>
      <Link to="/catalags" className="text-gray-600 hover:bg-gray-200 text-3xl font-bold w-full text-left px-2 rounded min-h-16 lg:cursor-pointer">Catalogs</Link>
      <Link to="/contact" className="text-gray-600 hover:bg-gray-200 text-3xl font-bold w-full text-left px-2 rounded min-h-16 lg:cursor-pointer">Contact</Link>
    </nav>
  );
};

export default NavItems;
