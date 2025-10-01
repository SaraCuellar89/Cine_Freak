import React from "react";
import './css/Formulario_registro.css'
import { Link } from 'react-router-dom';

const Formulario_inicio_sesion = ({iniciar_sesion, correo, setCorreo, contrasena, setContrasena}) => {

    return(
        <div className="contenedor_fomu_registro">
            <p>Inicia Sesion</p>

            <form action="" onSubmit={iniciar_sesion}>
                <div>
                    <label htmlFor="">Correo:</label>
                    <input type="email" id="correo" placeholder="coso@coso.com" required
                        value={correo} onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" id="contrasena" required
                        value={contrasena} onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>

                <button>¡Entra!</button>
            </form>
            <Link to='/Registro'>
                <p>¿No tienes Cuenta?</p>
            </Link>
        </div>
    )
}

export default Formulario_inicio_sesion