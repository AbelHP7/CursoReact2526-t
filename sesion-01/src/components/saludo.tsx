/**
 * crear componente llamado saludo que renderice nombre y edad que se pasan como props al componente
 */
import React from 'react'
 interface SaludoProps {

 }
const  saludo({nombre="Anónimo", edad =0}: SaludoProps) => {
  return (
    <div className= "p-4 bg-amber-400 rounded-lg shadow">
        <h2 className='text-xl font-semibold'></h2>
    </div>
  )
}

export default saludo