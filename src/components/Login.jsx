import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [usuario,setUsuario] = useState()
    const [contrasenia,setContrasenia] = useState()
    const [error,setError] = useState()
    const navigate = useNavigate()
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers(JSON.parse(localStorage.getItem("users")))
    },[])
    const entrar = ()=>{
        for (const item of users) {
            if(usuario==item['u'] && contrasenia==item['p']){
                setError("")
                //Direccionar a la intranet
                navigate('/intranet')
            }
        }
            setError("Las credenciales no coinciden")
        
    }
  return (
    <>
        <form>
            <input type="text" onChange={(e)=>setUsuario(e.target.value)}/><br/>
            <input type="password" onChange={(e)=>setContrasenia(e.target.value)}/><br/>
            <button type='button' onClick={entrar}>Entrar</button>
            <span>{error}</span>
        </form>
    </>
  )
}
