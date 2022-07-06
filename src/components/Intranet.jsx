import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate} from 'react-router-dom';

export const Intranet = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [error,setError] = useState();
    const navigate = useNavigate();
    const [users,setUsers] = useState([])
    useEffect(()=>{
        setUsers( JSON.parse(localStorage.getItem("users")));
        
    },[]);
    
    const entrar = ()=>{
        
        for (const user of users) {
            console.log(user)
            
            if(email==user['u'] && password==user['p']){
                setError("");
                
                navigate('/login');
            }
        }
        
            setError("Error con las credenciales");
        
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
