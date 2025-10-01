import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./Paginas/Inicio";
import Funciones from "./Paginas/Funciones";
import Asientos from "./Paginas/Asientos";
import Reservar from "./Paginas/Reservar";
import Registro from "./Paginas/Registro";
import Inicio_sesion from "./Paginas/Inicio_sesion";
import Perfil_usuario from "./Paginas/Perfil_usuario";
import Perfil_admin from "./Paginas/Perfil_admin";
import Funciones_admin from "./Paginas/Funciones_admin";
import Editar_funcion from "./Paginas/Editar_funcion";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Funciones" element={<Funciones/>}/>
        <Route path="/Asientos/:Id_funcion" element={<Asientos/>}/>
        <Route path="/Reservar/:Id_funcion/:Id_sillas" element={<Reservar/>}/>
        <Route path="/Registro" element={<Registro/>}/>  
        <Route path="/Inicio_Sesion" element={<Inicio_sesion/>}/>  
        <Route path="/Perfil_Usuario" element={<Perfil_usuario/>}/>  
        <Route path="/Perfil_Administrador" element={<Perfil_admin/>}/> 
        <Route path="/Funciones_Administrador" element={<Funciones_admin/>}/>   
        <Route path="/Editar_Funcion/:id_funcion" element={<Editar_funcion/>}/>   
      </Routes>
    </BrowserRouter>
  )
}

export default App
