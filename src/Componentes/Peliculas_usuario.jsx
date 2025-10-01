import React from "react";
import './css/Peliculas_usuario.css'

const Peliculas_usuario = ({Portada, Titulo, Sinopsis, Hora, Nombre, Id_funcion, eliminar_funcion}) =>{

    return(
        <div className="contenedor_peliculas_usuario">
            <div>
                <img src={Portada} alt="" />
            </div>

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
                <button onClick={() => eliminar_funcion(Id_funcion)}>Cancelar!</button>
            </div>
        </div>
    )
}

export default Peliculas_usuario