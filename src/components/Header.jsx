import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to={"/"} className="nav-link" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/mision"} className="nav-link" >Mision</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/vision"} className="nav-link">Vision</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/imagenes"} className="nav-link">Imagenes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/contacto"} className="nav-link">Contacto</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/intranet"} className="nav-link">Intranet</NavLink>
                </li>
            </ul>







            
        </>
    )
}
