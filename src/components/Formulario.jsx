import { useState, useEffect } from 'react'

import useSelectMonedas from "../hooks/useSelectMonedas"

import { divisas } from "../data/monedas"

const Formulario = () => {

  const [ criptos, setCriptos ] = useState([])

  const [ state, SelectMoneda ] = useSelectMonedas('Elige tu divisa', divisas )

  useEffect(() => {
    
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
      const resp = await fetch(url)
      const result = await resp.json()
      
      const arrayCrypto = result.Data.map( cripto => {
        const obj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

        return obj
      })
      
      setCriptos(arrayCrypto)
      
    }

    consultarAPI()

  }, [])

  return (
    <>
      <form>

        <SelectMoneda />

        { state }

        <input
          className="
          bg-[#9497FF] border-none w-[100%] p-[10px] 
          text-white font-bold uppercase text-xl 
            rounded hover:bg-[#7A7DFE] transition-colors 
            duration-[3000] ease-in cursor-pointer"
          type="submit" 
          value="Cotizar" />
      </form>
    </>
  )
}

export default Formulario