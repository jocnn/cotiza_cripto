const Resultado = ({ resultado }) => {

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

  return (
    <div className="flex items-center gap-3 mt-8 text-white font-['Lato']">
      <img 
        className="block w-[120px]"
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="imagen cripto" />
      <div className="">
        <p className="text-[20px] ">El precio es de: <span className="text-[35px] font-bold">{PRICE}</span></p>
        <p className="text-[18px] ">Precio más alto del día: <span className="font-bold">{HIGHDAY}</span></p>
        <p className="text-[18px] ">Precio más bajo del día: <span className="font-bold">{LOWDAY}</span></p>
        <p className="text-[18px] ">Variación últimas 24 horas: <span className="font-bold">{CHANGEPCT24HOUR}</span></p>
        <p className="text-[18px] ">Última actualización: <span className="font-bold">{LASTUPDATE}</span></p>
      </div>
    </div>
  )
}

export default Resultado