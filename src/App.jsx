import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';  // Página Home
import ProductList from './components/product/ProductList';  // Lista de productos
import Catalags from './pages/Catalags';  // Página de catálogos
import Contact from './pages/Contact';  // Página de contacto

const App = () => {
  return (
    <Routes>
      {/* Ruta para el Home */}
      <Route
        path="/"
        element={
          <Layout isHome={true}>
            <Home />
          </Layout>
        }
      />
      {/* Otras rutas con el mismo layout, pero sin ser Home */}
      <Route
        path="/products"
        element={
          <Layout isHome={false}>
            <ProductList />
          </Layout>
        }
      />
      <Route
        path="/catalags"
        element={
          <Layout isHome={false}>
            <Catalags />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout isHome={false}>
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
