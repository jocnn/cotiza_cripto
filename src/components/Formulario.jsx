import useSelectMonedas from "../hooks/useSelectMonedas"

import { divisas } from "../data/monedas"

const Formulario = () => {



  const [ SelectMoneda ] = useSelectMonedas('Elige tu divisa', divisas )


  return (
    <>
      <form>

        <SelectMoneda />

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