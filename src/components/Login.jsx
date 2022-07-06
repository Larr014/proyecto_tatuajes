import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [usuario,setUsuario] = useState()
    const [contrasenia,setContrasenia] = useState()
    const [error,setError] = useState()
    const navigate = useNavigate()
    const [users,setUsers] = useState()
    const entrar = ()=>{
        setUsers(JSON.parse(localStorage.getItem("users")))
        alert(users)
        if(usuario=="admin" && contrasenia=="admin"){
            setError("")
            //Direccionar a la intranet
            navigate('/intranet')
        }
        else{
            setError("Las credenciales no coinciden")
        }
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
