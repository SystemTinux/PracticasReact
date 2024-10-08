import ProductCard from './ProductCard';  // Importamos el componente ProductCard
import products from '../data/products.json';  // Importamos los datos de productos

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;