import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Encabezado from "../Componentes/Encabezado";
import Formu_editar_funcion from "../Componentes/Formu_editar_funcion";
import General from "../Componentes/General";

const Editar_funcion = () => {

    const navigate = useNavigate()

    const {id_funcion} = useParams()
    const [titulo, setTitulo] = useState('')
    const [sinopsis, setSinopsis] = useState('')
    const [portada, setPortada] = useState('')
    const [centro_comercial, setCentro_comercial] = useState('')
    const [hora, setHora] = useState('')
    const [nombre_c_c, setNombre_c_c] = useState([])


    // --------------------- Obtener funcion y mostrar su informacion ---------------------
    useEffect(() => {
        const obtener_info_funcion = async () => {
            try{
                const res = await fetch('https://back-freak.vercel.app/funcion_id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({id_funcion})
                })

                const datos = await res.json()

                if(datos.success){
                    console.log(datos.data)
                    datos.data.forEach(f => {
                        setTitulo(f.Titulo)
                        setSinopsis(f.Sinopsis)
                        setPortada(f.Portada)
                        setCentro_comercial(f.Id_c_comercial)
                        setHora(f.Hora)
                    });
                }
                else{
                    alert(datos.message)
                }
            }
            catch(error){
                console.error('Error: ' + error)
            }
        }

        obtener_info_funcion()


        // --------------------- obtener todos los centros comerciales ---------------------
        const obtener_centros_comerciales = async () =>{
            const res = await fetch('https://back-freak.vercel.app/centros_comerciales')
            const datos = await res.json()

            setNombre_c_c(datos.data)
        }

        obtener_centros_comerciales()
    }, [id_funcion])


    // --------------------- Editar la funcion ---------------------
    const editar_funcion = async (e) => {
        e.preventDefault()

        const res = await fetch('https://back-freak.vercel.app/editar_funcion', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_funcion, titulo, sinopsis, portada, centro_comercial, hora
            })
        })

        const datos = await res.json()

        if(datos.success){
            alert('Funcion Editada')
            navigate('/Funciones_Adminitrador')
        }
        else{
            alert('No se pudo editar la funcion')
        }
    }


    // --------------------- Cancelar la funcion ---------------------
    const cancelar = () => {
        const confirmar = confirm('¿Seguro?')
        
        if(!confirmar){
            return
        }
        navigate('/Funciones_Adminitrador')
    }


    return(
        <div>
            <div>
            <General/>
            <div className="contenedor_perfil_admin">
                <Encabezado/>
                <div>
                    <Formu_editar_funcion
                        editar_funcion={editar_funcion}
                        cancelar={cancelar}
                        portada={portada}
                        setPortada={setPortada}
                        titulo={titulo}
                        setTitulo={setTitulo}
                        sinopsis={sinopsis}
                        setSinopsis={setSinopsis}
                        centro_comercial={centro_comercial}
                        setCentro_comercial={setCentro_comercial}
                        nombre_c_c = {nombre_c_c}
                        hora={hora}
                        setHora={setHora}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Editar_funcion
