import React from "react";
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import '../../node_modules/slick-carousel/slick/slick.css';
import './css/Carrusel.css'
import Slider from "react-slick";

const Carrusel = () => {

    const imgs = [
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095733-51yHtvZGa5S._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1657095919-51CQ-GIUyFL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060789-513pgMJazCL.jpg?crop=1xw:1xh;center,top&resize=980:*',
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561060831-519Zcnq0bCL.jpg?crop=1xw:1xh;center,top&resize=980:*'
    ]

    const settings = {
        dots: false,          // puntos de navegación abajo
        infinite: true,      // se repite en loop
        speed: 500,          // velocidad de transición
        slidesToShow: 1,     // cuántos se muestran a la vez
        slidesToScroll: 1,    // cuántos se mueven al hacer scroll
        autoplay: true,       // 👈 se mueve solo
        autoplaySpeed: 0,   // 👈 cada 2 segundos
        speed: 10000,
        cssEase: "linear", // transición continua más fluida
        arrows: false
    };

    return (
        <>
            <p className="texto_carrusel">Esta Semana...</p>
            <Slider {...settings} className="contenedor_carrusel">
            {imgs.map((img, i) => (
                <div key={i} className="caja_carrusel">
                    <div className="caja_carrusel_2">
                        <img className="img_carrusel" src={img} alt=""/>
                    </div>
                </div>
            ))}
            </Slider>
        </>
    );
};

export default Carrusel;
