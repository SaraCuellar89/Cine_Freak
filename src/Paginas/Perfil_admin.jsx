import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Encabezado_admin from "../Componentes/Encabezado_admin";
import General from "../Componentes/General";
import './css/Pefil_admin.css'
import Formu_registro_pelicula from "../Componentes/Formu_registro_pelicula";

const Pefil_admin = () => {

    const navigate = useNavigate()

    const [titulo, setTitulo] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [portada, setPortada] = useState("https://m.media-amazon.com/images/M/MV5BNjJlYzg1MWQtMjIyNi00ZGE2LWFmYzEtODlmNmU2ZmEzZDhiXkEyXkFqcGc@._V1_.jpg")
    const [centro_comercial, setCentro_comercial] = useState('')
    const [hora, setHora] = useState('')


    // --------------------- Registrar una funcion ---------------------
    const crear_funcion = async (e) => {
        e.preventDefault()
        
        try{
            const res = await fetch('https://back-freak.vercel.app/crear_funcion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    titulo, sinopsis, portada, centro_comercial, hora
                })
            })

            const datos = await res.json()

            if(datos.success){
                alert('Funcion Creada')
                navigate(0)
            }
            else{
                alert(datos.message)
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    const [nombre_c_c, setNombre_c_c] = useState([])
    const [info, setInfo] = useState([])

    // --------------------- obtener todos los centros comerciales ---------------------
    useEffect(() => {
        const obtener_centros_comerciales = async () =>{
            const res = await fetch('https://back-freak.vercel.app/centros_comerciales')
            const datos = await res.json()

            setNombre_c_c(datos.data)
        }

        obtener_centros_comerciales()


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


    return(
        <div>
            <General/>
            <div className="contenedor_perfil_admin">
                <Encabezado/>
                <div>
                    {info && (
                        <Encabezado_admin
                            nombre = {info.nombre}
                            cerrar_sesion = {cerrar_sesion}
                        />
                    )}
                    <Formu_registro_pelicula
                        crear_funcion = {crear_funcion}
                        portada = {portada}
                        setPortada = {setPortada}
                        titulo = {titulo}
                        setTitulo = {setTitulo}
                        sinopsis = {sinopsis}
                        setSinopsis = {setSinopsis}
                        centro_comercial = {centro_comercial}
                        setCentro_comercial = {setCentro_comercial}
                        nombre_c_c = {nombre_c_c}
                        hora = {hora}
                        setHora = {setHora}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pefil_admin
