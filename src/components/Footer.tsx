import { Link } from "react-router"
import Logo from '/logo.svg'

const Footer = () => {
  return (

    <footer className="bg-black/20 h-16 z-10 flex-shrink-0 rounded-xl backdrop-blur-xl  max-w-5xl w-full flex items-center justify-between px-6 ring-1 ring-black/20">
      <div className="flex items-center justify-start w-full ">
        <span className="w-2 h-2 bg-green-500 rounded-full mx-2 flex items-center justify-center relative">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping flex-shrink-0 absolute" />
        </span>
        <p className="text-gray-100 text-sm tracking-tight cursor-pointer break-keep">
          All Projects Operational
        </p>
      </div>
      <div className="flex items-center w-fit justify-end gap-2">
        <Link 
          className="text-white text-lg font-medium text-center flex-shrink-0 "
          to="/"
        >
          <img src={Logo} alt="Karlle" className="w-4 h-4" />
        </Link> 
        <p className="text-gray-100 text-sm text-center flex-shrink-0 ">
          2025 Karlle
        </p>
      </div>
    </footer>
  )
}

export default Footer