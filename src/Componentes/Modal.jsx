import React from "react";
import qr from "./img/qr.png"
import './css/Modal.css'

const Modal = ({cerrar}) => {

    return(
        <div className="contenedor_modal">
            <div>
                <p>Muestra esto en el cine:</p>
                <img src={qr} alt="" />
            </div>

            <button onClick={cerrar}>Cerrar</button>
        </div>
    )
}

export default Modal