import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import { Intranet } from './Intranet'
import { Login } from './Intranet/Login'
import { Mision } from './Mision'
import { Vision } from './Vision'

export const Principal = (props) => {
    const [users,setUsers] = useState([{"u":"admin","p":"admin"},{"u":"user","p":"user"}])
       
        useEffect(()=>{
            localStorage.setItem('users', JSON.stringify(users));
        },[]);
    const cargarVista = ()=>{
        
        switch (props.ruta) {
            case "home":
                return <Home/>
            case "mision":
                return <Mision/>
            case "vision":
                return <Vision/>
            
            case "intranet":
                return <Intranet/>
        }
    }
  return (
    <>
        <Header/>
        {cargarVista()}
        <Footer/>
    </>
  )
}
