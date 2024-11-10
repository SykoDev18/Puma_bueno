import React, { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa'; 
import './RutaPanales.css'; 
import data from '../../assets/Ruta/RutaP.png';

const RutaPanales = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: 'Inf. Pañales Femenil', color: '#FF0000' },
    { nombre: 'Inf. Pañales Varonil', color: '#FF69B4' },
    { nombre: 'Inf. AA Femenil', color: '#0000FF' },
    { nombre: 'Inf. AA Varonil', color: '#008000' },
  ];

  const edades = [
    { nombre: '2020-2021-2022', color: '#FF0000' },
    { nombre: '2020-2021-2022', color: '#FF69B4' },
    { nombre: '2019 - 2018', color: '#0000FF' },
    { nombre: '2019 - 2018', color: '#008000' },
  ];

  return (
    <div className="ruta-panales">
      <h1>RUTA INF. PAÑALES Y AA</h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
          Explora una desafiante ruta de 0.55 km con una altimetría de 7 metros, diseñada para ciclistas peques.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <strong>Distancia:</strong> 0.55 Km
              </p>
              <p>
                <strong>Año Nominal:</strong>
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
                <strong>Altimetría:</strong> 7 m
              </p>
              <p>
                <strong>Edad:</strong>
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
        {/* Mapa de Strava*/}
        <div
          className="ruta-mapa"
          dangerouslySetInnerHTML={{
            __html:
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="9370861814" data-style="standard"></div>',
          }}
        />
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaPanales;