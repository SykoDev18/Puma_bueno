import React from 'react';
import Slider from 'react-slick';
import './Anuncio.css';

// Importar estilos de Slick Carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importa tus imágenes o utiliza URLs
import image1 from '../../assets/Anuncio/jersey.jpg';
import image2 from '../../assets/Anuncio/jersey2.jpg';
import image3 from '../../assets/Anuncio/jersey3.jpg';

const Anuncio = () => {
  const settings = {
    dots: true,             // Muestra los puntos de navegación
    infinite: true,         // Ciclo infinito
    speed: 500,             // Velocidad de transición
    slidesToShow: 1,        // Número de slides a mostrar
    slidesToScroll: 1,      // Número de slides a desplazar
    autoplay: true,         // Autoplay activado
    autoplaySpeed: 5000,    // Tiempo entre transiciones (ms)
    arrows: false,          // Oculta las flechas de navegación
  };

  return (
    <div className="anuncio-container">
      <div className="anuncio-content">
        <div className="anuncio-carousel">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Imagen 1" />
            </div>
            <div>
              <img src={image2} alt="Imagen 2" />
            </div>
            <div>
              <img src={image3} alt="Imagen 3" />
            </div>
            {/* Agrega más slides si lo deseas */}
          </Slider>
        </div>
        <div className="anuncio-text">
          <h1>¡LOS RECUERDOS SON PARA SIEMPRE!</h1>
          <p>Colección de Reto Puma Bike</p>
          <button>Comprar Ahora</button>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;

