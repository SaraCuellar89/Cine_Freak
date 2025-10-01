import React from "react";
import './css/Formulario_reserva.css'
import Modal from "./Modal";

const Formulario_reserva = ({info, reservar, mostrarModal, redirigir, total, Id_funcion, Id_sillas}) => {

    return(
        <>
            {info.map((f) => (
                <div className="contenedor_formu_reserva" key={f.Id_funcion}>
                    <p>{f.Titulo}</p>

                    <form action="" onSubmit={(e) => reservar(Id_funcion, Id_sillas, e)}>
                        <div>
                            <div>
                                <div>
                                    <p>Sinopsis:</p>
                                    <p>{f.Sinopsis}</p>
                                </div>

                                <div>
                                    <p>Horario:</p>
                                    <p>{f.Hora}</p>
                                </div>

                                <div>
                                    <p>Centro Comercial:</p>
                                    <p>{f.Nombre}</p>
                                </div>

                                <div>
                                    <p>Total a pagar:</p>
                                    <p>${total}</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label htmlFor="">Metodo de Pago:</label>
                                    <select name="" id="">
                                        <option value="" hidden>Seleccione</option>
                                        <option value="">Tarjeta de credito</option>
                                        <option value="">Nequi</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="">Numero de Tarjeta:</label>
                                    <input type="number"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit">¡Reservar!</button>
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Recordar por medio del correo</label>
                            </div>
                        </div>
                    </form>

                    {/* Mostrar modal si está activo */}
                    {mostrarModal && <Modal cerrar={redirigir} />}
                </div>
            ))}
        </>
    )
}

export default Formulario_reserva