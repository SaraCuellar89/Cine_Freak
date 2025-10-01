import React from "react";
import './css/Formulario_registro.css'

const Formulario_registro = ({registrar, nombre, setNombre, correo, setCorreo, contrasena, setContrasena, rol, setRol}) => {

    return(
        <div className="contenedor_fomu_registro">
            <p>Registro</p>

            <form action="" onSubmit={registrar}>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" id="nombre" placeholder="Coso Coso" required
                        value={nombre} onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

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

                <div>
                    <label htmlFor="">Rol:</label>
                    <select id="rol" value={rol} onChange={(e) => setRol(e.target.value)}>
                        <option value="" hidden>Seleccione</option>
                        <option value="Usuario">Usuario</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                </div>

                <button>¡Registrate!</button>
            </form>
        </div>
    )
}

export default Formulario_registro