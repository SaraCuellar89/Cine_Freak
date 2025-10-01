import React, { use, useEffect, useState } from "react";
import './css/Formu_registro_pelicula.css'

const Formu_registro_pelicula = ({crear_funcion, portada, setPortada, titulo, setTitulo, sinopsis, setSinopsis, centro_comercial, setCentro_comercial, nombre_c_c, hora, setHora}) => {

    return(
        <div className="contenedor_formu_registro_pelicula">
            <p>Registrar Funcion</p>

            <form action="" onSubmit={crear_funcion}>
                <div>
                    <img src={portada} alt="Portada" />
                </div>

                <div>
                    <div>
                        <label htmlFor="">Nombre:</label>
                        <input type="text" name="" id="" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Sinopsis:</label>
                        <input type="text" name="" id="" value={sinopsis} onChange={(e) => setSinopsis(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Portada:</label>
                        <input type="text" id="" value={portada} onChange={(e) => setPortada(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="">Centro Comercial:</label>
                        <select value={centro_comercial} onChange={(e) => setCentro_comercial(e.target.value)}>
                            <option value="" hidden>Seleccione</option>
                            {nombre_c_c.map((c) => (
                                <option value={c.Id_c_comercial} key={c.Id_c_comercial}>{c.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Hora:</label>
                        <input type="time" name="" id="" value={hora} onChange={(e) => setHora(e.target.value)}/>
                    </div>

                    <div>
                        <button type="submit">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Formu_registro_pelicula