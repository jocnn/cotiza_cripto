const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-white p-4 text-[22px] uppercase font-['Lato'] font-bold text-center">
      {children}
    </div>
  )
}

export default Error