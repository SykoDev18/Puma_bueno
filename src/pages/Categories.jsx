import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import cats from "../assets/Categorias.jpeg";
import "../styles/Categories.css";

const Categories = () => {
    return (
        <>
        <Header />
            <div className='categoriesContainer'>
                
                <Navbar />
                <div className="contentCategories">
                    <h1 className='tituloCategorias'>
                        RETO <span className="yellow-text">PUMA</span> BIKE <br />CATEGORÍAS
                    </h1>
                    
                    <img src={cats} alt="Categorías y premiaciones" className="categoriesImage" />

                    {/* Descripción breve debajo de la imagen */}
                    <p className="descriptionText">
                        Explora las distintas categorías y premios que hay en cada una. Únete al desafío. <br/><span className='yellow-text'>"Tu único límite eres tú"</span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Categories;
