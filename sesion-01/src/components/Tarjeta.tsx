import React from 'react'

interface TarjetaProps {
    title : string 
    description: string
    urlImage?: string
    favorite?: boolean 
}
//Tarjeta Renderiza o simula una Card donde si la tarjeta tiene la propiedad FAvorite, tendrá un estilo especial
//  y una Estrella de favorita. En caso contrario no tendra este estilo

function Tarjeta = ({title,descripcion,urlImage,favorite}: TarjetaProps) => {
    //RENDERIZADO CONDICIONAL
  return (
    <div className={`rounded-lg shadown-md p-6 ${favorite ? "bg-amber-200 border-2 border-amber-700":"bg-white"}`}>
        {urlImage && (
            <img className='w-full h-48 object-cover rounded-md mb-4'
            src={urlImage}
            alt={title}/>
        )}
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-gray-600'>{descripcion}</p>
        {favorite && (
            <span className='text-2xl'>⭐</span>
        )}
    </div>
  )
}

export default Tarjeta