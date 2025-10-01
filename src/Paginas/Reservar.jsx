import React, { useState, useEffect  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Formulario_reserva from "../Componentes/Formulario_reserva";
import Encabezado from "../Componentes/Encabezado";
import './css/Reservar.css'
import General from "../Componentes/General";

const Reservar = () => {

    const navigate = useNavigate();

    const [total, setTotal] = useState('')
    const [info, setInfo] = useState([])
    const { Id_funcion, Id_sillas } = useParams();

    useEffect(() => {
        // --------------------- Mostrar Precio de la reserva ---------------------
        const mostrar_precio = () => {
            const precio = 10000
            const sillasArray = Id_sillas.split(',').map(Number);
            const total = precio * sillasArray.length

            setTotal(total)
        }

        mostrar_precio()


        // --------------------- Mostrar informacion de la funcion ---------------------
        const mostrar_info_pelicula = async (Id_funcion) => {
            const res = await fetch('https://back-freak.vercel.app/funcion_id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id_funcion: Id_funcion})
            })

            const datos = await res.json()

            if(datos.success){
                console.log(datos.data)
                setInfo(datos.data)
            }
            else{
                console.log('no')
            }
        }

        mostrar_info_pelicula(Id_funcion)

    }, [])



    // --------------------- Completar Reserva ---------------------
    const reservar = async (Id_funcion, Id_sillas, e) => {
        e.preventDefault()
        
        try{
            const sillasArray = Id_sillas.split(',').map(Number);
            const res = await fetch('https://back-freak.vercel.app/reservar', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ id_funcion: Id_funcion, ids_sillas: sillasArray })
            })

            const datos = await res.json()

            console.log('funcion: ', Id_funcion, 'sillas: ', sillasArray)

            if (datos.success) {
                alert('Reserva exitosa')
                console.log(datos.data)
                Mostrar_modal()
            } else {
                alert(datos.message || 'No se pudo reservar')
            }
        }
        catch(error){
            console.error('Error: ' + error)
        }
    }


    // --------------------- Modal ---------------------
    const [mostrarModal, setMostrarModal] = useState(false);

    const Mostrar_modal = () => {
        setMostrarModal(true)
    }


    // --------------------- Redirigir a perfil ---------------------
    const redirigir = () => {
        setMostrarModal(false);
        navigate('/Perfil_Usuario')
    }

    return(
        <div>
            <General/>
            <div className="contenedor_reservar">
                <Encabezado/>
                <div>
                    <Formulario_reserva
                        info={info}
                        reservar={reservar}
                        Id_funcion={Id_funcion}
                        Id_sillas={Id_sillas}
                        mostrarModal={mostrarModal}
                        redirigir={redirigir}
                        total={total}
                    />
                </div>
            </div>
        </div>
    )
}

export default Reservar
