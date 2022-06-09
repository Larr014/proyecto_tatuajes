import React from 'react'
import twitter from '../assets/img/twitter.png'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
export const Footer = () => {
  return (
    <>
    
    <footer className='row'>
        <div className='col'>Direccion: Calle falsa 319</div>
        <div className='col'>Derechos de autor Larr</div>
        <div className='col'>
            <img  src={facebook} width="50px" height="50px"/>
            <img  src={twitter} width="50px" height="50px"/>
            <img  src={instagram} width="50px" height="50px"/>
        </div>
      </footer>
    </>
  )
}
