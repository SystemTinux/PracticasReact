
import products from '../data/products.json';

const ProductCard = ({ products }) => {
  return (
    <div className="flex items-start p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={products.image} alt={products.title} className="w-32 h-32 object-cover" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{products.description}</p>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-gray-800 font-bold">${products.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Añadir al carrito
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
