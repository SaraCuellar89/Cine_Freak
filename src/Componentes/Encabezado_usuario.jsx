import React from "react";
import './css/Encabezado_usuario.css'

const Encabezado_usuario = ({info, cerrar_sesion}) => {

    return(
        <div className="contenedor_encabezado_usuario">
            <div>
                <div>
                    <p>Nombre:</p>
                    <p>{info.nombre}</p>
                </div>

                <div>
                    <p>Correo:</p>
                    <p>{info.correo}</p>
                </div>
            </div>

            <div>
                <button onClick={cerrar_sesion}>Cerrar Sesion</button>
            </div>
        </div>
    )
}

export default Encabezado_usuario