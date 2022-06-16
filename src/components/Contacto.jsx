import React, { useState } from 'react'

export const Contacto = () => {
    const [nombre,setNombre] = useState("");
    const [correo,setCorreo] = useState("");
    const [mensaje,setMensaje] = useState("");
    
    const enviarDatos = () => {
        console.log("Nombre: "+nombre);
        console.log("Correo: "+correo);
        console.log("Mensaje: "+mensaje);
        alert("Mensaje enviado");
        setNombre("");
        setCorreo("");
        setMensaje("");
    };


  return (
    <>
        <form>
            <label>Nombre</label><br/>
            <input type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/><br/>
            <label>Correo</label><br/>
            <input type="email" value={correo} onChange={(e)=>{setCorreo(e.target.value)}}/><br/>
            <label>Mensaje</label><br/>
            <textarea value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}}></textarea><br/>
            <button type='button' onClick={enviarDatos}>Enviar</button>
        </form>
    </>
  )
}
