import React from 'react'
import { Contacto } from './Contacto';
import { Footer } from './Footer';
import { Header } from './Header';
import { Home } from './Home';
import { Imagenes } from './Imagenes';
import { Login } from './Login';
import { Mision } from './Mision';
import { Vision } from './Vision';

export const Principal = (props) => {
    const direccionar = ()=>{
        switch (props.ruta) {
            case "/":
                return <Home/>
            case "vision":
                return <Vision/>
            case "mision":
                return <Mision/>
            case "imagenes":
                return <Imagenes/>
            case "contacto":
                return <Contacto/>
            case "login":
                return <Login/>
            default:
                return <p>La vista no existe</p>;
        }
    }

  return (
    <>
        <Header/>
        {direccionar()}
        <Footer/>
    </>
  )
}
