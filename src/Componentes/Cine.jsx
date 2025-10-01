import React from "react";
import './css/Cine.css'

const Cine = ({sillas, toggleSeleccion, seleccionadas, reservadas, ir_reservar, nombre_funcion, Id_funcion}) => {

    return(
        <div className="contenedor_cine">
            <p>{nombre_funcion}</p>

            <div>
                <div></div>

                <div>
                    <div>
                        {sillas
                            .filter(s => s.Fila === "A")
                            .map(s => (
                                <div
                                key={s.Id_sillas}
                                onClick={() => toggleSeleccion(s.Id_sillas)}
                                className={`silla 
                                    ${seleccionadas.includes(s.Id_sillas) ? "seleccionada" : ""} 
                                    ${reservadas.includes(s.Id_sillas) ? "reservada" : ""}`
                                }
                                >
                                {s.Fila}{s.Columna}
                                </div>
                        ))}
                    </div>

                    <div>
                        {sillas
                            .filter(s => s.Fila === "B")
                            .map(s => (
                                <div
                                key={s.Id_sillas}
                                onClick={() => toggleSeleccion(s.Id_sillas)}
                                className={`silla 
                                    ${seleccionadas.includes(s.Id_sillas) ? "seleccionada" : ""} 
                                    ${reservadas.includes(s.Id_sillas) ? "reservada" : ""}`
                                }
                                >
                                {s.Fila}{s.Columna}
                                </div>
                        ))}
                    </div>

                    <div>
                        {sillas
                            .filter(s => s.Fila === "C")
                            .map(s => (
                                <div
                                key={s.Id_sillas}
                                onClick={() => toggleSeleccion(s.Id_sillas)}
                                className={`silla 
                                    ${seleccionadas.includes(s.Id_sillas) ? "seleccionada" : ""} 
                                    ${reservadas.includes(s.Id_sillas) ? "reservada" : ""}`
                                }
                                >
                                {s.Fila}{s.Columna}
                                </div>
                        ))}
                    </div>

                    <div>
                        {sillas
                            .filter(s => s.Fila === "D")
                            .map(s => (
                                <div
                                key={s.Id_sillas}
                                onClick={() => toggleSeleccion(s.Id_sillas)}
                                className={`silla 
                                    ${seleccionadas.includes(s.Id_sillas) ? "seleccionada" : ""} 
                                    ${reservadas.includes(s.Id_sillas) ? "reservada" : ""}`
                                }
                                >
                                {s.Fila}{s.Columna}
                                </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => ir_reservar(seleccionadas, Id_funcion)}>Siguiente</button>
            </div>
        </div>
    )
}

export default Cine