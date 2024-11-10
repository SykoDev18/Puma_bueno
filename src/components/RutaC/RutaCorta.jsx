import React, { useEffect } from 'react';
import { FaPaw } from 'react-icons/fa'; 
import './RutaCorta.css'; 
import data from '../../assets/Ruta/RutaC.png'

const RutaCorta = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://strava-embeds.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const categorias = [
    { nombre: 'Principiantes Varonil', color: '#FF0000' },
    { nombre: 'Principiantes Femenil', color: '#FF69B4' },
    { nombre: 'Femenil 30', color: '#0000FF' },
    { nombre: 'Femenil 40', color: '#008000' },
    { nombre: 'Mamuts 40 Varonil', color: '#FFA500' },
    { nombre: 'Master 60 Varonil', color: '#800080' },
    { nombre: 'Femenil 50', color: '#00CED1' },
    { nombre: 'Rodadores Varonil', color: '#00CED1' },
    { nombre: 'Rodadoras Femenil', color: '#00CED1' },
    { nombre: 'E-BIKE', color: '#00CED1' },
  ];

  const edades = [
    { nombre: 'LIBRE', color: '#FF0000' },
    { nombre: 'LIBRE', color: '#FF69B4' },
    { nombre: '30 a 39 años', color: '#0000FF' },
    { nombre: '40 a 49 años', color: '#008000' },
    { nombre: '90 kg y mas', color: '#FFA500' },
    { nombre: '60 a 69 años', color: '#800080' },
    { nombre: '50 a 59 años', color: '#00CED1' },
    { nombre: 'LIBRE', color: '#00CED1' },
    { nombre: 'LIBRE', color: '#00CED1' },
    { nombre: 'LIBRE(MIXTO)', color: '#00CED1' },
  ];

  return (
    <div className="ruta-corta">
      <h1>RUTA CORTA</h1>
      <div className="ruta-contenido">
        <div className="ruta-info">
          <p className="ruta-descripcion">
            Esta es una descripción de la Ruta Larga. Puedes reemplazar este texto con la descripción que desees.
          </p>
          <div className="ruta-info-columnas">
            {/* Primera columna */}
            <div className="ruta-columna">
              <p>
                <strong>Distancia:</strong> 40.6 Km
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
                <strong>Altimetría:</strong> 1189 m
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
              '<div class="strava-embed-placeholder" data-embed-type="activity" data-embed-id="11300463291" data-style="standard"></div>',
          }}
        />
      </div>
      <div className="ruta-imagen">
        <img src={data} alt="Gráfica del terreno" />
      </div>
    </div>
  );
};

export default RutaCorta;
