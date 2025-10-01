import React from "react";
import './css/Filtro.css'

const Filtro = ({filtrar_funciones, id_c_c, setId_c_c, nombre_c_c}) => {

    return(
        <div className="contenedor_filtro">
            <form action="" onSubmit={filtrar_funciones}>
                <div>
                    <div>
                        <label htmlFor="">Centro Comercial:</label>
                        <select name="" id="" value={id_c_c} onChange={(e) => setId_c_c(e.target.value)} required>
                            <option value="" hidden>Seleccione</option>
                            {nombre_c_c.map((c) => (
                                <option value={c.Id_c_comercial} key={c.Id_c_comercial}>{c.Nombre}</option>
                            ))}
                        </select>
                    </div>

                    {/* <div>
                        <label htmlFor="">Horarios Disponibles:</label>
                        <select name="" id="">
                            <option value="" hidden>Seleccione</option>
                            <option value="">opcion 1</option>
                            <option value="">opcion 2</option>
                        </select>
                    </div> */}
                </div>

                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Filtro