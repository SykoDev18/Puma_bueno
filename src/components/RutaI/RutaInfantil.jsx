import React, { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa'; 
import './RutaInfantil.css'; 
import data from '../../assets/Ruta/RutaI.png'

const RutaInfantil = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: 'Inf: A Femenil', color: '#FF0000' },
    { nombre: 'Inf. A Varonil', color: '#FF69B4' },
    { nombre: 'Inf. B Femenil', color: '#0000FF' },
    { nombre: 'Inf. B Varonil ', color: '#008000' },
    { nombre: 'Inf. C Femenil', color: '#FFA500' },
    { nombre: 'Inf. C Varonil ', color: '#800080' },
  ];

  const edades = [
    { nombre: '2017 - 2016', color: '#FF0000' },
    { nombre: '2017 - 2016', color: '#FF69B4' },
    { nombre: '2015 - 2014', color: '#0000FF' },
    { nombre: '2015 - 2014', color: '#008000' },
    { nombre: '2013 - 2012', color: '#FFA500' },
    { nombre: '2013 - 2012', color: '#800080' },
  ];

  return (
    <div className="ruta-infantil">
      <h1>RUTA INF. A - B - C</h1>
      <div className="ruta-contenido">
        <div
          className="ruta-mapa"
          dangerouslySetInnerHTML={{
            __html:
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="9370861843" data-style="standard"></div>',
          }}
        />
        <div className="ruta-info">
          <p className="ruta-descripcion">
          Explora una desafiante ruta de 4.58 km con una altimetría de 74 metros, diseñada para ciclistas peques. 
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <strong>Distancia:</strong> 4.58 Km
              </p>
              <p>
                <strong>Categorías:</strong>
              </p>
              <ul className="ruta-lista">
                {categorias.map((categoria, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: categoria.color }}
                      aria-hidden="true"
                    />{' '}
                    {categoria.nombre}
                  </li>
                ))}
              </ul>
            </div>
            {/* Segunda columna */}
            <div className="ruta-columna">
              <p>
                <strong>Altimetría:</strong> 74 m
              </p>
              <p>
                <strong>Año Nominal:</strong>
              </p>
              <ul className="ruta-lista">
                {edades.map((edad, index) => (
                  <li key={index}>
                    <FaPaw
                      className="ruta-icono"
                      style={{ color: edad.color }}
                      aria-hidden="true"
                    />{' '}
                    {edad.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaInfantil;
