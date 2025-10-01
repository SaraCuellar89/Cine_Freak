import React from "react";
import './css/Pelicula.css'

const Pelicula = ({Portada, Titulo, Sinopsis, Hora, Nombre, Id_funcion, ir_sillas}) => {

    return(
        
        <div className="contenedor_pelicula">
            <div>
                <img src={Portada} alt="" />
            </div>

            <div>
                <div>
                    <div>
                        <p>Titulo:</p>
                        <p>{Titulo}</p>
                    </div>

                    <div>
                        <p>Sinopsis:</p>
                        <p>{Sinopsis}</p>
                    </div>

                    <div>
                        <p>Horario:</p>
                        <p>{Hora}</p>
                    </div>

                    <div>
                        <p>Centro Comercial:</p>
                        <p>{Nombre}</p>
                    </div>
                </div>

                <div>
                    
                    <button onClick={() => ir_sillas(Id_funcion)}>¡Reservar!</button>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Pelicula