import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Peliculas_admin from "../Componentes/Peliculas_admin";
import General from "../Componentes/General";
import './css/Funciones_admin.css'

const Funciones_admin = () => {
    const navigate = useNavigate()

    // --------------------- listar todas las funciones ---------------------
    const [funciones, setFunciones] = useState([])

    useEffect(() => {
        const Obtener_funciones = async () => {
            try{
                let res = await fetch('https://back-freak.vercel.app/lista_todas_funciones')
                let datos = await res.json()

                setFunciones(datos.data)

            }
            catch(error){
               console.log('El error es: ' + error)
            }
        }

        Obtener_funciones()
    }, [])


    // --------------------- Eliminar Funcion ---------------------
    const eliminar_funcion = async (id_funcion) => {
        const confirmar = confirm('¿De verdad quiere eliminar esta funcion?')

        if(!confirmar){
            return
        }

        const res = await fetch('https://back-freak.vercel.app/eliminar_funcion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id_funcion})
        })

        const datos = await res.json()

        if(datos.success){
            alert('Funcion eliminada')
            navigate(0)
        }
        else{
            alert('No se puedo eliminar la funcion')
        }
    }
 
    // --------------------- Ir a fomrulario para editar una funcion ---------------------
    const ir_editar_funcion = (id_funcion) => {
        navigate(`/Editar_Funcion/${id_funcion}`)
    }

    return(
        <div>
            <General/>
            <div className="contenedor_funciones_admin">
                <Encabezado/>
                <div>
                    {funciones.map((f) => (
                        <Peliculas_admin
                            key = {f.Id_funcion}
                            id_funcion = {f.Id_funcion}
                            Portada = {f.Portada}
                            Titulo = {f.Titulo}
                            Sinopsis = {f.Sinopsis}
                            Hora = {f.Hora}
                            Nombre = {f.Nombre}
                            eliminar_funcion = {eliminar_funcion}
                            ir_editar_funcion = {ir_editar_funcion}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Funciones_admin
