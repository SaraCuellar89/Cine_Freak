import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import Encabezado from "../Componentes/Encabezado";
import Cine from "../Componentes/Cine";
import './css/Asientos.css'
import General from "../Componentes/General";

const Asientos = () => {

    const navigate = useNavigate()


    const [sillas, setSillas] = useState([])
    const [seleccionadas, setSeleccionadas] = useState([])
    const [reservadas, setReservadas] = useState([])
    const {Id_funcion} = useParams()
    const [nombre_funcion, setNombre_funcion] = useState('')

    useEffect(() => {

        // --------------------- Mostrar sillas por defecto de la base de datos ---------------------
        const mostrar_sillas = async () =>{
            const res = await fetch('https://back-freak.vercel.app/sillas')

            const datos  = await res.json()

            if(datos.success){
                setSillas(datos.data)
            }
            else{
                alert('No se pudo obtener las sillas')
            }
        }

        mostrar_sillas()


        // --------------------- Mostrar sillas reservadas de la funcion ---------------------
        const mostrar_sillas_funcion = async (Id_funcion) => {
            const res = await fetch('https://back-freak.vercel.app/sillas_funcion_info', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({Id_funcion})
            })

            const datos = await res.json()

            if(datos.success){
                console.log(datos)
                const idsReservadas = datos.data.map(s => s.Id_sillas)
                setReservadas(idsReservadas)
            }
        }

        mostrar_sillas_funcion(Id_funcion)


        // --------------------- Obtener nombre de la funcion ---------------------
        const obtener_nombre_funcion = async (Id_funcion) => {
            const res = await fetch('https://back-freak.vercel.app/funcion_id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({id_funcion:Id_funcion})
            })

            const datos = await res.json()

            if(datos.success){
                console.log(datos.data)
                datos.data.forEach(f => {
                    setNombre_funcion(f.Titulo)
                });
            }

        }

        obtener_nombre_funcion(Id_funcion)
    }, [])


    // --------------------- Cambiar estilos de las sillas seleccionadas ---------------------
    const toggleSeleccion = (id) => {
        if (reservadas.includes(id)) {
            alert('Silla Reservada')
            return
        }

        if (seleccionadas.includes(id)) {
            // quitar la silla si ya estaba seleccionada
            setSeleccionadas(seleccionadas.filter(s => s !== id))
        } else {
            // agregar la silla si no estaba
            setSeleccionadas([...seleccionadas, id])
        }
    }


    // --------------------- Reservar sillas ---------------------
    const ir_reservar = async (seleccionadas, Id_funcion) => {
        if (seleccionadas.length === 0) {
            alert("Selecciona al menos una silla")
            return
        }
        
        const Id_sillas = seleccionadas  // Convierte array en "1,3,7"
        navigate(`/Reservar/${Id_funcion}/${Id_sillas}`)
    }

    return(
        <div>
            <General/>
            <div className="contenedor_asientos">
                <Encabezado/>
                <Cine
                    sillas = {sillas}
                    toggleSeleccion = {toggleSeleccion}
                    seleccionadas = {seleccionadas}
                    reservadas = {reservadas}
                    ir_reservar = {ir_reservar}
                    nombre_funcion = {nombre_funcion}
                    Id_funcion = {Id_funcion}
                />
            </div>
        </div>
    )
}

export default Asientos
