import React, { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa'; 
import './RutaLarga.css'; 
import data from '../../assets/Ruta/RutaL.png'

const RutaLarga = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: 'Elite Varonil', color: '#FF0000' },
    { nombre: 'Elite Femenil', color: '#FF69B4' },
    { nombre: 'Varonil Avanzados', color: '#0000FF' },
    { nombre: 'Master 30 Varonil', color: '#008000' },
    { nombre: 'Master 40 Varonil', color: '#FFA500' },
    { nombre: 'Juvenil Varonil', color: '#800080' },
    { nombre: 'Master 50 Varonil', color: '#00CED1' },
  ];

  const edades = [
    { nombre: 'LIBRE', color: '#FF0000' },
    { nombre: 'LIBRE', color: '#FF69B4' },
    { nombre: '17 a 20 años', color: '#0000FF' },
    { nombre: '30 a 39 años', color: '#008000' },
    { nombre: '40 a 49 años', color: '#FFA500' },
    { nombre: '13 a 16 años', color: '#800080' },
    { nombre: '50 a 59 años', color: '#00CED1' },
  ];

  return (
    <div className="ruta-larga">
      <h1>RUTA LARGA</h1>
      <div className="ruta-contenido">
        <div
          className="ruta-mapa"
          dangerouslySetInnerHTML={{
            __html:
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="11299533502" data-style="standard"></div>',
          }}
        />
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Esta es una descripción de la Ruta Larga. Puedes reemplazar este texto con la descripción que desees.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <strong>Distancia:</strong> 63.4 Km
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
                <strong>Altimetría:</strong> 1907 m
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
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaLarga;
