import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Filtro from "../Componentes/Filtro";
import './css/Funciones.css'
import Pelicula from "../Componentes/Pelicula";
import General from "../Componentes/General";


const Funciones = () => {
    
    const naviate = useNavigate()

    const [funciones, setFunciones] = useState([])
    const [nombre_c_c, setNombre_c_c] = useState([])
    const [id_c_c, setId_c_c] = useState('')

    useEffect(() => {
        // --------------------- Listar todas las funciones apenas cargue la pagina ---------------------
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


        // --------------------- obtener todos los centros comerciales ---------------------
        const obtener_centros_comerciales = async () =>{
            const res = await fetch('https://back-freak.vercel.app/centros_comerciales')
            const datos = await res.json()

            setNombre_c_c(datos.data)
        }

        obtener_centros_comerciales()
    }, [])



    // --------------------- Filtrar funciones ---------------------
    const filtrar_funciones = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('https://back-freak.vercel.app/filtrar_funciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ centro_comercial: id_c_c })
            })

            const datos = await res.json()

            if(datos.success){
                setFunciones(datos.data)
            }
            else{
                alert('No se pudieron obtener los datos')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    // --------------------- Ir a reservar una silla --------------------- 
    const ir_sillas = (Id_funcion) => {
        naviate(`/Asientos/${Id_funcion}`)
        console.log(Id_funcion)
    }

    return(
        <div>
            <General/>
            <div className="contenedor_funciones">
                <Encabezado/>

                <div>
                    <Filtro
                        filtrar_funciones = {filtrar_funciones}
                        id_c_c = {id_c_c}
                        setId_c_c = {setId_c_c}
                        nombre_c_c = {nombre_c_c}
                    />
                    <div>
                        {funciones.map((p) => (
                            <Pelicula
                                key={p.Id_funcion}
                                Id_funcion = {p.Id_funcion}
                                Portada={p.Portada}
                                Titulo={p.Titulo}
                                Sinopsis={p.Sinopsis}
                                Hora={p.Hora}
                                Nombre={p.Nombre}
                                ir_sillas = {ir_sillas}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funciones
