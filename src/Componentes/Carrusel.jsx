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
        dots: true,              // Muestra los puntitos de navegación debajo del carrusel
        infinite: true,          // Permite que el carrusel vuelva al inicio al llegar al último slide (bucle infinito)
        speed: 800,            // Duración de la animación de transición entre slides (en milisegundos)
        autoplay: true,          // Activa el desplazamiento automático de los slides
        autoplaySpeed: 3000,        // Tiempo que el carrusel espera antes de pasar al siguiente slide (en milisegundos)
        pauseOnHover: true,      // Pausa el autoplay cuando el usuario pasa el mouse sobre el carrusel
        swipeToSlide: true,     // Si es true, permite arrastrar (swipe) libremente al siguiente slide con el dedo o mouse
        arrows: true,            // Muestra las flechas izquierda/derecha para navegar manualmente
        slidesToShow: 1,         // Cantidad de slides visibles al mismo tiempo
        slidesToScroll: 1        // Cantidad de slides que avanza cada vez
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
