import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';

export const Intranet = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const navigate = useNavigate();
    const entrar = ()=>{
        if(email=="admin" && password=="admin"){
            setError("");
            alert("Bienvenido");
            navigate('/login');
        }else{
            setError("Las credenciales no coinciden");
        }
    };
    return (
    <>
        <form>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
            <button onClick={entrar}>Entrar</button>
            <div>{error}</div>
        </form>
    </>
  )
}
