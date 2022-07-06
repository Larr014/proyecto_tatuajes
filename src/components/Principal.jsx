import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Home } from './Home'
import { Intranet } from './Intranet'
import { Login } from './Intranet/Login'
import { Mision } from './Mision'
import { Vision } from './Vision'

export const Principal = (props) => {
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
