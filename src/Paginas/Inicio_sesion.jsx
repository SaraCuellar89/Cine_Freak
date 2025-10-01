import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import General from "../Componentes/General";
import Encabezado from "../Componentes/Encabezado";
import Formulario_inicio_sesion from "../Componentes/Formulario_inicio_sesion";

const Inicio_sesion = () => {

    const navigate = useNavigate()

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')


    // --------------------- Iniciar Sesion ---------------------
    const iniciar_sesion = async (e) => {
        e.preventDefault()

        try{
            const res = await fetch('https://back-freak.vercel.app/iniciar_sesion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    correo, contrasena
                })
            })

            const datos = await res.json()

            if(datos.success){
                alert(`¡Hola ${datos.data.nombre}!`)
                if(datos.data.rol === 'Usuario'){
                    navigate('/Perfil_Usuario')
                }
                else{
                    navigate('/Perfil_Administrador')
                }
            }
            else{
                alert('No se pudo iniciar sesion')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }

    
    return(
        <div>
            <General/>
            <div className="contenedor_registro">
                <Encabezado/>
                <div>
                    <Formulario_inicio_sesion
                        iniciar_sesion = {iniciar_sesion}
                        correo = {correo}
                        setCorreo = {setCorreo}
                        contrasena = {contrasena}
                        setContrasena = {setContrasena}
                    />
                </div>
            </div>
        </div>
    )
}

export default Inicio_sesion
