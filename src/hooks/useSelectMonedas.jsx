const useSelectMonedas = (label, opciones) => {

  const SelectMoneda = () => (
    <div className="text-white block font-['Lato'] text-[24px] font-bold my-4 mx-0" >
      <label>
        {label}
        <select className="text-black text-[18px] p-2 rounded-md w-full text-center">
          <option>--- Seleccione su Moneda ---</option>
          {
            opciones.map( opcion => (
              <option
                key={opcion.id}
                value={opcion.id}
              >
                {opcion.nombre}
              </option>
            ))
          }
        </select>
      </label>
    </div>
  )
  
  return [ SelectMoneda ]
}

export default useSelectMonedas