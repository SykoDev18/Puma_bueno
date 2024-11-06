import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo2 from '../assets/logo14.png';
import "../styles/Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);  // Estado para controlar el scroll

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  // Hook para detectar el desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Cambia 50 por el valor que necesites
        setIsScrolled(true);  // Se vuelve sólido
      } else {
        setIsScrolled(false);  // Se vuelve transparente
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="boxC">
      <nav className={`rectangle ${isScrolled ? 'solid' : 'transparent'}`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <div className="logoPosition">
              <img src={logo2} alt="logo" />
            </div>
          </NavLink>
        </div>

        {/* Botones principales de la navbar */}
        <div className={`divsButtons ${isMenuOpen ? 'is-active' : ''}`}>
          <div className="div">INICIO</div>
          <div className="text-wrapper-2">CATALOGO</div>
          <div className="text-wrapper-3">CATEGORIAS</div>
          <div className="text-wrapper-4">INSCRIPCIONES</div>
          <div className="text-wrapper-5">RUTA</div>
        </div>

        {/* Botón de Logout */}
        <div className="bigButtons">
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        </div>

        {/* Menú hamburguesa para móviles */}
        <button 
          className="navbar-burger" 
          aria-label="menu" 
          aria-expanded={isMenuOpen ? "true" : "false"} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Menú desplegable para pantallas móviles */}
        {isMenuOpen && (
          <div className="divsButtons-mobile">
            <div className="div">INICIO</div>
            <div className="text-wrapper-2">CATALOGO</div>
            <div className="text-wrapper-3">CATEGORIAS</div>
            <div className="text-wrapper-4">INSCRIPCIONES</div>
            <div className="text-wrapper-5">RUTA</div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
