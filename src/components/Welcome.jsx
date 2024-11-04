import React from 'react';
import '../styles/Welcome.css';
import Sponsor from './patrocinadores/Sponsor';
import Footer from './Footer/Footer';
import About from './About us/About';

const Welcome = () => {
  return (
    <div>
      <div className="welcome-container">
        {/* Video de fondo */}
        <iframe
          className="background-video"
          src="https://www.youtube.com/embed/k0BfLk6TXLE?autoplay=1&mute=1&loop=1&playlist=k0BfLk6TXLE&controls=0&cc_load_policy=0"
          title="cycling motivation (MTB) 2020"
          frameBorder="0"
          scrolling="no"
          style={{ backgroundColor: 'transparent', border: '0' }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="content">
          <h1>RETO PUMA BIKE</h1>
        </div>
      </div>

      {/* Componente Sponsor*/}
      <div className="sponsor-section">
        <Sponsor />
      </div>

      {/* Componente About */}
      <About />

      {/* Componente Footer */}
      <Footer />
    </div>
  );
};

export default Welcome;
