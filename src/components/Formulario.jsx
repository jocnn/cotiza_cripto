import { useState, useEffect } from 'react'

import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from './Error'
import { divisas } from "../data/monedas"

const Formulario = () => {

  const [ criptos, setCriptos ] = useState([])
  const [ error, setError ] = useState(false)

  const [ stateDivisa, SelectDivisa ] = useSelectMonedas('Elige tu divisa', divisas )
  const [ stateCripto, SelectCripto ] = useSelectMonedas('Elige tu criptomoneda', criptos )

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

  const handleSubmit = e => {
    e.preventDefault()

    console.log(typeof(stateDivisa))
    console.log(typeof(stateCripto))

    if (typeof(stateDivisa) === 'undefined' || typeof(stateCripto) === 'undefined') {
      setError(true)
      return
    }

    setError(false)


  }

  return (
    <>
      { error && <Error>Todos los campos son obligatorios</Error> }
      <form onSubmit={handleSubmit}>

        <SelectDivisa />
        <SelectCripto />

        <input
          className="
          bg-[#9497FF] border-none w-[100%] p-[10px] 
          text-white font-bold uppercase text-xl 
            rounded hover:bg-[#7A7DFE] transition-colors 
            duration-[3000] ease-in cursor-pointer mt-3"
          type="submit" 
          value="Cotizar" />
      </form>
    </>
  )
}

export default Formulario