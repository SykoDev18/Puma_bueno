import React from 'react';
import './Patrocinadores.css';

import patron1 from '../../assets/PatrocinadoresHIMG/ALTARA.jpg';
import patron2 from '../../assets/PatrocinadoresHIMG/Axelne.png';
import patron3 from '../../assets/PatrocinadoresHIMG/CL.jpg';
import patron4 from '../../assets/PatrocinadoresHIMG/CVM.jpg';
import patron5 from '../../assets/PatrocinadoresHIMG/Donchon.jpg';
import patron6 from '../../assets/PatrocinadoresHIMG/DrSalinas.jpg';
import patron7 from '../../assets/PatrocinadoresHIMG/DrSalvador.jpg';
import patron8 from '../../assets/PatrocinadoresHIMG/Frailes.png';
import patron9 from '../../assets/PatrocinadoresHIMG/Mariscos.png';
import patron10 from '../../assets/PatrocinadoresHIMG/PEIK.jpg';
import patron11 from '../../assets/PatrocinadoresHIMG/logoimportane.jpg';
import patron12 from '../../assets/PatrocinadoresHIMG/SraLeo.png';
import patron13 from '../../assets/PatrocinadoresHIMG/Valle.png';
import patron14 from '../../assets/PatrocinadoresHIMG/ahc.png';
import patron15 from '../../assets/PatrocinadoresHIMG/ala.jpg';
import patron16 from '../../assets/PatrocinadoresHIMG/daxi.png';
import patron17 from '../../assets/PatrocinadoresHIMG/delatostada.png';
import patron18 from '../../assets/PatrocinadoresHIMG/diamante.png';
import patron19 from '../../assets/PatrocinadoresHIMG/diente.jpg';
import patron20 from '../../assets/PatrocinadoresHIMG/kira.png';
import patron21 from '../../assets/PatrocinadoresHIMG/sannicolas.png';
import patron22 from '../../assets/PatrocinadoresHIMG/yolo.png';

const sponsors = [
  patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9,
  patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17,
  patron18, patron19, patron20, patron21, patron22
];

const Patrocinadores = () => {
  return (
    <div className='patrocinadores'>
      <div className='container'>
        <h2>Patrocinadores Humildes</h2>
        <div className='sponsors-grid'>
          {sponsors.map((sponsor, index) => (
            <div key={index} className='sponsor-item'>
              <img src={sponsor} alt={`Patrocinador ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patrocinadores;
