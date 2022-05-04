import { useState, useEffect } from 'react'

import ImagenCripto from './img/imagen-criptos.png'

import Formulario from './components/Formulario'

function App() {

  const [ monedas, setMonedas ] = useState({})

  useEffect(() => {
    if ( Object.keys(monedas).length > 0 ) {
      console.log(monedas)
    }
  }, [ monedas ])

  return (
    <div className="container max-w-[900px] w-[90%] my-0 mx-auto md:grid grid-cols-2 gap-8">
      <img
        className='block max-w-[400px] w-[80%] mt-[100px] mb-0 mx-auto' 
        src={ImagenCripto} 
        alt="imagen cripto" />
      <div className=''>
        <h1 className="font-['Lato'] text-white text-center font-bold mt-[80px] mb-[50px] text-[34px]">
          Cotiza Criptomonedas al Instante
          <div className='content-none w-[100px] h-[6px] bg-sky-600 block mt-0 mx-auto mb-0'></div>
        </h1>
        <Formulario 
          setMonedas={setMonedas}
        />
      </div>
    </div>
  )
}

export default App
