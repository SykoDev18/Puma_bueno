import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from "../features/authSlice";
import eye from "../assets/eye.svg"; // importar imagenes
import image1 from "../assets/img/img_1.jpeg";
import image2 from "../assets/img/img_2.jpeg";
import image3 from "../assets/img/img_3.jpg";
import Slider from "react-slick"; // Importar Slider
import "../styles/Login.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailInputRef = useRef(null);
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    useEffect(() => {
        emailInputRef.current.focus();
    }, []);

    const handleAuth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const PrevButton = ({ onClick }) => (
        <button className="prev-button" onClick={onClick}>
            ❮ {/* Este es un símbolo de flecha hacia la izquierda */}
        </button>
    );
    
    const NextButton = ({ onClick }) => (
        <button className="next-button" onClick={onClick}>
            ❯ {/* Este es un símbolo de flecha hacia la derecha */}
        </button>
    );

    // Configuración del carrusel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const handleRegisterRedirect = () => {
        navigate('/users/registro'); // Cambia '/registro' por la ruta a la que quieres redirigir
    };

    return (
        <div className="main-container">
            <div className="carrusel">
                <Slider {...settings}
                prevArrow={<PrevButton />}
                nextArrow={<NextButton />}
                style={{ height: '100%' }}>
                    <div>
                        <img src={image1} alt="Imagen 1" />
                    </div>
                    <div>
                        <img src={image2} alt="Imagen 2" />
                    </div>
                    <div>
                        <img src={image3} alt="Imagen 3" />
                    </div>
                </Slider>
                <p className="eslogan">ATRÉVETE A RECORRERLO</p>
            </div>
            <div className="form">
                <div className="title-section">
                    <div className="text-wrapper">Bienvenido de vuelta!</div>
                </div>
                <form onSubmit={handleAuth}>
                    <div className="inputs-section">
                        <div className="input2">
                            <div className="textInputWrapper">
                                <label htmlFor="email" className="email-label">Correo:</label>
                                <input
                                    ref={emailInputRef}
                                    id="email"
                                    type="email"
                                    className="textInput"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Ingresa tu correo:"
                                    required
                                />
                            </div>
                        </div>
                        <div className="input-2">
                            <div className="textInputWrapper">
                                <label htmlFor="password" className='passwordlabel'>Ingresa tu contraseña:</label>
                                <div className="input-container">
                                    <input 
                                        id="password"
                                        type={showPassword ? "text" : "password"} 
                                        className="textInput"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Contraseña"
                                        required
                                    />
                                    <img 
                                        className="eye" 
                                        alt="Eye" 
                                        src={eye} 
                                        onClick={togglePasswordVisibility}
                                    />
                                </div>
                            </div>
                            <div className="text-wrapper-3">¿Has olvidado tu contraseña?</div>
                        </div>
                    </div>
                    {isError && <div className="error-message">{message}</div>}
                    <div className="footer-section">
                        <button type="submit" className="buttom">
                            <div className="text-wrapper-4">
                                {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                            </div>
                        </button>
                        <p className="a-n-no-tienes-cuenta">
                            <span className="span">¿Aún no tienes cuenta? </span>
                            <span className="text-wrapper-5" onClick={handleRegisterRedirect}>Crea una ahora</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
