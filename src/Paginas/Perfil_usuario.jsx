import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Encabezado_usuario from "../Componentes/Encabezado_usuario";
import './css/Pefil_usuario.css'
import General from "../Componentes/General";
import Peliculas_usuario from "../Componentes/Peliculas_usuario";

const Pefil_usuario = () => {

    const navigate = useNavigate()

    const [info, setInfo] = useState([])
    const [funciones, setFunciones] = useState([])

    useEffect(() => {
        // --------------------- Obtener informacion del usuario ---------------------
        const obtener_info_usuario = async () => {
            const res = await fetch('https://back-freak.vercel.app/info_perfil', {
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                setInfo(datos.usuario)
            }
            else{
                console.log(datos.message)
            }
        }

        obtener_info_usuario()


        // --------------------- listar funciones ---------------------
        const obtener_funciones_usuario = async () => {
            try{
                const res = await fetch('https://back-freak.vercel.app/reservas_usuario', {
                    credentials: 'include'
                })

                const datos = await res.json()

                if(datos.success){
                    console.log(datos.data)
                    setFunciones(datos.data)
                }
                else{
                    console.log(datos.message)
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        obtener_funciones_usuario()
    }, [])

    
    // --------------------- Cerrar la sesion --------------------- 
    const cerrar_sesion = async () => {
        try{
            const confirmar = confirm('¿En serio quiere cerrar su sesion?')
            
            if(!confirmar){
                return
            }

            const res = await fetch('https://back-freak.vercel.app/cerrar_sesion', {
                method: 'POST',
                credentials: 'include'
            })

            const datos = await res.json()

            if(datos.success){
                alert('Sesion Cerrada')
                navigate('/')
            }
            else{
                alert('No se pudo cerrar la sesion')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    // --------------------- Eliminar funcion ---------------------
    const eliminar_funcion = async (Id_funcion) => {
        try{
            const confirmar = confirm('La cancelacion de una reserva no conlleva reenbolso, ¿Seguro quiere hacerlo?')
            if(!confirmar){
                return
            }

            const res = await fetch('https://back-freak.vercel.app/cancelar_funcion_usuario', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({id_funcion: Id_funcion})
            })

            const datos = await res.json()

            if(datos.success){
                alert('Se cancelo la reserva')
                window.location.reload()
            }
            else{
                alert('No se pudo cancelar la reserva')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    return(
        <div>
            <General/>
            <div className="contenedor_perfil_usuario">
                <Encabezado/>
                <div>
                    {info && (
                        <Encabezado_usuario
                            info = {info}
                            cerrar_sesion = {cerrar_sesion}
                        />
                    )}
                    
                    {funciones.map((f) => (
                        <Peliculas_usuario
                            key = {f.Id_funcion}
                            Portada = {f.Portada}
                            Titulo = {f.Titulo}
                            Sinopsis = {f.Sinopsis}
                            Hora = {f.Hora}
                            Nombre = {f.Nombre}
                            Id_funcion = {f.Id_funcion}
                            eliminar_funcion = {eliminar_funcion}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Pefil_usuario
