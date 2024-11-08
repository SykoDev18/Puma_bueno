import React from 'react';
import './Header.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/headerCarousel/car1.jpg";
import img2 from "../../assets/headerCarousel/car2.jpg";
import img3 from "../../assets/headerCarousel/car3.jpg";

const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <header className="header">
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="Header Image 1" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={img2} alt="Header Image 2" style={{ width: '100%' }} />
                </div>
                <div>
                    <img src={img3} alt="Header Image 3" style={{ width: '100%' }} />
                </div>
            </Slider>
        </header>
    );
};

export default Header;