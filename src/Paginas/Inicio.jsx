import React from "react";
import Encabezado from "../Componentes/Encabezado";
import './css/Inicio.css'
import Carrusel from "../Componentes/Carrusel";
import General from "../Componentes/General";

const Inicio = () => {

    return(
        <div>
            <General/>
            <div className="contenedor_inicio">
                <Encabezado/>
                <div>
                    <Carrusel/>
                </div>
            </div>
        </div>
    )
}

export default Inicio