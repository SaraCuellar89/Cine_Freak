import React from "react";

const Peliculas_admin = ({Portada, Titulo, Sinopsis, Hora, Nombre, id_funcion, eliminar_funcion, ir_editar_funcion}) => {

    return(
        <div className="contenedor_peliculas_usuario" >
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
                <button onClick={() => eliminar_funcion(id_funcion)}>Eliminar</button>
                <button onClick={() => ir_editar_funcion(id_funcion)}>Editar</button>
            </div>
        </div>
    )
}

export default Peliculas_admin