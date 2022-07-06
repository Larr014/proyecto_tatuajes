import React from 'react'

export const Intranet = (props) => {
    const direccionar = ()=>{
        switch (props.ruta) {
            case "main":
                return <p>Bienvenido</p>
                
        
            default:
                break;
        }
    }
  return (
    <>
        {direccionar()}
    </>
  )
}
