import React, { useEffect, useState } from "react";
import './css/Encabezado.css';
import logo from './img/frankestein.png';
import { Link } from 'react-router-dom';

const Encabezado = () => {

    const [sesion, setSesion] = useState(null)

    useEffect(() => {
        const obtener_info_sesion = async () => {
            try{
                const res = await fetch('https://back-freak.vercel.app/info_perfil', {
                    credentials: 'include'
                })

                const datos = await res.json()

                if(datos.success){
                    console.log(datos.usuario)
                    setSesion(datos.usuario)
                }
                else{
                    setSesion(null);
                    console.log('No hay inicio de sesion')
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        obtener_info_sesion()
    }, [])

    return (
        <div className="contenedor_encabezado">
            <p>Freak</p>
            <div>
                {/* Si el usuario es un administrador no muestra el boton inicio, de resto si */}
                {!sesion || sesion.rol !== 'Administrador' ? (
                  <Link to='/'><p>Inicio</p></Link>
                ) : null}
                
                {/* Si el usuario es un administrador muestra el panel de control de las funciiones */}
                {sesion ? (
                    sesion.rol === 'Administrador' ? (
                        <Link to='/Funciones_Administrador'><p>Funciones</p></Link>
                    ) : (
                        <Link to='/Funciones'><p>Funciones</p></Link>
                    )
                ) : (
                    <Link to='/Inicio_Sesion'><p>Iniciar Sesión</p></Link>
                )}


                <Link><p>Menu</p></Link>


                {/* Cambiar link del logo dependiendo de si se ha iniciado sesion y de quien lo ha hecho */}
                {sesion ? (
                    sesion.rol === 'Usuario' ? (
                        <Link to='/Perfil_Usuario'><img src={logo} alt="logo" /></Link>
                    ) : (
                        <Link to='/Perfil_Administrador'><img src={logo} alt="logo" /></Link>
                    )
                ) : (
                    <Link to='/Inicio_Sesion'><img src={logo} alt="logo" /></Link>
                )}
            </div>
        </div>
    )
}

export default Encabezado;

