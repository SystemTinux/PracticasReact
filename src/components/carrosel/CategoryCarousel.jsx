import Slider from 'react-slick';
import categories from '../data/categories.json';

const CategoryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Mostrar 3 categorías en pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,  // Mostrar 2 categorías en pantallas medianas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  // Mostrar 1 categoría en pantallas móviles
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Categorías</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="p-2">
            <div className="border rounded-lg shadow-md">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2 text-center">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryCarousel;
