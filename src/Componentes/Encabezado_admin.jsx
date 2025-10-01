import React from "react";
import './css/Encabezado_admin.css'

const Encabezado_admin = ({nombre, cerrar_sesion}) => {
    return(
        <div className="contenedor_encabezado_admin">
            <p>{nombre}</p>
            <button onClick={cerrar_sesion}>Salir</button>
        </div>
    )
}

export default Encabezado_admin