import React from "react";
import { useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import Formulario_registro from "../Componentes/Formulario_registro";
import General from "../Componentes/General";
import './css/Registro.css'
import { useNavigate } from "react-router-dom";

const Registro = () => {

    const navigate = useNavigate()

    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [rol, setRol] = useState('')

    // --------------------- Registrar usuarios ---------------------
    const registrar = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch('https://back-freak.vercel.app/registrar_usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    nombre, correo, contrasena, rol
                })
            })

            if(res.ok){
                alert('Registro exitoso')
                navigate('/')
            }
            else{
                alert('No se completo el registro')
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
                    <Formulario_registro
                        registrar = {registrar}
                        nombre = {nombre}
                        setNombre = {setNombre}
                        correo = {correo}
                        setCorreo = {setCorreo}
                        contrasena = {contrasena}
                        setContrasena = {setContrasena}
                        rol = {rol}
                        setRol = {setRol}
                    />
                </div>
            </div>
        </div>
    )
}

export default Registro
